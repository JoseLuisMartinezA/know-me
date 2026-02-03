"use client";

import { motion } from "framer-motion";

export const Philosophy = () => {
    return (
        <section id="philosophy" className="py-32 px-6 bg-midnight text-white overflow-hidden rounded-[60px] mx-4 md:mx-10 my-10 relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-primary/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-primary/5 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-heading font-bold leading-tight"
                        >
                            La era digital no tiene por qué ser <span className="text-emerald-primary">fría.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
                            "En <span className="text-white font-bold">Knowme</span> no creemos en soluciones en serie. Creemos que cada pequeño empresario tiene una historia que merece ser contada con elegancia y que cada creador es, en esencia, una empresa propia."
                        </p>
                        <p className="text-lg text-white/40 leading-relaxed">
                            Nacimos para cerrar la brecha entre el talento y la tecnología. Mientras otros se limitan a &apos;hacer webs&apos;, nosotros construimos identidades digitales. Combinamos la precisión del diseño moderno con la calidez de un trato personalizado. Nuestra misión es simple: que cuando alguien te busque, lo que encuentre esté a la altura de quien eres.
                        </p>

                        <div className="pt-8 flex items-center gap-12">
                            <div>
                                <div className="text-3xl font-heading font-bold">100%</div>
                                <div className="text-sm text-white/40 uppercase tracking-widest mt-2">Personalizado</div>
                            </div>
                            <div className="w-px h-12 bg-white/10" />
                            <div>
                                <div className="text-3xl font-heading font-bold">4K</div>
                                <div className="text-sm text-white/40 uppercase tracking-widest mt-2">Detalle visual</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
