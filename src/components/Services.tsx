"use client";
import Image from "next/image";
import Link from "next/link";
import { Search, Share2, DollarSign, Pen, Video, FileText, ArrowRight } from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    description: "Dominate Google search results and drive organic traffic that converts. Our data-driven SEO strategies help you outrank competitors.",
    iconBg: "linear-gradient(to bottom right, #3b82f6, #2563eb)",
    media: "/vid/seo service.gif",
    mediaType: "image",
    link: "/services/seo"
  },
  {
    id: "smm",
    icon: Share2,
    title: "Social Media Marketing",
    description: "Transform followers into loyal customers. We create engaging content, manage your social presence, and run targeted campaigns.",
    iconBg: "linear-gradient(to bottom right, #ec4899, #9333ea)",
    media: "/vid/social media.mp4",
    mediaType: "video",
    link: "/services/social-media"
  },
  {
    id: "ppc",
    icon: DollarSign,
    title: "Pay-Per-Click Advertising",
    description: "Get immediate results with targeted paid campaigns. We manage Google Ads, Facebook Ads, Instagram Ads to maximize your ROI.",
    iconBg: "linear-gradient(to bottom right, #10b981, #059669)",
    media: "/vid/performance marketing .mp4",
    mediaType: "video",
    link: "/services/ppc"
  },
  {
    id: "graphic",
    icon: Pen,
    title: "Creative Designing",
    description: "Build a powerful brand presence with professional graphic design services. From logos to ad creatives and social media visuals.",
    iconBg: "linear-gradient(to bottom right, #f97316, #dc2626)",
    media: "/vid/graphic designing .mp4",
    mediaType: "video",
    link: "/services/graphic-design"
  },
  {
    id: "video",
    icon: Video,
    title: "Video Production",
    description: "Capture attention with high-impact video production. We create reels, ad videos, promotional videos, and brand films.",
    iconBg: "linear-gradient(to bottom right, #a855f7, #6366f1)",
    media: "/vid/video production services  .gif",
    mediaType: "image",
    link: "/services/video"
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Marketing",
    description: "Drive growth with strategic content marketing. We create high-quality content, including social media posts, blogs, creatives, and campaigns designed to engage audiences, strengthen brand voice, and deliver measurable results across digital platforms.",
    iconBg: "linear-gradient(to bottom right, #14b8a6, #0891b2)",
    media: "/vid/contentmarketing.mp4",
    mediaType: "video",
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
              <div key={service.id} className={styles.cardWrapper}>
                {/* Video/GIF Background */}
                <div className={styles.mediaContainer}>
                  {service.mediaType === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={styles.media}
                    >
                      <source src={service.media} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={service.media}
                      alt={service.title}
                      fill
                      unoptimized
                      className={styles.media}
                    />
                  )}
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
                    <Link
                      href={service.link}
                      className={styles.ctaButton}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
