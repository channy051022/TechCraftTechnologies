import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Services from "@/components/Services";
import WhyTechCraft from "@/components/WhyTechCraft";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Technology from "@/components/Technology";
import BusinessMindset from "@/components/BusinessMindset";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <Hero />
      {/* Hidden for now: <LogoCloud /> */}
      <Services />
      <WhyTechCraft />
      {/* Hidden for now: <Stats /> */}
      <Process />
      {/* Hidden for now: <Portfolio /> */}
      {/* Hidden for now: <Technology /> */}
      <BusinessMindset />
      <Team />
      {/* Hidden for now: <Testimonials /> */}
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
