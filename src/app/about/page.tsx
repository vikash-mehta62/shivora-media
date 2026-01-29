import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Target, Lightbulb, Users, BarChart3, Rocket, Award, TrendingUp, Clock, Shield, Headphones, ArrowRight } from "lucide-react";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy is designed with measurable outcomes and ROI in mind. We focus on what matters - your business growth." },
  { icon: Lightbulb, title: "Innovation First", desc: "We stay ahead of digital trends to give you a competitive edge. Our team constantly learns and adapts to new technologies." },
  { icon: Users, title: "True Partnership", desc: "Your success is our success. We work as an extension of your team, not just another vendor." },
  { icon: BarChart3, title: "Data-Backed", desc: "All decisions are driven by analytics, not assumptions. We measure everything and optimize continuously." }
];

const stats = [
  { number: "500+", label: "Projects Completed", icon: TrendingUp },
  { number: "₹50Cr+", label: "Revenue Generated", icon: BarChart3 },
  { number: "150+", label: "Happy Clients", icon: Users },
  { number: "25+", label: "Industry Awards", icon: Award }
];

const whyUs = [
  { icon: Clock, title: "8+ Years Experience", desc: "Proven expertise since 2018 with consistent results" },
  { icon: Shield, title: "Transparent Process", desc: "No hidden fees, clear reporting, honest communication" },
  { icon: Headphones, title: "24/7 Support", desc: "Always here when you need us, dedicated account managers" },
  { icon: Award, title: "Certified Experts", desc: "Google & Meta certified team with industry recognition" }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">

      {/* Hero Section */}
      <section className="pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-30"></div>
        </div>

        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
              <Award className="w-4 h-4 icon-primary" />
              <span className="text-sm font-medium badge-text">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              The Minds Behind <span className="heading-primary">the Brand</span>
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto mb-6">
              At Shivora Media, we are a team of creative thinkers, strategists, and performance-driven marketers. 
              We combine strategy, design, and technology to help brands stand out, connect with their audience, and grow.
            </p>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Every project starts with understanding your story. We don&apos;t do one-size-fits-all—we craft solutions that fit your brand, your goals, and your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-10 h-10 icon-gold mx-auto mb-3" />
                  <div className="text-4xl font-bold heading-primary">{stat.number}</div>
                  <div className="text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 section-alt">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                We Don&apos;t Just Market,
                <span className="heading-primary"> We Transform</span>
              </h2>
              <p className="text-secondary text-lg mb-6 leading-relaxed">
                Every project starts with understanding your story. We don&apos;t do one-size-fits-all—we craft 
                solutions that fit your brand, your goals, and your audience.
              </p>
              <p className="text-muted mb-6">
                At Shivora Media, we are a team of creative thinkers, strategists, and performance-driven marketers. 
                We combine strategy, design, and technology to help brands stand out, connect with their audience, and grow.
              </p>
              <p className="text-muted mb-8">
                Since 2018, we&apos;ve helped 150+ businesses across India transform their digital presence. 
                From startups to enterprises, we&apos;ve delivered results that matter. Our team of 50+ experts 
                combines creativity with data to deliver campaigns that drive real business results.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-full font-semibold">
                Work With Us <Rocket className="w-4 h-4" />
              </a>
            </div>
            <div className="card rounded-3xl p-8 shadow-2xl">
              <div className="relative w-full max-w-[350px] mx-auto aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-brand-light mb-6">
                <Image src="/logo.jpeg" alt="Shivora Media" fill className="object-cover" priority />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">Shivora Media</h3>
                <p className="text-gold font-medium">Digital Marketing Agency</p>
                <p className="text-muted text-sm mt-2">Transforming Businesses Since 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-secondary max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card rounded-2xl p-6 hover:shadow-xl hover-primary transition-all">
                <div className="w-14 h-14 icon-bg rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-7 h-7 icon-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-muted text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
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



      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-8 sm:p-12 shadow-xl bg-brand-section text-white">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white">Why Choose Shivora Media?</h2>
              <p className="text-baby-blue">What sets us apart from other agencies</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 icon-gold" />
                  </div>
                  <h3 className="font-semibold mb-1 text-white">{item.title}</h3>
                  <p className="text-baby-blue text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* CTA - Let's Talk */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-10 sm:p-16 text-center bg-brand-section text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <span className="text-sm font-medium text-baby-blue">LET&apos;S TALK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Join Us</h2>
            <p className="text-baby-blue mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
              We&apos;re excited to connect with you! Whether you have a question or a project idea, we&apos;re here to listen.
            </p>
            <p className="text-baby-blue mb-8 text-base leading-relaxed max-w-2xl mx-auto">
              Send us a message using the contact form, or drop us an email—we&apos;ll get back to you promptly.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a 
                href="https://wa.me/917067235788" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full font-semibold transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp: +91 70672 35788
              </a>
              <a 
                href="mailto:shivoramedia@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full font-semibold transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>

            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 btn-gold rounded-full font-semibold text-lg">
              Enquire Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}
