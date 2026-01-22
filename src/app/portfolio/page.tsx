"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ArrowRight, TrendingUp, Users, DollarSign, Eye, Target, X, ExternalLink } from "lucide-react";

const categories = ["All Projects", "SEO", "Social Media", "PPC", "Branding", "Web Design"];

const projects = [
  {
    id: 1, title: "E-commerce SEO Transformation", client: "Fashion Retailer", category: "SEO",
    industry: "E-commerce", gradient: "from-[#0011C4] to-[#AAD2FF]", icon: TrendingUp,
    challenge: "Low organic visibility and declining traffic with poor keyword rankings",
    solution: "Complete technical SEO overhaul, content strategy, and link building campaign targeting high-intent keywords",
    results: [{ metric: "450%", label: "Traffic Increase" }, { metric: "₹2Cr", label: "Revenue Generated" }, { metric: "#1", label: "Google Rankings" }],
    testimonial: "Shivora Media transformed our online presence completely! Our organic traffic has never been better.",
    duration: "6 months", team: "5 experts"
  },
  {
    id: 2, title: "Viral Social Media Campaign", client: "Food Delivery App", category: "Social Media",
    industry: "Food Tech", gradient: "from-[#FDD835] to-[#FFB300]", icon: Users,
    challenge: "Low brand awareness and engagement among target demographic",
    solution: "Multi-platform content strategy with influencer partnerships and viral content creation",
    results: [{ metric: "10M+", label: "Reach Generated" }, { metric: "500K", label: "New Followers" }, { metric: "50K", label: "App Downloads" }],
    testimonial: "Our social media exploded after working with Shivora! The engagement is incredible.",
    duration: "4 months", team: "4 experts"
  },
  {
    id: 3, title: "Lead Generation Machine", client: "Real Estate Company", category: "PPC",
    industry: "Real Estate", gradient: "from-green-600 to-emerald-500", icon: DollarSign,
    challenge: "High cost per lead and low conversion rates from paid campaigns",
    solution: "Optimized Google & Facebook ad campaigns with landing page redesign and conversion optimization",
    results: [{ metric: "5x", label: "ROAS Achieved" }, { metric: "2000+", label: "Qualified Leads" }, { metric: "60%", label: "Cost Reduction" }],
    testimonial: "Best ROI we've ever seen from digital marketing! The leads are high quality.",
    duration: "3 months", team: "3 experts"
  },
  {
    id: 4, title: "Complete Brand Overhaul", client: "Tech Startup", category: "Branding",
    industry: "Technology", gradient: "from-purple-600 to-pink-500", icon: Eye,
    challenge: "Outdated brand identity not resonating with target audience",
    solution: "Full rebrand including logo, visual identity, brand guidelines, and marketing collateral",
    results: [{ metric: "100%", label: "Brand Refresh" }, { metric: "3x", label: "Brand Recall" }, { metric: "40%", label: "More Inquiries" }],
    testimonial: "Our new brand identity perfectly captures who we are! Customers love it.",
    duration: "2 months", team: "4 experts"
  },
  {
    id: 5, title: "High-Converting Website", client: "SaaS Company", category: "Web Design",
    industry: "Software", gradient: "from-[#0011C4] to-[#353442]", icon: Target,
    challenge: "Poor website performance and low conversion rates",
    solution: "Complete website redesign with conversion optimization, speed improvements, and UX enhancements",
    results: [{ metric: "200%", label: "More Signups" }, { metric: "2s", label: "Load Time" }, { metric: "99%", label: "Satisfaction" }],
    testimonial: "Our new website is a lead generation machine! The design is stunning.",
    duration: "2 months", team: "5 experts"
  },
  {
    id: 6, title: "Influencer Marketing Success", client: "Beauty Brand", category: "Social Media",
    industry: "Beauty & Cosmetics", gradient: "from-pink-500 to-rose-400", icon: Users,
    challenge: "Need to reach younger demographic authentically",
    solution: "Strategic influencer partnerships and UGC campaigns across Instagram and YouTube",
    results: [{ metric: "50+", label: "Influencers" }, { metric: "5M+", label: "Video Views" }, { metric: "300%", label: "Sales Increase" }],
    testimonial: "The influencer campaign exceeded all our expectations! Amazing results.",
    duration: "3 months", team: "3 experts"
  },
  {
    id: 7, title: "Local SEO Domination", client: "Restaurant Chain", category: "SEO",
    industry: "Food & Beverage", gradient: "from-orange-500 to-red-500", icon: TrendingUp,
    challenge: "Poor local search visibility across multiple locations",
    solution: "Local SEO optimization, Google My Business management, and review generation strategy",
    results: [{ metric: "500%", label: "Local Traffic" }, { metric: "4.8★", label: "Avg Rating" }, { metric: "200%", label: "Footfall Increase" }],
    testimonial: "We're now the top-rated restaurant in our area! Thank you Shivora.",
    duration: "4 months", team: "3 experts"
  },
  {
    id: 8, title: "B2B Lead Generation", client: "IT Services Company", category: "PPC",
    industry: "Technology", gradient: "from-blue-600 to-cyan-500", icon: DollarSign,
    challenge: "Difficulty generating qualified B2B leads",
    solution: "LinkedIn advertising, Google Ads, and content marketing funnel",
    results: [{ metric: "150+", label: "Enterprise Leads" }, { metric: "₹5Cr", label: "Pipeline Value" }, { metric: "4x", label: "ROAS" }],
    testimonial: "The quality of leads has been exceptional! Great ROI on our investment.",
    duration: "5 months", team: "4 experts"
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
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
      <section className="py-8 section-alt sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-20 section-alt">
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
