"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const verticals = [
  {
    name: "Health.",
    description:
      "Telemedicine, medical certifications, hospital denial management, and clinical case tools. It's where we started and where we keep investing.",
  },
  {
    name: "Government Services.",
    description:
      "Platforms that move citizen cases through public agencies in Puerto Rico — faster, with less friction. CescoOnline.com is our flagship in this vertical.",
  },
  {
    name: "AI Support.",
    description:
      "Virtual assistants, conversational agents, and intelligent case routing powered by state-of-the-art language models.",
  },
  {
    name: "Customer Operations.",
    description:
      "Systems that help businesses track, resolve, and learn from every customer interaction.",
  },
  {
    name: "SaaS.",
    description:
      "Proprietary and custom software products built around case and workflow management.",
  },
  {
    name: "Automation.",
    description:
      "We turn repetitive case handling into clean, auditable, low-touch workflows.",
  },
];

const reasons = [
  {
    title: "We treat every case like it matters.",
    description:
      "Healthcare taught us that a case isn't a ticket — it's someone waiting for an answer. We design systems where nothing falls through, status is always visible, and resolution is the metric that counts.",
  },
  {
    title: "We build what we operate.",
    description:
      "We don't sell software we've never run in production. Our own platforms serve thousands of real cases — and that informs how we build for our clients.",
  },
  {
    title: "The health of your business is measurable.",
    description:
      "Cycle time, resolution rate, abandonment, cost per case. We build software that surfaces those numbers and moves them in the right direction.",
  },
  {
    title: "Puerto Rico as a base, not a ceiling.",
    description:
      "We know the island's operational and commercial context, but we design architecture that scales beyond it.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

export function ServicesSection() {
  return (
    <section id="services" className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-25">
        {/* ── What we do ── */}
        <div>
          <motion.div {...fadeUp(0)} className="mb-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-4 tracking-widest uppercase border border-green-200">
            <Layers className="w-3.5 h-3.5" />
            What we do
          </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">
              Six verticals,{" "}
              <span className="text-green-600">one discipline.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {verticals.map((v, i) => (
              <motion.p
                key={v.name}
                {...fadeUp(i * 0.07)}
                className="text-gray-600 leading-relaxed text-sm border-l-2 border-green-200 pl-4"
              >
                <span className="font-semibold text-gray-900">{v.name}</span>{" "}
                {v.description}
              </motion.p>
            ))}
          </div>
        </div>

        {/* ── Why Online Health ── */}
        <div>
          <motion.div {...fadeUp(0)} className="mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">
              Why{" "}
              <span className="text-green-600">Online Health</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                {...fadeUp(i * 0.1)}
                className="flex flex-col gap-2"
              >
                <h3 className="font-semibold text-green-700 text-base leading-snug">
                  {r.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {r.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
