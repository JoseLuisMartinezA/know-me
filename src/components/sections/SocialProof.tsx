"use client";

import { motion } from "framer-motion";

const technologies = [
    "React", "Next.js", "Tailwind CSS", "Supabase", "TypeScript", "Framer Motion", "WordPress", "Shopify"
];

const testimonials = [
    {
        quote: "Knowme transformó mi presencia digital por completo. Mi Media Kit ahora es profesional y convierte.",
        author: "Alex Rivera",
        role: "Content Creator"
    },
    {
        quote: "El diseño es impecable y la velocidad de carga es increíble. Mis clientes locales lo notaron de inmediato.",
        author: "Elena García",
        role: "Local Business Owner"
    },
    {
        quote: "Nunca imaginé que mi CV pudiera ser una experiencia tan fluida. Conseguí mi puesto soñado en semanas.",
        author: "Marco Rossi",
        role: "Senior Developer"
    }
];

export const SocialProof = () => {
    return (
        <section className="py-32 px-6 bg-slate overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Tech Carousel Placeholder */}
                <div className="mb-32">
                    <p className="text-center text-midnight/40 font-bold uppercase tracking-[0.3em] text-xs mb-12">
                        Tecnologías de clase mundial
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
                        {technologies.map((tech) => (
                            <span key={tech} className="text-2xl font-heading font-black text-midnight tracking-tighter">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-white p-12 rounded-[40px] border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="text-emerald-primary mb-8 text-4xl font-serif">&quot;</div>
                            <p className="text-lg text-midnight/70 italic leading-relaxed mb-10">
                                {t.quote}
                            </p>
                            <div>
                                <div className="font-heading font-bold text-midnight">{t.author}</div>
                                <div className="text-xs text-midnight/30 uppercase tracking-widest mt-1">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
