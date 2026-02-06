const mongoose = require('mongoose');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

async function registerDummyAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Check if user exists
    const existingUser = await User.findOne({ email: 'admin@admin.com' });
    if (existingUser) {
      console.log('ℹ️  Admin already exists!');
      console.log('\nLogin Credentials:');
      console.log('Email: admin@admin.com');
      console.log('Password: 123456');
      mongoose.connection.close();
      process.exit(0);
    }

    // Create dummy admin
    const admin = new User({
      username: 'admin',
      email: 'admin@admin.com',
      password: '123456',
      role: 'admin',
      isActive: true
    });

    await admin.save();
    console.log('✅ Dummy admin created successfully!');
    console.log('\nLogin Credentials:');
    console.log('Email: admin@admin.com');
    console.log('Password: 123456');
    console.log('\n🌐 Access admin panel at: http://localhost:3000/admin');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
}

registerDummyAdmin();
