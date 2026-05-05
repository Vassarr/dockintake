import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhoFor from "@/components/WhoFor";
import Problem from "@/components/Problem";
import SpeedWins from "@/components/SpeedWins";
import HowItWorks from "@/components/HowItWorks";
import LiveDemo from "@/components/LiveDemo";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingAIButton from "@/components/FloatingAIButton";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-ink text-cream">
      <Nav />
      <Hero />
      <WhoFor />
      <Problem />
      <SpeedWins />
      <HowItWorks />
      <LiveDemo />
      <Features />
      <Pricing />
      <FinalCTA />
      <Footer />
      <FloatingAIButton />
    </main>
  );
}
