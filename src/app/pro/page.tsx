"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { LeadForm } from "@/components/sections/LeadForm";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, UserCheck, Briefcase, Award } from "lucide-react";

export default function ProPage() {
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
                                <span className="text-emerald-primary font-bold tracking-[0.3em] text-sm uppercase">Knowme. Pro</span>
                                <h1 className="text-5xl md:text-8xl font-heading font-black text-midnight leading-[0.9] tracking-tighter">
                                    Eleva tu <br /><span className="text-emerald-primary">Carrera.</span>
                                </h1>
                                <p className="text-xl text-midnight/40 leading-relaxed max-w-xl">
                                    Tu trayectoria profesional merece una vitrina a la altura. Portfolios personales y CVs web que destacan por su elegancia y claridad técnica.
                                </p>
                                <div className="flex items-center gap-6">
                                    <a href="#leads">
                                        <Button size="lg" className="rounded-full px-10">Crear mi Perfil Pro</Button>
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
                                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
                                    alt="Professional portfolio mockup"
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
                                icon: UserCheck,
                                title: "Marca Personal",
                                desc: "No eres solo un CV. Te ayudamos a proyectar la autoridad y elegancia que tu nivel profesional exige."
                            },
                            {
                                icon: Briefcase,
                                title: "Portfolio de Impacto",
                                desc: "Muestra tus casos de éxito y proyectos con una narrativa visual que cautive a empleadores y socios."
                            },
                            {
                                icon: Award,
                                title: "Autoridad Digital",
                                desc: "Optimización de LinkedIn e integración con herramientas de productividad y redes profesionales."
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
