"use client";

import { motion } from "framer-motion";

const services = [
    {
        category: "Creators",
        title: "Potencia tu influencia digital",
        description: "Creamos Media Kits interactivos y centralizamos todas tus redes en un portfolio vertical optimizado para móviles. Tu marca personal merece una infraestructura que convierta seguidores en socios.",
        details: ["Media Kits Dinámicos", "Personal Branding", "Centralización de Redes"],
        mockup: "iPhone",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        reverse: false,
    },
    {
        category: "Business",
        title: "Impulsa tu comercio local",
        description: "Webs corporativas diseñadas para captar clientes locales. Optimizamos tu presencia en Google Maps e implementamos sistemas de reserva o venta directa con un diseño premium y funcional.",
        details: ["Webs de Alto Rendimiento", "Optimización Google Business", "Automatización de Reservas"],
        mockup: "iPad",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
        reverse: true,
    },
    {
        category: "Pro",
        title: "Eleva tu carrera profesional",
        description: "Tu CV ya no es un PDF. Es una experiencia web. Diseñamos portfolios elegantes para profesionales que buscan destacar en procesos de selección de alto nivel o consultoría.",
        details: ["CV Web Interactivo", "Optimización LinkedIn", "Consultoría de Marca"],
        mockup: "MacBook",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800",
        reverse: false,
    },
];

export const ServiceDetails = () => {
    return (
        <section className="py-32 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="space-y-48">
                    {services.map((service, index) => (
                        <div
                            key={service.category}
                            className={`flex flex-col ${service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16 lg:gap-24`}
                        >
                            <div className="flex-1 space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, x: service.reverse ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <span className="text-emerald-primary font-bold tracking-[0.2em] text-sm uppercase">
                                        {service.category}
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-midnight mt-4 mb-6 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-midnight/60 leading-relaxed mb-10 max-w-xl">
                                        {service.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.details.map((detail) => (
                                            <div key={detail} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-primary" />
                                                <span className="text-sm font-semibold text-midnight/80">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            <div className="flex-1 relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="relative w-full h-full flex items-center justify-center p-8 bg-slate rounded-[40px] overflow-hidden group"
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover rounded-[24px] shadow-2xl transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                                    {/* Floating badge to label the device type mentioned in briefing */}
                                    <div className="absolute top-12 left-12 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-black/5 font-bold text-xs uppercase tracking-widest text-midnight">
                                        {service.mockup} Preview
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
