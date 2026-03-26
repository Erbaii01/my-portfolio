import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { OceanBackground } from "@/components/ocean-background";
import { ServicesSection } from "@/components/services-section";
import { TechStackSection } from "@/components/tech-stack-section";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <OceanBackground />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <HeroSection />
        <TechStackSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </main>
  );
}
