"use client";
import Image from "next/image";
import Link from "next/link";
import { Search, Share2, DollarSign, Pen, Code, Video, FileText, ArrowRight } from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    id: "smm",
    icon: Share2,
    title: "Social Media Marketing",
    description: "Transform followers into loyal customers. We create engaging viral content, manage your brand presence, and run targeted campaigns across platforms.",
    iconBg: "linear-gradient(to bottom right, #ec4899, #9333ea)",
    media: "/services/social-media-marketing.png",
    cardBg: "#051330",
    link: "/services/social-media"
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO + AEO + GEO",
    description: "Dominate Google search results and next-gen AI answer engines. Modern SEO, Answer Engine & Generative Engine Optimization for maximum organic visibility.",
    iconBg: "linear-gradient(to bottom right, #3b82f6, #2563eb)",
    media: "/services/seo-aeo-geo.png",
    cardBg: "#051330",
    link: "/services/seo"
  },
  {
    id: "ppc",
    icon: DollarSign,
    title: "Pay-Per-Click Advertising",
    description: "Get immediate results with targeted paid campaigns. We manage Google Ads, Meta Ads & LinkedIn Ads to maximize your ROI and reduce cost per lead.",
    iconBg: "linear-gradient(to bottom right, #10b981, #059669)",
    media: "/services/ppc-advertising.png",
    cardBg: "#051330",
    link: "/services/ppc"
  },
  {
    id: "web",
    icon: Code,
    title: "Website Development",
    description: "High-performance, modern, and responsive websites crafted to elevate your brand, capture leads, and provide a seamless experience across all devices.",
    iconBg: "linear-gradient(to bottom right, #06b6d4, #2563eb)",
    media: "/services/website-development.png",
    cardBg: "#051330",
    link: "/services/web-development"
  },
  {
    id: "video",
    icon: Video,
    title: "AI Video Production",
    description: "Captivate audiences with high-impact AI video production. High-retention reels, ads, promotional videos, and brand visuals engineered to convert.",
    iconBg: "linear-gradient(to bottom right, #a855f7, #6366f1)",
    media: "/services/ai-video-production.png",
    cardBg: "#051330",
    link: "/services/video"
  },
  {
    id: "graphic",
    icon: Pen,
    title: "Creative Designing",
    description: "Build a powerful brand presence with professional graphic design services. From logos to ad creatives and social media visuals.",
    iconBg: "linear-gradient(to bottom right, #f97316, #dc2626)",
    media: "/services/creative-designing.png",
    cardBg: "#051330",
    link: "/services/graphic-design"
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Marketing",
    description: "Drive growth with strategic content marketing. We create high-quality content, including blogs, creatives, and campaigns designed to engage and deliver measurable results.",
    iconBg: "linear-gradient(to bottom right, #14b8a6, #0891b2)",
    media: "/services/content-marketing.png",
    cardBg: "#051330",
    link: "/services/content-marketing"
  }
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>All Services</h2>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                href={service.link}
                className={styles.cardWrapper}
                style={{ backgroundColor: service.cardBg || "#051330" }}
              >
                {/* Photo Container */}
                <div 
                  className={styles.mediaContainer}
                  style={{ backgroundColor: service.cardBg || "#051330" }}
                >
                  <Image
                    src={service.media}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className={styles.media}
                    priority={service.id === "smm" || service.id === "seo"}
                  />
                </div>

                {/* Title Always Visible */}
                <div className={styles.titleOverlay}>
                  <h3 className={styles.permanentTitle}>{service.title}</h3>
                </div>

                {/* Hover Overlay */}
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <div 
                      className={styles.iconWrapper}
                      style={{ background: service.iconBg }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.description}>{service.description}</p>
                    <span className={styles.ctaButton}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
