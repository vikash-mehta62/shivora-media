import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  service?: string;
  budget?: string;
  message?: string;
  source: 'contact-page' | 'home-page' | 'popup';
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const response = await axios.post(API_ENDPOINTS.CONTACT.SUBMIT, data);
    return { success: true, data: response.data };
  } catch (error: any) {
    return { 
      success: false, 
      error: error.response?.data?.error || 'Failed to submit form' 
    };
  }
};
