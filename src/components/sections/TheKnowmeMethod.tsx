"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "Auditoría de marca y análisis de objetivos para definir la estrategia digital ganadora.",
    },
    {
        number: "02",
        title: "Design",
        description: "Construcción visual y técnica de alto impacto con las tecnologías más modernas.",
    },
    {
        number: "03",
        title: "Go Live",
        description: "Lanzamiento oficial, optimización de rendimiento y monitoreo de conversión.",
    },
];

export const TheKnowmeMethod = () => {
    return (
        <section className="py-32 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <span className="text-emerald-primary font-bold tracking-[0.2em] text-sm uppercase">
                        Nuestro Proceso
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-midnight mt-4 leading-tight">
                        The Knowme Method.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Timeline Line */}
                    <div className="absolute top-0 left-0 w-full h-px bg-black/5 hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative pt-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute top-0 -translate-y-1/2 left-0 w-3 h-3 rounded-full bg-emerald-primary shadow-[0_0_15px_rgba(5,150,105,0.5)] hidden md:block" />

                            <div className="text-6xl font-heading font-black text-black/5 absolute top-0 right-0 leading-none">
                                {step.number}
                            </div>

                            <h3 className="text-2xl font-heading font-bold text-midnight mb-6 relative">
                                {step.title}
                            </h3>

                            <p className="text-midnight/50 leading-relaxed text-lg">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
