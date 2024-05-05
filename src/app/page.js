import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
      <main >
        <Hero />
        <About />
        <Features />
        <Footer/>
      </main>
  );
}
