import Image from "next/image";
import Hero from "@/components/main/Hero/Hero";
import About from "@/components/main/About/About";
import Features from "@/components/main/Features/Features";
import Footer from "@/components/main/Footer/Footer";

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
