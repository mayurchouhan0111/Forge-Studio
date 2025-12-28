"use strict";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 animate-pulse" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    {/* Animated Logo / Title */}
                    <div className="relative inline-block mb-4">
                        <motion.h1
                            className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            VBUILD
                        </motion.h1>
                        {/* Glitch/Glow effect overlay */}
                        <motion.span
                            className="absolute inset-0 text-6xl md:text-8xl font-bold tracking-tighter text-primary opacity-0 blur-sm"
                            animate={{ opacity: [0, 0.4, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "mirror",
                            }}
                        >
                            VBUILD
                        </motion.span>
                    </div>

                    <motion.p
                        className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Building the Future of <span className="text-white font-medium">Construction Procurement</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="pt-8"
                    >
                        <Button size="lg" className="group" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                            Explore Platform
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-primary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
