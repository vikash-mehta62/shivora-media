import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DollarSign, Check, ArrowRight, Target, TrendingUp, Zap } from "lucide-react";

export default function PPCPage() {
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
              <DollarSign className="w-4 h-4 icon-primary" />
              <span className="text-sm font-medium badge-text">PPC Advertising</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Pay Per Click (PPC){" "}
              <span className="heading-primary">Advertising Services</span>
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Drive instant traffic and qualified leads with performance-focused Pay Per Click advertising. We manage Google Ads, Search Ads, Display Ads, YouTube Ads, and Social Media Ads to maximize ROI and lower cost per click.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: TrendingUp, metric: "5x", label: "Average ROAS" },
              { icon: Target, metric: "40%", label: "Lower CPC" },
              { icon: Zap, metric: "200+", label: "Campaigns Managed" },
              { icon: DollarSign, metric: "₹10Cr+", label: "Ad Spend Managed" }
            ].map((stat, i) => (
              <div key={i} className="card rounded-2xl p-6 text-center">
                <stat.icon className="w-10 h-10 icon-gold mx-auto mb-3" />
                <div className="text-3xl font-bold heading-primary">{stat.metric}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-12 sm:py-16 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included in Our PPC Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Google Ads Management",
              "Search Ads Campaigns",
              "Display Advertising",
              "YouTube Ads",
              "Social Media Ads",
              "ROI Optimization & Lower CPC",
              "Landing Page Optimization",
              "A/B Testing & Conversion Tracking",
              "Remarketing Campaigns"
            ].map((feature, i) => (
              <div key={i} className="card rounded-xl p-6 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full badge-bg flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-4 h-4 icon-primary" />
                </div>
                <span className="text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-10 sm:p-16 text-center shadow-2xl bg-brand-section text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Ready to Drive Instant Traffic?</h2>
            <p className="text-lg mb-8 text-baby-blue">Let's create a high-performing PPC campaign for your business</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 btn-gold rounded-full font-semibold text-lg">
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
