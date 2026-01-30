"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Calendar } from "lucide-react";

export function Consultation() {
    return (
        <section id="consultation" className="py-32 px-4 bg-white relative section-border">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left Column: Percuassive Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold font-heading mb-8 text-midnight tracking-tighter">
                            Reserva tu <span className="text-emerald-primary">Consultoría Estratégica</span>
                        </h2>
                        <p className="text-xl text-midnight/50 mb-12 leading-relaxed">
                            ¿Listo para escalar? Agenda una llamada de 15 minutos para analizar tu proyecto. Sin compromiso, solo estrategia real para tu negocio.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Análisis de negocio profundo",
                                "Presupuesto a medida sin compromiso",
                                "Hoja de ruta técnica profesional"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-light rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-primary" />
                                    </div>
                                    <span className="text-midnight/70 font-bold text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Calendly Embed Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="glass rounded-[40px] overflow-hidden min-h-[500px] border border-black/5 relative shadow-2xl shadow-black/5">
                            <iframe
                                src="https://calendly.com/joseluismartinez2305/30min?hide_landing_page=1&hide_gdpr_banner=1&background_color=ffffff&text_color=0a0a0a&primary_color=10b981"
                                width="100%"
                                height="500"
                                frameBorder="0"
                                className="relative z-10"
                                title="Calendly Scheduling"
                            ></iframe>

                            {/* Optional: Add a loading spinner behind iframe */}
                            <div className="absolute inset-0 flex items-center justify-center -z-10">
                                <Calendar className="w-10 h-10 text-emerald-primary/10 animate-pulse" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
