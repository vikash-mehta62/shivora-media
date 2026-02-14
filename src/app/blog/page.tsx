import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ArrowRight, Clock, User, Tag, Search } from "lucide-react";

const categories = ["All", "SEO", "Social Media", "PPC", "Content Marketing", "Branding", "Web Development"];

const blogs = [
  {
    id: 1, title: "10 SEO Trends That Will Dominate 2026", excerpt: "Stay ahead of the curve with these emerging SEO trends that will shape search engine optimization in 2026.",
    category: "SEO", author: "Rahul Sharma", date: "Jan 10, 2026", readTime: "8 min read",
    gradient: "from-[#0011C4] to-[#AAD2FF]"
  },
  {
    id: 2, title: "How to Create Viral Social Media Content", excerpt: "Learn the secrets behind viral content and how to create posts that get shared thousands of times.",
    category: "Social Media", author: "Ananya Singh", date: "Jan 8, 2026", readTime: "6 min read",
    gradient: "from-[#FDD835] to-[#FFB300]"
  },
  {
    id: 3, title: "Google Ads vs Facebook Ads: Which is Better?", excerpt: "A comprehensive comparison of the two biggest advertising platforms to help you choose the right one.",
    category: "PPC", author: "Vikram Patel", date: "Jan 5, 2026", readTime: "10 min read",
    gradient: "from-green-600 to-emerald-500"
  },
  {
    id: 4, title: "Content Marketing Strategy for 2026", excerpt: "Build a content marketing strategy that drives traffic, generates leads, and establishes thought leadership.",
    category: "Content Marketing", author: "Neha Gupta", date: "Jan 3, 2026", readTime: "7 min read",
    gradient: "from-purple-600 to-pink-500"
  },
  {
    id: 5, title: "Building a Strong Brand Identity", excerpt: "Essential elements of brand identity and how to create a memorable brand that resonates with your audience.",
    category: "Branding", author: "Priya Kapoor", date: "Dec 28, 2025", readTime: "5 min read",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 6, title: "Website Speed Optimization Guide", excerpt: "Improve your website loading speed and boost conversions with these proven optimization techniques.",
    category: "Web Development", author: "Karan Malhotra", date: "Dec 25, 2025", readTime: "9 min read",
    gradient: "from-cyan-500 to-blue-500"
  }
];

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-30"></div>
        </div>
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
              <BookOpen className="w-4 h-4 badge-text" />
              <span className="text-sm font-medium badge-text">Our Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Digital Marketing <span className="badge-text">Insights</span>
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Expert tips, strategies, and insights to help you grow your business online. 
              Stay updated with the latest digital marketing trends.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input type="text" placeholder="Search articles..." 
                className="w-full pl-12 pr-4 py-4 input-field rounded-full text-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 section-alt sticky top-20 z-30">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <button key={i} className={`px-6 py-3 rounded-full font-semibold transition-all ${
                i === 0 ? "bg-brand-section text-white shadow-lg" : "card hover-primary text-secondary"
              }`}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-10">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="group card rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className={`h-48 bg-gradient-to-br ${blog.gradient} p-6 flex flex-col justify-end relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium w-fit mb-2">
                    {blog.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-[var(--deep-blue)] dark:group-hover:text-baby-blue transition">
                    {blog.title}
                  </h2>
                  <p className="text-muted text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blog.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">{blog.date}</span>
                    <span className="flex items-center gap-2 badge-text font-medium text-sm">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 btn-outline rounded-full font-semibold">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-10 section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card rounded-3xl p-10 sm:p-16 text-center bg-brand-section text-white">
            <BookOpen className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-baby-blue mb-8 text-lg">
              Get the latest digital marketing tips and insights delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input type="email" placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full text-[var(--charcoal)] focus:outline-none" />
              <button className="px-8 py-4 btn-gold rounded-full font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
