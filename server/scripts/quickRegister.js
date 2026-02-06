const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const API_URL = process.env.API_URL || 'http://localhost:5000';

async function quickRegister() {
  try {
    console.log('🔐 Quick Admin Registration\n');
    
    const adminData = {
      username: 'admin',
      email: 'admin@admin.com',
      password: '123456',
      role: 'admin'
    };

    const response = await axios.post(`${API_URL}/api/auth/register`, adminData);
    
    console.log('✅ Admin created successfully!');
    console.log('\nLogin Credentials:');
    console.log(`Email: ${adminData.email}`);
    console.log(`Password: ${adminData.password}`);
    console.log('\n🌐 Access admin panel at: http://localhost:3000/admin');
    
  } catch (error) {
    if (error.response?.data?.error === 'User already exists') {
      console.log('ℹ️  Admin user already exists!');
      console.log('\nDefault Login Credentials:');
      console.log('Email: admin@admin.com');
      console.log('Password: 123456');
      console.log('\n🌐 Access admin panel at: http://localhost:3000/admin');
    } else {
      console.error('❌ Error:', error.response?.data?.error || error.message);
      console.log(`\n⚠️  Make sure the backend server is running on ${API_URL}`);
    }
  }
}

quickRegister();
