import Image from "next/image";
import { Target, Lightbulb, Users, BarChart3, Rocket, Star, CheckCircle, Award, TrendingUp, Clock, Shield, Headphones } from "lucide-react";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy is designed with measurable outcomes and ROI in mind" },
  { icon: Lightbulb, title: "Innovation First", desc: "We stay ahead of trends to give you a competitive edge" },
  { icon: Users, title: "True Partnership", desc: "Your success is our success - we grow together as partners" },
  { icon: BarChart3, title: "Data-Backed", desc: "All decisions are driven by analytics, not assumptions" }
];

const stats = [
  { number: "500+", label: "Projects Completed", icon: TrendingUp },
  { number: "₹50Cr+", label: "Revenue Generated", icon: BarChart3 },
  { number: "150+", label: "Happy Clients", icon: Users },
  { number: "25+", label: "Industry Awards", icon: Award }
];

const whyUs = [
  { icon: Clock, title: "8+ Years Experience", desc: "Proven expertise since 2018" },
  { icon: Shield, title: "Transparent Process", desc: "No hidden fees, clear reporting" },
  { icon: Headphones, title: "24/7 Support", desc: "Always here when you need us" },
  { icon: Award, title: "Certified Experts", desc: "Google & Meta certified team" }
];

export default function About() {
  return (
    <section id="about" className="py-4 relative overflow-hidden section-alt">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-blue opacity-20"></div>
      </div>

      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
            <Award className="w-4 h-4 icon-primary" />
            <span className="text-sm font-medium badge-text">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Driving Growth, <span className="heading-primary">Crafting Impact</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto mb-4">
            At Shivora Media, we create custom digital marketing solutions tailored to your brand, goals, and audience. As a leading digital marketing agency in India, we've helped 150+ businesses enhance their digital presence with campaigns that deliver real results.
          </p>
          <p className="text-base text-secondary max-w-3xl mx-auto">
            Our team blends creativity, strategy, and data-driven insights to generate measurable growth and meaningful engagement. Partner with Shivora Media to elevate your brand online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Moves That <span className="heading-primary">Power Real Growth</span>
            </h3>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {values.map((v, i) => (
                <div key={i} className="card rounded-xl p-4 hover-primary transition">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 icon-bg rounded-lg flex items-center justify-center shrink-0">
                      <v.icon className="w-5 h-5 icon-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{v.title}</h4>
                      <p className="text-muted text-sm">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-full font-semibold">
              Work With Us <Rocket className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="card rounded-3xl p-6 sm:p-8 shadow-2xl">
              {/* Logo */}
              <div className="relative w-full max-w-[350px] mx-auto aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-brand-light mb-6">
                <Image src="/logo.jpeg" alt="Shivora Media" fill className="object-cover" priority />
              </div>

              {/* Company Info */}
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold mb-1">Shivora Media</h4>
                <p className="text-gold font-medium">Digital Marketing Agency</p>
                <p className="text-muted text-sm mt-2">Transforming Businesses Since 2018</p>
              </div>

            
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -left-4 card rounded-xl p-3 shadow-xl animate-float hidden lg:flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-semibold text-sm">Google Partner</div>
                <div className="text-muted text-xs">Certified</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 card rounded-xl p-3 shadow-xl animate-float hidden lg:flex items-center gap-2" style={{ animationDelay: "1s" }}>
              <Star className="w-5 h-5 icon-gold" />
              <div>
                <div className="font-semibold text-sm">5.0 Rating</div>
                <div className="text-muted text-xs">150+ Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="card rounded-3xl p-8 sm:p-12 shadow-xl bg-brand-section text-white">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Why Choose Shivora Media?</h3>
            <p className="text-baby-blue">What sets us apart from other agencies</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 icon-gold" />
                </div>
                <h4 className="font-semibold mb-1 text-white">{item.title}</h4>
                <p className="text-baby-blue text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="py-20 section-alt">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Makes Us Different?</h2>
            <p className="text-secondary max-w-2xl mx-auto">See how we compare to other agencies</p>
          </div>

          <div className="card rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
            {/* Header Row */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-8 pb-6 border-b border-brand-light">
              <div className="text-center">
                <h3 className="text-lg sm:text-2xl font-bold text-muted">Others</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-2xl font-bold heading-primary">Shivora Media</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-4 sm:space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center py-3 sm:py-4 border-b border-brand-light">
                <div className="text-center">
                  <p className="text-sm sm:text-base text-muted">Focus only on likes and views</p>
                </div>
                <div className="text-center">
                  <p className="text-sm sm:text-base font-semibold text-secondary">Focus on performance and measurable growth</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center py-3 sm:py-4 border-b border-brand-light">
                <div className="text-center">
                  <p className="text-sm sm:text-base text-muted">Generic, one-size-fits-all campaigns</p>
                </div>
                <div className="text-center">
                  <p className="text-sm sm:text-base font-semibold text-secondary">Tailored strategies for your brand and audience</p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center py-3 sm:py-4 border-b border-brand-light">
                <div className="text-center">
                  <p className="text-sm sm:text-base text-muted">Designs that look good but don&apos;t convert</p>
                </div>
                <div className="text-center">
                  <p className="text-sm sm:text-base font-semibold text-secondary">Creative, high-impact visuals that drive results</p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center py-3 sm:py-4 border-b border-brand-light">
                <div className="text-center">
                  <p className="text-sm sm:text-base text-muted">Complicated processes and lack of support</p>
                </div>
                <div className="text-center">
                  <p className="text-sm sm:text-base font-semibold text-secondary">Seamless execution from start to finish</p>
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center py-3 sm:py-4">
                <div className="text-center">
                  <p className="text-sm sm:text-base text-muted">No clear insights or ROI</p>
                </div>
                <div className="text-center">
                  <p className="text-sm sm:text-base font-semibold text-secondary">Data-backed campaigns that show real profit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </section>
  );
}
