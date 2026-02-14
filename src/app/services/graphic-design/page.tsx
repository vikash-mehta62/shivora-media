import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Palette, Check, ArrowRight, Target, TrendingUp, Zap } from "lucide-react";

export default function GraphicDesignPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-30"></div>
        </div>

        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
              <Palette className="w-4 h-4 icon-primary" />
              <span className="text-sm font-medium badge-text">Graphic Design</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Creative{" "}
              <span className="heading-primary">Graphic Design Services</span>
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Build a powerful brand presence with professional graphic design services. From logos and branding to ad creatives and social media visuals, we design assets that convert.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: TrendingUp, metric: "500+", label: "Designs Created" },
              { icon: Target, metric: "150+", label: "Brands Designed" },
              { icon: Zap, metric: "24-48h", label: "Turnaround Time" },
              { icon: Palette, metric: "100%", label: "Custom Designs" }
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
      <section className="py-6 sm:py-8 section-alt">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">What's Included in Our Design Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Logo Design & Branding",
              "Ad Creative Design",
              "Social Media Visuals",
              "Marketing Collateral",
              "Brand Identity",
              "Print & Digital Design",
              "Infographics",
              "Packaging Design",
              "Business Cards & Stationery"
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
      <section className="py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-10 sm:p-16 text-center shadow-2xl bg-brand-section text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Ready to Build Your Brand?</h2>
            <p className="text-lg mb-8 text-baby-blue">Let's create stunning designs that make your brand stand out</p>
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
