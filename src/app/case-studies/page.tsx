import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, Users, DollarSign, Video, Palette, FileText, ArrowRight, Award } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "SEO SERVICE",
    icon: TrendingUp,
    gradient: "from-[#0011C4] to-[#AAD2FF]",
    challenge: "Stagnant organic growth, low-quality traffic, and minimal visibility for core service keywords, resulting in poor lead generation.",
    solution: "Implemented a data-driven SEO strategy including in-depth keyword research, on-page optimization, technical fixes, content optimization, and authority-building backlinks focused on conversion-ready keywords.",
    results: [
      { metric: "380%", label: "Organic Traffic Growth" },
      { metric: "₹1.6 Cr", label: "Revenue Influenced by SEO" },
      { metric: "Top 3", label: "Rankings for High-Intent Keywords" }
    ],
    duration: "6 Months",
    experts: "2"
  },
  {
    id: 2,
    title: "SOCIAL MEDIA MANAGEMENT SERVICES",
    icon: Users,
    gradient: "from-pink-500 to-purple-600",
    challenge: "Limited brand visibility and low engagement within the target audience.",
    solution: "Developed a focused social media strategy using platform-specific content, micro-influencer collaborations, and trend-based campaigns.",
    results: [
      { metric: "2.5M+", label: "Total Reach Achieved" },
      { metric: "10K+", label: "New Followers Gained" },
      { metric: "9K+", label: "Qualified Leads Generated" }
    ],
    testimonial: "Shivora helped us build a strong and engaged social community with consistent growth.",
    duration: "4 Months",
    experts: "3"
  },
  {
    id: 3,
    title: "PAY PER CLICK ADVERTISING",
    icon: DollarSign,
    gradient: "from-green-500 to-emerald-600",
    challenge: "Paid advertising was driving traffic but failing to deliver quality conversions, resulting in wasted ad spend and inconsistent lead quality.",
    solution: "Redesigned the paid media approach with audience refinement, creative testing, funnel-based ad structures, and conversion-focused landing page improvements across search and social platforms.",
    results: [
      { metric: "3.8x", label: "Return on Ad Spend" },
      { metric: "1,350+", label: "High-Intent Leads Generated" },
      { metric: "45%", label: "Lower Cost per Conversion" }
    ],
    testimonial: "Shivora completely turned around our paid campaigns. Better leads, smarter spending, and real business growth.",
    duration: "5 Months",
    experts: "3"
  },
  {
    id: 4,
    title: "CONTENT MARKETING SERVICE",
    icon: FileText,
    gradient: "from-orange-500 to-red-500",
    challenge: "Struggling to connect with the target audience through meaningful, value-driven content.",
    solution: "Built a content marketing engine using SEO blogs, social-first storytelling, short-form videos, and consistent brand messaging across platforms.",
    results: [
      { metric: "120+", label: "Content Pieces Published" },
      { metric: "3.2M+", label: "Content Impressions" },
      { metric: "180%", label: "Increase in Engagement" }
    ],
    testimonial: "The content strategy brought our brand to life. Engagement and visibility grew consistently month after month.",
    duration: "6 Months",
    experts: "4"
  },
  {
    id: 5,
    title: "VIDEO PRODUCTION SERVICE",
    icon: Video,
    gradient: "from-blue-500 to-cyan-500",
    challenge: "Low audience retention and limited impact from existing video content across digital platforms.",
    solution: "End-to-end video production including concept development, scripting, professional shoots, editing, motion graphics, and platform-optimized video formats.",
    results: [
      { metric: "60+", label: "Videos Produced" },
      { metric: "2.8M+", label: "Total Video Views" },
      { metric: "210%", label: "Increase in Watch Time" }
    ],
    testimonial: "The videos elevated our brand storytelling and dramatically improved audience engagement.",
    duration: "8 Months",
    experts: "5"
  },
  {
    id: 6,
    title: "CREATIVE DESIGNING SERVICE",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500",
    challenge: "Lack of visual consistency and outdated creatives were reducing brand impact across digital platforms.",
    solution: "Developed a unified creative design system including social media creatives, ad designs, brand templates, visual storytelling, and campaign-specific artwork.",
    results: [
      { metric: "90%", label: "Visual Consistency Improved" },
      { metric: "2.2x", label: "Higher Content Engagement" },
      { metric: "30%", label: "Increase in Brand Inquiries" }
    ],
    testimonial: "The new creative designs gave our brand a premium look and instantly improved engagement.",
    duration: "3 Months",
    experts: "3"
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        
        {/* Hero Section */}
        <section className="pb-12 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-30"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 badge-bg rounded-full mb-3">
                <Award className="w-3.5 h-3.5 icon-primary" />
                <span className="text-xs font-medium badge-text">Case Studies</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Real Results, <span className="heading-primary">Real Impact</span>
              </h1>
              <p className="text-base text-secondary max-w-2xl mx-auto">
                Discover how we've helped businesses achieve measurable growth through strategic digital marketing solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="card rounded-2xl overflow-hidden shadow-lg">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${study.gradient} p-6 sm:p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                      <study.icon className="w-8 h-8 mb-3 opacity-90" />
                      <h2 className="text-xl sm:text-2xl font-bold mb-2">{study.title}</h2>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-white/20 px-2.5 py-1 rounded-full">Duration: {study.duration}</span>
                        <span className="bg-white/20 px-2.5 py-1 rounded-full">Expert: {study.experts}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="grid lg:grid-cols-2 gap-6 mb-6">
                      {/* Challenge & Solution */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-base font-bold mb-2 heading-primary">Challenge</h3>
                          <p className="text-secondary text-sm leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-base font-bold mb-2 heading-primary">Solution</h3>
                          <p className="text-secondary text-sm leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-base font-bold mb-3 heading-primary">Results Achieved</h3>
                        <div className="grid gap-3">
                          {study.results.map((result, i) => (
                            <div key={i} className="bg-brand-light rounded-xl p-4 text-center">
                              <div className="text-2xl sm:text-3xl font-bold text-gold mb-1">{result.metric}</div>
                              <div className="text-xs text-secondary font-medium">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    {study.testimonial && (
                      <blockquote className="border-l-4 border-gold pl-4 py-1 italic text-secondary text-sm">
                        "{study.testimonial}"
                      </blockquote>
                    )}
                  </div>

                  {/* Divider */}
                  {index < caseStudies.length - 1 && (
                    <div className="px-6 sm:px-8 pb-6">
                      <div className="border-t-2 border-dashed border-brand-light"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 section-alt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card rounded-2xl p-8 sm:p-12 text-center bg-brand-section text-white shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Ready to Achieve Similar Results?
              </h2>
              <p className="text-baby-blue mb-6 text-base max-w-2xl mx-auto">
                Let's discuss how we can create a customized strategy to drive measurable growth for your business.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 btn-gold rounded-full font-semibold text-base hover:scale-105 transition-transform"
              >
                Get Your Free Consultation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
