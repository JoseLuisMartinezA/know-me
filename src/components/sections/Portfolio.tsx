"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

const projects = [
    {
        title: "LU FIT",
        description: "Plataforma de alto rendimiento para el seguimiento de rutinas y nutrición avanzada. Optimizada para la máxima conversión en el sector fitness.",
        image: "/projects/lufit.png",
        link: "https://lufit.vercel.app",
        tags: ["Next.js", "Supabase", "Framer Motion", "Fitness"],
        color: "emerald"
    },
    {
        title: "Space Community",
        description: "Comunidad digital futurista para entusiastas del espacio. Una experiencia inmersiva con diseño de vanguardia y funcionalidades sociales avanzadas.",
        image: "/projects/space.png",
        link: "https://space-cmty.vercel.app",
        tags: ["React", "Custom UI", "Space Tech", "Community"],
        color: "midnight"
    }
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-32 px-4 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-emerald-secondary font-bold tracking-widest uppercase text-xs bg-emerald-light px-4 py-2 rounded-full mb-6 inline-block"
                    >
                        Selección de Proyectos
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-heading text-midnight tracking-tighter"
                    >
                        Casos de <span className="text-emerald-primary">Éxito.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 gap-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
                        >
                            {/* Project Image Container */}
                            <div className="w-full lg:w-3/5 group relative">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <div className="relative overflow-hidden rounded-[48px] bg-slate border border-black/5 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-emerald-primary/10">
                                        <div className="absolute inset-0 bg-emerald-primary/0 group-hover:bg-emerald-primary/5 transition-colors duration-700 z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl text-midnight transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                                <ExternalLink className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* Project Content */}
                            <div className="w-full lg:w-2/5 space-y-8">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-1.5 bg-slate border border-black/5 rounded-full text-xs font-bold text-midnight/40 uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-4xl md:text-5xl font-bold font-heading text-midnight tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-xl text-midnight/50 leading-relaxed font-medium">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="lg" className="rounded-2xl border-emerald-primary/20 hover:bg-emerald-primary/5 text-midnight group">
                                            Explorar Proyecto
                                            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action for more projects */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 p-16 rounded-[48px] bg-slate border border-black/5 text-center flex flex-col items-center gap-8 shadow-sm"
                >
                    <h3 className="text-3xl font-bold text-midnight font-heading">¿Quieres ver más de nuestro trabajo?</h3>
                    <p className="text-midnight/40 max-w-xl mx-auto text-lg leading-relaxed">
                        Cada proyecto es una oportunidad para redefinir los límites de lo posible. Descubre cómo podemos elevar tu marca.
                    </p>
                    <Button size="lg" className="rounded-2xl shadow-xl shadow-emerald-primary/10">
                        Conversemos ahora
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
