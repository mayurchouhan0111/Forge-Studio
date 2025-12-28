"use strict";
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

// Combine standard button props with Framer Motion props for animation support
type CombinedButtonProps = ButtonProps & HTMLMotionProps<"button">;

const Button = React.forwardRef<HTMLButtonElement, CombinedButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {

        const variants = {
            primary:
                "bg-primary text-black font-semibold tracking-wide shadow-[0_0_20px_rgba(11,224,255,0.3)] hover:shadow-[0_0_30px_rgba(11,224,255,0.6)] hover:bg-cyan-400 border border-transparent",
            secondary:
                "bg-secondary text-white hover:bg-green-600 shadow-lg hover:shadow-green-500/30",
            outline:
                "bg-transparent border border-zinc-700 text-zinc-300 hover:text-white hover:border-primary hover:shadow-[0_0_15px_rgba(11,224,255,0.2)]",
            ghost:
                "bg-transparent text-zinc-400 hover:text-primary hover:bg-zinc-900/50",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
