import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* <HowItWorks />
      <FAQ />
      <Contact />
      <ScrollToTop />
      <Footer /> */}
    </main>
  );
}
