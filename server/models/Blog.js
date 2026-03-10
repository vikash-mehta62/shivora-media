const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  excerpt: {
    type: String,
    required: true,
    trim: true,
    maxlength: 300
  },
  content: {
    type: String,
    required: true
  },
  featuredImage: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['SEO', 'Social Media', 'PPC', 'Content Marketing', 'Branding', 'Web Development', 'Other']
  },
  author: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    }
  },
  // SEO Fields
  seo: {
    metaTitle: {
      type: String,
      required: true,
      maxlength: 60
    },
    metaDescription: {
      type: String,
      required: true,
      maxlength: 160
    },
    keywords: [{
      type: String,
      trim: true
    }],
    focusKeyword: {
      type: String,
      trim: true
    },
    ogImage: {
      type: String
    },
    canonicalUrl: {
      type: String
    }
  },
  tags: [{
    type: String,
    trim: true
  }],
  readTime: {
    type: Number, // in minutes
    default: 5
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  publishedAt: {
    type: Date
  },
  views: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Auto-generate slug from title if not provided
blogSchema.pre('save', function(next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  
  // Auto-calculate read time based on content length
  if (this.content) {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / wordsPerMinute);
  }
  
  // Set publishedAt when status changes to published
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  
  next();
});

// Index for search
blogSchema.index({ title: 'text', excerpt: 'text', content: 'text', 'seo.keywords': 'text', tags: 'text' });

module.exports = mongoose.model('Blog', blogSchema);
