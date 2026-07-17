"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const [open, setOpen] = useState(false);

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

  function handleOpenChange(o: boolean) {
    setOpen(o);
    if (!o) {
      setSubmitted(false);
      setForm(initialState);
    }
  }

  return (
    <section id="contact" className="pt-16 md:pt-20 pb-16 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-4 tracking-widest uppercase border border-green-200">
            <MessageSquare className="w-3.5 h-3.5" />
            Get in touch
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold text-gray-900 mb-4">
            Let&apos;s talk about your <span className="text-green-600">next project</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8 text-sm">
            Write to us and we&apos;ll respond within 24 hours.
          </p>

          <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger
              render={
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-8 py-5 font-semibold gap-2 shadow-lg shadow-yellow-900/10">
                  Send us a message <Send className="w-4 h-4" />
                </Button>
              }
            />
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Send us a message</DialogTitle>
              </DialogHeader>
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Message sent!</h3>
                    <p className="text-gray-500 text-sm">
                      Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-green-200 text-green-600 hover:bg-green-50 rounded-full mt-2"
                    onClick={() => { setSubmitted(false); setForm(initialState); }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="name">
                          Full name <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="mt-1.5 focus-visible:ring-green-500"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">
                          Email address <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="mt-1.5 focus-visible:ring-green-500"
                        />
                      </Field>
                    </div>

                    <Field>
                      <FieldLabel htmlFor="company">Company / Organization</FieldLabel>
                      <FieldDescription>Optional — helps us understand your context.</FieldDescription>
                      <Input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="mt-1.5 focus-visible:ring-green-500"
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </FieldLabel>
                      <FieldDescription>Tell us about your project or inquiry.</FieldDescription>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project and how we can help…"
                        className="mt-1.5 resize-none focus-visible:ring-green-500"
                      />
                    </Field>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-5 font-semibold gap-2 mt-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>Send message <Send className="w-4 h-4" /></>
                      )}
                    </Button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting you agree to be contacted regarding your inquiry.
                    </p>
                  </FieldGroup>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="border-0 shadow-none bg-green-600 text-white h-full">
              <CardContent className="p-7 flex flex-col gap-5">
                <h3 className="font-bold text-base">Contact information</h3>
                {[
                  { Icon: MapPin, label: "Address", value: "1452 Av. Manuel Fernández Juncos, San Juan, PR 00909", href: undefined },
                  { Icon: Phone, label: "Phone", value: "+1 (787) 296-9450", href: "tel:+17872969450" },
                  { Icon: Mail, label: "Email", value: "info@onlinehealth.us", href: "mailto:info@onlinehealth.us" },
                  { Icon: MessageSquare, label: "WhatsApp", value: "Message us on WhatsApp", href: "https://wa.me/17872969450" },

                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wide font-medium mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-white text-sm hover:text-white/80 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="border border-gray-100 overflow-hidden rounded-xl bg-white h-full min-h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.5!2d-66.0706!3d18.4548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1452+Av.+Manuel+Fernandez+Juncos+San+Juan+PR!5e0!3m2!1ses!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Online Health PR Map"
              />
            </div>
          </motion.div>

          {/* Hours */}
       
        </div>
      </div>
    </section>
  );
}
