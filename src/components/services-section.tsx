"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Code2,
  Cog,
  DatabaseZap,
  MessagesSquare,
} from "lucide-react";

import { FadeInSection } from "@/components/fade-in-section";

const services = [
  {
    title: "Automation",
    description:
      "Remove repetitive workflows and streamline operations across your business.",
    icon: Cog,
  },
  {
    title: "AI Chatbots",
    description:
      "Deploy smart assistants that answer questions and handle customer conversations.",
    icon: Bot,
  },
  {
    title: "Web Scraping",
    description:
      "Collect and structure web data for lead generation, pricing, and market research.",
    icon: DatabaseZap,
  },
  {
    title: "JavaScript Web Dev",
    description:
      "Build performant, modern web experiences with clean UI and conversion-focused UX.",
    icon: Code2,
  },
  {
    title: "AI Integrations",
    description:
      "Connect OpenAI and external APIs into workflows that deliver real business outcomes.",
    icon: MessagesSquare,
  },
];

export function ServicesSection() {
  return (
    <FadeInSection className="py-10 md:py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          What I Do
        </h2>
        <p className="mt-2 text-[#9aa3b7]">
          End-to-end services to automate work and accelerate growth.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-2xl border border-[#293250] bg-[#0d1326] p-6 transition-colors hover:border-[#4960b7]"
            >
              <Icon className="mb-4 text-[#90a9ff]" size={24} />
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#9aa3b7]">
                {service.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </FadeInSection>
  );
}
