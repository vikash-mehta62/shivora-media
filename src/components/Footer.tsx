import Image from "next/image";
import { Mail, Phone, MapPin, Award, Star, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const services = [
  { name: "Search Engine Optimization", href: "/services/seo" },
  { name: "Social Media Marketing", href: "/services/social-media" },
  { name: "Pay-Per-Click Advertising", href: "/services/ppc" },
  { name: "Content Marketing", href: "/services/content-marketing" },
  { name: "Creative Designing", href: "/services/graphic-design" },
  { name: "Video Production", href: "/services/video-production" }
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/portfolio" },
  { name: "Careers", href: "#" },
  { name: "Contact", href: "/contact" }
];

const resources = [
  { name: "Case Studies", href: "/portfolio" },
  { name: "FAQs", href: "/contact" },
  { name: "Admin Login", href: "/admin" }
];

const social = [
  { icon: FaFacebook, href: "https://www.facebook.com/shivoramedia", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/shivora_media?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: FaGoogle, href: "https://share.google/PZk9kq1IIeWDbCW5g", label: "Google" }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden section-alt">
      {/* Main Footer */}
      <div className="border-t border-brand-light">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2">
              <div className="mb-6">
                <div className="relative w-64 h-20">
                  <Image src="/Logo_new.png" alt="Shivora Media" fill className="object-contain object-left" />
                </div>
              </div>
              <p className="text-secondary mb-6 max-w-md text-base leading-relaxed">
                Helping Brands Grow, Connect, And Convert In The Digital World With End-To-End Marketing Solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="mailto:shivoramedia@gmail.com" className="flex items-start gap-3 text-base text-secondary hover-primary transition">
                  <Mail className="w-5 h-5 mt-0.5 shrink-0" /> 
                  <span>shivoramedia@gmail.com</span>
                </a>
                <a href="tel:+917067235788" className="flex items-start gap-3 text-base text-secondary hover-primary transition">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" /> 
                  <span>+91 70672 35788</span>
                </a>
                <div className="flex items-start gap-3 text-base text-secondary">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" /> 
                  <span>Raisen Road Piplani, Bhopal</span>
                </div>
                <div className="flex items-start gap-3 text-base text-secondary">
                  <Clock className="w-5 h-5 mt-0.5 shrink-0" /> 
                  <span>Mon-Sat: 10:00 AM - 7:00 PM</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {social.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="w-10 h-10 card rounded-lg flex items-center justify-center hover-primary transition">
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4 heading-primary">Services</h4>
              <ul className="space-y-3">
                {services.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-secondary hover-primary transition text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4 heading-primary">Company</h4>
              <ul className="space-y-3">
                {company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-secondary hover-primary transition text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4 heading-primary">Resources</h4>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-secondary hover-primary transition text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-bold mb-4 heading-primary">Certifications</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 icon-gold" />
                  <span className="text-sm text-secondary">Google Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 icon-gold" />
                  <span className="text-sm text-secondary">Meta Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 icon-gold" />
                  <span className="text-sm text-secondary">HubSpot Certified</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Star className="w-5 h-5 icon-gold fill-current" />
                  <span className="text-sm font-semibold">5.0 Rating (150+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-light">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted text-sm">
              © 2026 Shivora Media. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted hover-primary transition">Privacy Policy</a>
              <a href="#" className="text-muted hover-primary transition">Terms of Service</a>
              <a href="#" className="text-muted hover-primary transition">Sitemap</a>
              <a href="/admin" className="text-muted hover-primary transition">Admin Login</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
