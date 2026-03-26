import { Mail, MessageCircleMore } from "lucide-react";

import { FadeInSection } from "@/components/fade-in-section";

export function ContactSection() {
  return (
    <FadeInSection id="contact" className="pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="rounded-2xl border border-[#32406e] bg-gradient-to-br from-[#0f1630] to-[#120c25] p-8 md:p-10">
        <p className="text-sm text-[#98a9df]">Contact / CTA</p>
        <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
          Let&apos;s Talk
        </h2>
        <p className="mt-3 max-w-2xl text-[#a7b0c8]">
          Ready to automate your operations and unlock growth? Reach out and
          let&apos;s build a solution that saves your team time every week.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:edemrbaii@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-[#415084] bg-[#111a34] px-4 py-2 text-sm text-white transition hover:border-[#6782df]"
          >
            <Mail size={16} />
            edemrbaii@gmail.com
          </a>
          <a
            href="https://de.fiverr.com/s/dDy9ZDY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#4f7cff] to-[#8a5bff] px-5 py-2.5 font-medium text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a5bff]"
          >
            <MessageCircleMore size={16} />
            Message on Fiverr
          </a>
        </div>
      </div>
    </FadeInSection>
  );
}
