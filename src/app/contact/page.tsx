// "use client";
// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Mail, Phone, MapPin, Clock, ArrowRight, Loader2, CheckCircle, MessageCircle, Send } from "lucide-react";
// import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
// import { submitContactForm } from "@/utils/contactApi";

// const contactInfo = [
//   { icon: Mail, label: "Email Us", value: "shivoramedia@gmail.com", link: "mailto:shivoramedia@gmail.com", desc: "We reply within 24 hours" },
//   { icon: Phone, label: "Call Us", value: "+91 70672 35788", link: "tel:+917067235788", desc: "Mon-Sat, 10:00 AM - 7:00 PM" },
//   { icon: MapPin, label: "Visit Us", value: "Raisen Road Piplani, Bhopal", link: "#map", desc: "By appointment only" },
//   { icon: Clock, label: "Working Hours", value: "Mon - Sat: 10:00 AM - 7:00 PM", link: "#", desc: "Sunday closed" }
// ];

// const services = ["SEO Services", "Social Media Marketing", "PPC Advertising", "Content Marketing", "Brand Identity", "Web Development", "Complete Digital Marketing", "Other"];
// const budgets = [
//   { value: "10-25k", label: "₹10,000 - ₹25,000/month" },
//   { value: "25-50k", label: "₹25,000 - ₹50,000/month" },
//   { value: "50k-1L", label: "₹50,000 - ₹1,00,000/month" },
//   { value: "1L-2L", label: "₹1,00,000 - ₹2,00,000/month" },
//   { value: "2L+", label: "₹2,00,000+/month" }
// ];

// const faqs = [
//   { q: "How long does it take to see results?", a: "Results vary by service. SEO typically takes 3-6 months, while PPC can show results within days. We'll set realistic expectations during our consultation." },
//   { q: "What's your minimum contract period?", a: "We offer flexible contracts starting from 3 months. For best results, we recommend 6-12 month engagements." },
//   { q: "Do you work with small businesses?", a: "Absolutely! We work with businesses of all sizes, from startups to enterprises. We have packages tailored to different budgets." },
//   { q: "How do you measure success?", a: "We track KPIs specific to your goals - traffic, leads, conversions, ROI. You'll receive detailed monthly reports with actionable insights." }
// ];

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", website: "", service: "", budget: "", message: "" });
//   const [loading, setLoading] = useState(false);
//   const [done, setDone] = useState(false);
//   const [error, setError] = useState("");
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
    
//     const result = await submitContactForm({
//       ...form,
//       source: 'contact-page'
//     });
    
//     setLoading(false);
    
//     if (result.success) {
//       setDone(true);
//       setForm({ name: "", email: "", phone: "", company: "", website: "", service: "", budget: "", message: "" });
//     } else {
//       setError(result.error || 'Failed to submit form. Please try again.');
//     }
//   };

//   return (
//     <main>
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-24 pb-8 relative overflow-hidden">
//   <div className="absolute inset-0 pointer-events-none">
//     <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-30"></div>
//     <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-gold opacity-20"></div>
//   </div>

//   <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//     <div className="text-center mb-16">
//       <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
//         <MessageCircle className="w-4 h-4 badge-text" />
//         <span className="text-sm font-medium badge-text">Contact Us</span>
//       </div>

//       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//         Let&apos;s Start Your <span className="badge-text">Growth Journey</span>
//       </h1>

//    <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
//   Ready to transform your digital presence ? 
//   Get a free consultation and custom strategy tailored to your business goals.
// </p>

// <p className="text-base sm:text-lg text-secondary max-w-3xl mx-auto mt-6 leading-relaxed">
//   We&apos;re Excited To Connect With You . Having a question, a project idea, or need expert support .
//   Our team is here to listen and help. 
//   Reach out using the contact form or send us an email, and let&apos;s start a conversation about your goals. 
//   We&apos;ll get back to you promptly with clear and reliable assistance.
// </p>

