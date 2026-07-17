import { Activity, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const projects = [
  { href: "https://islandmedpr.com", label: "IslandMedPR.com" },
  { href: "https://doctorrecetas.com", label: "DoctorRecetas.com" },
  { href: "https://cescoonline.com/", label: "CescoOnline.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="relative w-8 h-8 shrink-0">
            <svg
              viewBox="0 0 100 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-green-600"
            >
              <path
                d="M25 65C15 65 8 58 8 48C8 38 18 32 25 32C25 20 38 10 55 10C70 10 82 20 82 35C92 35 98 42 98 52C98 62 90 65 82 65H25Z"
                fill="white"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinejoin="round"
              />
              <path
                d="M40 38H60M50 28V48"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
            Online Health <span className="text-green-600">LLC</span>
          </span>
        </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Since 2017, we have developed innovative software for the
              healthcare industry in Puerto Rico. Nearly 10 years transforming
              medical care with cutting-edge technology.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <span>
                  1452 Av. Manuel Fernández Juncos, San Juan, PR 00909
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400 shrink-0" />
                <a
                  href="tel:+17872969450"
                  className="hover:text-white transition-colors"
                >
                  +1 (787) 296-9450
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-400 shrink-0" />
                <a
                  href="mailto:info@onlinehealthpr.com"
                  className="hover:text-white transition-colors"
                >
                 info@onlinehealth.us
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-5">
              Projects
            </h4>
            <ul className="flex flex-col gap-3">
              {projects.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col items-center gap-4 text-xs text-gray-500">
          <p className="text-center">© {year} Online Health PR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
