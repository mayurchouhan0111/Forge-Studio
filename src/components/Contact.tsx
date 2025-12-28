"use strict";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-black">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden bg-primary px-6 py-20 text-center"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
                            Ready to Build the Future?
                        </h2>
                        <p className="text-lg md:text-xl text-black/80 font-medium">
                            Join the platform that's revolutionizing construction procurement.
                            Get early access today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                variant="primary"
                                size="lg"
                                className="bg-black text-white hover:bg-zinc-900 shadow-none border-0 w-full sm:w-auto"
                            >
                                Start Now
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-black text-black hover:bg-black/10 hover:text-black w-full sm:w-auto"
                            >
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
