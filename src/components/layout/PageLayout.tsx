"use client";

import { Navbar } from "./Navbar";
import { Mail, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Global Footer (Minimalist 3 columns) */}
            <footer className="py-24 px-6 border-t border-black/5 bg-white font-body">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                        <div>
                            <Link href="/" className="flex items-center gap-3 mb-8">
                                <img src="/logo.png" alt="know me. logo" className="w-8 h-8 object-contain" />
                                <span className="font-heading font-bold text-xl tracking-tight text-midnight">know me.</span>
                            </Link>
                            <p className="text-midnight/40 max-w-xs text-sm leading-relaxed">
                                Elevando marcas a través de la excelencia técnica y estética. La presencia digital que tu negocio merece.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-heading font-bold mb-8 text-midnight text-sm uppercase tracking-widest">Navegación</h4>
                            <ul className="space-y-4 text-sm">
                                <li><Link href="/" className="text-midnight/40 hover:text-emerald-primary transition-colors">Inicio</Link></li>
                                <li><Link href="/about" className="text-midnight/40 hover:text-emerald-primary transition-colors">Filosofía</Link></li>
                                <li><Link href="#leads" className="text-midnight/40 hover:text-emerald-primary transition-colors">Contacto</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-heading font-bold mb-8 text-midnight text-sm uppercase tracking-widest">Social</h4>
                            <div className="flex items-center gap-4">
                                <a href="#" className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-midnight/40 hover:text-emerald-primary hover:bg-emerald-primary/10 transition-all duration-300">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-midnight/40 hover:text-emerald-primary hover:bg-emerald-primary/10 transition-all duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="mailto:hola@knowme.studio" className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-midnight/40 hover:text-emerald-primary hover:bg-emerald-primary/10 transition-all duration-300">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-midnight/20 text-xs">© 2026 know me. Todos los derechos reservados.</p>
                        <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-midnight/30">
                            <Link href="#" className="hover:text-midnight">Aviso Legal</Link>
                            <Link href="#" className="hover:text-midnight">Privacidad</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
