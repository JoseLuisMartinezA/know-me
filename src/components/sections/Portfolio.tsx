"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const projects = [
    {
        title: "LU FIT",
        description: "Plataforma de alto rendimiento para el seguimiento de rutinas y nutrición avanzada.",
        image: "/projects/lufit.png",
        link: "https://lufit.vercel.app",
        tags: ["Next.js", "Fitness"],
    },
    {
        title: "Space Community",
        description: "Comunidad digital futurista para entusiastas del espacio.",
        image: "/projects/space.png",
        link: "https://space-cmty.vercel.app",
        tags: ["React", "Custom UI"],
    }
];

interface PortfolioProps {
    isOpen: boolean;
    onClose: () => void;
}

export function Portfolio({ isOpen, onClose }: PortfolioProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-white overflow-y-auto"
                >
                    {/* Header bar */}
                    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5 px-6 py-6 transition-all duration-300">
                        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
                            <div className="flex items-center gap-4">
                                <span className="font-heading font-bold text-xl tracking-tight text-midnight uppercase">know me.</span>
                                <span className="px-3 py-1 bg-emerald-light text-emerald-primary text-[10px] font-bold uppercase rounded-full">Portafolio</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-12 h-12 rounded-full hover:bg-black/5 flex items-center justify-center transition-all duration-300 group bg-slate border border-black/5"
                            >
                                <X className="w-6 h-6 text-midnight group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 py-24">
                        <div className="mb-24">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-emerald-primary font-bold tracking-widest uppercase text-xs mb-4 block"
                            >
                                Digital Excellence
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-7xl font-bold font-heading text-midnight tracking-tighter"
                            >
                                Proyectos <span className="text-emerald-primary">Seleccionados.</span>
                            </motion.h2>
                            <p className="text-xl text-midnight/40 mt-8 max-w-2xl font-medium leading-relaxed">
                                Una muestra de nuestra capacidad técnica y obsesión por el detalle. Transformamos visiones complejas en interfaces sencillas y potentes.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="group"
                                >
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block space-y-8">
                                        <div className="relative aspect-[16/10] overflow-hidden rounded-[40px] bg-slate border border-black/5 shadow-sm group-hover:shadow-xl group-hover:shadow-emerald-primary/5 transition-all duration-700">
                                            <div className="absolute inset-0 bg-emerald-primary/0 group-hover:bg-emerald-primary/5 transition-colors duration-700 z-10" />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl text-midnight border border-black/5">
                                                    <ExternalLink className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4 px-2">
                                            <div className="flex items-center gap-3">
                                                <div className="h-px w-8 bg-emerald-primary/30" />
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.map((tag, i) => (
                                                        <span key={i} className="text-[10px] font-bold text-emerald-primary uppercase tracking-widest">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-bold font-heading text-midnight group-hover:translate-x-2 transition-transform duration-500">
                                                {project.title}
                                            </h3>
                                            <p className="text-lg text-midnight/50 font-medium leading-relaxed max-w-md">
                                                {project.description}
                                            </p>
                                        </div>
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer in overlay */}
                        <div className="mt-40 pt-20 border-t border-black/5 text-center">
                            <p className="text-midnight/30 font-bold uppercase tracking-[0.2em] text-sm mb-10">¿Listo para el siguiente nivel?</p>
                            <Button onClick={onClose} size="lg" className="rounded-2xl px-12">Empezar mi proyecto</Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
