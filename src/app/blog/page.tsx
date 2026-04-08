'use client';
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ArrowRight, Clock, User, Search, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "SEO", "Social Media", "PPC", "Content Marketing", "Branding", "Web Development", "Other"];
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

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
  createdAt: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 9, total: 0, pages: 0 });

  useEffect(() => {
    fetchBlogs(1);
  }, [selectedCategory]);

  const fetchBlogs = async (page = 1) => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedCategory !== 'All') params.append('category', selectedCategory);
      if (searchTerm.trim()) params.append('search', searchTerm);
      params.append('page', String(page));
      params.append('limit', '9');

      const response = await fetch(`${API_URL}/api/blogs?${params}`);
      const data = await response.json();
      setBlogs(data.blogs || []);
      setPagination(data.pagination || { page: 1, limit: 9, total: 0, pages: 0 });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBlogs(1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString || Date.now());
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-30"></div>
        </div>
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
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

          {/* Search */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="relative flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 input-field rounded-full text-lg"
                />
              </div>
              <button type="submit" className="px-6 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 section-alt sticky top-20 z-30">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all text-sm ${
                  selectedCategory === cat ? "bg-brand-section text-white shadow-lg" : "card hover-primary text-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-10">
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">

          {/* Total count */}
          {!loading && pagination.total > 0 && (
            <p className="text-muted text-sm mb-6">
              Showing {blogs.length} of {pagination.total} articles
            </p>
          )}

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-muted">Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-muted mx-auto mb-4" />
              <p className="text-muted text-lg">No blogs found. Check back soon!</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <article key={blog._id} className="group card rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                    <a href={`/blog/${blog.slug}`} className="block">
                      <div className="h-52 relative overflow-hidden">
                        <img
                          src={blog.featuredImage}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-3 left-3">
                          <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 text-xs font-semibold shadow">
                            {blog.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h2 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-[var(--deep-blue)] dark:group-hover:text-baby-blue transition">
                          {blog.title}
                        </h2>
                        <p className="text-muted text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-muted mb-3">
                          <div className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" />
                            <span className="truncate max-w-[120px]">{blog.author.name}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {blog.readTime} min
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                          <span className="text-xs text-muted">{formatDate(blog.publishedAt || blog.createdAt)}</span>
                          <span className="flex items-center gap-1 badge-text font-semibold text-sm">
                            Read More <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {pagination.pages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => fetchBlogs(pagination.page - 1)}
                    disabled={pagination.page === 1}
                    className="flex items-center gap-2 px-4 py-2 card rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover-primary transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Prev
                  </button>

                  {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => fetchBlogs(p)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                        pagination.page === p
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'card hover-primary text-secondary'
                      }`}
                    >
                      {p}
                    </button>
                  ))}

                  <button
                    onClick={() => fetchBlogs(pagination.page + 1)}
                    disabled={pagination.page === pagination.pages}
                    className="flex items-center gap-2 px-4 py-2 card rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover-primary transition"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 section-alt">
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
