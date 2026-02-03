"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("cursor-pointer")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (isMobile) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-primary pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? "rgba(5, 150, 105, 0.2)" : "rgba(5, 150, 105, 0)",
            }}
        />
    );
};
