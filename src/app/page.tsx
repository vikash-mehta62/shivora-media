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
  alternates: { canonical: "https://www.shivoramedia.com/" },
};

export default function Home() {
  return (
    <>
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
