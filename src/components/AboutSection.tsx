"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "500+", label: "Profesionales incorporados" },
  { value: "12", label: "Países" },
];

const principles = [
  {
    title: "Talento sin fronteras",
    description:
      "Conectamos profesionales de Latinoamérica y el mundo con oportunidades en empresas que crecen.",
  },
  {
    title: "Selección con criterio",
    description:
      "Filtramos por habilidades técnicas, comunicación y encaje cultural — no solo por currículum.",
  },
  {
    title: "Acompañamiento real",
    description:
      "No soltamos talento al aire. Seguimiento, formación y soporte durante todo el proceso.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-600 mb-5">
            Sobre nosotros
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Personas correctas,{" "}
            <span className="text-yellow-500">en el momento correcto.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            Smart Hiring IRL es la célula de talento del grupo Online Health.
            Integramos equipos internacionales en operaciones que necesitan
            escalar sin perder calidad.
          </p>
        </motion.div>

   

        {/* Principles — minimalist list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
        >
          {principles.map((p, i) => (
            <div key={p.title}>
              <span className="block text-xs font-mono text-yellow-500 mb-3">
                0{i + 1}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
