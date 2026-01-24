"use client";
import { useState } from "react";
import { Search, Share2, DollarSign, FileText, Palette, Code, Monitor, Megaphone, BarChart3, ArrowRight, Check, Target } from "lucide-react";

const services = [
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    tagline: "Rank Higher, Get Found",
    description: "Dominate Google search results and drive organic traffic that converts. Our data-driven SEO strategies help you outrank competitors and capture high-intent customers.",
    features: [
      "Comprehensive SEO Audit & Analysis",
      "Keyword Research & Strategy",
      "On-Page & Technical SEO",
      "High-Quality Link Building",
      "Local SEO & Google My Business",
      "Monthly Ranking Reports"
    ],
    benefits: ["300% Average Traffic Increase", "Top 10 Rankings Guaranteed", "Long-term Sustainable Growth"],
    stats: { metric: "300%", label: "Avg. Traffic Growth" },
    link: "/services/seo"
  },
  {
    id: "smm",
    icon: Share2,
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    tagline: "Build Your Community",
    description: "Transform followers into loyal customers. We create engaging content, manage your social presence, and run targeted campaigns across Facebook, Instagram, LinkedIn & more.",
    features: [
      "Social Media Strategy & Planning",
      "Content Creation & Curation",
      "Community Management",
      "Influencer Marketing",
      "Paid Social Advertising",
      "Analytics & Performance Reports"
    ],
    benefits: ["10M+ Reach Generated", "500K+ Followers Grown", "Viral Campaign Expertise"],
    stats: { metric: "10M+", label: "Reach Generated" },
    link: "/services/social-media"
  },
  {
    id: "ppc",
    icon: DollarSign,
    title: "Pay-Per-Click Advertising",
    shortTitle: "PPC Ads",
    tagline: "Instant Visibility & Leads",
    description: "Get immediate results with targeted paid campaigns. We manage Google Ads, Facebook Ads, Instagram Ads & LinkedIn Ads to maximize your ROI and minimize wasted spend.",
    features: [
      "Google Ads Management",
      "Facebook & Instagram Ads",
      "LinkedIn Advertising",
      "Retargeting Campaigns",
      "Landing Page Optimization",
      "Conversion Tracking & Analytics"
    ],
    benefits: ["5x Average ROAS", "Lower Cost Per Lead", "Instant Traffic & Results"],
    stats: { metric: "5x", label: "Average ROAS" },
    link: "/services/ppc"
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Marketing",
    shortTitle: "Content",
    tagline: "Stories That Sell",
    description: "Engage your audience with compelling content that builds trust and drives action. From blogs to videos, we create content that positions you as an industry leader.",
    features: [
      "Content Strategy Development",
      "Blog Writing & Management",
      "Video Content Production",
      "Infographic Design",
      "Email Marketing Campaigns",
      "Content Distribution"
    ],
    benefits: ["200% Engagement Boost", "Thought Leadership", "Lead Generation"],
    stats: { metric: "200%", label: "Engagement Increase" },
    link: "/services/content-marketing"
  },
  {
    id: "web",
    icon: Code,
    title: "Web Design & Development",
    shortTitle: "Web Dev",
    tagline: "Websites That Convert",
    description: "Beautiful, fast, and conversion-optimized websites that represent your brand and drive business results. Mobile-first design with SEO built-in from day one.",
    features: [
      "Custom Website Design",
      "E-commerce Development",
      "Landing Page Design",
      "UI/UX Optimization",
      "Speed & Performance",
      "Ongoing Maintenance"
    ],
    benefits: ["99% Client Satisfaction", "Mobile-First Design", "SEO Optimized"],
    stats: { metric: "99%", label: "Client Satisfaction" },
    link: "/services/web-development"
  },
  {
    id: "branding",
    icon: Palette,
    title: "Brand Identity Design",
    shortTitle: "Branding",
    tagline: "Stand Out & Be Remembered",
    description: "Create a memorable brand identity that resonates with your audience. From logo design to complete brand guidelines, we shape every element of your visual identity.",
    features: [
      "Logo Design & Variations",
      "Brand Color & Typography",
      "Brand Guidelines Document",
      "Business Card & Stationery",
      "Social Media Templates",
      "Brand Voice & Messaging"
    ],
    benefits: ["100+ Brands Created", "Unique Identity", "Consistent Branding"],
    stats: { metric: "100+", label: "Brands Created" },
    link: "/services/brand-identity"
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] blob-blue opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blob-gold opacity-20"></div>
      </div>

      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 badge-bg rounded-full mb-2">
            <Target className="w-3.5 h-3.5 icon-primary" />
            <span className="text-xs font-medium badge-text">Our Services</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            Full-Service <span className="heading-primary">Digital Marketing</span>
            <span className="block text-gold">Solutions</span>
          </h2>
          <p className="text-sm text-secondary max-w-3xl mx-auto">
            Everything you need to dominate online. From SEO to Social Media, PPC to Content Marketing - 
            we provide comprehensive digital solutions tailored to your business goals.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                activeService.id === service.id
                  ? "bg-brand text-white shadow-lg"
                  : "card hover-primary text-secondary"
              }`}
            >
              <service.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{service.shortTitle}</span>
              <span className="sm:hidden">{service.shortTitle.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Service Detail */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-start mb-10">
          {/* Left - Info */}
          <div className="card rounded-2xl p-4 sm:p-5 shadow-xl">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 icon-bg rounded-xl flex items-center justify-center">
                <activeService.icon className="w-5 h-5 icon-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">{activeService.title}</h3>
                <p className="text-gold font-medium text-xs">{activeService.tagline}</p>
              </div>
            </div>

            <p className="text-secondary text-sm mb-4 leading-relaxed">
              {activeService.description}
            </p>

            {/* Features */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-sm">What&apos;s Included:</h4>
              <div className="grid sm:grid-cols-2 gap-1.5">
                {activeService.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full badge-bg flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 icon-primary" />
                    </div>
                    <span className="text-xs text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {activeService.benefits.map((benefit, i) => (
                <span key={i} className="px-3 py-1.5 bg-gold/10 text-gold rounded-full text-xs font-medium">
                  {benefit}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <a href={activeService.link} className="inline-flex items-center gap-1.5 px-5 py-2.5 btn-primary rounded-full font-semibold text-sm">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-1.5 px-5 py-2.5 btn-outline rounded-full font-semibold text-sm">
                Get Started
              </a>
            </div>
          </div>

          {/* Right - Stats & Visual */}
          <div className="space-y-6">
            {/* Main Stat Card */}
            <div className="card rounded-2xl p-6 sm:p-8 shadow-xl text-center bg-brand-section text-white">
              <activeService.icon className="w-12 h-12 mx-auto mb-4 text-baby-blue" />
              <div className="text-4xl sm:text-5xl font-bold icon-gold mb-1.5">
                {activeService.stats.metric}
              </div>
              <div className="text-sm text-baby-blue">{activeService.stats.label}</div>
            </div>

            {/* Why Choose Us */}
            <div className="card rounded-xl p-4 shadow-lg">
              <h4 className="font-semibold mb-3 text-sm">Why Choose Shivora Media?</h4>
              <div className="space-y-2">
                {["Proven Track Record", "Dedicated Team", "Transparent Reporting", "ROI Focused"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gold/20 rounded-lg flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 icon-gold" />
                    </div>
                    <span className="text-secondary text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <div>
          <h3 className="text-lg font-bold text-center mb-6">All Services Overview</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={service.link}
                className={`card rounded-2xl p-6 cursor-pointer transition-all hover:shadow-xl hover-primary block ${
                  activeService.id === service.id ? "active-border shadow-lg" : ""
                }`}
              >
                <div className="w-14 h-14 icon-bg rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 icon-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                <p className="text-sm text-muted mb-4 line-clamp-2">{service.description}</p>
                <div className="flex items-center gap-2 badge-text font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
