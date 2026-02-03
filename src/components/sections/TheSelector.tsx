"use client";

import { motion } from "framer-motion";
import { Briefcase, User, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const sectors = [
    {
        id: "business",
        title: "Business",
        subtitle: "Impulsa tu comercio",
        description: "Webs corporativas y e-commerce de alto rendimiento.",
        icon: Briefcase,
        href: "/business",
        color: "from-blue-500/10 to-emerald-500/10",
    },
    {
        id: "creators",
        title: "Creators",
        subtitle: "Potencia tu influencia",
        description: "Personal branding y Media Kits para creadores.",
        icon: User,
        href: "/creators",
        color: "from-purple-500/10 to-pink-500/10",
    },
    {
        id: "pro",
        title: "Pro",
        subtitle: "Eleva tu carrera",
        description: "Portfolios y CVs web para profesionales de élite.",
        icon: GraduationCap,
        href: "/pro",
        color: "from-orange-500/10 to-yellow-500/10",
    },
];

export const TheSelector = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden py-24">
            <div className="text-center mb-16 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-heading font-bold text-midnight mb-6"
                >
                    Elige tu camino en el mundo digital.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-midnight/40 max-w-2xl mx-auto text-lg"
                >
                    Soluciones personalizadas diseñadas específicamente para tus necesidades y objetivos.
                </motion.p>
            </div>

            <div className="flex flex-col md:flex-row w-full h-[70vh] md:h-[600px] border-y border-black/5">
                {sectors.map((sector) => (
                    <Link
                        key={sector.id}
                        href={sector.href}
                        className={`relative flex-1 flex flex-col items-center justify-center p-12 transition-all duration-700 overflow-hidden group border-x border-black/5 ${hoveredId && hoveredId !== sector.id ? "opacity-30 grayscale-[0.8]" : "opacity-100"
                            }`}
                        onMouseEnter={() => setHoveredId(sector.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-b ${sector.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                        {/* Icon & Title */}
                        <div className="relative z-10 flex flex-col items-center text-center transition-transform duration-700 group-hover:-translate-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-10 group-hover:bg-midnight group-hover:text-white transition-all duration-500">
                                <sector.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-midnight/40 mb-4 group-hover:text-midnight transition-colors">
                                {sector.title}
                            </h3>

                            <p className="text-3xl md:text-4xl font-heading font-bold text-midnight leading-tight mb-8">
                                {sector.subtitle}
                            </p>

                            <p className="text-midnight/40 text-sm max-w-[250px] opacity-0 group-hover:opacity-100 transition-all duration-500">
                                {sector.description}
                            </p>
                        </div>

                        {/* CTA Overlay */}
                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <div className="flex items-center gap-4 text-midnight font-bold">
                                <span>Ver servicios</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>

                        {/* Hover Expand Effect (Animated Border or something subtle) */}
                        <div className={`absolute inset-0 border-2 border-emerald-primary/0 group-hover:border-emerald-primary/10 transition-all duration-700 pointer-events-none`} />
                    </Link>
                ))}
            </div>
        </section>
    );
};
