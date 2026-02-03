"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function LeadForm() {
    const [state, setState] = useState<FormState>('idle');
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        interest: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setState('submitting');

        if (!supabase) {
            console.error('Supabase client is not initialized.');
            setState('error');
            return;
        }

        const { error } = await supabase
            .from('leads')
            .insert([{
                ...formData,
                niche: formData.interest, // Mapping interest to niche for database compatibility
            }]);

        if (error) {
            console.error('Error submitting lead:', error);
            setState('error');
            return;
        }

        setState('success');
    };

    if (state === 'success') {
        return (
            <div className="bg-midnight py-32 px-6 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <div className="w-24 h-24 bg-emerald-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-12 h-12 text-emerald-primary" />
                    </div>
                    <h3 className="text-4xl font-bold mb-6 font-heading text-white">¡Hagámoslo realidad!</h3>
                    <p className="text-white/40 mb-10 text-xl leading-relaxed">
                        He recibido tu mensaje. Me pondré en contacto contigo en menos de 24 horas para empezar a construir tu identidad digital.
                    </p>
                    <Button
                        onClick={() => setState('idle')}
                        variant="primary"
                        size="lg"
                        className="rounded-full px-12"
                    >
                        Enviar otro mensaje
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <section id="leads" className="py-32 px-6 bg-midnight text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-10 leading-tight">
                            ¿Estás listo para que el mundo te <span className="text-emerald-primary">conozca?</span>
                        </h2>
                        <p className="text-white/40 text-xl max-w-lg mb-12 leading-relaxed">
                            No te conformes con una web más. Construyamos una herramienta de conversión de alto nivel.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-primary">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-semibold">Respuesta en menos de 24h</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-primary">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-semibold">Análisis estratégico gratuito</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="space-y-8 p-10 bg-white/5 backdrop-blur-xl border border-white/5 rounded-[40px]">
                            <div className="space-y-4">
                                <label className="text-xs font-bold uppercase tracking-widest text-emerald-primary ml-1">Nombre</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-emerald-primary transition-all placeholder:text-white/20 text-white font-medium"
                                    value={formData.full_name}
                                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-bold uppercase tracking-widest text-emerald-primary ml-1">Email</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="hola@ejemplo.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-emerald-primary transition-all placeholder:text-white/20 text-white font-medium"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-bold uppercase tracking-widest text-emerald-primary ml-1">Interés</label>
                                <select
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-emerald-primary transition-all appearance-none cursor-pointer text-white font-medium"
                                    value={formData.interest}
                                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                >
                                    <option value="" disabled className="bg-midnight">Selecciona tu perfil</option>
                                    <option value="Creators" className="bg-midnight">Knowme. Creators</option>
                                    <option value="Business" className="bg-midnight">Knowme. Business</option>
                                    <option value="Pro" className="bg-midnight">Knowme. Pro</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-bold uppercase tracking-widest text-emerald-primary ml-1">Mensaje</label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Cuéntame sobre tu proyecto..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-emerald-primary transition-all placeholder:text-white/20 text-white font-medium resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <Button
                                disabled={state === 'submitting'}
                                className="w-full py-6 rounded-2xl font-bold text-xl bg-emerald-primary hover:bg-emerald-primary/80 text-white"
                            >
                                {state === 'submitting' ? (
                                    <>
                                        <Loader2 className="mr-3 animate-spin w-6 h-6" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Hagámoslo realidad
                                        <Send className="ml-3 w-6 h-6" />
                                    </>
                                )}
                            </Button>

                            {state === 'error' && (
                                <p className="text-red-400 text-sm text-center">
                                    Error al enviar. Inténtalo de nuevo.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
