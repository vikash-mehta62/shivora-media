"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Sun, Moon, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "SEO Services", href: "/services/seo" },
      { name: "Social Media Marketing", href: "/services/social-media" },
      { name: "PPC Advertising", href: "/services/ppc" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Brand Identity", href: "/services/brand-identity" },
    ]
  },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 h-[80px] flex items-center transition-all duration-500 ${
      scrolled ? "glass shadow-xl" : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-[92%] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-32 h-11 group-hover:opacity-90 transition-all">
              <Image src="/Logo_new.png" alt="Shivora Media" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <Link href={link.href}
                  className="px-4 py-2 text-secondary hover-primary rounded-lg hover:bg-[var(--accent-bg)] transition-all text-sm font-medium flex items-center gap-1">
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 card rounded-xl shadow-xl p-2 animate-fade-in">
                    {link.dropdown.map((item) => (
                      <Link key={item.name} href={item.href}
                        className="block px-4 py-2.5 text-sm text-secondary hover-primary hover:bg-[var(--accent-bg)] rounded-lg transition">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={toggleTheme}
              className="w-10 h-10 rounded-xl card flex items-center justify-center hover-primary transition shadow-sm">
              {theme === "dark" ? <Sun className="w-5 h-5 icon-gold" /> : <Moon className="w-5 h-5 icon-primary" />}
            </button>
            <a href="tel:+917067235788" className="hidden xl:flex items-center gap-2 text-secondary hover-primary transition text-sm font-medium">
              <div className="w-8 h-8 badge-bg rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 icon-primary" />
              </div>
              +91 70672 35788
            </a>
            <Link href="/contact" className="px-6 py-2.5 btn-gold rounded-full font-semibold text-sm">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggleTheme} className="w-10 h-10 rounded-xl card flex items-center justify-center shadow-sm">
              {theme === "dark" ? <Sun className="w-5 h-5 icon-gold" /> : <Moon className="w-5 h-5 icon-primary" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 rounded-xl card flex items-center justify-center shadow-sm">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-[80px] left-0 right-0 px-4">
            <div className="card rounded-2xl p-4 shadow-xl max-h-[calc(100vh-100px)] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between px-4 py-3 text-secondary hover-primary hover:bg-[var(--accent-bg)] rounded-xl transition font-medium">
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === link.name && (
                        <div className="pl-4 space-y-1 mt-1">
                          {link.dropdown.map((item) => (
                            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-sm text-muted hover-primary rounded-lg transition">
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={link.href} onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-secondary hover-primary hover:bg-[var(--accent-bg)] rounded-xl transition font-medium">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-[var(--border-color)]">
                <Link href="/contact" onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 btn-gold rounded-xl text-center font-semibold">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
