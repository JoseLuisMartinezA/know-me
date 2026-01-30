"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Calendar, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function LeadForm() {
    const [state, setState] = useState<FormState>('idle');
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        niche: '',
        budget: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setState('submitting');

        const { error } = await supabase
            .from('leads')
            .insert([formData]);

        if (error) {
            console.error('Error submitting lead:', error);
            setState('error');
            return;
        }

        setState('success');
    };

    if (state === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-16 rounded-[40px] text-center max-w-2xl mx-auto shadow-2xl shadow-emerald-primary/10"
            >
                <div className="w-24 h-24 bg-emerald-light rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12 text-emerald-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-6 font-heading text-midnight">¡Proyecto Recibido!</h3>
                <p className="text-midnight/50 mb-10 text-xl leading-relaxed">
                    Gracias por tu interés en know me.. En 24h recibirás una propuesta estratégica detallada para transformar tu visión.
                </p>
                <div className="flex flex-col gap-4">
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-full py-5 rounded-2xl text-xl font-bold"
                    >
                        <Calendar className="mr-2 w-6 h-6" />
                        Agendar llamada rápida
                    </Button>
                    <button
                        onClick={() => setState('idle')}
                        className="text-midnight/30 hover:text-midnight transition-colors text-sm font-bold uppercase tracking-widest"
                    >
                        Enviar otro formulario
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <section className="py-32 px-4 relative bg-slate">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 font-heading text-midnight tracking-tighter">
                        Cualifica tu <span className="text-emerald-primary">Negocio</span>
                    </h2>
                    <p className="text-midnight/40 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Completa el formulario para recibir un análisis preliminar de tu infraestructura digital.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="glass p-10 md:p-16 rounded-[48px] space-y-10 shadow-2xl shadow-black/5 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-sm font-bold text-midnight tracking-wider uppercase ml-1">Nombre Completo</label>
                            <input
                                required
                                type="text"
                                placeholder="Juan Pérez"
                                className="w-full bg-slate border border-black/5 rounded-2xl px-6 py-5 outline-none focus:border-emerald-primary/40 focus:ring-4 focus:ring-emerald-primary/5 transition-all placeholder:text-midnight/20 text-midnight font-medium"
                                value={formData.full_name}
                                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-sm font-bold text-midnight tracking-wider uppercase ml-1">Email Profesional</label>
                            <input
                                required
                                type="email"
                                placeholder="juan@empresa.com"
                                className="w-full bg-slate border border-black/5 rounded-2xl px-6 py-5 outline-none focus:border-emerald-primary/40 focus:ring-4 focus:ring-emerald-primary/5 transition-all placeholder:text-midnight/20 text-midnight font-medium"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-sm font-bold text-midnight tracking-wider uppercase ml-1">Nicho de Mercado</label>
                            <div className="relative">
                                <select
                                    required
                                    className="w-full bg-slate border border-black/5 rounded-2xl px-6 py-5 outline-none focus:border-emerald-primary/40 focus:ring-4 focus:ring-emerald-primary/5 transition-all appearance-none cursor-pointer text-midnight font-medium"
                                    value={formData.niche}
                                    onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                                >
                                    <option value="" disabled className="bg-white">Seleccionar nicho</option>
                                    <option value="Fitness" className="bg-white">Fitness</option>
                                    <option value="E-commerce" className="bg-white">E-commerce</option>
                                    <option value="Corporate" className="bg-white">Corporate</option>
                                    <option value="Otros" className="bg-white">Otros</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-sm font-bold text-midnight tracking-wider uppercase ml-1">Presupuesto Estimado</label>
                            <div className="grid grid-cols-3 gap-3">
                                {['1k-2k', '2k-5k', '+5k'].map((b) => (
                                    <button
                                        key={b}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, budget: b })}
                                        className={cn(
                                            "py-4 rounded-2xl border transition-all text-sm font-bold",
                                            formData.budget === b
                                                ? "bg-emerald-primary border-emerald-primary text-white shadow-lg shadow-emerald-primary/20"
                                                : "bg-slate border-black/5 text-midnight/40 hover:bg-black/5"
                                        )}
                                    >
                                        {b}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Button
                        disabled={state === 'submitting'}
                        className="w-full py-6 rounded-2xl font-bold text-xl shadow-xl shadow-emerald-primary/10"
                    >
                        {state === 'submitting' ? (
                            <>
                                <Loader2 className="mr-3 animate-spin w-6 h-6" />
                                Procesando análisis...
                            </>
                        ) : (
                            <>
                                Enviar mi visión
                                <Send className="ml-3 w-6 h-6" />
                            </>
                        )}
                    </Button>



                    {state === 'error' && (
                        <p className="text-red-400 text-sm text-center">
                            Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
