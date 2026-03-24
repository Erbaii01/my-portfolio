import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { FadeInSection } from "@/components/fade-in-section";

export function HeroSection() {
  return (
    <FadeInSection className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
      <div>
        <p className="mb-4 inline-flex rounded-full border border-[#2d3555] bg-[#101528] px-3 py-1 text-xs text-[#8ea4ff]">
          Student · Python &amp; AI automation
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-5xl">
          I automate your business with Python &amp; AI.
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base text-[#9aa3b7] md:text-lg">
          Save hours every week, eliminate repetitive tasks, and scale faster
          with intelligent workflows built for your business.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#4f7cff] to-[#8a5bff] px-5 py-3 font-medium text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a5bff]"
        >
          Let&apos;s Talk <ArrowRight size={16} />
        </a>
      </div>

      <div className="mx-auto w-full max-w-sm">
        <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-[#4f63a8]/60 bg-[#0d1220] p-1 shadow-[0_0_70px_rgba(83,111,255,0.35),inset_0_0_0_1px_rgba(138,91,255,0.25)] ring-1 ring-[#6d8bff]/40">
          <div className="relative h-full w-full overflow-hidden rounded-[1.75rem]">
            <Image
              src="/profile.png"
              alt="Professional headshot — student focused on Python and AI automation"
              width={400}
              height={400}
              className="h-full w-full object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
