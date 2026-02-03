"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const services = [
        { name: "Creators", href: "/creators", description: "Potencia tu influencia" },
        { name: "Business", href: "/business", description: "Impulsa tu comercio" },
        { name: "Pro", href: "/pro", description: "Eleva tu carrera" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-4 shadow-sm" : "bg-transparent py-8"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <img src="/logo.png" alt="know me. logo" className="w-10 h-10 object-contain transition-transform duration-500 group-hover:rotate-12" />
                    <span className="font-heading font-bold text-2xl tracking-tight text-midnight">know me.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-12">
                    <div className="relative group">
                        <button
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                            className="flex items-center gap-1 text-midnight/60 hover:text-emerald-primary transition-colors text-sm font-semibold tracking-wide"
                        >
                            Servicios
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {isServicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                    className="absolute top-full left-0 mt-4 w-64 p-2 bg-white rounded-2xl shadow-2xl border border-black/5 backdrop-blur-xl"
                                >
                                    {services.map((service) => (
                                        <Link
                                            key={service.name}
                                            href={service.href}
                                            className="block p-4 rounded-xl hover:bg-emerald-primary/5 transition-colors group"
                                        >
                                            <div className="font-heading font-bold text-midnight group-hover:text-emerald-primary transition-colors">
                                                Knowme. {service.name}
                                            </div>
                                            <div className="text-xs text-midnight/40 mt-1">{service.description}</div>
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/about" className="text-midnight/60 hover:text-emerald-primary transition-colors text-sm font-semibold tracking-wide">
                        Filosofía
                    </Link>

                    <Link href="#leads">
                        <Button variant="outline" size="sm" className="border-emerald-primary/20 text-midnight hover:bg-emerald-primary hover:text-white hover:border-emerald-primary px-8 rounded-full transition-all duration-300">
                            Contacto
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-midnight p-2 hover:bg-black/5 rounded-full transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-black/5 overflow-hidden"
                    >
                        <div className="px-6 py-12 flex flex-col gap-8">
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    href={service.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex flex-col gap-1"
                                >
                                    <span className="text-2xl font-heading font-bold text-midnight">Knowme. {service.name}</span>
                                    <span className="text-sm text-midnight/40">{service.description}</span>
                                </Link>
                            ))}
                            <Link
                                href="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-2xl font-heading font-bold text-midnight"
                            >
                                Filosofía
                            </Link>
                            <Link href="#leads" onClick={() => setIsMenuOpen(false)}>
                                <Button className="w-full py-6 rounded-2xl bg-midnight text-white">
                                    Contáctanos
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
