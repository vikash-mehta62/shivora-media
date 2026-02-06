const express = require('express');
const router = express.Router();
const cloudinary = require('../config/cloudinary');
const Media = require('../models/Media');
const { auth } = require('../middleware/auth');
const upload = require('../middleware/upload');

// Upload media (image or video)
router.post('/upload', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { title, category } = req.body;
    const fileType = req.file.mimetype.startsWith('video') ? 'video' : 'image';

    // Upload to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: fileType === 'video' ? 'video' : 'image',
        folder: `shivora-media/${category || 'other'}`,
        transformation: fileType === 'image' ? [
          { width: 1920, height: 1080, crop: 'limit' },
          { quality: 'auto' }
        ] : undefined
      },
      async (error, result) => {
        if (error) {
          return res.status(500).json({ error: 'Upload failed', details: error.message });
        }

        // Save to database
        const media = new Media({
          title: title || req.file.originalname,
          type: fileType,
          url: result.secure_url,
          publicId: result.public_id,
          category: category || 'other',
          size: result.bytes,
          format: result.format,
          uploadedBy: req.user._id
        });

        await media.save();

        res.status(201).json({
          message: 'File uploaded successfully',
          media: {
            id: media._id,
            title: media.title,
            type: media.type,
            url: media.url,
            publicId: media.publicId,
            category: media.category,
            size: media.size,
            format: media.format,
            createdAt: media.createdAt
          }
        });
      }
    );

    uploadStream.end(req.file.buffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all media (public access for gallery)
router.get('/', async (req, res) => {
  try {
    const { category, type, page = 1, limit = 20 } = req.query;
    
    const query = {};
    if (category) query.category = category;
    if (type) query.type = type;

    const media = await Media.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-uploadedBy'); // Don't expose uploader info publicly

    const count = await Media.countDocuments(query);

    res.json({
      media,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single media
router.get('/:id', auth, async (req, res) => {
  try {
    const media = await Media.findById(req.params.id).populate('uploadedBy', 'username email');
    
    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }

    res.json({ media });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update media
router.patch('/:id', auth, async (req, res) => {
  try {
    const { title, category } = req.body;
    const media = await Media.findById(req.params.id);

    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }

    if (title) media.title = title;
    if (category) media.category = category;

    await media.save();

    res.json({
      message: 'Media updated successfully',
      media
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete media
router.delete('/:id', auth, async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);

    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(media.publicId, {
      resource_type: media.type === 'video' ? 'video' : 'image'
    });

    // Delete from database
    await Media.findByIdAndDelete(req.params.id);

    res.json({ message: 'Media deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Bulk delete
router.post('/bulk-delete', auth, async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ error: 'Invalid media IDs' });
    }

    const mediaItems = await Media.find({ _id: { $in: ids } });

    // Delete from Cloudinary
    for (const media of mediaItems) {
      await cloudinary.uploader.destroy(media.publicId, {
        resource_type: media.type === 'video' ? 'video' : 'image'
      });
    }

    // Delete from database
    await Media.deleteMany({ _id: { $in: ids } });

    res.json({ message: `${mediaItems.length} media items deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
