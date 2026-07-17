"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", company: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  function reset() {
    setSubmitted(false);
    setForm(initialState);
  }

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  });

  const inputClass =
    "w-full bg-transparent border-0 border-b border-gray-200 px-0 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-yellow-500 transition-colors";

  return (
    <section id="contacto" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-600 mb-5">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Cuéntanos lo que{" "}
            <span className="text-yellow-500">estás construyendo.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            Respondemos en menos de 24 horas. Sin formularios eternos, sin
            llamadas innecesarias — solo una conversación directa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — contact info */}
          <motion.div
            {...fadeUp(0.1)}
            className="md:col-span-4 flex flex-col gap-8"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">
                Email
              </p>
              <a
                href="mailto:hola@smarthiring.us"
                className="text-base md:text-lg text-gray-900 hover:text-yellow-500 transition-colors font-medium"
              >
                hola@smarthiring.us
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">
                Ubicación
              </p>
              <p className="text-base md:text-lg text-gray-900 font-medium">
                Lima, Peru
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Operación remota con equipos en LATAM y EE. UU.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 leading-relaxed">
                Parte del grupo{" "}
                <span className="text-gray-900 font-medium">OnliHealth</span>.
                Casi 10 años diseñando plataformas de salud, talento y
                operaciones.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div {...fadeUp(0.2)} className="md:col-span-8">
            {submitted ? (
              <div className="flex flex-col items-start gap-5 py-8">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Mensaje enviado.
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Gracias por escribirnos. Te respondemos en menos de 24
                    horas.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={reset}
                  className="text-sm text-yellow-600 hover:text-yellow-700 underline underline-offset-4 font-medium mt-2"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500"
                    >
                      Nombre <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className={`${inputClass} mt-2`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500"
                    >
                      Email <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className={`${inputClass} mt-2`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500"
                  >
                    Empresa
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="¿De dónde nos escribes?"
                    className={`${inputClass} mt-2`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500"
                  >
                    Mensaje <span className="text-yellow-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué necesitas o qué estás construyendo…"
                    className={`${inputClass} mt-2 resize-none`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-gray-400">
                    Al enviar aceptas ser contactado por nuestro equipo.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 disabled:opacity-60 text-white rounded-full px-7 py-3 text-sm font-semibold transition-colors shadow-md shadow-yellow-900/10"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Enviando…
                      </>
                    ) : (
                      <>
                        Enviar mensaje <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
