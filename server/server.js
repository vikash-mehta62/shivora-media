const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env FIRST
dotenv.config();

const connectDB = require('./config/db');

// Init app
const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/media', require('./routes/media'));
app.use('/api/contact', require('./routes/contact'));

// Health
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