//     </div>
//   </div>
// </section>


//       {/* Contact Info Cards */}
//       <section className="py-6">
//         <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {contactInfo.map((info, i) => (
//               <a key={i} href={info.link} className="card rounded-2xl p-6 hover:shadow-xl hover-primary transition-all group">
//                 <div className="w-14 h-14 icon-bg rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                   <info.icon className="w-7 h-7 badge-text" />
//                 </div>
//                 <div className="text-muted text-sm mb-1">{info.label}</div>
//                 <div className="font-semibold text-lg mb-1">{info.value}</div>
//                 <div className="text-xs text-muted">{info.desc}</div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Contact Section */}
//       <section className="py-10 section-alt">
//         <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-5 gap-12">
//             {/* Left - Info */}
//             <div className="lg:col-span-2 space-y-8">
//               <div>
//                 <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//                 <p className="text-secondary">Have a project in mind? Fill out the form and we&apos;ll get back to you within 24 hours with a custom proposal.</p>
//               </div>

//               {/* Quick Stats */}
//               <div className="card rounded-2xl p-6 shadow-lg bg-brand-section text-white">
//                 <h4 className="font-semibold mb-4 text-baby-blue">Why Contact Us?</h4>
//                 <div className="grid grid-cols-2 gap-4">
//                   {[{ num: "24hr", label: "Response Time" }, { num: "Free", label: "Consultation" }, { num: "150+", label: "Happy Clients" }, { num: "5.0", label: "Client Rating" }].map((s, i) => (
//                     <div key={i} className="text-center p-4 bg-white/10 rounded-xl">
//                       <div className="text-2xl font-bold text-gold">{s.num}</div>
//                       <div className="text-sm text-baby-blue">{s.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Social Links */}
//               <div className="card rounded-2xl p-6">
//                 <h4 className="font-semibold mb-4">Follow Us</h4>
//                 <div className="flex gap-3">
//                   <a href="https://www.facebook.com/shivoramedia" target="_blank" rel="noopener noreferrer" className="w-12 h-12 card rounded-xl flex items-center justify-center hover:bg-brand hover:text-white transition">
//                     <FaFacebook className="w-5 h-5" />
//                   </a>
//                   <a href="https://www.instagram.com/shivora_media?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 card rounded-xl flex items-center justify-center hover:bg-brand hover:text-white transition">
//                     <FaInstagram className="w-5 h-5" />
//                   </a>
//                   <a href="https://share.google/PZk9kq1IIeWDbCW5g" target="_blank" rel="noopener noreferrer" className="w-12 h-12 card rounded-xl flex items-center justify-center hover:bg-brand hover:text-white transition">
//                     <FaGoogle className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Right - Form */}
//             <div className="lg:col-span-3">
//               <div className="card rounded-2xl p-6 sm:p-8 shadow-xl">
//                 {done ? (
//                   <div className="text-center py-12">
//                     <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
//                       <CheckCircle className="w-10 h-10 text-green-500" />
//                     </div>
//                     <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
//                     <p className="text-muted mb-4">We&apos;ve received your message and will get back to you within 24 hours.</p>
//                     <button onClick={() => setDone(false)} className="px-6 py-3 btn-primary rounded-xl font-semibold">Send Another Message</button>
//                   </div>
//                 ) : (
//                   <form onSubmit={submit}>
//                     <div className="flex items-center gap-3 mb-6">
//                       <Send className="w-6 h-6 badge-text" />
//                       <h3 className="text-xl font-bold">Get Your Free Quote</h3>
//                     </div>

//                     {error && (
//                       <div className="mb-4 p-4 bg-red-500/10 border border-red-500/50 text-red-400 rounded-lg text-sm">
//                         {error}
//                       </div>
//                     )}

