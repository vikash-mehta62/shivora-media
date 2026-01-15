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
      { name: "SEO Services", href: "/services#seo" },
      { name: "Social Media Marketing", href: "/services#smm" },
      { name: "PPC Advertising", href: "/services#ppc" },
      { name: "Content Marketing", href: "/services#content" },
      { name: "Web Development", href: "/services#web" },
      { name: "Brand Identity", href: "/services#branding" },
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? "glass py-2 shadow-xl" : "py-4 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-12 sm:h-14 w-auto">
              <Image src="/Logo_2A.png" alt="Shivora Media" width={180} height={56} className="h-full w-auto object-contain" priority />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <Link href={link.href}
                  className="px-4 py-2 text-secondary hover:text-[var(--deep-blue)] dark:hover:text-[var(--baby-blue)] rounded-lg hover:bg-[var(--deep-blue)]/5 transition-all text-sm font-medium flex items-center gap-1">
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 card rounded-xl shadow-xl p-2 animate-fade-in">
                    {link.dropdown.map((item) => (
                      <Link key={item.name} href={item.href}
                        className="block px-4 py-2.5 text-sm text-secondary hover:text-[var(--deep-blue)] hover:bg-[var(--deep-blue)]/5 rounded-lg transition">
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
              className="w-10 h-10 rounded-xl card flex items-center justify-center hover:border-[var(--deep-blue)] transition shadow-sm">
              {theme === "dark" ? <Sun className="w-5 h-5 text-[var(--golden-yellow)]" /> : <Moon className="w-5 h-5 text-[var(--deep-blue)]" />}
            </button>
            <a href="tel:+917067235788" className="hidden xl:flex items-center gap-2 text-secondary hover:text-[var(--deep-blue)] transition text-sm font-medium">
              <div className="w-8 h-8 bg-[var(--deep-blue)]/10 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-[var(--deep-blue)]" />
              </div>
              +91 7067235788
            </a>
            <Link href="/contact" className="px-6 py-2.5 btn-gold rounded-full font-semibold text-sm">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggleTheme} className="w-10 h-10 rounded-xl card flex items-center justify-center shadow-sm">
              {theme === "dark" ? <Sun className="w-5 h-5 text-[var(--golden-yellow)]" /> : <Moon className="w-5 h-5 text-[var(--deep-blue)]" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 rounded-xl card flex items-center justify-center shadow-sm">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[600px] mt-4" : "max-h-0"}`}>
          <div className="card rounded-2xl p-4 shadow-xl">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link href={link.href} onClick={() => !link.dropdown && setIsOpen(false)}
                  className="block px-4 py-3 text-secondary hover:text-[var(--deep-blue)] hover:bg-[var(--deep-blue)]/5 rounded-xl transition font-medium">
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-muted hover:text-[var(--deep-blue)] rounded-lg transition">
                        {item.name}
                      </Link>
                    ))}
                  </div>
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
      </div>
    </nav>
  );
}
