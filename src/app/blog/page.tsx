'use client';
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ArrowRight, Clock, User, Search } from "lucide-react";

const categories = ["All", "SEO", "Social Media", "PPC", "Content Marketing", "Branding", "Web Development", "Other"];

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  author: { name: string; avatar?: string };
  readTime: number;
  publishedAt: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => { fetchBlogs(); }, [selectedCategory]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedCategory !== 'All') params.append('category', selectedCategory);
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/blogs?${params}`);
      const data = await response.json();
      setBlogs(data.blogs || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) { fetchBlogs(); return; }
    try {
      setLoading(true);
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/blogs?search=${searchTerm}`);
      const data = await response.json();
      setBlogs(data.blogs || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getCategoryGradient = (category: string) => {
    const gradients: Record<string, string> = {
      'SEO': 'from-[#0011C4] to-[#AAD2FF]',
      'Social Media': 'from-[#FDD835] to-[#FFB300]',
      'PPC': 'from-green-600 to-emerald-500',
      'Content Marketing': 'from-purple-600 to-pink-500',
      'Branding': 'from-orange-500 to-red-500',
      'Web Development': 'from-cyan-500 to-blue-500',
      'Other': 'from-gray-600 to-gray-400'
    };
    return gradients[category] || gradients['Other'];
  };

  return (
    <main>
      <Navbar />
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
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input type="text" placeholder="Search articles..." value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-12 pr-4 py-4 input-field rounded-full text-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 section-alt sticky top-20 z-30">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === cat ? "bg-brand-section text-white shadow-lg" : "card hover-primary text-secondary"
                }`}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-muted">Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted mx-auto mb-4" />
              <p className="text-muted">No blogs found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article key={blog._id} className="group card rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                  <a href={`/blog/${blog.slug}`} className="block">
                    <div className={`h-48 bg-gradient-to-br ${getCategoryGradient(blog.category)} p-6 flex flex-col justify-end relative overflow-hidden`}>
                      <div className="absolute inset-0">
                        <img src={blog.featuredImage} alt={blog.title} className="w-full h-full object-cover opacity-30" />
                      </div>
                      <span className="relative inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium w-fit mb-2">
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
                          {blog.author.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {blog.readTime} min
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted">{formatDate(blog.publishedAt)}</span>
                        <span className="flex items-center gap-2 badge-text font-medium text-sm cursor-pointer">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

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