//                     <div className="grid sm:grid-cols-2 gap-4 mb-4">
//                       <div>
//                         <label className="block text-sm font-medium mb-2">Full Name *</label>
//                         <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
//                           className="w-full px-4 py-3 input-field rounded-xl" placeholder="John Doe" />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium mb-2">Email Address *</label>
//                         <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
//                           className="w-full px-4 py-3 input-field rounded-xl" placeholder="john@company.com" />
//                       </div>
//                     </div>
//                     <div className="grid sm:grid-cols-2 gap-4 mb-4">
//                       <div>
//                         <label className="block text-sm font-medium mb-2">Phone Number</label>
//                         <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                           className="w-full px-4 py-3 input-field rounded-xl" placeholder="+91 98765 43210" />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium mb-2">Company Name</label>
//                         <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
//                           className="w-full px-4 py-3 input-field rounded-xl" placeholder="Your Company" />
//                       </div>
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium mb-2">Website URL</label>
//                       <input type="url" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })}
//                         className="w-full px-4 py-3 input-field rounded-xl" placeholder="https://yourwebsite.com" />
//                     </div>
//                     <div className="grid sm:grid-cols-2 gap-4 mb-4">
//                       <div>
//                         <label className="block text-sm font-medium mb-2">Service Interested In *</label>
//                         <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
//                           className="w-full px-4 py-3 input-field rounded-xl">
//                           <option value="">Select a service</option>
//                           {services.map((s) => (<option key={s} value={s}>{s}</option>))}
//                         </select>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium mb-2">Monthly Budget</label>
//                         <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
//                           className="w-full px-4 py-3 input-field rounded-xl">
//                           <option value="">Select budget range</option>
//                           {budgets.map((b) => (<option key={b.value} value={b.value}>{b.label}</option>))}
//                         </select>
//                       </div>
//                     </div>
//                     <div className="mb-6">
//                       <label className="block text-sm font-medium mb-2">Tell Us About Your Project</label>
//                       <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
//                         className="w-full px-4 py-3 input-field rounded-xl resize-none" placeholder="Describe your goals..."></textarea>
//                     </div>
//                     <button type="submit" disabled={loading}
//                       className="w-full py-4 btn-gold rounded-xl font-semibold text-lg flex items-center justify-center gap-2">
//                       {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <>Get Free Consultation <ArrowRight className="w-5 h-5" /></>}
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-10">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
//             <p className="text-secondary">Quick answers to common questions</p>
//           </div>
//           <div className="space-y-4">
//             {faqs.map((faq, i) => (
//               <div key={i} className="card rounded-xl overflow-hidden">
//                 <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                   className="w-full px-6 py-4 text-left font-semibold flex items-center justify-between hover:bg-[var(--bg-secondary)] transition">
//                   {faq.q}
//                   <span className={`transform transition-transform ${openFaq === i ? "rotate-180" : ""}`}>▼</span>
//                 </button>
//                 {openFaq === i && (
//                   <div className="px-6 pb-4 text-secondary">{faq.a}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section id="map" className="py-10 section-alt">
//         <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
//             <p className="text-secondary">Raisen Road Piplani, Bhopal</p>
//           </div>
//           <div className="card rounded-2xl overflow-hidden shadow-xl h-[400px] flex items-center justify-center bg-[var(--bg-secondary)]">
//             <div className="text-center">
//               <MapPin className="w-16 h-16 badge-text mx-auto mb-4" />
//               <h3 className="text-xl font-bold mb-2">Shivora Media</h3>
//               <p className="text-secondary">Raisen Road Piplani, Bhopal</p>
//               <p className="text-muted text-sm mt-2">Mon-Sat: 10:00 AM - 7:00 PM</p>
//               <p className="text-muted text-sm">By appointment only</p>
//               <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 mt-4 px-6 py-3 btn-primary rounded-full font-semibold">
//                 Get Directions <ArrowRight className="w-4 h-4" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Contact Page - Coming Soon</h1>
    </div>
  );
}
