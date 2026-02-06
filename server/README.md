# Shivora Media - Admin Dashboard Backend

Backend server for managing media uploads (images & videos) with Cloudinary and MongoDB.

## Features

- ✅ User Authentication (JWT)
- ✅ Image & Video Upload to Cloudinary
- ✅ MongoDB Database Storage
- ✅ Media Management (CRUD)
- ✅ Bulk Delete
- ✅ Category Management
- ✅ Secure File Upload

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Environment Variables

Create a `.env` file in the server directory:

```env
MONGODB_URI=mongodb://localhost:27017/shivora-media
JWT_SECRET=your-super-secret-jwt-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
PORT=5000
```

### 3. Get Cloudinary Credentials

1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up / Login
3. Go to Dashboard
4. Copy: Cloud Name, API Key, API Secret

### 4. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# Windows
mongod

# Mac/Linux
sudo systemctl start mongod
```

### 5. Run Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout

### Media Management

- `POST /api/media/upload` - Upload image/video
- `GET /api/media` - Get all media (with filters)
- `GET /api/media/:id` - Get single media
- `PATCH /api/media/:id` - Update media
- `DELETE /api/media/:id` - Delete media
- `POST /api/media/bulk-delete` - Bulk delete

## First Time Setup

### Create Admin User

```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "username": "admin",
  "email": "admin@shivoramedia.com",
  "password": "admin123",
  "role": "admin"
}
```

### Upload Media

```bash
POST http://localhost:5000/api/media/upload
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: multipart/form-data

file: [your file]
title: "My Image"
category: "portfolio"
```

## Categories

- `portfolio` - Portfolio images/videos
- `service` - Service related media
- `slider` - Homepage slider
- `other` - Other media

## Security

- JWT authentication required for all media endpoints
- Password hashing with bcrypt
- File type validation
- File size limit: 100MB

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- Cloudinary
- JWT Authentication
- Multer (File Upload)
