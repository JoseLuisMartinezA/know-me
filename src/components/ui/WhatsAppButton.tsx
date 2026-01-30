"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        const message = encodeURIComponent("Hola know me., me interesa profesionalizar mi presencia digital.");
        window.open(`https://wa.me/YOUR_NUMBER?text=${message}`, "_blank");
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        className="glass px-5 py-3 rounded-2xl text-sm font-bold text-midnight/70 whitespace-nowrap mb-2 mr-2 border border-black/5 shadow-xl shadow-black/5"
                    >
                        ¿Tienes dudas? Chatea con nosotros
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-emerald-primary text-white rounded-[24px] flex items-center justify-center shadow-2xl shadow-emerald-primary/20 hover:shadow-emerald-primary/40 transition-all duration-300"
            >
                <MessageSquare className="w-7 h-7 fill-white/20" />
            </motion.button>
        </div>


    );
}
