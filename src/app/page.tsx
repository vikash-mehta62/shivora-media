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
        <Team />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
