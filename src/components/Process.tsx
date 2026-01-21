import { Search, ClipboardList, Zap, LineChart, ArrowRight, Workflow, CheckCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Research",
    desc: "We start by understanding your business, goals, target audience, and competitors. This deep dive helps us identify opportunities and challenges.",
    icon: Search,
    details: ["Business Analysis", "Competitor Research", "Audience Profiling", "Goal Setting"]
  },
  {
    num: "02",
    title: "Strategy Development",
    desc: "Based on our research, we create a customized digital marketing strategy with clear KPIs, timelines, and budget allocation.",
    icon: ClipboardList,
    details: ["Custom Strategy", "KPI Definition", "Budget Planning", "Timeline Creation"]
  },
  {
    num: "03",
    title: "Implementation",
    desc: "Our expert team executes the strategy across all channels - SEO, social media, PPC, content, and more with precision.",
    icon: Zap,
    details: ["Campaign Launch", "Content Creation", "Ad Management", "Technical Setup"]
  },
  {
    num: "04",
    title: "Monitor & Optimize",
    desc: "We continuously track performance, analyze data, and optimize campaigns to maximize ROI and achieve your goals.",
    icon: LineChart,
    details: ["Performance Tracking", "A/B Testing", "ROI Analysis", "Monthly Reports"]
  }
];

export default function Process() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] blob-gold opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--deep-blue)]/10 dark:bg-[var(--baby-blue)]/10 rounded-full mb-4">
            <Workflow className="w-4 h-4 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]" />
            <span className="text-sm font-medium text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How We <span className="text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">Deliver Results</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Our proven 4-step process ensures consistent, measurable results for every client. 
            Transparency and communication at every stage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-[var(--deep-blue)] via-[var(--golden-yellow)] to-[var(--baby-blue)] opacity-30"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="card rounded-2xl p-6 lg:p-8 h-full hover:shadow-xl hover:border-[var(--deep-blue)] transition-all">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[var(--deep-blue)] rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 icon-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted text-sm mb-6 leading-relaxed">{step.desc}</p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[var(--golden-yellow)]" />
                        <span className="text-secondary">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow - Desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 -right-4 z-10">
                    <div className="w-8 h-8 card rounded-full flex items-center justify-center shadow-md bg-white dark:bg-[var(--card-bg)]">
                      <ArrowRight className="w-4 h-4 text-[var(--deep-blue)]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="card rounded-2xl p-8 sm:p-12 shadow-xl max-w-3xl mx-auto bg-[var(--deep-blue)] text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Growth Journey?</h3>
            <p className="text-[var(--baby-blue)] mb-8">
              Book a free strategy call and let&apos;s discuss how we can help you achieve your business goals.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 btn-gold rounded-full font-semibold text-lg">
              Book Free Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
