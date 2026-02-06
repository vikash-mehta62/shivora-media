# 🔧 API Configuration - Centralized Setup

## ✅ Problem Solved

**Before:** API URLs were hardcoded everywhere (`http://localhost:5000`)  
**After:** Single centralized configuration file

---

## 📁 Files Created

### 1. **`.env.local`** (Frontend Environment Variables)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 2. **`.env.example`** (Template for team)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
# For production: https://api.yourdomain.com
```

### 3. **`src/config/api.ts`** (Centralized API Config)
```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`,
    ME: `${API_BASE_URL}/api/auth/me`,
    LOGOUT: `${API_BASE_URL}/api/auth/logout`,
  },
  MEDIA: {
    BASE: `${API_BASE_URL}/api/media`,
    UPLOAD: `${API_BASE_URL}/api/media/upload`,
    BY_ID: (id: string) => `${API_BASE_URL}/api/media/${id}`,
    DELETE: (id: string) => `${API_BASE_URL}/api/media/${id}`,
  },
  CONTACT: {
    BASE: `${API_BASE_URL}/api/contact`,
    SUBMIT: `${API_BASE_URL}/api/contact/submit`,
    BY_ID: (id: string) => `${API_BASE_URL}/api/contact/${id}`,
    DELETE: (id: string) => `${API_BASE_URL}/api/contact/${id}`,
  },
};
```

---

## 🔄 Files Updated

All files now use centralized config:

### ✅ Updated Files:
1. `src/store/slices/authSlice.ts`
2. `src/utils/contactApi.ts`
3. `src/app/gallery/page.tsx`
4. `src/components/admin/dashboard/DashboardHome.tsx`
5. `src/components/admin/dashboard/MediaManager.tsx`
6. `src/components/admin/dashboard/ContactsManager.tsx`

### Before (Hardcoded):
```typescript
const response = await axios.get('http://localhost:5000/api/media');
```

### After (Centralized):
```typescript
import { API_ENDPOINTS } from '@/config/api';

const response = await axios.get(API_ENDPOINTS.MEDIA.BASE);
```

---

## 🚀 How to Use

### Development (Local):
```env
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Production:
```env
# .env.production
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### In Code:
```typescript
import { API_ENDPOINTS } from '@/config/api';

// Auth
axios.post(API_ENDPOINTS.AUTH.LOGIN, data);
axios.get(API_ENDPOINTS.AUTH.ME);

// Media
axios.get(API_ENDPOINTS.MEDIA.BASE);
axios.post(API_ENDPOINTS.MEDIA.UPLOAD, formData);
axios.delete(API_ENDPOINTS.MEDIA.DELETE(id));

// Contact
axios.post(API_ENDPOINTS.CONTACT.SUBMIT, data);
axios.get(API_ENDPOINTS.CONTACT.BASE);
axios.patch(API_ENDPOINTS.CONTACT.BY_ID(id), data);
```

---

## 🎯 Benefits

### 1. **Single Source of Truth**
- Change API URL in one place (`.env.local`)
- No need to update multiple files

### 2. **Environment-Specific**
- Development: `http://localhost:5000`
- Production: `https://api.yourdomain.com`
- Staging: `https://staging-api.yourdomain.com`

### 3. **Type Safety**
- TypeScript autocomplete
- No typos in URLs
- Easy to maintain

### 4. **Easy Deployment**
- Just update `.env.production`
- No code changes needed
- Works with Vercel, Netlify, etc.

---

## 📝 Setup Instructions

### For New Developers:

1. **Clone the repo**
   ```bash
   git clone <repo-url>
   cd shivora-media
   ```

2. **Copy environment file**
   ```bash
   cp .env.example .env.local
   ```

3. **Update API URL if needed**
   ```env
   # .env.local
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. **Install & Run**
   ```bash
   npm install
   npm run dev
   ```

---

## 🔒 Security Notes

### ✅ Good Practices:
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Never commit `.env.local` to git (already in `.gitignore`)
- Use different URLs for dev/staging/production
- Keep `.env.example` updated for team

### ❌ Don't:
- Don't hardcode API URLs in code
- Don't commit sensitive keys
- Don't use same URL for all environments

---

## 🌐 Deployment

### Vercel:
1. Go to Project Settings → Environment Variables
2. Add: `NEXT_PUBLIC_API_URL` = `https://api.yourdomain.com`
3. Redeploy

### Netlify:
1. Site Settings → Build & Deploy → Environment
2. Add: `NEXT_PUBLIC_API_URL` = `https://api.yourdomain.com`
3. Trigger deploy

### Other Platforms:
Add environment variable in platform settings

---

## 🧪 Testing Different Environments

### Local Development:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Staging:
```env
NEXT_PUBLIC_API_URL=https://staging-api.yourdomain.com
```

### Production:
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

---

## 📊 Current API Structure

```
API_BASE_URL (from .env.local)
│
├── /api/auth
│   ├── POST /login
│   ├── POST /register
│   ├── GET /me
│   └── POST /logout
│
├── /api/media
│   ├── GET /
│   ├── POST /upload
│   ├── GET /:id
│   ├── PATCH /:id
│   └── DELETE /:id
│
└── /api/contact
    ├── POST /submit
    ├── GET /
    ├── GET /:id
    ├── PATCH /:id
    └── DELETE /:id
```

---

## ✅ Checklist

- ✅ Created `.env.local` with API URL
- ✅ Created `.env.example` for team
- ✅ Created `src/config/api.ts` with all endpoints
- ✅ Updated all files to use centralized config
- ✅ Removed all hardcoded URLs
- ✅ Added to `.gitignore` (already there)
- ✅ Documented for team

---

## 🎉 Result

**No more hardcoded URLs!** 

Change API URL once in `.env.local` and it updates everywhere automatically! 🚀
