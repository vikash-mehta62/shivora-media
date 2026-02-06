const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { auth } = require('../middleware/auth');

// Submit contact form (public)
router.post('/submit', async (req, res) => {
  try {
    const { name, email, phone, company, website, service, budget, message, source } = req.body;

    const contact = new Contact({
      name,
      email,
      phone,
      company,
      website,
      service,
      budget,
      message,
      source: source || 'contact-page'
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you within 24 hours.',
      contactId: contact._id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all contacts (admin only)
router.get('/', auth, async (req, res) => {
  try {
    const { status, page = 1, limit = 20, search } = req.query;
    
    const query = {};
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Contact.countDocuments(query);

    // Get stats
    const stats = {
      total: await Contact.countDocuments(),
      new: await Contact.countDocuments({ status: 'new' }),
      contacted: await Contact.countDocuments({ status: 'contacted' }),
      converted: await Contact.countDocuments({ status: 'converted' })
    };

    res.json({
      contacts,
      stats,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single contact (admin only)
router.get('/:id', auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update contact status (admin only)
router.patch('/:id', auth, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    if (status) contact.status = status;
    if (notes !== undefined) contact.notes = notes;

    await contact.save();

    res.json({
      message: 'Contact updated successfully',
      contact
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete contact (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
