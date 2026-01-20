"use client";
import { useState, useEffect } from "react";
import { Search, Share2, DollarSign, Palette, Cog, Video, ArrowRight, Check, Target } from "lucide-react";

const services = [
  {
    id: "ppc",
    icon: DollarSign,
    title: "Pay Per Click (PPC) Advertising",
    shortTitle: "PPC Ads",
    tagline: "Instant Traffic & Qualified Leads",
    description: "Drive instant traffic and qualified leads with performance-focused Pay Per Click advertising. We manage Google Ads, Search Ads, Display Ads, YouTube Ads, and Social Media Ads to maximize ROI and lower cost per click.",
    features: [
      "Google Ads Management",
      "Search Ads Campaigns",
      "Display Advertising",
      "YouTube Ads",
      "Social Media Ads",
      "ROI Optimization & Lower CPC"
    ],
    benefits: ["Instant Traffic", "Qualified Leads", "Maximum ROI"],
    stats: { metric: "5x", label: "Average ROAS" }
  },
  {
    id: "graphic-design",
    icon: Palette,
    title: "Creative Graphic Design",
    shortTitle: "Graphic Design",
    tagline: "Designs That Convert",
    description: "Build a powerful brand presence with professional graphic design services. From logos and branding to ad creatives and social media visuals, we design assets that convert.",
    features: [
      "Logo Design & Branding",
      "Ad Creative Design",
      "Social Media Visuals",
      "Marketing Collateral",
      "Brand Identity",
      "Print & Digital Design"
    ],
    benefits: ["Professional Designs", "Brand Consistency", "High Conversion"],
    stats: { metric: "500+", label: "Designs Created" }
  },
  {
    id: "smm",
    icon: Share2,
    title: "Social Media Management",
    shortTitle: "Social Media",
    tagline: "Grow Your Brand Online",
    description: "Grow your brand across Instagram, Facebook, LinkedIn, and more. Our social media management services include content planning, reels, post design, paid campaigns, and audience engagement.",
    features: [
      "Content Planning & Strategy",
      "Reels & Video Content",
      "Post Design & Graphics",
      "Paid Social Campaigns",
      "Audience Engagement",
      "Analytics & Reporting"
    ],
    benefits: ["10M+ Reach", "Viral Content", "Community Growth"],
    stats: { metric: "10M+", label: "Reach Generated" }
  },
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO",
    tagline: "Rank Higher on Google",
    description: "Improve your Google rankings and organic visibility with advanced SEO services. We focus on keyword research, on-page SEO, off-page SEO, technical SEO, and local SEO.",
    features: [
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Off-Page SEO & Link Building",
      "Technical SEO Audit",
      "Local SEO & GMB",
      "Monthly Ranking Reports"
    ],
    benefits: ["Top 10 Rankings", "Organic Traffic Growth", "Long-term Results"],
    stats: { metric: "300%", label: "Avg. Traffic Growth" }
  },
  {
    id: "automation",
    icon: Cog,
    title: "Marketing Automation",
    shortTitle: "Automation",
    tagline: "Scale Faster, Work Smarter",
    description: "Save time and scale faster with smart marketing automation solutions. We streamline lead management, email campaigns, CRM automation, and reporting workflows.",
    features: [
      "Lead Management Automation",
      "Email Marketing Automation",
      "CRM Integration & Automation",
      "Workflow Automation",
      "Reporting Dashboards",
      "Sales Funnel Automation"
    ],
    benefits: ["Save Time", "Scale Faster", "Better ROI"],
    stats: { metric: "70%", label: "Time Saved" }
  },
  {
    id: "video",
    icon: Video,
    title: "Video Production & Performance Marketing",
    shortTitle: "Video",
    tagline: "Capture Attention, Drive Results",
    description: "Capture attention and drive results with high-impact video production. We create reels, ad videos, promotional videos, brand films, and product videos optimized for ads and social media.",
    features: [
      "Reels & Short-form Videos",
      "Ad Video Production",
      "Promotional Videos",
      "Brand Films",
      "Product Videos",
      "Performance Video Marketing"
    ],
    benefits: ["High Engagement", "Viral Potential", "Ad Optimized"],
    stats: { metric: "50M+", label: "Video Views" }
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const service = services.find(s => s.id === hash);
      if (service) {
        setActiveService(service);
        // Scroll to specific service detail section
        setTimeout(() => {
          const element = document.getElementById(`service-${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      }
    }
  }, []);

  const handleServiceChange = (service: typeof services[0]) => {
    setActiveService(service);
    // Update URL hash
    window.history.pushState(null, '', `#${service.id}`);
    // Scroll to the service detail section
    setTimeout(() => {
      const element = document.getElementById(`service-${service.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <section id="services" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] blob-blue opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blob-gold opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--deep-blue)]/10 dark:bg-[var(--baby-blue)]/10 rounded-full mb-4">
            <Target className="w-4 h-4 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]" />
            <span className="text-sm font-medium text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Full-Service <span className="text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">Digital Marketing</span>
            <span className="block text-[var(--golden-yellow)]">Solutions</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Everything you need to dominate online. From SEO to Social Media, PPC to Content Marketing - 
            we provide comprehensive digital solutions tailored to your business goals.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleServiceChange(service)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                activeService.id === service.id
                  ? "bg-[var(--deep-blue)] text-white shadow-lg shadow-[var(--deep-blue)]/30"
                  : "card hover:border-[var(--deep-blue)] text-secondary"
              }`}
            >
              <service.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{service.shortTitle}</span>
              <span className="sm:hidden">{service.shortTitle.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Service Detail */}
        <div id={`service-${activeService.id}`} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-20 scroll-mt-24">
          {/* Left - Info */}
          <div className="card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 icon-bg rounded-2xl flex items-center justify-center">
                <activeService.icon className="w-8 h-8 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">{activeService.title}</h3>
                <p className="text-[var(--golden-yellow)] font-medium">{activeService.tagline}</p>
              </div>
            </div>

            <p className="text-secondary text-lg mb-8 leading-relaxed">
              {activeService.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-lg">What&apos;s Included:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {activeService.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--deep-blue)]/10 dark:bg-[var(--baby-blue)]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]" />
                    </div>
                    <span className="text-sm text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-2 mb-8">
              {activeService.benefits.map((benefit, i) => (
                <span key={i} className="px-4 py-2 bg-[var(--golden-yellow)]/10 text-[var(--charcoal)] dark:text-[var(--golden-yellow)] rounded-full text-sm font-medium">
                  {benefit}
                </span>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-full font-semibold">
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Stats & Visual */}
          <div className="space-y-6">
            {/* Main Stat Card */}
            <div className="card rounded-3xl p-8 sm:p-10 shadow-xl text-center bg-[var(--deep-blue)] text-white">
              <activeService.icon className="w-16 h-16 mx-auto mb-6 text-[var(--baby-blue)]" />
              <div className="text-6xl sm:text-7xl font-bold text-[var(--golden-yellow)] mb-2">
                {activeService.stats.metric}
              </div>
              <div className="text-lg text-[var(--baby-blue)]">{activeService.stats.label}</div>
            </div>

            {/* Why Choose Us */}
            <div className="card rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold mb-4">Why Choose Shivora Media?</h4>
              <div className="space-y-3">
                {["Proven Track Record", "Dedicated Team", "Transparent Reporting", "ROI Focused"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[var(--golden-yellow)]/20 rounded-lg flex items-center justify-center">
                      <Check className="w-4 h-4 text-[var(--golden-yellow)]" />
                    </div>
                    <span className="text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10">All Services Overview</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceChange(service)}
                className={`card rounded-2xl p-6 cursor-pointer transition-all hover:shadow-xl ${
                  activeService.id === service.id ? "border-[var(--deep-blue)] shadow-lg" : ""
                }`}
              >
                <div className="w-14 h-14 icon-bg rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]" />
                </div>
                <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                <p className="text-sm text-muted mb-4 line-clamp-2">{service.description}</p>
                <div className="flex items-center gap-2 text-[var(--deep-blue)] dark:text-[var(--baby-blue)] font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
