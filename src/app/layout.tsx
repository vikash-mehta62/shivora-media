import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivora Media | Digital Marketing Agency in India | SEO, Social Media & PPC Services",
  description: "Shivora Media - Your trusted digital marketing partner since 2018. Expert team of creative thinkers, strategists, and performance-driven marketers. We offer SEO, Social Media Marketing, PPC, Content Marketing, Web Development & Brand Identity services. Contact: +91 7067235788 | Email: shivoramedia@gmail.com",
  keywords: ["digital marketing agency", "digital marketing agency India", "SEO services", "social media marketing", "PPC advertising", "web development", "brand identity", "content marketing", "Shivora Media", "performance marketing", "creative marketing agency", "digital strategy", "online marketing services"],
  authors: [{ name: "Shivora Media" }],
  creator: "Shivora Media",
  publisher: "Shivora Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shivoramedia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Shivora Media | Digital Marketing Agency - SEO, Social Media & PPC Experts",
    description: "Transform your business with data-driven digital marketing strategies. Creative thinkers, strategists & performance-driven marketers. 150+ happy clients since 2018. Book a consultation today!",
    url: 'https://shivoramedia.com',
    siteName: 'Shivora Media',
    images: [
      {
        url: '/android-chrome-192x192.png',
        width: 1200,
        height: 630,
        alt: 'Shivora Media - Digital Marketing Agency',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shivora Media | Digital Marketing Agency",
    description: "Transform your business with data-driven digital marketing. Creative strategies that drive real results. 150+ happy clients since 2018.",
    images: ['/Logo_new.png'],
    creator: '@shivoramedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shivora Media',
    description: 'Digital Marketing Agency - Creative thinkers, strategists, and performance-driven marketers helping businesses grow online since 2018',
    url: 'https://shivoramedia.com',
    logo: 'https://shivoramedia.com/Logo_new.png',
    image: 'https://shivoramedia.com/Logo_new.png',
    email: 'shivoramedia@gmail.com',
    telephone: '+917067235788',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.facebook.com/shivoramedia',
      'https://www.instagram.com/shivoramedia',
      'https://twitter.com/shivoramedia',
      'https://www.linkedin.com/company/shivoramedia',
    ],
    foundingDate: '2018',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '150',
    },
    areaServed: 'IN',
    slogan: 'The Minds Behind the Brand',
    serviceType: [
      'SEO Services',
      'Social Media Marketing',
      'PPC Advertising',
      'Content Marketing',
      'Web Development',
      'Brand Identity',
      'Digital Strategy',
      'Performance Marketing',
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
