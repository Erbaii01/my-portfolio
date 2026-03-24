import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { TechStackSection } from "@/components/tech-stack-section";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(circle_at_20%_15%,rgba(88,126,255,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(154,78,255,0.16),transparent_30%)]"
      />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <HeroSection />
        <TechStackSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </main>
  );
}
