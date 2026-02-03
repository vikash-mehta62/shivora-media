"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Award, Zap, ChevronLeft, ChevronRight } from "lucide-react";

const stats = [
  { number: "500+", label: "Projects Delivered", icon: TrendingUp },
  { number: "150+", label: "Happy Clients", icon: Users },
  { number: "8+", label: "Years Experience", icon: Award },
  { number: "25+", label: "Awards Won", icon: Star },
];

const features = [
  "Result-Driven Strategies",
  "Dedicated Account Manager", 
  "Monthly Performance Reports",
  "24/7 Support Available"
];

const sliderImages = [
  { src: "/slider/1.jpeg", alt: "Project 1" },
  { src: "/slider/2.PNG", alt: "Project 2" },
  { src: "/slider/7.jpeg", alt: "Project 3" },
  // { src: "/slider/9.jpeg", alt: "Project 4" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-blue opacity-40 animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-gold opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blob-blue opacity-20"></div>
      </div>

      <div className="mx-auto max-w-[92%] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <div className={`${mounted ? "animate-slide-up" : "opacity-0"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 badge-bg rounded-full mb-3">
              <Zap className="w-3.5 h-3.5 icon-gold" />
              <span className="text-xs font-medium badge-text">
                #1 Digital Marketing Agency in India
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
              <span className="">Rank, Grow & Succeed</span>
              <span className=" text-gold">{" "}Online</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-secondary mb-4 max-w-xl leading-relaxed">
              A results-driven digital marketing company offering search engine optimization (SEO), 
              social media management, video production, video marketing, paid advertising, content 
              creation, and web design services. Turning businesses into powerful digital brands.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 icon-primary shrink-0" />
                  <span className="text-xs sm:text-sm text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a href="#contact" className="px-5 py-2.5 btn-primary rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 group">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="px-5 py-2.5 btn-outline rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2">
                <Play className="w-4 h-4" /> View Our Work
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-brand border-2 border-white dark:border-bg-primary flex items-center justify-center text-white text-[10px] font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-xs">150+ Happy Clients</div>
                  <div className="flex items-center gap-1 icon-gold">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="w-2.5 h-2.5 fill-current" />)}
                    <span className="text-muted ml-1 text-[10px]">5.0</span>
                  </div>
                </div>
              </div>
              <div className="h-8 w-px bg-secondary-light hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 icon-gold" />
                <div className="text-xs">
                  <div className="font-semibold text-xs">Google Partner</div>
                  <div className="text-muted text-[10px]">Certified Agency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className={`relative ${mounted ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            {/* Main Image/Card */}
            <div className="relative">
              <div className="card rounded-2xl p-5 sm:p-6 shadow-2xl">
                {/* Logo */}
                <div className="relative w-full aspect-square max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-xl border-4 border-brand-light">
                  <Image src="/logo.jpeg" alt="Shivora Media" fill className="object-cover" priority />
                </div>
                
                {/* Stats below logo */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {stats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="text-center p-3 bg-secondary-light rounded-xl">
                      <stat.icon className="w-5 h-5 icon-gold mx-auto mb-1.5" />
                      <div className="text-xl sm:text-2xl font-bold heading-primary">{stat.number}</div>
                      <div className="text-[10px] text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-3 -left-3 card rounded-xl p-3 shadow-xl animate-float hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-green-500">+340%</div>
                    <div className="text-[10px] text-muted">Traffic Growth</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 card rounded-xl p-3 shadow-xl animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 icon-gold" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">5x</div>
                    <div className="text-[10px] text-muted">ROI Achieved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

     

        {/* Image Slider - 2 Images Per Slide */}
        <div className="mt-6 sm:mt-8">
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-out gap-3"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {sliderImages.map((image, index) => (
                  <div
                    key={index}
                    className="min-w-full flex gap-3"
                  >
                    {/* Show 2 images per slide */}
                    {sliderImages.slice(index, index + 2).map((img, i) => {
                      const actualIndex = (index + i) % sliderImages.length;
                      return (
                        <div key={i} className="flex-1 relative h-[200px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
                          <Image
                            src={sliderImages[actualIndex].src}
                            alt={sliderImages[actualIndex].alt}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition shadow-lg z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 icon-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition shadow-lg z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 icon-primary" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-1.5 mt-3">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-brand w-6"
                      : "bg-gray-300 dark:bg-gray-600 w-1.5 hover:bg-brand/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
