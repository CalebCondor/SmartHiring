"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const links = [
  { href: "/", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = !scrolled;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 font-bold">
          <div className="relative h-12 sm:h-14 shrink-0">
            <svg
              viewBox="0 0 60 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full text-yellow-500"
              aria-hidden="true"
            >
              <path
                d="M15 78 L42 5"
                stroke="currentColor"
                strokeWidth="18"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-none -space-y-2">
            <span
              className={`text-2xl sm:text-3xl font-black tracking-widest transition-colors duration-300 ${
                onHero ? "text-white drop-shadow-md" : "text-gray-800"
              }`}
            >
              smart
            </span>
            <span
              className={`text-2xl sm:text-3xl font-black tracking-widest transition-colors duration-300 ${
                onHero ? "text-white drop-shadow-md" : "text-gray-800"
              }`}
            >
              hir<span className="text-yellow-500">i</span>ng
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                onHero
                  ? "text-white/90 hover:text-yellow-300 drop-shadow"
                  : "text-gray-600 hover:text-yellow-500"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="inline-flex items-center justify-center h-9 px-5 text-sm font-medium bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition-colors shadow-lg shadow-black/20"
          >
            Contáctanos
          </a>
        </div>

        {/* Mobile trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden transition-colors ${
                  onHero
                    ? "text-white hover:bg-white/10"
                    : "text-gray-700 hover:bg-yellow-50"
                }`}
              />
            }
          >
            <Menu className="w-5 h-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-white p-0">
            <div className="p-6">
              <div className="flex items-center gap-1 mb-1">
                <div className="relative h-11 shrink-0">
                  <svg
                    viewBox="0 0 60 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full text-yellow-500"
                    aria-hidden="true"
                  >
                    <path
                      d="M15 78 L42 5"
                      stroke="currentColor"
                      strokeWidth="18"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col -space-y-1 leading-none font-poppins">
                  <span className="text-xl font-black text-gray-800 tracking-wide">
                    smart
                  </span>
                  <span className="text-xl font-black text-gray-800 tracking-wide">
                    hir<span className="text-yellow-500">i</span>ng
                  </span>
                </div>
              </div>
            </div>
            <Separator />
            <nav className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-gray-700 text-sm font-medium hover:bg-yellow-50 hover:text-yellow-500 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-full"
              >
                <a href="#contacto" onClick={() => setOpen(false)}>
                  Contacto
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
