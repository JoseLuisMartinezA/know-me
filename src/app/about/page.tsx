"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { Philosophy } from "@/components/sections/Philosophy";
import { LeadForm } from "@/components/sections/LeadForm";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <PageLayout>
            <div className="pt-20">
                <section className="py-24 px-6 bg-white overflow-hidden text-center">
                    <div className="max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-heading font-black text-midnight mb-8"
                        >
                            Nuestra Filosofía
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-midnight/40 leading-relaxed"
                        >
                            En Knowme, fusionamos la precisión técnica con la calidez del diseño personalizado.
                        </motion.p>
                    </div>
                </section>

                <Philosophy />

                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                                    alt="Team briefing"
                                    className="rounded-[40px] shadow-2xl"
                                />
                            </div>
                            <div className="space-y-8">
                                <h2 className="text-4xl font-heading font-bold text-midnight leading-tight">
                                    Construyendo puentes digitales desde 2024.
                                </h2>
                                <p className="text-midnight/60 text-lg leading-relaxed">
                                    Creemos que cada píxel cuenta. Por eso, no usamos plantillas. Cada línea de código es escrita a medida para asegurar que el resultado final sea único, rápido y, sobre todo, efectivo.
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-4xl font-heading font-black text-emerald-primary mb-2">90+</div>
                                        <div className="text-xs uppercase tracking-widest font-bold text-midnight/30">Google PageSpeed</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-heading font-black text-emerald-primary mb-2">100%</div>
                                        <div className="text-xs uppercase tracking-widest font-bold text-midnight/30">Diseño Original</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <LeadForm />
            </div>
        </PageLayout>
    );
}
