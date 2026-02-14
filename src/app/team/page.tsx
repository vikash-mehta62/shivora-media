import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Linkedin, Twitter, Award, Star, ArrowRight, Mail, Briefcase } from "lucide-react";

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", bio: "10+ years in digital marketing. Ex-Google. Built 100+ successful campaigns. Passionate about helping businesses grow.", initials: "AM", expertise: "Strategy & Growth", linkedin: "#", twitter: "#" },
  { name: "Priya Kapoor", role: "Creative Director", bio: "Award-winning designer with 8+ years experience. Created brand identities for 200+ companies across industries.", initials: "PK", expertise: "Branding & Design", linkedin: "#", twitter: "#" },
  { name: "Rahul Sharma", role: "Head of SEO", bio: "Google certified expert with 7+ years experience. Ranked 500+ websites on page 1 of Google.", initials: "RS", expertise: "SEO & Analytics", linkedin: "#", twitter: "#" },
  { name: "Ananya Singh", role: "Social Media Lead", bio: "Generated 10M+ reach across platforms. Viral campaign specialist with expertise in influencer marketing.", initials: "AS", expertise: "Social & Content", linkedin: "#", twitter: "#" },
  { name: "Vikram Patel", role: "PPC Manager", bio: "Managed ₹10Cr+ ad spend with average 5x ROAS. Google Ads & Meta certified expert.", initials: "VP", expertise: "Paid Advertising", linkedin: "#", twitter: "#" },
  { name: "Neha Gupta", role: "Content Head", bio: "Ex-journalist with 6+ years experience. Published 1000+ articles. Storytelling and content strategy expert.", initials: "NG", expertise: "Content Strategy", linkedin: "#", twitter: "#" },
  { name: "Karan Malhotra", role: "Web Development Lead", bio: "Full-stack developer with 8+ years experience. Built 100+ websites and web applications.", initials: "KM", expertise: "Web Development", linkedin: "#", twitter: "#" },
  { name: "Simran Kaur", role: "Account Manager", bio: "5+ years in client relations. Ensures seamless communication and project delivery.", initials: "SK", expertise: "Client Success", linkedin: "#", twitter: "#" }
];

const stats = [
  { number: "50+", label: "Team Members" },
  { number: "15+", label: "Certifications" },
  { number: "8+", label: "Years Avg Experience" },
  { number: "100%", label: "Client Satisfaction" }
];

const departments = [
  { name: "SEO Team", count: 12, desc: "Search engine optimization experts" },
  { name: "Social Media", count: 10, desc: "Content creators and community managers" },
  { name: "PPC Team", count: 8, desc: "Paid advertising specialists" },
  { name: "Creative Team", count: 10, desc: "Designers and video editors" },
  { name: "Development", count: 6, desc: "Web developers and engineers" },
  { name: "Client Success", count: 4, desc: "Account managers and support" }
];

export default function TeamPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-30"></div>
        </div>
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
              <Users className="w-4 h-4 badge-text" />
              <span className="text-sm font-medium badge-text">Our Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Meet the <span className="badge-text">Experts</span>
              <span className="block text-gold">Behind Your Success</span>
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              A passionate team of 50+ digital marketing professionals, designers, and developers 
              dedicated to delivering exceptional results for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-6 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-[var(--deep-blue)] dark:text-gold">{stat.number}</div>
                  <div className="text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-6 section-alt">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-secondary">The experts driving your success</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="group card rounded-2xl p-6 hover:shadow-xl hover-primary transition-all text-center">
                <div className="w-24 h-24 bg-brand rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="badge-text font-medium text-sm">{member.role}</p>
                <p className="text-gold text-xs mb-3">{member.expertise}</p>
                <p className="text-muted text-sm mb-4 line-clamp-3">{member.bio}</p>
                <div className="flex justify-center gap-2">
                  <a href={member.linkedin} className="w-10 h-10 card rounded-lg flex items-center justify-center hover:bg-brand hover:text-white transition">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.twitter} className="w-10 h-10 card rounded-lg flex items-center justify-center hover:bg-brand hover:text-white transition">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 card rounded-lg flex items-center justify-center hover:bg-brand hover:text-white transition">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-6">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4">Our Departments</h2>
            <p className="text-secondary">Specialized teams for every aspect of digital marketing</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <div key={i} className="card rounded-2xl p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <Briefcase className="w-8 h-8 badge-text" />
                  <span className="text-2xl font-bold text-gold">{dept.count}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                <p className="text-muted text-sm">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-6 section-alt">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
            <p className="text-secondary">Industry-recognized expertise</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Google Partner", "Meta Business Partner", "HubSpot Certified", "Semrush Certified", "Google Analytics", "Google Ads", "Facebook Blueprint", "LinkedIn Marketing"].map((cert, i) => (
              <div key={i} className="card rounded-xl p-6 text-center hover:shadow-lg transition">
                <Award className="w-10 h-10 text-gold mx-auto mb-3" />
                <div className="font-semibold text-sm">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      {/* <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-10 sm:p-16 text-center bg-brand-section text-white">
            <Star className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want to Join Our Team?</h2>
            <p className="text-baby-blue mb-8 text-lg">
              We&apos;re always looking for talented individuals to join our growing team. 
              Check out our open positions and become part of something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-gold rounded-full font-semibold text-lg">
                View Open Positions <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-semibold text-lg transition">
                Contact HR <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
