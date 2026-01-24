import { ClipboardList, Zap, LineChart, ArrowRight, Workflow, CheckCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Plan Your Growth",
    desc: "We map out clear strategies that turn your ideas into measurable results.",
    icon: ClipboardList,
    details: ["Business Analysis", "Strategy Planning", "Goal Setting", "Roadmap Creation"]
  },
  {
    num: "02",
    title: "Handover the Project",
    desc: "Our team handles everything from creative design to video production and marketing campaigns so you can focus on your business.",
    icon: Zap,
    details: ["Creative Design", "Video Production", "Campaign Setup", "Content Creation"]
  },
  {
    num: "03",
    title: "Count the Results",
    desc: "We track performance, optimize every step, and ensure you see real growth and profit.",
    icon: LineChart,
    details: ["Performance Tracking", "ROI Analysis", "Growth Metrics", "Profit Reports"]
  }
];

export default function Process() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] blob-gold opacity-20"></div>
      </div>

      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
            <Workflow className="w-4 h-4 icon-primary" />
            <span className="text-sm font-medium badge-text">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to <span className="heading-primary">Grow With Us?</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Our simple 3-step process makes it easy to start growing your business. 
            From planning to execution to results—we handle it all.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-400 opacity-30"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="card rounded-2xl p-6 lg:p-8 h-full hover:shadow-xl hover-primary transition-all">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 icon-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 icon-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted text-sm mb-6 leading-relaxed">{step.desc}</p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 icon-gold" />
                        <span className="text-secondary">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow - Desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 -right-4 z-10">
                    <div className="w-8 h-8 card rounded-full flex items-center justify-center shadow-md bg-white dark:bg-[var(--card-bg)]">
                      <ArrowRight className="w-4 h-4 icon-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="card rounded-2xl p-8 sm:p-12 shadow-xl max-w-3xl mx-auto bg-brand-section text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to Start Your Growth Journey?</h3>
            <p className="text-baby-blue mb-8">
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
