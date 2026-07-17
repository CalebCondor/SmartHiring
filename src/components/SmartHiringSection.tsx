"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Globe2,
  Network,
  Users,
} from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Equipos internos",
    description:
      "Contratamos talento remoto para integrarlo a la fuerza laboral del grupo OnliHealth, no para ofrecer servicios a terceros.",
    accent: "bg-green-50 border-green-100",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Globe2,
    title: "Alcance global",
    description:
      "Operamos fuera de Puerto Rico y Estados Unidos para consolidar equipos diversos y altamente calificados.",
    accent: "bg-emerald-50 border-emerald-100",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Building2,
    title: "Estructura corporativa",
    description:
      "Smart Hiring IRL es la subsidiaria de OnliHealth dedicada a construir la base humana del grupo.",
    accent: "bg-teal-50 border-teal-100",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

export function SmartHiringSection() {
  return (
    <section id="smarthiring" className="py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-12">
        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="space-y-4 max-w-3xl mx-auto text-left md:text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold tracking-widest uppercase border border-green-200">
            <Network className="w-3.5 h-3.5" />
            SmartHiring
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold text-gray-900">
            OnliHealth y Smart Hiring IRL:{" "}
            <span className="text-green-600">
              una estructura para escalar equipos globales.
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            OnliHealth es la compañía matriz y Smart Hiring IRL es su
            subsidiaria. Desde ahí identificamos, incorporamos y gestionamos
            talento remoto —fuera de Puerto Rico y Estados Unidos— para
            integrarlo a las operaciones del grupo.
          </p>
        </motion.div>

        {/* ── Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                {...fadeUp(i * 0.1)}
                className={`rounded-2xl border ${p.accent} p-6 flex flex-col gap-3`}
              >
                <div
                  className={`inline-flex items-center justify-center h-10 w-10 rounded-xl ${p.iconBg} ${p.iconColor}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900 text-base leading-snug">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}