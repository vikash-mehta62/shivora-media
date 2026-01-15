import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Target, Lightbulb, Users, BarChart3, Rocket, Award, TrendingUp, Clock, Shield, Headphones, CheckCircle, Star, ArrowRight } from "lucide-react";

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

const timeline = [
  { year: "2018", title: "Founded", desc: "Started with a vision to help businesses grow digitally" },
  { year: "2019", title: "50 Clients", desc: "Reached our first major milestone" },
  { year: "2020", title: "Google Partner", desc: "Became certified Google Partner agency" },
  { year: "2021", title: "100 Clients", desc: "Doubled our client base" },
  { year: "2022", title: "Meta Partner", desc: "Achieved Meta Business Partner status" },
  { year: "2023", title: "150+ Clients", desc: "Expanded team to 50+ experts" },
  { year: "2024", title: "Award Winning", desc: "Won 25+ industry awards" }
];

export default function AboutPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--deep-blue)]/10 dark:bg-[var(--baby-blue)]/10 rounded-full mb-4">
              <Award className="w-4 h-4 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]" />
              <span className="text-sm font-medium text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your Trusted <span className="text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">Growth Partner</span>
              <span className="block text-[var(--golden-yellow)]">Since 2018</span>
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              The Minds Behind the Brand - At Shivora Media, we are a team of creative thinkers, strategists, and performance-driven marketers. We combine strategy, design, and technology to help brands stand out, connect with their audience, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-10 h-10 text-[var(--deep-blue)] dark:text-[var(--golden-yellow)] mx-auto mb-3" />
                  <div className="text-4xl font-bold text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">{stat.number}</div>
                  <div className="text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                We Don&apos;t Just Market,
                <span className="text-[var(--deep-blue)] dark:text-[var(--baby-blue)]"> We Transform</span>
              </h2>
              <p className="text-secondary text-lg mb-6 leading-relaxed">
                Since 2018, Shivora Media has helped 150+ businesses across India transform their 
                digital presence. From startups to enterprises, we&apos;ve delivered results that matter.
              </p>
              <p className="text-muted mb-6">
                Our team of 50+ experts combines creativity with data to deliver campaigns that 
                don&apos;t just look good – they drive real business results. We believe in transparency, 
                accountability, and most importantly, delivering ROI.
              </p>
              <p className="text-muted mb-6">
                What started as a small team with big dreams has grown into one of India&apos;s most 
                trusted digital marketing agencies. Our journey has been defined by our commitment 
                to client success and continuous innovation.
              </p>
              <p className="text-muted mb-8">
                Every project starts with understanding your story. We don&apos;t do one-size-fits-all—we craft solutions that fit your brand, your goals, and your audience.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-full font-semibold">
                Work With Us <Rocket className="w-4 h-4" />
              </a>
            </div>
            <div className="card rounded-3xl p-8 shadow-2xl">
              <div className="relative w-full max-w-[350px] mx-auto aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-[var(--deep-blue)]/20 mb-6">
                <Image src="/logo.jpeg" alt="Shivora Media" fill className="object-cover" priority />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">Shivora Media</h3>
                <p className="text-[var(--golden-yellow)] font-medium">Digital Marketing Agency</p>
                <p className="text-muted text-sm mt-2">Transforming Businesses Since 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-secondary max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card rounded-2xl p-6 hover:shadow-xl hover:border-[var(--deep-blue)] transition-all">
                <div className="w-14 h-14 icon-bg rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-7 h-7 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-muted text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Grow Section */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Grow With Us?</h2>
            <p className="text-secondary">Our proven 3-step process</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 icon-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Plan Your Growth</h3>
              <p className="text-muted">We map out clear strategies that turn your ideas into measurable results.</p>
            </div>
            <div className="card rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 icon-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Handover the Project</h3>
              <p className="text-muted">Our team handles everything from creative design to video production and marketing campaigns so you can focus on your business.</p>
            </div>
            <div className="card rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 icon-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Count the Results</h3>
              <p className="text-muted">We track performance, optimize every step, and ensure you see real growth and profit.</p>
            </div>
          </div>

          <div className="card rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">What Makes Us Different?</h3>
              <p className="text-secondary">Our Client Projects</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--bg-secondary)] rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Others</h4>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Focus only on likes and views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Generic, one-size-fits-all campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Designs that look good but don&apos;t convert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Complicated processes and lack of support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>No clear insights or ROI</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[var(--deep-blue)] text-white rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4 text-[var(--golden-yellow)]">Shivora Media</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--golden-yellow)] mt-0.5 shrink-0" />
                    <span>Focus on performance and measurable growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--golden-yellow)] mt-0.5 shrink-0" />
                    <span>Tailored strategies for your brand and audience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--golden-yellow)] mt-0.5 shrink-0" />
                    <span>Creative, high-impact visuals that drive results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--golden-yellow)] mt-0.5 shrink-0" />
                    <span>Seamless execution from start to finish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[var(--golden-yellow)] mt-0.5 shrink-0" />
                    <span>Data-backed campaigns that show real profit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-8 sm:p-12 shadow-xl bg-[var(--deep-blue)] text-white">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Why Choose Shivora Media?</h2>
              <p className="text-[var(--baby-blue)]">What sets us apart from other agencies</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-[var(--golden-yellow)]" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-[var(--baby-blue)] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-10 sm:p-16 text-center bg-[var(--deep-blue)] text-white">
            <Star className="w-16 h-16 text-[var(--golden-yellow)] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-[var(--baby-blue)] mb-8 text-lg">Let&apos;s discuss how we can help grow your business.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 btn-gold rounded-full font-semibold text-lg">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
