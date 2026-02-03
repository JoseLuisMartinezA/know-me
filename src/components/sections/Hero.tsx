"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 bg-white">
            {/* Animated Subtle Gradient Background */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-primary/10 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-primary/5 blur-[100px] rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-midnight/30">
                        Knowme Digital Studio
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter mb-12 text-midnight leading-[0.9]"
                >
                    Tu nombre es <br />
                    <span className="text-emerald-primary">tu marca.</span> <br />
                    <span className="text-5xl md:text-7xl lg:text-8xl text-midnight/10">Haz que signifique algo.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-midnight/50 max-w-2xl mx-auto mb-16 leading-relaxed"
                >
                    Estrategia, diseño y desarrollo de alto impacto para quienes no se conforman con lo ordinario.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8"
                >
                    <Link href="#leads">
                        <Button size="lg" className="rounded-full px-12 py-8 text-lg bg-midnight text-white hover:bg-emerald-primary transition-all duration-500 group">
                            Empezar ahora
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="/about" className="text-midnight font-bold border-b-2 border-transparent hover:border-emerald-primary transition-all pb-1">
                        Nuestra filosofía
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
            >
                <div className="w-px h-24 bg-gradient-to-b from-emerald-primary/50 to-transparent" />
            </motion.div>
        </section>
    );
}
