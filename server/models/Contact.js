const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  service: {
    type: String,
    trim: true
  },
  budget: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    trim: true
  },
  source: {
    type: String,
    enum: ['contact-page', 'home-page', 'popup'],
    default: 'contact-page'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'closed'],
    default: 'new'
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);
