import { Users, Linkedin, Twitter, ArrowRight, Award, Star } from "lucide-react";

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", bio: "10+ years in digital marketing. Ex-Google. Built 100+ successful campaigns.", initials: "AM", expertise: "Strategy & Growth" },
  { name: "Priya Kapoor", role: "Creative Director", bio: "Award-winning designer. Created brand identities for 200+ companies.", initials: "PK", expertise: "Branding & Design" },
  { name: "Rahul Sharma", role: "Head of SEO", bio: "Google certified expert. Ranked 500+ websites on page 1.", initials: "RS", expertise: "SEO & Analytics" },
  { name: "Ananya Singh", role: "Social Media Lead", bio: "Generated 10M+ reach. Viral campaign specialist.", initials: "AS", expertise: "Social & Content" },
  { name: "Vikram Patel", role: "PPC Manager", bio: "Managed ₹10Cr+ ad spend. Average 5x ROAS.", initials: "VP", expertise: "Paid Advertising" },
  { name: "Neha Gupta", role: "Content Head", bio: "Ex-journalist. Published 1000+ articles. Storytelling expert.", initials: "NG", expertise: "Content Strategy" }
];

const stats = [
  { number: "50+", label: "Team Members" },
  { number: "15+", label: "Certifications" },
  { number: "8+", label: "Years Average Exp" }
];

export default function Team() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden section-alt">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-blue opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--deep-blue)]/10 dark:bg-[var(--baby-blue)]/10 rounded-full mb-4">
            <Users className="w-4 h-4 text-[var(--deep-blue)] dark:text-[var(--baby-blue)]" />
            <span className="text-sm font-medium text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meet the <span className="text-[var(--deep-blue)] dark:text-[var(--baby-blue)]">Experts</span>
            <span className="text-[var(--golden-yellow)]"> Behind Your Success</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            A passionate team of 50+ digital marketing professionals, designers, and developers 
            dedicated to delivering exceptional results for your business.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-16 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] dark:text-[var(--golden-yellow)]">{stat.number}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {team.map((member, i) => (
            <div key={i} className="group card rounded-2xl p-6 hover:shadow-xl hover:border-[var(--deep-blue)] transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-[var(--deep-blue)] rounded-2xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                  {member.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold truncate">{member.name}</h3>
                  <p className="text-[var(--deep-blue)] dark:text-[var(--baby-blue)] text-sm font-medium">{member.role}</p>
                  <p className="text-[var(--golden-yellow)] text-xs">{member.expertise}</p>
                </div>
              </div>
              
              <p className="text-muted text-sm mb-4 line-clamp-2">{member.bio}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <a href="#" className="w-8 h-8 card rounded-lg flex items-center justify-center hover:bg-[var(--deep-blue)] hover:text-white transition">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 card rounded-lg flex items-center justify-center hover:bg-[var(--deep-blue)] hover:text-white transition">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-[var(--golden-yellow)]" />
                  <span className="text-xs text-muted">Certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center">
          <div className="card rounded-2xl p-8 max-w-2xl mx-auto">
            <Star className="w-12 h-12 text-[var(--golden-yellow)] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Want to Join Our Team?</h3>
            <p className="text-muted mb-6">We&apos;re always looking for talented individuals to join our growing team.</p>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 btn-outline rounded-full font-semibold">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
