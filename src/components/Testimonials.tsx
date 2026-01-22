"use client";
import { useState, useEffect } from "react";
import { Quote, Star, MessageSquare, ChevronLeft, ChevronRight, Building2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO",
    company: "TechStart India",
    industry: "Technology",
    image: "RK",
    rating: 5,
    text: "Shivora Media transformed our digital presence completely. Our organic traffic increased by 400% in just 6 months. Their SEO team is exceptional and always goes above and beyond. The ROI we've seen is incredible!",
    result: "400% Traffic Growth",
    service: "SEO Services"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "Fashion Hub",
    industry: "E-commerce",
    image: "PS",
    rating: 5,
    text: "The social media campaigns they created went viral! We gained 100K followers in 3 months and our sales doubled. Their creative team understands our brand perfectly. Best decision we made!",
    result: "100K New Followers",
    service: "Social Media Marketing"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Founder",
    company: "PropertyKing",
    industry: "Real Estate",
    image: "AP",
    rating: 5,
    text: "Their PPC management is outstanding. We're getting 5x return on our ad spend. The team is responsive, professional, and truly understands our business goals. Highly recommend their services!",
    result: "5x ROAS Achieved",
    service: "PPC Advertising"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Director",
    company: "HealthPlus",
    industry: "Healthcare",
    image: "SR",
    rating: 5,
    text: "From branding to website development, Shivora handled everything perfectly. Our new brand identity has received amazing feedback from customers and partners. They truly understand brand building!",
    result: "Complete Brand Overhaul",
    service: "Brand Identity"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Owner",
    company: "FoodieExpress",
    industry: "Food & Beverage",
    image: "VS",
    rating: 5,
    text: "The content marketing strategy they developed helped us become a thought leader in our industry. Blog traffic is up 300% and quality leads are pouring in! Their content team is incredibly talented.",
    result: "300% Blog Traffic",
    service: "Content Marketing"
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
    <section id="testimonials" className="py-20 sm:py-28 relative overflow-hidden section-alt">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blob-blue opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto mb-12" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
          <div className="card rounded-3xl p-8 sm:p-12 shadow-2xl relative">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 badge-bg opacity-50" />

            {/* Service Badge */}
            <div className="inline-block px-4 py-1.5 bg-[var(--golden-yellow)]/20 text-gold rounded-full text-sm font-medium mb-6">
              {testimonials[active].service}
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 icon-gold fill-current" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-secondary mb-8 leading-relaxed font-medium">
              &quot;{testimonials[active].text}&quot;
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[active].image}
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonials[active].name}</div>
                  <div className="text-muted">{testimonials[active].role}</div>
                  <div className="flex items-center gap-2 text-sm badge-text">
                    <Building2 className="w-4 h-4" />
                    {testimonials[active].company}
                  </div>
                </div>
              </div>
              <div className="card rounded-xl px-6 py-3 shadow-md">
                <div className="text-sm text-muted">Result Achieved</div>
                <div className="text-xl font-bold icon-gold">
                  {testimonials[active].result}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:-left-6">
              <button onClick={prev} className="w-12 h-12 card rounded-full flex items-center justify-center shadow-lg hover:bg-brand hover:text-white transition">
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:-right-6">
              <button onClick={next} className="w-12 h-12 card rounded-full flex items-center justify-center shadow-lg hover:bg-brand hover:text-white transition">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all ${
                active === i
                  ? "w-10 h-3 bg-brand rounded-full"
                  : "w-3 h-3 bg-[var(--border-color)] rounded-full hover:bg-brand/50"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`card rounded-xl p-4 text-left transition-all hover-primary ${
                active === i ? "active-border shadow-lg" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white text-sm font-bold">
                  {t.image}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm truncate">{t.name}</div>
                  <div className="text-muted text-xs truncate">{t.company}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 icon-gold fill-current" />
                ))}
              </div>
              <div className="text-xs badge-text font-medium">{t.result}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
