"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Award, Zap } from "lucide-react";

const stats = [
  { number: "500+", label: "Projects Delivered", icon: TrendingUp },
  { number: "150+", label: "Happy Clients", icon: Users },
  { number: "8+", label: "Years Experience", icon: Award },
  { number: "25+", label: "Awards Won", icon: Star },
];

const features = [
  "Result-Driven Strategies",
  "Dedicated Account Manager", 
  "Monthly Performance Reports",
  "24/7 Support Available"
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-40 animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-gold opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blob-blue opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`${mounted ? "animate-slide-up" : "opacity-0"}`}>
            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              We Help Brands{" "}
              <span className="text-[var(--deep-blue)] dark:text-[var(--baby-blue)] block">
                Grow &<br />Dominate
              </span>{" "}
              <span className="text-[var(--golden-yellow)]">Online</span>
            </h1>

            {/* Subheading Box */}
            <div className="inline-block bg-[var(--baby-blue)]/20 dark:bg-[var(--baby-blue)]/10 px-6 py-3 rounded-lg mb-6">
              <p className="text-xl font-semibold text-white">
                Rank, Grow & Succeed Online
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-white dark:text-gray-300 mb-2 max-w-xl leading-relaxed">
              Smart marketing strategies that help businesses grow online. Combining creative media, digital advertising, and data-driven marketing techniques. Built to increase traffic, leads, and brand awareness.
            </p>
            
            <p className="text-lg text-white dark:text-gray-300 mb-4 max-w-xl leading-relaxed">
              A results-driven digital marketing company offering{" "}
              <span className="font-semibold text-white dark:text-white">
                search engine optimization (SEO), social media management, video production, 
                video marketing, paid advertising, content creation, and web design services
              </span>.
            </p>
            <p className="text-lg text-white dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
              Turning businesses into{" "}
              <span className="font-semibold text-white dark:text-white">
                powerful digital brands
              </span>.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--deep-blue)] dark:text-[var(--golden-yellow)] shrink-0" />
                  <span className="text-sm text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="px-8 py-4 btn-primary rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="px-8 py-4 btn-outline rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2">
                <Play className="w-5 h-5" /> View Our Work
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-[var(--deep-blue)] border-2 border-white dark:border-[var(--bg-primary)] flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold">150+ Happy Clients</div>
                  <div className="flex items-center gap-1 text-[var(--golden-yellow)]">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    <span className="text-muted ml-1">5.0</span>
                  </div>
                </div>
              </div>
              <div className="h-10 w-px bg-[var(--border-color)] hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Award className="w-8 h-8 text-[var(--golden-yellow)]" />
                <div className="text-sm">
                  <div className="font-semibold">Google Partner</div>
                  <div className="text-muted">Certified Agency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className={`relative ${mounted ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            {/* Main Image/Card */}
            <div className="relative">
              <div className="card rounded-3xl p-6 sm:p-8 shadow-2xl">
                {/* Logo */}
                <div className="relative w-full aspect-square max-w-[400px] mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-[var(--deep-blue)]/20">
                  <Image src="/logo.jpeg" alt="Shivora Media" fill className="object-cover" priority />
                </div>
                
                {/* Stats below logo */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {stats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-[var(--bg-secondary)] rounded-xl">
                      <stat.icon className="w-6 h-6 text-[var(--deep-blue)] dark:text-[var(--golden-yellow)] mx-auto mb-2" />
                      <div className="text-2xl sm:text-3xl font-bold text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">{stat.number}</div>
                      <div className="text-xs text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 card rounded-xl p-4 shadow-xl animate-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">+340%</div>
                    <div className="text-xs text-muted">Traffic Growth</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 card rounded-xl p-4 shadow-xl animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--golden-yellow)]/20 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-[var(--golden-yellow)]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">5x</div>
                    <div className="text-xs text-muted">ROI Achieved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 sm:mt-24">
          <div className="card rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-8 h-8 text-[var(--deep-blue)] dark:text-[var(--golden-yellow)] mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">{stat.number}</div>
                  <div className="text-sm text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
