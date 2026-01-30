"use client";

import { Hero } from "@/components/sections/Hero";
import { BentoServices } from "@/components/sections/BentoServices";
import { Portfolio } from "@/components/sections/Portfolio";
import { LeadForm } from "@/components/sections/LeadForm";
import { Consultation } from "@/components/sections/Consultation";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Menu, X, Twitter, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <WhatsAppButton />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-lg border-b border-black/5 py-4 shadow-sm" : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="know me. logo" className="w-10 h-10 object-contain" />
            <span className="font-heading font-bold text-xl tracking-tight text-midnight">know me.</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#leads" className="text-midnight/60 hover:text-emerald-primary transition-colors text-sm font-medium">Servicios</a>
            <a href="#portfolio" className="text-midnight/60 hover:text-emerald-primary transition-colors text-sm font-medium">Casos de éxito</a>
            <a href="#" className="text-midnight/60 hover:text-emerald-primary transition-colors text-sm font-medium">Proceso</a>
            <a href="#consultation">
              <Button variant="outline" size="sm" className="border-emerald-primary/30 text-midnight hover:bg-emerald-primary/5">Contacto</Button>
            </a>
          </div>

          <button className="md:hidden text-midnight">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <Hero />

      <BentoServices />

      <Portfolio />

      <div id="leads">
        <LeadForm />
      </div>

      <Consultation />

      {/* Feature Section Placeholder to show the layout depth */}
      <section className="py-24 px-4 bg-slate">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Desarrollo Next.js", desc: "Rendimiento extremo con las últimas tecnologías." },
              { title: "Diseño Premium", desc: "Interfaces que cautivan a tus clientes desde el primer segundo." },
              { title: "SEO de Élite", desc: "Posicionamiento real para dominar tu mercado." }
            ].map((feature, i) => (
              <div
                key={i}
                className="p-10 rounded-[32px] bg-white border border-black/5 hover:border-emerald-primary/20 hover:shadow-xl hover:shadow-emerald-primary/5 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-emerald-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-primary/10 transition-all duration-500">
                  <div className="w-6 h-6 bg-emerald-primary/20 rounded-md" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading text-midnight">{feature.title}</h3>
                <p className="text-midnight/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-24 px-4 border-t border-black/5 bg-white font-body">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <img src="/logo.png" alt="know me. logo" className="w-10 h-10 object-contain" />
                <span className="font-heading font-bold text-xl tracking-tight text-midnight">know me.</span>
              </div>
              <p className="text-midnight/40 max-w-sm mb-10 text-lg leading-relaxed">
                Elevando marcas a través de la excelencia técnica y estética. La presencia digital que tu negocio merece.
              </p>
              <div className="flex items-center gap-4">
                <a href="mailto:hola@knowme.studio" className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-midnight/40 hover:text-emerald-primary hover:bg-emerald-primary/10 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-midnight/40 hover:text-emerald-primary hover:bg-emerald-primary/10 transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-midnight/40 hover:text-emerald-primary hover:bg-emerald-primary/10 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-8 text-midnight">Explorar</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-midnight/40 hover:text-emerald-primary transition-colors">Inicio</a></li>
                <li><a href="#leads" className="text-midnight/40 hover:text-emerald-primary transition-colors">Servicios</a></li>
                <li><a href="#portfolio" className="text-midnight/40 hover:text-emerald-primary transition-colors">Portafolio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-8 text-midnight">Contacto</h4>
              <ul className="space-y-4">
                <li className="text-midnight/40">hola@knowme.studio</li>
                <li><a href="#" className="text-emerald-primary hover:underline underline-offset-4 font-bold">Reserva una llamada</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden">
            <p className="text-midnight/20 text-sm">© 2026 know me. Todos los derechos reservados.</p>
            <div className="h-px flex-1 bg-black/5 mx-8 hidden md:block" />
            <p className="text-midnight/30 text-xs tracking-widest uppercase font-bold">
              Digital Excellence Studio
            </p>
          </div>
        </div>
      </footer>


    </div>
  );
}
