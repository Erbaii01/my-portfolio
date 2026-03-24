import { BrainCircuit, Code2, Database, Globe, Workflow } from "lucide-react";

import { FadeInSection } from "@/components/fade-in-section";

const stackItems = [
  { label: "Python", icon: Database },
  { label: "JavaScript", icon: Code2 },
  { label: "OpenAI", icon: BrainCircuit },
  { label: "Make.com", icon: Workflow },
  { label: "Web Scraping", icon: Globe },
];

export function TechStackSection() {
  return (
    <FadeInSection className="py-10 md:py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          Tech Stack
        </h2>
        <p className="mt-2 text-[#9aa3b7]">
          Tools I use to build reliable, high-impact automations.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stackItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-2xl border border-[#26304e] bg-[#0c1020] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <Icon className="mb-3 text-[#7f9cff]" size={20} />
              <p className="font-medium text-white">{item.label}</p>
            </div>
          );
        })}
      </div>
    </FadeInSection>
  );
}
