"use client";
import { useState } from "react";
import { Briefcase, ArrowRight, ExternalLink, TrendingUp, Users, DollarSign, Eye, Target } from "lucide-react";

const categories = ["All Projects", "SEO", "Social Media", "PPC", "Branding", "Web Design"];

const projects = [
  {
    id: 1,
    title: "E-commerce SEO Transformation",
    client: "Fashion Retailer",
    category: "SEO",
    industry: "E-commerce",
    gradient: "from-[#0011C4] to-[#AAD2FF]",
    icon: TrendingUp,
    challenge: "Low organic visibility and declining traffic",
    solution: "Complete technical SEO overhaul, content strategy, and link building campaign",
    results: [
      { metric: "450%", label: "Traffic Increase" },
      { metric: "₹2Cr", label: "Revenue Generated" },
      { metric: "#1", label: "Google Rankings" }
    ],
    testimonial: "Shivora Media transformed our online presence completely!"
  },
  {
    id: 2,
    title: "Viral Social Media Campaign",
    client: "Food Delivery App",
    category: "Social Media",
    industry: "Food Tech",
    gradient: "from-[#FDD835] to-[#FFB300]",
    icon: Users,
    challenge: "Low brand awareness and engagement",
    solution: "Multi-platform content strategy with influencer partnerships",
    results: [
      { metric: "10M+", label: "Reach Generated" },
      { metric: "500K", label: "New Followers" },
      { metric: "50K", label: "App Downloads" }
    ],
    testimonial: "Our social media exploded after working with Shivora!"
  },
  {
    id: 3,
    title: "Lead Generation Machine",
    client: "Real Estate Company",
    category: "PPC",
    industry: "Real Estate",
    gradient: "from-green-600 to-emerald-500",
    icon: DollarSign,
    challenge: "High cost per lead and low conversion rates",
    solution: "Optimized Google & Facebook ad campaigns with landing page redesign",
    results: [
      { metric: "5x", label: "ROAS Achieved" },
      { metric: "2000+", label: "Qualified Leads" },
      { metric: "60%", label: "Cost Reduction" }
    ],
    testimonial: "Best ROI we've ever seen from digital marketing!"
  },
  {
    id: 4,
    title: "Complete Brand Overhaul",
    client: "Tech Startup",
    category: "Branding",
    industry: "Technology",
    gradient: "from-purple-600 to-pink-500",
    icon: Eye,
    challenge: "Outdated brand identity not resonating with target audience",
    solution: "Full rebrand including logo, visual identity, and brand guidelines",
    results: [
      { metric: "100%", label: "Brand Refresh" },
      { metric: "3x", label: "Brand Recall" },
      { metric: "40%", label: "More Inquiries" }
    ],
    testimonial: "Our new brand identity perfectly captures who we are!"
  },
  {
    id: 5,
    title: "High-Converting Website",
    client: "SaaS Company",
    category: "Web Design",
    industry: "Software",
    gradient: "from-[#0011C4] to-[#353442]",
    icon: Target,
    challenge: "Poor website performance and low conversion rates",
    solution: "Complete website redesign with conversion optimization",
    results: [
      { metric: "200%", label: "More Signups" },
      { metric: "2s", label: "Load Time" },
      { metric: "99%", label: "Satisfaction" }
    ],
    testimonial: "Our new website is a lead generation machine!"
  },
  {
    id: 6,
    title: "Influencer Marketing Success",
    client: "Beauty Brand",
    category: "Social Media",
    industry: "Beauty & Cosmetics",
    gradient: "from-pink-500 to-rose-400",
    icon: Users,
    challenge: "Need to reach younger demographic authentically",
    solution: "Strategic influencer partnerships and UGC campaigns",
    results: [
      { metric: "50+", label: "Influencers" },
      { metric: "5M+", label: "Video Views" },
      { metric: "300%", label: "Sales Increase" }
    ],
    testimonial: "The influencer campaign exceeded all our expectations!"
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-12 sm:py-16 relative overflow-hidden">
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
