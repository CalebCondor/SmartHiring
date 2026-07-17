"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Búsqueda y selección",
    description:
      "Identificamos profesionales en Latinoamérica y el mundo que se ajustan al rol, al equipo y a la cultura de tu empresa.",
  },
  {
    number: "02",
    title: "Onboarding internacional",
    description:
      "Nos encargamos de contratos, documentación y cumplimiento para que el talento empiece a operar sin fricciones.",
  },
  {
    number: "03",
    title: "Gestión operativa",
    description:
      "Acompañamos al talento mes a mes: seguimiento, evaluación, soporte y resolución deIssues que aparezcan en el camino.",
  },
  {
    number: "04",
    title: "Formación continua",
    description:
      "Planes de capacitación y desarrollo profesional para que cada integrante crezca dentro de tu organización.",
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
    <section id="servicios" className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          {...fadeUp(0)}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-600 mb-5">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            De la búsqueda{" "}
            <span className="text-yellow-500">al acompañamiento.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            Cuatro etapas, una sola célula. Smart Hiring IRL cubre el ciclo
            completo de incorporar y gestionar talento internacional.
          </p>
        </motion.div>

        {/* Services — grid limpio */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              {...fadeUp(0.1 + i * 0.05)}
              className="border-t border-gray-200 pt-6"
            >
              <span className="block text-xs font-mono text-yellow-500 mb-4">
                {s.number}
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
