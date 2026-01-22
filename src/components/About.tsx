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
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden section-alt">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-blue opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
            <Award className="w-4 h-4 icon-primary" />
            <span className="text-sm font-medium badge-text">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The Minds Behind <span className="heading-primary">the Brand</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            At Shivora Media, we are a team of creative thinkers, strategists, and performance-driven marketers. 
            We combine strategy, design, and technology to help brands stand out, connect with their audience, and grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              We Don&apos;t Just Market,
              <span className="heading-primary"> We Transform</span>
            </h3>
            
            <p className="text-secondary text-lg mb-6 leading-relaxed">
              Every project starts with understanding your story. We don&apos;t do one-size-fits-all—we craft 
              solutions that fit your brand, your goals, and your audience.
            </p>
            
            <p className="text-muted mb-8">
              Since 2018, Shivora Media has helped 150+ businesses across India transform their 
              digital presence. From startups to enterprises, we&apos;ve delivered results that matter. 
              Our team of 50+ experts combines creativity with data to deliver campaigns that 
              don&apos;t just look good – they drive real business results.
            </p>

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

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <div key={i} className="bg-secondary-light rounded-xl p-4 text-center">
                    <s.icon className="w-5 h-5 icon-gold mx-auto mb-2" />
                    <div className="text-xl sm:text-2xl font-bold heading-primary">{s.number}</div>
                    <div className="text-xs text-muted">{s.label}</div>
                  </div>
                ))}
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
      </div>
    </section>
  );
}
