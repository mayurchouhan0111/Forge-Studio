"use strict";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-black/70 backdrop-blur-md border-zinc-800 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center font-bold text-black text-xl shadow-[0_0_15px_rgba(11,224,255,0.5)] group-hover:shadow-[0_0_25px_rgba(11,224,255,0.8)] transition-all">
                        V
                    </div>
                    <span className="text-xl font-bold tracking-wider text-white group-hover:text-primary transition-colors">
                        BUILD
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Button variant="primary" size="sm" className="ml-4">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Button (Simple Placeholder) */}
                <div className="md:hidden">
                    <Button variant="ghost" size="sm">
                        Menu
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
}
