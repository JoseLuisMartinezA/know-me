"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { LeadForm } from "@/components/sections/LeadForm";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Smartphone, Share2, Target } from "lucide-react";

export default function CreatorsPage() {
    return (
        <PageLayout>
            <section className="relative py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                            >
                                <span className="text-emerald-primary font-bold tracking-[0.3em] text-sm uppercase">Knowme. Creators</span>
                                <h1 className="text-5xl md:text-8xl font-heading font-black text-midnight leading-[0.9] tracking-tighter">
                                    Potencia tu <br /><span className="text-emerald-primary">Influencia.</span>
                                </h1>
                                <p className="text-xl text-midnight/40 leading-relaxed max-w-xl">
                                    Centralizamos tu marca personal en una sola plataforma. Media Kits dinámicos, portfolios verticales y una presencia digital que convierte seguidores en oportunidades de negocio.
                                </p>
                                <div className="flex items-center gap-6">
                                    <a href="#leads">
                                        <Button size="lg" className="rounded-full px-10">Agendar Auditoría</Button>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex-1 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative bg-slate rounded-[60px] p-12 overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800"
                                    alt="Creator mockup"
                                    className="rounded-[30px] shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 px-6 bg-slate">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Share2,
                                title: "Centralización",
                                desc: "Un solo enlace para dominarlos a todos. Todas tus redes y proyectos en un sitio web de alto nivel."
                            },
                            {
                                icon: Target,
                                title: "Media Kits",
                                desc: "Presenta tus métricas de forma profesional y dinámica. Actualizaciones en tiempo real para marcas."
                            },
                            {
                                icon: Smartphone,
                                title: "Mobile First",
                                desc: "Diseño optimizado específicamente para el consumo en dispositivos móviles, donde vive tu audiencia."
                            },
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-12 rounded-[40px] border border-black/5 hover:shadow-xl transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-primary/10 flex items-center justify-center text-emerald-primary mb-8">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-midnight mb-4">{feature.title}</h3>
                                <p className="text-midnight/50 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <LeadForm />
        </PageLayout>
    );
}
