"use client";
import { useState, useEffect } from "react";
import { X, Mail, Phone, User, MessageSquare, Send, Loader2, CheckCircle } from "lucide-react";
import { submitContactForm } from "@/utils/contactApi";
import styles from "./ContactPopup.module.css";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    // Show popup after 2 seconds on page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const result = await submitContactForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      source: 'popup'
    });
    
    setLoading(false);
    
    if (result.success) {
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => {
        setIsOpen(false);
        setSuccess(false);
      }, 3000);
    } else {
      setError(result.error || 'Failed to submit form. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className={styles.closeBtn}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Let's Connect!</h2>
          <p className={styles.subtitle}>
            Fill out the form and we'll get back to you within 24 hours
          </p>
        </div>

        {/* Form */}
        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p className="text-sm text-gray-600">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <div className={styles.inputGroup}>
              <User className={styles.icon} />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <Mail className={styles.icon} />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <Phone className={styles.icon} />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={loading}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <MessageSquare className={styles.icon} />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                disabled={loading}
                className={styles.textarea}
              />
            </div>

            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
