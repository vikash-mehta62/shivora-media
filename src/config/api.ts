// Centralized API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`,
    ME: `${API_BASE_URL}/api/auth/me`,
    LOGOUT: `${API_BASE_URL}/api/auth/logout`,
  },
  
  // Media endpoints
  MEDIA: {
    BASE: `${API_BASE_URL}/api/media`,
    UPLOAD: `${API_BASE_URL}/api/media/upload`,
    BY_ID: (id: string) => `${API_BASE_URL}/api/media/${id}`,
    DELETE: (id: string) => `${API_BASE_URL}/api/media/${id}`,
  },
  
  // Contact endpoints
  CONTACT: {
    BASE: `${API_BASE_URL}/api/contact`,
    SUBMIT: `${API_BASE_URL}/api/contact/submit`,
    BY_ID: (id: string) => `${API_BASE_URL}/api/contact/${id}`,
    DELETE: (id: string) => `${API_BASE_URL}/api/contact/${id}`,
  },
};

export default API_BASE_URL;
