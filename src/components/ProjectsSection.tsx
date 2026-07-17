"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Layers } from "lucide-react";

const projects = [
  {
    id: "islandmed",
    name: "IslandMedPR.com",
    tagline: "100% Digital Medical Cannabis Certifications",
    url: "https://islandmedpr.com",
    since: "2017",
    number: "01",
    image: "/islamed_a.jpeg",
    accentColor: "#4ade80",
    accentDark: "#16a34a",
    category: "Telemedicine · Medical Cannabis",
    description:
      "Puerto Rico\u2019s leading platform for 100% digital medical cannabis certifications. Residents and tourists get certified in 24\u201348 hours.",
  },
  {
    id: "doctorrecetas",
    name: "DoctorRecetas.com",
    tagline: "Medical Consultations from Home, in Minutes",
    url: "https://doctorrecetas.com",
    since: "2020",
    number: "02",
    image: "/doctorrecetas_a.jpeg",
    accentColor: "#34d399",
    accentDark: "#059669",
    category: "Telemedicine · Prescriptions",
    description:
      "Medical consultations with general practitioners, internists, and specialists for certificates and prescription refills from $24.99, from home, in minutes.",
  },
  {
    id: "cescoonline",
    name: "CescoOnline.com",
    tagline: "Handle CESCO Processes Online",
    url: "https://cescoonline.com",
    since: "2021",
    number: "03",
    image: "/cescoonline.png",
    accentColor: "#60a5fa",
    accentDark: "#1d4ed8",
    category: "Government Services",
    description:
      "A digital gateway for Puerto Rico drivers to handle CESCO-related processes online \u2014 without standing in line.",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative flex flex-col rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-visible"
    >
      {/* Screenshot */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={`Screenshot de ${project.name}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index === 0}
        />
      </div>

      {/* Text content */}
      <div className="px-6 pt-5 pb-6 flex flex-col flex-1">
        <p className="text-[11px] text-gray-400 uppercase tracking-widest font-medium mb-2">
          {project.category}
        </p>
        <h3 className="text-xl font-extrabold text-gray-900 leading-snug tracking-tight mb-3">
          {project.tagline}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border"
            style={{
              color: project.accentDark,
              borderColor: `${project.accentColor}50`,
              background: `${project.accentColor}15`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: project.accentColor }}
            />
            In production since {project.since}
          </span>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ background: project.accentColor, color: "#0a0a0a" }}
          >
            Visit
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-4 tracking-widest uppercase border border-green-200">
            <Layers className="w-3.5 h-3.5" />
            Our platforms
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold text-gray-900 mb-4">
            Products{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">
              in production.
            </span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Three active platforms serving thousands of real cases across healthcare and government in Puerto Rico.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
