const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const { auth } = require('../middleware/auth');

// Optional auth middleware - doesn't fail if no token
const optionalAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (token) {
      const jwt = require('jsonwebtoken');
      const User = require('../models/User');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);
      if (user && user.isActive) req.user = user;
    }
  } catch (e) { /* no token or invalid, continue as public */ }
  next();
};

// Get all blogs
router.get('/', optionalAuth, async (req, res) => {
  try {
    const {
      category,
      tag,
      search,
      status,
      page = 1,
      limit = 9,
      featured,
    } = req.query;

    const query = {};

    // Public users only see published blogs
    if (!req.user) {
      query.status = 'published';
    } else if (status && status !== 'all') {
      query.status = status;
    }

    if (category && category !== 'All') query.category = category;
    if (tag) query.tags = tag;
    if (featured !== undefined) query.featured = featured === 'true';
    if (search) query.$text = { $search: search };

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 }) // latest first
      .skip(skip)
      .limit(limitNum)
      .select('-content');

    const total = await Blog.countDocuments(query);

    res.json({
      blogs,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum)
      }
    });
  } catch (error) {
    console.error('Get blogs error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get single blog by slug (public)
router.get('/slug/:slug', optionalAuth, async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // Public can only see published
    if (!req.user && blog.status !== 'published') {
      return res.status(404).json({ message: 'Blog not found' });
    }

    blog.views += 1;
    await blog.save();

    res.json(blog);
  } catch (error) {
    console.error('Get blog error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get blog by ID (admin)
router.get('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create blog (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Blog with this slug already exists' });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update blog (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog updated successfully', blog });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Blog with this slug already exists' });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete blog (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
