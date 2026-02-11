"use client";
import { useState, useEffect } from "react";
import { Quote, Star, MessageSquare, ChevronLeft, ChevronRight, Building2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "CEO",
    company: "TechStart India",
    industry: "Technology",
    image: "AM",
    rating: 5,
    text: "Our website traffic grew by over 380% in just 4 months. Shivora Media's SEO and content strategy actually delivers results, not just promises.",
    result: "380% Traffic Growth",
    service: "SEO Services"
  },
  {
    id: 2,
    name: "Pooja Iyer",
    role: "Founder",
    company: "Fashion Hub",
    industry: "E-commerce",
    image: "PI",
    rating: 5,
    text: "From logo to brand presence, everything was transformed. Our brand now looks premium and trustworthy.",
    result: "Complete Brand Overhaul",
    service: "Brand Identity"
  },
  {
    id: 3,
    name: "Vivek Tiwari",
    role: "Owner",
    company: "PropertyKing",
    industry: "Real Estate",
    image: "VT",
    rating: 5,
    text: "Our local visibility and inquiry calls increased consistently. Very professional and transparent team.",
    result: "Increased Local Visibility",
    service: "Local SEO"
  },
  {
    id: 4,
    name: "Shruti Mishra",
    role: "Director",
    company: "HealthPlus",
    industry: "Healthcare",
    image: "SM",
    rating: 5,
    text: "Brand storytelling and creatives are beautifully done. Customers now recognize us instantly.",
    result: "Strong Brand Recognition",
    service: "Creative Designing"
  },
  {
    id: 5,
    name: "Arjun Malviya",
    role: "Marketing Head",
    company: "FoodieExpress",
    industry: "Food & Beverage",
    image: "AM",
    rating: 5,
    text: "The video quality, storytelling, and editing were excellent. Every video looked professional and aligned perfectly with our brand.",
    result: "Professional Video Content",
    service: "Video Production"
  },
  {
    id: 6,
    name: "Neha Choudhary",
    role: "Founder",
    company: "StyleHub",
    industry: "Fashion",
    image: "NC",
    rating: 5,
    text: "Content planning, posting consistency, and engagement management were handled very smoothly. Our social presence feels active and premium now.",
    result: "Premium Social Presence",
    service: "Social Media Marketing"
  },
  {
    id: 7,
    name: "Rohit Sharma",
    role: "Business Owner",
    company: "TechSolutions",
    industry: "Technology",
    image: "RS",
    rating: 5,
    text: "Facebook ad campaigns were well-structured and result-oriented. We received quality leads with clear reporting and optimization.",
    result: "Quality Lead Generation",
    service: "Facebook Ads"
  },
  {
    id: 8,
    name: "Aakriti Singh",
    role: "Marketing Manager",
    company: "BeautyBrand",
    industry: "Beauty & Wellness",
    image: "AS",
    rating: 5,
    text: "Creative reels and targeted Instagram ads helped us reach the right audience. Engagement and inquiries increased noticeably.",
    result: "Increased Engagement",
    service: "Instagram Marketing"
  },
  {
    id: 9,
    name: "Vikas Patel",
    role: "CEO",
    company: "EduTech Pro",
    industry: "Education",
    image: "VP",
    rating: 5,
    text: "Google Ads brought consistent inquiries and improved conversions. The team optimized campaigns regularly to control costs and improve results.",
    result: "Improved Conversions",
    service: "Google Ads"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-4 relative overflow-hidden section-alt">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blob-blue opacity-20"></div>
      </div>

      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 badge-bg rounded-full mb-4">
            <MessageSquare className="w-4 h-4 icon-primary" />
            <span className="text-sm font-medium badge-text">Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="heading-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what business owners and marketing 
            leaders say about working with Shivora Media.
          </p>
        </div>

       

        {/* All Testimonials Grid */}
        <div className="relative">
          {/* Main Active Testimonial Card */}
          <div className="mb-8 overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-2">
                  <div className="card rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        {t.image}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-bold text-xl">{t.name}</h4>
                            <p className="text-muted text-sm">{t.role} at {t.company}</p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(t.rating)].map((_, j) => (
                              <Star key={j} className="w-5 h-5 icon-gold fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 rounded-full mb-4">
                          <Building2 className="w-3 h-3 icon-primary" />
                          <span className="text-xs font-medium badge-text">{t.service}</span>
                        </div>
                      </div>
                    </div>
                    <Quote className="w-10 h-10 icon-primary opacity-20 mb-4" />
                    <p className="text-lg text-secondary leading-relaxed mb-6">{t.text}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full">
                      <span className="text-sm font-semibold text-green-600">{t.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={prev}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              className="w-12 h-12 card rounded-full flex items-center justify-center hover-primary transition shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all ${
                    active === i
                      ? "w-8 h-2 bg-brand rounded-full"
                      : "w-2 h-2 bg-[var(--border-color)] rounded-full hover:bg-brand/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              className="w-12 h-12 card rounded-full flex items-center justify-center hover-primary transition shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`card rounded-xl p-3 text-center transition-all hover-primary ${
                  active === i ? "active-border shadow-lg scale-105" : "opacity-60"
                }`}
              >
                <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center text-white text-xs font-bold mx-auto mb-2">
                  {t.image}
                </div>
                <div className="text-xs font-semibold truncate">{t.name.split(' ')[0]}</div>
                <div className="flex gap-0.5 justify-center mt-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-2 h-2 icon-gold fill-current" />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
