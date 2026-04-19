import { Metadata } from 'next';
import BlogDetailClient from './BlogDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

async function getBlog(slug: string) {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    const response = await fetch(`${API_URL}/api/blogs/slug/${slug}`, {
      cache: 'no-store'
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: blog.seo.metaTitle || blog.title,
    description: blog.seo.metaDescription || blog.excerpt,
    keywords: (blog.seo?.keywords || []).join(', '),
    authors: [{ name: blog.author.name }],
    openGraph: {
      title: blog.seo.metaTitle || blog.title,
      description: blog.seo.metaDescription || blog.excerpt,
      images: [blog.seo.ogImage || blog.featuredImage],
      type: 'article',
      publishedTime: blog.publishedAt,
      authors: [blog.author.name],
      tags: blog.tags
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.seo.metaTitle || blog.title,
      description: blog.seo.metaDescription || blog.excerpt,
      images: [blog.seo.ogImage || blog.featuredImage]
    },
    alternates: {
      canonical: blog.seo.canonicalUrl || `http://localhost:5000/blog/${blog.slug}`
    }
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-muted mb-6">The blog post you're looking for doesn't exist.</p>
          <a href="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Back to Blogs
          </a>
        </div>
      </div>
    );
  }

  return <BlogDetailClient blog={blog} />;
}
