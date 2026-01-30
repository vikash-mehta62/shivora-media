"use client";
import Image from "next/image";
import { Search, Share2, DollarSign, Pen, Video, ArrowRight } from "lucide-react";

const services = [
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    description: "Dominate Google search results and drive organic traffic that converts. Our data-driven SEO strategies help you outrank competitors.",
    iconBg: "bg-[#6B8CFF]",
    media: "/vid/seo service.gif",
    mediaType: "image",
    link: "/services/seo"
  },
  {
    id: "smm",
    icon: Share2,
    title: "Social Media Marketing",
    description: "Transform followers into loyal customers. We create engaging content, manage your social presence, and run targeted campaigns.",
    iconBg: "bg-[#6B8CFF]",
    media: "/vid/social media.mp4",
    mediaType: "video",
    link: "/services/social-media"
  },
  {
    id: "ppc",
    icon: DollarSign,
    title: "Pay-Per-Click Advertising",
    description: "Get immediate results with targeted paid campaigns. We manage Google Ads, Facebook Ads, Instagram Ads to maximize your ROI.",
    iconBg: "bg-[#6B8CFF]",
    media: "/vid/performance marketing .mp4",
    mediaType: "video",
    link: "/services/ppc"
  },
  {
    id: "graphic",
    icon: Pen,
    title: "Creative Designing",
    description: "Build a powerful brand presence with professional graphic design services. From logos to ad creatives and social media visuals.",
    iconBg: "bg-[#6B8CFF]",
    media: "/vid/graphic designing .mp4",
    mediaType: "video",
    link: "/services/graphic-design"
  },
  {
    id: "video",
    icon: Video,
    title: "Video Production",
    description: "Capture attention with high-impact video production. We create reels, ad videos, promotional videos, and brand films optimized for social media.",
    iconBg: "bg-[#6B8CFF]",
    media: "/vid/video production services  .gif",
    mediaType: "image",
    link: "/services/video"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 relative overflow-hidden">
      <div className="max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">All Services</h2>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="flip-card-container">
              <div className="flip-card-inner-wrapper">
                {/* FRONT SIDE - Icon + Title */}
                <div className="flip-card-front-side card rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>

                {/* BACK SIDE - Video + Description */}
                <div className="flip-card-back-side rounded-2xl overflow-hidden shadow-xl relative">
                  {/* Video/GIF Background */}
                  <div className="absolute inset-0 z-0">
                    {service.mediaType === "video" ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={service.media} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={service.media}
                        alt={service.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    )}
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">{service.description}</p>
                    <a 
                      href={service.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .flip-card-container {
          perspective: 1000px;
          height: 320px;
        }

        .flip-card-inner-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s ease;
          transform-style: preserve-3d;
        }

        .flip-card-container:hover .flip-card-inner-wrapper {
          transform: rotateY(180deg);
        }

        .flip-card-front-side,
        .flip-card-back-side {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back-side {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
