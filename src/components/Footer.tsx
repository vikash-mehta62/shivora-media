import Image from "next/image";
import { ArrowRight, Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Award, Star } from "lucide-react";

const services = [
  { name: "SEO Services", href: "/services#seo" },
  { name: "Social Media Marketing", href: "/services#smm" },
  { name: "PPC Advertising", href: "/services#ppc" },
  { name: "Content Marketing", href: "/services#content" },
  { name: "Web Development", href: "/services#web" },
  { name: "Brand Identity", href: "/services#branding" }
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/portfolio" },
  { name: "Our Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/team" },
  { name: "Contact", href: "/contact" }
];

const resources = [
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/portfolio" },
  { name: "Free Tools", href: "#" },
  { name: "Marketing Guide", href: "/blog" },
  { name: "FAQs", href: "/contact" }
];

const social = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden section-alt">
      {/* CTA Section */}
      <div className="border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="card rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl bg-[var(--deep-blue)] text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--baby-blue)]/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--golden-yellow)]/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-6 h-6 text-[var(--golden-yellow)]" />
                <span className="text-[var(--baby-blue)] font-medium">LET&apos;S TALK</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Ready to 10x Your <span className="text-[var(--golden-yellow)]">Growth?</span>
              </h3>
              <p className="text-[var(--baby-blue)] mb-8 max-w-2xl mx-auto text-lg">
                Let&apos;s discuss how we can help grow your business.
              </p>
              <a href="mailto:shivoramedia@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 btn-gold rounded-full font-semibold text-lg">
                Enquire Now <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-lg border-2 border-[var(--deep-blue)]/30">
                  <Image src="/logo.jpeg" alt="Shivora Media" fill className="object-cover" />
                </div>
                <div>
                  <span className="font-bold text-2xl text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">Shivora</span>
                  <span className="text-[var(--golden-yellow)] font-semibold text-sm block">Media</span>
                </div>
              </div>
              <p className="text-secondary mb-6 max-w-sm">
                Full-service digital marketing agency helping businesses grow online since 2018. 
                Your trusted partner for SEO, Social Media, PPC & more.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="mailto:shivoramedia@gmail.com" className="flex items-center gap-2 text-sm text-secondary hover:text-[var(--deep-blue)] transition">
                  <Mail className="w-4 h-4" /> shivoramedia@gmail.com
                </a>
                <a href="tel:+917067235788" className="flex items-center gap-2 text-sm text-secondary hover:text-[var(--deep-blue)] transition">
                  <Phone className="w-4 h-4" /> +91 7067235788
                </a>
                <a href="https://wa.me/917067235788" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-secondary hover:text-[var(--deep-blue)] transition">
                  <Phone className="w-4 h-4" /> WhatsApp: +91 7067235788
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {social.map((s, i) => (
                  <a key={i} href={s.href} aria-label={s.label}
                    className="w-10 h-10 card rounded-lg flex items-center justify-center hover:bg-[var(--deep-blue)] hover:text-white hover:border-[var(--deep-blue)] transition">
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">Services</h4>
              <ul className="space-y-3">
                {services.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-secondary hover:text-[var(--deep-blue)] dark:hover:text-[var(--golden-yellow)] transition text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">Company</h4>
              <ul className="space-y-3">
                {company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-secondary hover:text-[var(--deep-blue)] dark:hover:text-[var(--golden-yellow)] transition text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">Resources</h4>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-secondary hover:text-[var(--deep-blue)] dark:hover:text-[var(--golden-yellow)] transition text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">Quick Links</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[var(--golden-yellow)] fill-[var(--golden-yellow)]" />
                  <span className="text-sm font-semibold">5.0 Rating (150+ Reviews)</span>
                </div>
                <a href="https://wa.me/917067235788" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-secondary hover:text-[var(--deep-blue)] transition">
                  <Phone className="w-4 h-4" /> Contact on WhatsApp
                </a>
                <a href="mailto:shivoramedia@gmail.com" className="flex items-center gap-2 text-sm text-secondary hover:text-[var(--deep-blue)] transition">
                  <Mail className="w-4 h-4" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted text-sm">
              © 2026 Shivora Media. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted hover:text-[var(--deep-blue)] transition">Privacy Policy</a>
              <a href="#" className="text-muted hover:text-[var(--deep-blue)] transition">Terms of Service</a>
              <a href="#" className="text-muted hover:text-[var(--deep-blue)] transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
