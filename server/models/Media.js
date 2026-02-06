const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['image', 'video'],
    required: true
  },
  url: {
    type: String,
    required: true
  },
  publicId: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: [
      'portfolio',
      'seo',
      'social-media-marketing',
      'ppc-advertising',
      'content-marketing',
      'creative-designing',
      'video-production',
      'web-development',
      'other'
    ],
    default: 'other'
  },
  size: {
    type: Number
  },
  format: {
    type: String
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Media', mediaSchema);
