"use client";
import { useState } from "react";
import { Briefcase, ArrowRight, ExternalLink, TrendingUp, Users, DollarSign, Eye, Target } from "lucide-react";

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
    testimonial: "Shivora helped us achieve remarkable organic growth and quality traffic."
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
    testimonial: "Shivora helped us build a strong and engaged social community with consistent growth."
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
    testimonial: "Shivora completely turned around our paid campaigns. Better leads, smarter spending, and real business growth."
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
    testimonial: "The content strategy brought our brand to life. Engagement and visibility grew consistently month after month."
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
    testimonial: "The videos elevated our brand storytelling and dramatically improved audience engagement."
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
    testimonial: "The new creative designs gave our brand a premium look and instantly improved engagement."
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="pt-32 pb-12 sm:pt-36 sm:pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blob-blue opacity-20"></div>
      </div>

      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
            <Briefcase className="w-4 h-4 icon-primary" />
            <span className="text-sm font-medium badge-text">Our Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Success Stories That
            <span className="heading-primary"> Inspire</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Real results from real clients. See how we&apos;ve helped businesses like yours 
            achieve extraordinary growth through strategic digital marketing.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-brand text-white shadow-lg"
                  : "card hover-primary text-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group card rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              {/* Header with gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <project.icon className="w-12 h-12 text-white/80" />
                <div>
                  <span className="text-white/70 text-sm">{project.industry}</span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium badge-text">{project.category}</span>
                  <span className="text-sm text-muted">{project.client}</span>
                </div>

                {/* Results Preview */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.results.map((r, i) => (
                    <div key={i} className="text-center p-2 bg-[var(--bg-secondary)] rounded-lg">
                      <div className="text-lg font-bold icon-gold">{r.metric}</div>
                      <div className="text-[10px] text-muted">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 badge-text font-medium text-sm group-hover:gap-3 transition-all">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center">
          <p className="text-secondary mb-6">Ready to become our next success story?</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 btn-gold rounded-full font-semibold text-lg">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </a>
        </div> */}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
            <div className={`h-40 bg-gradient-to-br ${selectedProject.gradient} rounded-2xl mb-6 flex items-center justify-center`}>
              <selectedProject.icon className="w-16 h-16 text-white/80" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-gold font-medium mb-4">{selectedProject.client} • {selectedProject.industry}</p>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold mb-1">Challenge</h4>
                <p className="text-secondary">{selectedProject.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Solution</h4>
                <p className="text-secondary">{selectedProject.solution}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {selectedProject.results.map((r, i) => (
                <div key={i} className="text-center p-4 bg-[var(--bg-secondary)] rounded-xl">
                  <div className="text-2xl font-bold icon-gold">{r.metric}</div>
                  <div className="text-sm text-muted">{r.label}</div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[var(--golden-yellow)] pl-4 italic text-secondary mb-6">
              &quot;{selectedProject.testimonial}&quot;
            </blockquote>

            <button onClick={() => setSelectedProject(null)} className="w-full py-3 btn-outline rounded-xl font-semibold">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
