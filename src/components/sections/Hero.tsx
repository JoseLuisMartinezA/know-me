"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 px-4 bg-white">
            {/* Minimal Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-emerald-primary/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-[5%] right-[-5%] w-[30%] h-[30%] bg-emerald-primary/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-light border border-emerald-primary/10 text-emerald-secondary text-sm font-bold mb-10"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-primary"></span>
                    </span>
                    Disponible para nuevos proyectos
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-10 text-midnight"
                >
                    <span className="block leading-none">know me.</span>
                    <span className="text-emerald-primary">
                        Presencia digital <br /> de élite.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-midnight/50 max-w-3xl mx-auto mb-14 leading-relaxed font-medium"
                >
                    Elevamos tu marca con interfaces asombrosas y rendimiento extremo. Transformamos visiones en herramientas de conversión de alto nivel.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="#consultation">
                        <Button size="lg" className="group rounded-[20px] shadow-lg shadow-emerald-primary/10">
                            Empezar proyecto
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <a href="#portfolio">
                        <Button variant="outline" size="lg" className="rounded-[20px] bg-white border-black/5 hover:bg-slate text-midnight">
                            Ver portafolio
                        </Button>
                    </a>
                </motion.div>
            </div>

            {/* Subtle bottom border line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-primary/20 to-transparent" />

        </section>
    );
}
