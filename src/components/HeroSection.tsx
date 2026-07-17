"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay },
});

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden flex items-center justify-center min-h-screen pt-12"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video.mp4"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Subtle yellow tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 via-transparent to-amber-900/30" />

      {/* Content centered */}
      <div className="relative max-w-3xl mx-auto w-full px-6 sm:px-10 py-20 text-center flex flex-col items-center gap-8">
        <motion.span
          {...fadeIn(0.1)}
          className="inline-flex w-fit items-center gap-2 text-xs font-semibold tracking-widest uppercase text-yellow-200 border border-yellow-500/50 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
          Smart Hiring IRL
        </motion.span>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-white max-w-3xl"
        >
          Construimos equipos globales que impulsan la{" "}
          <em className="not-italic text-yellow-300">innovación</em>.
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-yellow-100/80 text-base md:text-lg max-w-2xl leading-relaxed"
        >
          En Smart Hiring IRL identificamos, incorporamos y gestionamos talento
          internacional para fortalecer las operaciones y el crecimiento de las
          empresas que forman parte del grupo Online Health.
        </motion.p>

        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#opportunities"
            className="bg-white text-yellow-700 px-7 py-3.5 rounded-full font-semibold hover:bg-yellow-50 transition-colors shadow-lg shadow-black/10"
          >
            Ver oportunidades
          </a>
          <a
            href="#about"
            className="text-yellow-100 underline underline-offset-4 hover:text-white transition-colors text-sm font-medium"
          >
            Conoce más
          </a>
        </motion.div>

        <motion.p
          {...fadeIn(0.65)}
          className="text-yellow-200/60 text-xs"
        >
          Parte del grupo OnliHealth &middot; Talento global, resultados locales
        </motion.p>
      </div>
    </section>
  );
}
