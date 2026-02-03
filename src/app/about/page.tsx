import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Target, Lightbulb, Users, BarChart3, Rocket, Award, TrendingUp, Clock, Shield, Headphones, ArrowRight, Mail } from "lucide-react";

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

      {/* Running Text Marquee */}
      <section className="py-8 overflow-hidden bg-brand-section">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-8 px-8">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Designed for Expansion</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">•</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Built for Visibility</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">•</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Focused on Growth</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">•</span>
          </div>
          <div className="flex items-center gap-8 px-8">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Designed for Expansion</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">•</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Built for Visibility</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">•</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Focused on Growth</span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold">•</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8">
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
                Driving Growth, <span className="heading-primary">Crafting Impact</span>
              </h2>
              <p className="text-secondary text-lg mb-6 leading-relaxed">
                At Shivora Media, we create custom digital marketing solutions tailored to your brand, goals, and audience. As a leading digital marketing agency in India, we've helped 150+ businesses enhance their digital presence with campaigns that deliver real results.
              </p>
              <p className="text-muted mb-8">
                Our team blends creativity, strategy, and data-driven insights to generate measurable growth and meaningful engagement. Partner with Shivora Media to elevate your brand online.
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
     <div className="border-t border-brand-light">
  <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
    <div className="card rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl bg-brand-section text-white">
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-baby-blue/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Mail className="w-6 h-6 icon-gold" />
          <span className="text-baby-blue font-medium">LET’S CONNECT</span>
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          We’re Excited To Connect With You
        </h3>

        <p className="text-baby-blue mb-10 max-w-3xl mx-auto text-base leading-relaxed">
          Having a question, a project idea, or need expert support? Our team is here to listen and help.
          Reach out using the contact form or send us an email, and let’s start a conversation about your goals.
          <br />
          <span className="block mt-2">
            We’ll get back to you promptly with clear and reliable assistance.
          </span>
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="https://wa.me/917067235788"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 hover:bg-green-500/30 rounded-full font-semibold transition"
          >
            📱 WhatsApp
          </a>

          <a
            href="mailto:shivoramedia@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full font-semibold transition"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>

          <a
            href="https://instagram.com/your_instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500/20 hover:bg-pink-500/30 rounded-full font-semibold transition"
          >
            📸 Instagram
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 btn-gold rounded-full font-semibold text-lg"
        >
          Enquire Now <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </main>
    </>
  );
}
