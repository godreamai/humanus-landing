import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { LocationContact } from "@/components/sections/LocationContact";
import { PilatesSection } from "@/components/sections/PilatesSection";
import { RehabilitationAreas } from "@/components/sections/RehabilitationAreas";
import { Services } from "@/components/sections/Services";
import { RevealObserver } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <RehabilitationAreas />
        <PilatesSection />
        <Gallery />
        <LocationContact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <RevealObserver />
    </>
  );
}
