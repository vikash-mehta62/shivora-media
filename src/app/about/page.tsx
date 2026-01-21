import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Target, Lightbulb, Users, BarChart3, Rocket, Award, TrendingUp, Clock, Shield, Headphones, CheckCircle, Star, ArrowRight } from "lucide-react";
import About from "@/components/About";

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
      <About />

 

      {/* Original Hero Section - Removed */}

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


      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white dark:text-white">Why Choose Shivora Media?</h2>
              <p className="text-gray-700 dark:text-gray-300">What sets us apart from other agencies</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-[var(--golden-yellow)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-[var(--golden-yellow)]" />
                  </div>
                  <h3 className="font-semibold mb-1 text-white dark:text-white">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
     

      {/* Let's Talk Section */}
      <section className="py-20 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-12">
            <div className="mb-12">
              <p className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-8">LET&apos;S TALK</p>
              <h3 className="text-5xl sm:text-6xl font-bold text-white mb-8">Join Us</h3>
            </div>
            
            <div className="max-w-4xl space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                We&apos;re excited to connect with you! Whether you have a question or a project idea, we&apos;re here to listen.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Send us a message using the contact form, or drop us an email we&apos;ll get back to you promptly.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center pt-8">
                <a 
                  href="https://wa.me/917067235788" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold text-lg hover:bg-[#20ba5a] transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contact Us
                </a>
                
                <span className="text-gray-600 text-lg font-medium">or</span>
                
                <a 
                  href="mailto:shivoramedia@gmail.com" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--deep-blue)] text-white rounded-full font-semibold text-lg hover:bg-[#1e3a8a] transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
