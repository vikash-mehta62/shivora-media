const mongoose = require('mongoose');
const User = require('../models/User');
const dotenv = require('dotenv');
const readline = require('readline');

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function createAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Get admin details
    console.log('\n🔐 Create Admin User\n');
    const username = await question('Username: ');
    const email = await question('Email: ');
    const password = await question('Password: ');

    // Check if user exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      console.log('❌ User with this email or username already exists!');
      process.exit(1);
    }

    // Create admin user
    const admin = new User({
      username,
      email,
      password,
      role: 'admin',
      isActive: true
    });

    await admin.save();
    console.log('\n✅ Admin user created successfully!');
    console.log(`\nUsername: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Role: admin`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
    mongoose.connection.close();
    process.exit(0);
  }
}

createAdmin();
