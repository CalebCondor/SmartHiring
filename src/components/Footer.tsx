import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#talento", label: "Para talento" },
  { href: "#empresas", label: "Para empresas" },
  { href: "#blog", label: "Blog" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 md:py-20">
        {/* Top — brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-1 font-bold">
              <div className="relative h-10 shrink-0">
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
              <div className="flex flex-col leading-none -space-y-1">
                <span className="text-xl font-black text-white tracking-wide">
                  smart
                </span>
                <span className="text-xl font-black text-white tracking-wide">
                  hir<span className="text-yellow-500">i</span>ng
                </span>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-gray-400 max-w-sm">
              Célula de talento del grupo OnliHealth. Construimos equipos
              globales que impulsan la innovación.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com/company/smarthiring"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-500 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/smarthiring"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-500 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-[0.2em] mb-5">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-[0.2em] mb-5">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <a
                  href="mailto:hola@smarthiring.us"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  hola@smarthiring.us
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Lima, Peru
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {year} Smart Hiring IRL. Parte del grupo OnliHealth.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <a href="#privacidad" className="hover:text-yellow-500 transition-colors">
              Privacidad
            </a>
            <a href="#terminos" className="hover:text-yellow-500 transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
