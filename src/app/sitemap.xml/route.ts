import { NextResponse } from 'next/server';

const BASE_URL = 'https://shivoramedia.com';

interface BlogEntry {
  slug: string;
  updatedAt: string;
}

async function getPublishedBlogs(): Promise<BlogEntry[]> {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:5000';
    console.log('[Sitemap] Fetching blogs from:', `${API_URL}/api/blogs?status=published&limit=100`);
    const res = await fetch(`${API_URL}/api/blogs?status=published&limit=100`, {
      cache: 'no-store',
    });
    console.log('[Sitemap] Response status:', res.status);
    if (!res.ok) return [];
    const data = await res.json();
    console.log('[Sitemap] Blogs found:', data.blogs?.length || 0);
    return (data.blogs || []).map((b: { slug: string; updatedAt: string }) => ({
      slug: b.slug,
      updatedAt: b.updatedAt,
    }));
  } catch (err) {
    console.error('[Sitemap] Error fetching blogs:', err);
    return [];
  }
}

function urlEntry(
  loc: string,
  lastmod: string,
  changefreq: string,
  priority: string
): string {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  const blogs = await getPublishedBlogs();
  const today = new Date().toISOString().split('T')[0];

  const staticUrls = [
    urlEntry(`${BASE_URL}/`,                           today, 'weekly',  '1.0'),
    urlEntry(`${BASE_URL}/about`,                      today, 'monthly', '0.8'),
    urlEntry(`${BASE_URL}/services`,                   today, 'monthly', '0.9'),
    urlEntry(`${BASE_URL}/contact`,                    today, 'monthly', '0.7'),
    urlEntry(`${BASE_URL}/portfolio`,                  today, 'monthly', '0.8'),
    urlEntry(`${BASE_URL}/case-studies`,               today, 'monthly', '0.7'),
    urlEntry(`${BASE_URL}/blog`,                       today, 'daily',   '0.9'),
    urlEntry(`${BASE_URL}/services/seo`,               today, 'monthly', '0.8'),
    urlEntry(`${BASE_URL}/services/social-media`,      today, 'monthly', '0.8'),
    urlEntry(`${BASE_URL}/services/ppc`,               today, 'monthly', '0.8'),
    urlEntry(`${BASE_URL}/services/content-marketing`, today, 'monthly', '0.8'),
    urlEntry(`${BASE_URL}/services/video`,             today, 'monthly', '0.7'),
    urlEntry(`${BASE_URL}/services/graphic-design`,    today, 'monthly', '0.7'),
    urlEntry(`${BASE_URL}/services/brand-identity`,    today, 'monthly', '0.7'),
    urlEntry(`${BASE_URL}/services/web-development`,   today, 'monthly', '0.7'),
    urlEntry(`${BASE_URL}/services/automation`,        today, 'monthly', '0.6'),
  ].join('');

  const blogUrls = blogs
    .map((blog) =>
      urlEntry(
        `${BASE_URL}/blog/${blog.slug}`,
        new Date(blog.updatedAt).toISOString().split('T')[0],
        'weekly',
        '0.7'
      )
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}${blogUrls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'no-store, max-age=0', // no caching - always live
    },
  });
}
