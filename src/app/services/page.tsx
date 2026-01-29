"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Share2, DollarSign, FileText, Palette, Code, Check, ArrowRight, Target, TrendingUp, Users, Award, Zap, Video } from "lucide-react";

const services = [
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    tagline: "Rank Higher, Get Found",
    description: "Dominate Google search results and drive organic traffic that converts. Our data-driven SEO strategies help you outrank competitors and capture high-intent customers actively searching for your products or services.",
    longDesc: "Our comprehensive SEO services cover everything from technical optimization to content strategy. We analyze your website's current performance, identify opportunities, and implement proven strategies that deliver sustainable organic growth.",
    features: [
      "Comprehensive SEO Audit & Analysis",
      "Keyword Research & Strategy",
      "On-Page & Technical SEO",
      "High-Quality Link Building",
      "Local SEO & Google My Business",
      "E-commerce SEO",
      "Content Optimization",
      "Monthly Ranking Reports"
    ],
    benefits: ["300% Average Traffic Increase", "Top 10 Rankings Guaranteed", "Long-term Sustainable Growth", "Higher Quality Leads"],
    stats: { metric: "300%", label: "Avg. Traffic Growth" },
    process: ["SEO Audit", "Keyword Research", "On-Page Optimization", "Link Building", "Monitor & Report"],
    link: "/services/seo"
  },
  {
    id: "smm",
    icon: Share2,
    title: "Social Media Marketing",
    tagline: "Build Your Community",
    description: "Transform followers into loyal customers. We create engaging content, manage your social presence, and run targeted campaigns across Facebook, Instagram, LinkedIn, Twitter & more.",
    longDesc: "Social media is where your customers spend their time. Our social media marketing services help you build a strong presence, engage with your audience, and convert followers into paying customers through strategic content and advertising.",
    features: [
      "Social Media Strategy & Planning",
      "Content Creation & Curation",
      "Community Management",
      "Influencer Marketing",
      "Paid Social Advertising",
      "Instagram & Facebook Marketing",
      "LinkedIn B2B Marketing",
      "Analytics & Performance Reports"
    ],
    benefits: ["10M+ Reach Generated", "500K+ Followers Grown", "Viral Campaign Expertise", "Brand Awareness Boost"],
    stats: { metric: "10M+", label: "Reach Generated" },
    process: ["Strategy Planning", "Content Creation", "Publishing", "Community Engagement", "Analytics"],
    link: "/services/social-media"
  },
  {
    id: "ppc",
    icon: DollarSign,
    title: "Pay-Per-Click Advertising",
    tagline: "Instant Visibility & Leads",
    description: "Get immediate results with targeted paid campaigns. We manage Google Ads, Facebook Ads, Instagram Ads & LinkedIn Ads to maximize your ROI and minimize wasted spend.",
    longDesc: "PPC advertising delivers instant visibility and measurable results. Our certified experts create and manage campaigns that target the right audience at the right time, ensuring every rupee spent contributes to your business growth.",
    features: [
      "Google Ads Management",
      "Facebook & Instagram Ads",
      "LinkedIn Advertising",
      "YouTube Video Ads",
      "Retargeting Campaigns",
      "Shopping Ads",
      "Landing Page Optimization",
      "Conversion Tracking & Analytics"
    ],
    benefits: ["5x Average ROAS", "Lower Cost Per Lead", "Instant Traffic & Results", "Precise Targeting"],
    stats: { metric: "5x", label: "Average ROAS" },
    process: ["Campaign Setup", "Audience Targeting", "Ad Creation", "Optimization", "Reporting"],
    link: "/services/ppc"
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Marketing",
    tagline: "Stories That Sell",
    description: "Engage your audience with compelling content that builds trust and drives action. From blogs to videos, we create content that positions you as an industry leader.",
    longDesc: "Content is king in digital marketing. Our content marketing services help you attract, engage, and convert your target audience through valuable, relevant content that establishes your brand as a trusted authority in your industry.",
    features: [
      "Content Strategy Development",
      "Blog Writing & Management",
      "Video Content Production",
      "Infographic Design",
      "Email Marketing Campaigns",
      "Ebook & Whitepaper Creation",
      "Case Study Development",
      "Content Distribution"
    ],
    benefits: ["200% Engagement Boost", "Thought Leadership", "Lead Generation", "SEO Benefits"],
    stats: { metric: "200%", label: "Engagement Increase" },
    process: ["Content Audit", "Strategy Development", "Content Creation", "Distribution", "Performance Analysis"],
    link: "/services/content-marketing"
  },
  {
    id: "web",
    icon: Code,
    title: "Web Design & Development",
    tagline: "Websites That Convert",
    description: "Beautiful, fast, and conversion-optimized websites that represent your brand and drive business results. Mobile-first design with SEO built-in from day one.",
    longDesc: "Your website is your digital storefront. We design and develop stunning, high-performance websites that not only look great but also convert visitors into customers. Every site we build is optimized for speed, SEO, and user experience.",
    features: [
      "Custom Website Design",
      "E-commerce Development",
      "Landing Page Design",
      "UI/UX Optimization",
      "Mobile Responsive Design",
      "Speed & Performance Optimization",
      "CMS Integration",
      "Ongoing Maintenance & Support"
    ],
    benefits: ["99% Client Satisfaction", "Mobile-First Design", "SEO Optimized", "Fast Loading Speed"],
    stats: { metric: "99%", label: "Client Satisfaction" },
    process: ["Discovery", "Wireframing", "Design", "Development", "Launch & Support"],
    link: "/services/web-development"
  },
  {
    id: "branding",
    icon: Palette,
    title: "Brand Identity Design",
    tagline: "Stand Out & Be Remembered",
    description: "Create a memorable brand identity that resonates with your audience. From logo design to complete brand guidelines, we shape every element of your visual identity.",
    longDesc: "A strong brand identity sets you apart from competitors and creates lasting impressions. Our branding services help you develop a cohesive visual identity that communicates your values and connects with your target audience emotionally.",
    features: [
      "Logo Design & Variations",
      "Brand Color & Typography",
      "Brand Guidelines Document",
      "Business Card & Stationery",
      "Social Media Templates",
      "Packaging Design",
      "Brand Voice & Messaging",
      "Brand Strategy Consultation"
    ],
    benefits: ["100+ Brands Created", "Unique Identity", "Consistent Branding", "Memorable Design"],
    stats: { metric: "100+", label: "Brands Created" },
    process: ["Brand Discovery", "Concept Development", "Design Refinement", "Guidelines Creation", "Brand Launch"],
    link: "/services/brand-identity"
  }
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-gold opacity-20"></div>
        </div>

        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
              <Target className="w-4 h-4 icon-primary" />
              <span className="text-sm font-medium badge-text">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Full-Service <span className="heading-primary">Digital Marketing</span>
              <span className="block text-gold">Solutions</span>
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Everything you need to dominate online. From SEO to Social Media, PPC to Content Marketing - 
              we provide comprehensive digital solutions tailored to your business goals.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: TrendingUp, number: "500+", label: "Projects Delivered" },
              { icon: Users, number: "150+", label: "Happy Clients" },
              { icon: Award, number: "25+", label: "Awards Won" },
              { icon: Zap, number: "8+", label: "Years Experience" }
            ].map((stat, i) => (
              <div key={i} className="card rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 icon-gold mx-auto mb-3" />
                <div className="text-3xl font-bold heading-primary">{stat.number}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-12 section-alt">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  activeService.id === service.id
                    ? "bg-brand-section text-white shadow-lg"
                    : "card hover-primary text-secondary"
                }`}
              >
                <service.icon className="w-5 h-5" />
                {service.title.split(' ').slice(0, 2).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Detail */}
      <section className="py-20">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 icon-bg rounded-2xl flex items-center justify-center">
                  <activeService.icon className="w-10 h-10 icon-primary" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold">{activeService.title}</h2>
                  <p className="text-gold font-medium text-lg">{activeService.tagline}</p>
                </div>
              </div>

              <p className="text-secondary text-lg mb-6 leading-relaxed">{activeService.description}</p>
              <p className="text-muted mb-8">{activeService.longDesc}</p>

              {/* Process */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-lg">Our Process:</h3>
                <div className="flex flex-wrap gap-2">
                  {activeService.process.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-8 h-8 bg-brand-section text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                      <span className="text-secondary">{step}</span>
                      {i < activeService.process.length - 1 && <ArrowRight className="w-4 h-4 text-muted mx-2" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a href={activeService.link} className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-full font-semibold text-lg">
                  Learn More <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 btn-outline rounded-full font-semibold text-lg">
                  Get Started
                </a>
              </div>
            </div>

            {/* Right - Features & Stats */}
            <div className="space-y-6">
              {/* Main Stat */}
              <div className="card rounded-3xl p-10 shadow-xl text-center bg-brand-section text-white">
                <activeService.icon className="w-16 h-16 mx-auto mb-6 text-baby-blue" />
                <div className="text-6xl font-bold text-gold mb-2">{activeService.stats.metric}</div>
                <div className="text-lg text-baby-blue">{activeService.stats.label}</div>
              </div>

              {/* Features */}
              <div className="card rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold mb-4 text-lg">What&apos;s Included:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeService.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full badge-bg flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 icon-primary" />
                      </div>
                      <span className="text-sm text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-2">
                {activeService.benefits.map((benefit, i) => (
                  <span key={i} className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid - FLIP CARDS WITH VIDEOS */}
      <section className="py-20 section-alt">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">All Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* SEO Service - HAS VIDEO */}
            <div className="flip-card-container-large">
              <div className="flip-card-inner-wrapper">
                {/* FRONT - Video + Title */}
                <div className="flip-card-front-side rounded-2xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0">
                    <img src="/vid/seo service.gif" alt="SEO Service" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-end p-8 text-center">
                    <div className="w-16 h-16 bg-[#6B8CFF] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Search Engine Optimization</h3>
                    <p className="text-white/90 text-sm">Dominate Google search results and drive organic traffic.</p>
                  </div>
                </div>
                {/* BACK - Description */}
                <div className="flip-card-back-side rounded-2xl shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Search Engine Optimization</h3>
                  <p className="text-white text-base leading-relaxed mb-6">Dominate Google search results and drive organic traffic that converts. Our data-driven SEO strategies help you outrank competitors and capture high-intent customers actively searching for your products or services. We cover everything from technical optimization to content strategy.</p>
                  <a href="/services/seo" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media - HAS VIDEO */}
            <div className="flip-card-container-large">
              <div className="flip-card-inner-wrapper">
                <div className="flip-card-front-side rounded-2xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src="/vid/social media.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-end p-8 text-center">
                    <div className="w-16 h-16 bg-[#6B8CFF] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <Share2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Social Media Marketing</h3>
                    <p className="text-white/90 text-sm">Transform followers into loyal customers with engaging content.</p>
                  </div>
                </div>
                <div className="flip-card-back-side rounded-2xl shadow-lg bg-gradient-to-br from-pink-500 to-purple-600 p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Social Media Marketing</h3>
                  <p className="text-white text-base leading-relaxed mb-6">Transform followers into loyal customers. We create engaging content, manage your social presence, and run targeted campaigns across Facebook, Instagram, LinkedIn, Twitter & more. Build a strong presence and convert followers into paying customers.</p>
                  <a href="/services/social-media" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* PPC - HAS VIDEO */}
            <div className="flip-card-container-large">
              <div className="flip-card-inner-wrapper">
                <div className="flip-card-front-side rounded-2xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src="/vid/performance marketing .mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-end p-8 text-center">
                    <div className="w-16 h-16 bg-[#6B8CFF] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <DollarSign className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Pay-Per-Click Advertising</h3>
                    <p className="text-white/90 text-sm">Get immediate results with targeted paid campaigns.</p>
                  </div>
                </div>
                <div className="flip-card-back-side rounded-2xl shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Pay-Per-Click Advertising</h3>
                  <p className="text-white text-base leading-relaxed mb-6">Get immediate results with targeted paid campaigns. We manage Google Ads, Facebook Ads, Instagram Ads & LinkedIn Ads to maximize your ROI and minimize wasted spend. Our certified experts create campaigns that target the right audience at the right time.</p>
                  <a href="/services/ppc" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Content Marketing - NO VIDEO - PLACEHOLDER */}
            {/* <div className="flip-card-container-large">
              <div className="flip-card-inner-wrapper">
                <div className="flip-card-front-side rounded-2xl overflow-hidden shadow-lg relative bg-gradient-to-br from-purple-400 to-purple-600">
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-6 gap-4 p-4">
                      {[...Array(24)].map((_, i) => (
                        <FileText key={i} className="w-6 h-6 text-white" />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-end p-8 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 shadow-lg backdrop-blur-sm">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Content Marketing</h3>
                    <p className="text-white/90 text-sm">Engage your audience with compelling content.</p>
                    <p className="text-white/60 text-xs mt-2">(Video coming soon)</p>
                  </div>
                </div>
                <div className="flip-card-back-side rounded-2xl shadow-lg bg-gradient-to-br from-purple-500 to-purple-700 p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Content Marketing</h3>
                  <p className="text-white text-base leading-relaxed mb-6">Engage your audience with compelling content that builds trust and drives action. From blogs to videos, we create content that positions you as an industry leader. Our content marketing services help you attract, engage, and convert your target audience through valuable, relevant content.</p>
                  <a href="/services/content-marketing" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div> */}

            {/* Web Development - NO VIDEO - PLACEHOLDER */}
            {/* <div className="flip-card-container-large">
              <div className="flip-card-inner-wrapper">
                <div className="flip-card-front-side rounded-2xl overflow-hidden shadow-lg relative bg-gradient-to-br from-cyan-400 to-blue-600">
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-6 gap-4 p-4">
                      {[...Array(24)].map((_, i) => (
                        <Code key={i} className="w-6 h-6 text-white" />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-end p-8 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 shadow-lg backdrop-blur-sm">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Web Design & Development</h3>
                    <p className="text-white/90 text-sm">Beautiful, fast, and conversion-optimized websites.</p>
                    <p className="text-white/60 text-xs mt-2">(Video coming soon)</p>
                  </div>
                </div>
                <div className="flip-card-back-side rounded-2xl shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Web Design & Development</h3>
                  <p className="text-white text-base leading-relaxed mb-6">Beautiful, fast, and conversion-optimized websites that represent your brand and drive business results. Mobile-first design with SEO built-in from day one. We design and develop stunning, high-performance websites that convert visitors into customers.</p>
                  <a href="/services/web-development" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div> */}

            {/* Brand Identity - NO VIDEO - PLACEHOLDER */}
            {/* <div className="flip-card-container-large">
              <div className="flip-card-inner-wrapper">
                <div className="flip-card-front-side rounded-2xl overflow-hidden shadow-lg relative bg-gradient-to-br from-orange-400 to-red-600">
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-6 gap-4 p-4">
                      {[...Array(24)].map((_, i) => (
                        <Palette key={i} className="w-6 h-6 text-white" />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-end p-8 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 shadow-lg backdrop-blur-sm">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Brand Identity Design</h3>
                    <p className="text-white/90 text-sm">Create a memorable brand identity that resonates.</p>
                    <p className="text-white/60 text-xs mt-2">(Video coming soon)</p>
                  </div>
                </div>
                <div className="flip-card-back-side rounded-2xl shadow-lg bg-gradient-to-br from-orange-500 to-red-700 p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Brand Identity Design</h3>
                  <p className="text-white text-base leading-relaxed mb-6">Create a memorable brand identity that resonates with your audience. From logo design to complete brand guidelines, we shape every element of your visual identity. A strong brand identity sets you apart from competitors and creates lasting impressions.</p>
                  <a href="/services/brand-identity" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div> */}

            {/* Graphic Design - HAS VIDEO */}
            <div className="flip-card-container-large">
              <div className="flip-card-inner-wrapper">
                <div className="flip-card-front-side rounded-2xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src="/vid/graphic designing .mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-end p-8 text-center">
                    <div className="w-16 h-16 bg-[#6B8CFF] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Graphic Design</h3>
                    <p className="text-white/90 text-sm">Professional graphic design services for your brand.</p>
                  </div>
                </div>
                <div className="flip-card-back-side rounded-2xl shadow-lg bg-gradient-to-br from-pink-500 to-red-600 p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Graphic Design</h3>
                  <p className="text-white text-base leading-relaxed mb-6">Build a powerful brand presence with professional graphic design services. From logos and branding to ad creatives and social media visuals, we design assets that convert. Our creative team delivers stunning designs that capture attention and communicate your brand message effectively.</p>
                  <a href="/services/graphic-design" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Video Production - HAS VIDEO */}
            <div className="flip-card-container-large">
              <div className="flip-card-inner-wrapper">
                <div className="flip-card-front-side rounded-2xl overflow-hidden shadow-lg relative">
                  <div className="absolute inset-0">
                    <img src="/vid/video production services  .gif" alt="Video Production" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-end p-8 text-center">
                    <div className="w-16 h-16 bg-[#6B8CFF] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Video Production</h3>
                    <p className="text-white/90 text-sm">Capture attention with high-impact video production.</p>
                  </div>
                </div>
                <div className="flip-card-back-side rounded-2xl shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Video Production</h3>
                  <p className="text-white text-base leading-relaxed mb-6">Capture attention and drive results with high-impact video production. We create reels, ad videos, promotional videos, brand films, and product videos optimized for ads and social media. Our video production services help you tell your story in the most engaging way possible.</p>
                  <a href="/services/video" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Marketing Automation - NO VIDEO - PLACEHOLDER */}
            {/* <div className="flip-card-container-large">
              <div className="flip-card-inner-wrapper">
                <div className="flip-card-front-side rounded-2xl overflow-hidden shadow-lg relative bg-gradient-to-br from-green-400 to-teal-600">
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-6 gap-4 p-4">
                      {[...Array(24)].map((_, i) => (
                        <Target key={i} className="w-6 h-6 text-white" />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-end p-8 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 shadow-lg backdrop-blur-sm">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Marketing Automation</h3>
                    <p className="text-white/90 text-sm">Save time and scale faster with automation.</p>
                    <p className="text-white/60 text-xs mt-2">(Video coming soon)</p>
                  </div>
                </div>
                <div className="flip-card-back-side rounded-2xl shadow-lg bg-gradient-to-br from-green-500 to-teal-700 p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Marketing Automation</h3>
                  <p className="text-white text-base leading-relaxed mb-6">Save time and scale faster with smart marketing automation solutions. We streamline lead management, email campaigns, CRM automation, and reporting workflows. Our automation services help you work smarter, not harder, while delivering personalized experiences at scale.</p>
                  <a href="/services/automation" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <style jsx>{`
          .flip-card-container-large {
            perspective: 1000px;
            height: 420px;
          }

          .flip-card-inner-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.7s ease;
            transform-style: preserve-3d;
          }

          .flip-card-container-large:hover .flip-card-inner-wrapper {
            transform: rotateY(180deg);
          }

          .flip-card-front-side,
          .flip-card-back-side {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }

          .flip-card-back-side {
            transform: rotateY(180deg);
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-10 sm:p-16 text-center bg-brand-section text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Ready to Grow Your Business?</h2>
            <p className="text-baby-blue mb-8 text-lg">Get a free consultation and custom strategy tailored to your goals.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 btn-gold rounded-full font-semibold text-lg">
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
