import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shivora Media | Digital Marketing Agency in Bhopal",
  description: "Shivora Media is a leading digital marketing agency in Bhopal offering SEO, PPC, social media marketing, content marketing and website services.",
  keywords: ["digital marketing agency in bhopal", "seo services bhopal", "social media marketing bhopal"],
  alternates: { canonical: "https://shivoramedia.com/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://shivoramedia.com/#professionalservice",
  "name": "Shivora Media - AI Powered Digital Marketing & Video Production Agency",
  "url": "https://shivoramedia.com/",
  "image": "https://shivoramedia.com/Logo_new.png",
  "telephone": "+917067235788",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Raisen Rd, Piplani, BHEL",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "462022",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.2489259,
    "longitude": 77.4737912
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <main className="noise pt-[80px]">
        <Hero />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
