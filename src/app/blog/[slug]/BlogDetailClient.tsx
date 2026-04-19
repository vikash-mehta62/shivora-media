'use client';

import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, Tag, Eye, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, ArrowLeft } from "lucide-react";
import Link from 'next/link';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    focusKeyword: string;
  };
  tags: string[];
  readTime: number;
  publishedAt: string;
  views: number;
  featured: boolean;
}

export default function BlogDetailClient({ blog }: { blog: Blog }) {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = blog.title;

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'SEO': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      'Social Media': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
      'PPC': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      'Content Marketing': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
      'Branding': 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
      'Web Development': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300',
      'Other': 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
    };
    return colors[category] || colors['Other'];
  };

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-20"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-muted hover:text-primary mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(blog.category)}`}>
              {blog.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {blog.title}
          </h1>

          <p className="text-xl text-secondary mb-8">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-muted mb-8">
            <div className="flex items-center gap-2">
              {blog.author.avatar ? (
                <img 
                  src={blog.author.avatar} 
                  alt={blog.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  {blog.author.name.charAt(0)}
                </div>
              )}
              <span className="font-medium">{blog.author.name}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blog.publishedAt)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime} min read</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{blog.views} views</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-3 pb-8 border-b border-gray-200 dark:border-gray-800">
            <span className="text-sm font-medium flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share:
            </span>
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition"
              title="Share on Facebook"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 hover:bg-sky-100 dark:hover:bg-sky-900 rounded-lg transition"
              title="Share on Twitter"
            >
              <Twitter className="w-5 h-5 text-sky-500" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-blue-700" />
            </button>
            <button
              onClick={copyLink}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
              title="Copy Link"
            >
              <LinkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={blog.featuredImage} 
              alt={blog.title}
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
            />
          </article>

          {/* Tags */}
          {(blog.tags || []).length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag className="w-5 h-5 text-muted" />
                <span className="font-semibold">Tags:</span>
                {(blog.tags || []).map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="mt-12 p-8 card rounded-2xl">
            <div className="flex items-start gap-4">
              {blog.author.avatar ? (
                <img 
                  src={blog.author.avatar} 
                  alt={blog.author.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                  {blog.author.name.charAt(0)}
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold mb-2">Written by {blog.author.name}</h3>
                <p className="text-muted">
                  Digital marketing expert passionate about helping businesses grow online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Let's discuss how we can help you achieve your digital marketing goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .blog-content {
          line-height: 1.8;
          font-size: 1.125rem;
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
        .blog-content h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .blog-content ul, .blog-content ol {
          margin-left: 2rem;
          margin-bottom: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        .blog-content a {
          color: var(--deep-blue);
          text-decoration: underline;
        }
        .blog-content blockquote {
          border-left: 4px solid var(--deep-blue);
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: var(--text-secondary);
        }
      `}</style>
    </main>
  );
}
