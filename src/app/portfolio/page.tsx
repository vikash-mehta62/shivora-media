"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ArrowRight, TrendingUp, Users, DollarSign, Eye, Target, X, ExternalLink } from "lucide-react";

const categories = ["All Projects", "SEO", "Social Media", "PPC", "Content Marketing", "Graphic Design", "Video Production"];

const projects = [
  {
    id: 1,
    title: "SEO Service",
    client: "Vertex Industrial Solutions",
    category: "SEO",
    industry: "Industrial",
    gradient: "from-[#0011C4] to-[#AAD2FF]",
    icon: TrendingUp,
    challenge: "Stagnant organic growth, low-quality traffic, and minimal visibility for core service keywords, resulting in poor lead generation.",
    solution: "Implemented a data-driven SEO strategy including in-depth keyword research, on-page optimization, technical fixes, content optimization, and authority-building backlinks focused on conversion-ready keywords.",
    results: [
      { metric: "380%", label: "Organic Traffic Growth" },
      { metric: "₹1.6Cr", label: "Revenue Influenced by SEO" },
      { metric: "Top 3", label: "Rankings for High-Intent Keywords" }
    ],
    testimonial: "Shivora helped us achieve remarkable organic growth and quality traffic.",
    duration: "6 Months",
    team: "2 Experts"
  },
  {
    id: 2,
    title: "Social Media Management",
    client: "Aura Living Co.",
    category: "Social Media",
    industry: "Lifestyle",
    gradient: "from-[#FDD835] to-[#FFB300]",
    icon: Users,
    challenge: "Limited brand visibility and low engagement within the target audience.",
    solution: "Developed a focused social media strategy using platform-specific content, micro-influencer collaborations, and trend-based campaigns.",
    results: [
      { metric: "2.5M+", label: "Total Reach Achieved" },
      { metric: "10K+", label: "New Followers Gained" },
      { metric: "9K+", label: "Qualified Leads Generated" }
    ],
    testimonial: "Shivora helped us build a strong and engaged social community with consistent growth.",
    duration: "5 Months",
    team: "2 Social Media Experts"
  },
  {
    id: 3,
    title: "Pay Per Click Advertising",
    client: "BuildEdge Realty",
    category: "PPC",
    industry: "Real Estate",
    gradient: "from-green-600 to-emerald-500",
    icon: DollarSign,
    challenge: "Paid advertising was driving traffic but failing to deliver quality conversions, resulting in wasted ad spend and inconsistent lead quality.",
    solution: "Redesigned the paid media approach with audience refinement, creative testing, funnel-based ad structures, and conversion-focused landing page improvements across search and social platforms.",
    results: [
      { metric: "3.8x", label: "Return on Ad Spend" },
      { metric: "1,350+", label: "High-Intent Leads Generated" },
      { metric: "45%", label: "Lower Cost per Conversion" }
    ],
    testimonial: "Shivora completely turned around our paid campaigns. Better leads, smarter spending, and real business growth.",
    duration: "4 Months",
    team: "2 PPC Experts"
  },
  {
    id: 4,
    title: "Content Marketing Service",
    client: "PureVeda Wellness",
    category: "Content Marketing",
    industry: "Wellness",
    gradient: "from-purple-600 to-pink-500",
    icon: Eye,
    challenge: "Struggling to connect with the target audience through meaningful, value-driven content.",
    solution: "Built a content marketing engine using SEO blogs, social-first storytelling, short-form videos, and consistent brand messaging across platforms.",
    results: [
      { metric: "120+", label: "Content Pieces Published" },
      { metric: "3.2M+", label: "Content Impressions" },
      { metric: "180%", label: "Increase in Engagement" }
    ],
    testimonial: "The content strategy brought our brand to life. Engagement and visibility grew consistently month after month.",
    duration: "6 Months",
    team: "2 Content Strategists"
  },
  {
    id: 5,
    title: "Video Production Service",
    client: "Vista Retreats",
    category: "Video Production",
    industry: "Hospitality",
    gradient: "from-[#0011C4] to-[#353442]",
    icon: Target,
    challenge: "Low audience retention and limited impact from existing video content across digital platforms.",
    solution: "End-to-end video production including concept development, scripting, professional shoots, editing, motion graphics, and platform-optimized video formats.",
    results: [
      { metric: "60+", label: "Videos Produced" },
      { metric: "2.8M+", label: "Total Video Views" },
      { metric: "210%", label: "Increase in Watch Time" }
    ],
    testimonial: "The videos elevated our brand storytelling and dramatically improved audience engagement.",
    duration: "3 Months",
    team: "3 Video Production Experts"
  },
  {
    id: 6,
    title: "Creative Designing Service",
    client: "Nexora Brands",
    category: "Graphic Design",
    industry: "Branding",
    gradient: "from-pink-500 to-rose-400",
    icon: Users,
    challenge: "Lack of visual consistency and outdated creatives were reducing brand impact across digital platforms.",
    solution: "Developed a unified creative design system including social media creatives, ad designs, brand templates, visual storytelling, and campaign-specific artwork.",
    results: [
      { metric: "90%", label: "Visual Consistency Improved" },
      { metric: "2.2x", label: "Higher Content Engagement" },
      { metric: "30%", label: "Increase in Brand Inquiries" }
    ],
    testimonial: "The new creative designs gave our brand a premium look and instantly improved engagement.",
    duration: "4 Months",
    team: "2 Creative Designers"
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All Projects" 
    ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-30"></div>
        </div>
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
              <Briefcase className="w-4 h-4 badge-text" />
              <span className="text-sm font-medium badge-text">Our Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Success Stories That <span className="badge-text">Inspire</span>
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Real results from real clients. See how we&apos;ve helped businesses like yours 
              achieve extraordinary growth through strategic digital marketing.
            </p>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ num: "500+", label: "Projects Completed" }, { num: "₹50Cr+", label: "Revenue Generated" }, { num: "150+", label: "Happy Clients" }, { num: "5x", label: "Avg. ROI" }].map((s, i) => (
              <div key={i} className="card rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-[var(--deep-blue)] dark:text-gold">{s.num}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 section-alt">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === cat ? "bg-brand-section text-white shadow-lg" : "card hover-primary text-secondary"
                }`}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} onClick={() => setSelectedProject(project)}
                className="group card rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <project.icon className="w-12 h-12 text-white/80" />
                  <div>
                    <span className="text-white/70 text-sm">{project.industry}</span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium badge-text">{project.category}</span>
                    <span className="text-sm text-muted">{project.client}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.results.map((r, i) => (
                      <div key={i} className="text-center p-2 bg-[var(--bg-secondary)] rounded-lg">
                        <div className="text-lg font-bold text-[var(--deep-blue)] dark:text-gold">{r.metric}</div>
                        <div className="text-[10px] text-muted">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 badge-text font-medium text-sm">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-10 sm:p-16 text-center bg-brand-section text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-baby-blue mb-8 text-lg">Let&apos;s discuss how we can help achieve similar results for your business.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 btn-gold rounded-full font-semibold text-lg">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="card rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className={`h-48 bg-gradient-to-br ${selectedProject.gradient} p-8 flex items-center justify-between relative`}>
              <div>
                <span className="text-white/70">{selectedProject.industry}</span>
                <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-white/80">{selectedProject.client}</p>
              </div>
              <button onClick={() => setSelectedProject(null)} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="card rounded-xl p-4">
                  <div className="text-sm text-muted mb-1">Duration</div>
                  <div className="font-semibold">{selectedProject.duration}</div>
                </div>
                <div className="card rounded-xl p-4">
                  <div className="text-sm text-muted mb-1">Team Size</div>
                  <div className="font-semibold">{selectedProject.team}</div>
                </div>
              </div>
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2 badge-text">Challenge</h4>
                  <p className="text-secondary">{selectedProject.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 badge-text">Solution</h4>
                  <p className="text-secondary">{selectedProject.solution}</p>
                </div>
              </div>
              <h4 className="font-semibold mb-4">Results Achieved</h4>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {selectedProject.results.map((r, i) => (
                  <div key={i} className="text-center p-4 bg-[var(--bg-secondary)] rounded-xl">
                    <div className="text-2xl font-bold text-[var(--deep-blue)] dark:text-gold">{r.metric}</div>
                    <div className="text-sm text-muted">{r.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-[var(--golden-yellow)] pl-4 italic text-secondary mb-6">
                &quot;{selectedProject.testimonial}&quot;
              </blockquote>
              <div className="flex gap-4">
                <a href="/contact" className="flex-1 py-3 btn-primary rounded-xl font-semibold text-center">Get Similar Results</a>
                <button onClick={() => setSelectedProject(null)} className="px-6 py-3 btn-outline rounded-xl font-semibold">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
