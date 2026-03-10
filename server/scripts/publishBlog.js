const mongoose = require('mongoose');
const Blog = require('../models/Blog');
const dotenv = require('dotenv');

dotenv.config();

async function publishBlog() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Find the draft blog and publish it
    const result = await Blog.updateOne(
      { slug: 'test' },
      { 
        $set: { 
          status: 'published',
          publishedAt: new Date()
        } 
      }
    );

    if (result.modifiedCount > 0) {
      console.log('✅ Blog published successfully!');
      console.log('🌐 View at: http://localhost:3000/blog');
    } else {
      console.log('❌ Blog not found or already published');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
}

publishBlog();
