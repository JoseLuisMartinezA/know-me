"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Lock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Sistemas de Alto Rendimiento para Profesionales del Fitness",
        description: "No es solo una web. Es una máquina de captación con gestión de agendas, pagos integrados y área privada para tus clientes.",
        icon: Zap,
        size: "large",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        title: "Autoridad Digital",
        description: "Estructuras sólidas para empresas que buscan liderar su sector. Optimización SEO y carga instantánea.",
        icon: Shield,
        size: "medium",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "know me. Elite",
        description: "Seguridad, soporte y actualizaciones 24/7 para que nunca dejes de vender.",
        icon: Lock,
        size: "small",
        className: "md:col-span-1 md:row-span-1",
    },
];

export function BentoServices() {
    return (
        <section className="py-32 px-4 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-emerald-secondary font-bold tracking-widest uppercase text-xs bg-emerald-light px-4 py-2 rounded-full"
                    >
                        Nuestras Soluciones
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mt-8 font-heading text-midnight tracking-tighter"
                    >
                        Ingeniería Digital de <span className="text-emerald-primary">Élite</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "group relative overflow-hidden rounded-[40px] bg-white border border-black/5 p-10 transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-primary/5 hover:translate-y-[-8px] flex flex-col justify-between",
                                service.className
                            )}
                        >
                            {/* Subtle background accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-emerald-primary/10 transition-colors duration-700" />

                            <div>
                                <div className="mb-10 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate border border-black/5 text-midnight/20 group-hover:text-emerald-primary group-hover:bg-emerald-light group-hover:border-emerald-primary/10 transition-all duration-500">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className={cn(
                                    "font-bold font-heading mb-6 text-midnight tracking-tight",
                                    service.size === 'large' ? "text-3xl md:text-4xl" : "text-2xl"
                                )}>
                                    {service.title}
                                </h3>
                                <p className="text-midnight/50 leading-relaxed text-lg">
                                    {service.description}
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-3 text-midnight/30 text-xs font-bold uppercase tracking-widest group-hover:text-emerald-primary transition-colors">
                                <span>Ver detalles</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Proof Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-center gap-6 text-center"
                >
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate shadow-sm" />
                        ))}
                    </div>
                    <p className="text-midnight/40 text-base font-medium">
                        Impulsando negocios con <span className="text-midnight font-bold">tecnología de vanguardia</span> e <span className="text-emerald-secondary/80">IA integrada</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}


