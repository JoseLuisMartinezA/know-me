import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-emerald-primary text-midnight hover:bg-emerald-secondary shadow-[0_0_20px_rgba(16,185,129,0.3)] font-bold",
        outline: "border border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm",
        ghost: "bg-transparent hover:bg-white/5 text-white/70 hover:text-white"
    }

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg font-semibold"
    }

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    )
}
