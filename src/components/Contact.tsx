"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, Loader2, CheckCircle, MessageCircle, Send } from "lucide-react";
import { submitContactForm } from "@/utils/contactApi";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "shivoramedia@gmail.com", link: "mailto:shivoramedia@gmail.com", desc: "We reply within 24 hours" },
  { icon: Phone, label: "Call Us", value: "+91 70672 35788", link: "tel:+917067235788", desc: "Mon-Sat, 10:00 AM - 7:00 PM" },
  { icon: MapPin, label: "Visit Us", value: "Raisen Road Piplani, Bhopal", link: "https://maps.google.com/?q=Raisen+Road+Piplani+Bhopal", desc: "By appointment only" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 10:00 AM - 7:00 PM", link: "#", desc: "Sunday closed" }
];

const services = ["SEO Services", "Social Media Marketing", "PPC Advertising", "Content Marketing", "Brand Identity", "Web Development", "Complete Digital Marketing", "Other"];

const budgets = [
  { value: "10-25k", label: "₹10,000 - ₹25,000/month" },
  { value: "25-50k", label: "₹25,000 - ₹50,000/month" },
  { value: "50k-1L", label: "₹50,000 - ₹1,00,000/month" },
  { value: "1L-2L", label: "₹1,00,000 - ₹2,00,000/month" },
  { value: "2L+", label: "₹2,00,000+/month" }
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", website: "", service: "", budget: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const result = await submitContactForm({
      ...form,
      source: 'home-page'
    });
    
    setLoading(false);
    
    if (result.success) {
      setDone(true);
      setForm({ name: "", email: "", phone: "", company: "", website: "", service: "", budget: "", message: "" });
      setTimeout(() => setDone(false), 5000);
    } else {
      setError(result.error || 'Failed to submit form. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] blob-blue opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] blob-gold opacity-20"></div>
      </div>

      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
            <MessageCircle className="w-4 h-4 icon-primary" />
            <span className="text-sm font-medium badge-text">Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s Start Your
            <span className="heading-primary"> Growth Journey</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your digital presence and unlock new opportunities? Get a free consultation 
            and a custom-built strategy designed around your brand, audience, and business goals.
          </p>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed mt-4">
            We&apos;re Excited To Connect With You! Having a question, a project idea, or need expert support? 
            Our team is here to listen and help. Reach out using the contact form or send us an email, and 
            let&apos;s start a conversation about your goals. We&apos;ll get back to you promptly with clear 
            and reliable assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            <div className="card rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <a key={i} href={info.link} className="flex items-start gap-4 p-3 rounded-xl hover:bg-[var(--bg-secondary)] transition group">
                    <div className="w-12 h-12 icon-bg rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="w-5 h-5 icon-primary" />
                    </div>
                    <div>
                      <div className="text-muted text-sm">{info.label}</div>
                      <div className="font-semibold">{info.value}</div>
                      <div className="text-xs text-muted">{info.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card rounded-2xl p-6 shadow-lg bg-brand-section text-white">
              <h4 className="font-semibold mb-4 text-baby-blue">Why Contact Us?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-bold icon-gold">24hr</div>
                  <div className="text-sm text-baby-blue">Response Time</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-bold icon-gold">Free</div>
                  <div className="text-sm text-baby-blue">Consultation</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-bold icon-gold">150+</div>
                  <div className="text-sm text-baby-blue">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-3xl font-bold icon-gold">5.0</div>
                  <div className="text-sm text-baby-blue">Client Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={submit} className="card rounded-2xl p-6 sm:p-8 shadow-xl">
              {done ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted mb-4">We&apos;ve received your message and will get back to you within 24 hours.</p>
                  <p className="text-sm badge-text">Check your email for confirmation.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <Send className="w-6 h-6 icon-primary" />
                    <h3 className="text-xl font-bold">Get Your Free Quote</h3>
                  </div>

                  {error && (
                    <div className="mb-4 p-4 bg-red-500/10 border border-red-500/50 text-red-400 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        disabled={loading}
                        className="w-full px-4 py-3 input-field rounded-xl disabled:opacity-50" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        disabled={loading}
                        className="w-full px-4 py-3 input-field rounded-xl disabled:opacity-50" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        disabled={loading}
                        className="w-full px-4 py-3 input-field rounded-xl disabled:opacity-50" placeholder="+91 70672 35788" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                        disabled={loading}
                        className="w-full px-4 py-3 input-field rounded-xl disabled:opacity-50" placeholder="Your Company" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Website URL</label>
                    <input type="url" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-3 input-field rounded-xl disabled:opacity-50" placeholder="https://yourwebsite.com" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interested In *</label>
                      <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        disabled={loading}
                        className="w-full px-4 py-3 input-field rounded-xl appearance-none cursor-pointer disabled:opacity-50">
                        <option value="">Select a service</option>
                        {services.map((s) => (<option key={s} value={s}>{s}</option>))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Monthly Budget</label>
                      <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        disabled={loading}
                        className="w-full px-4 py-3 input-field rounded-xl appearance-none cursor-pointer disabled:opacity-50">
                        <option value="">Select budget range</option>
                        {budgets.map((b) => (<option key={b.value} value={b.value}>{b.label}</option>))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Tell Us About Your Project</label>
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-3 input-field rounded-xl resize-none disabled:opacity-50" placeholder="Describe your goals, challenges, and what you're looking to achieve..."></textarea>
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full py-4 btn-gold rounded-xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-70">
                    {loading ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                    ) : (
                      <>Get Free Consultation <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>

                  <p className="text-center text-sm text-muted mt-4">
                    By submitting, you agree to our Privacy Policy. We&apos;ll never share your data.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
