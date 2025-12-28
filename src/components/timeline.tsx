"use strict";
import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Discovery & Analysis",
        description: "We analyze your project requirements using AI to identify the perfect procurement strategy.",
    },
    {
        id: "02",
        title: "Smart Matching",
        description: "Our algorithm matches you with pre-vetted suppliers who meet your specific criteria and timeline.",
    },
    {
        id: "03",
        title: "Digital Contracting",
        description: "Streamlined negotiation and signing process through our secure digital platform.",
    },
    {
        id: "04",
        title: "Execution & Monitoring",
        description: "Real-time tracking of deliverables and payments ensures total transparency.",
    },
];

export function Timeline() {
    return (
        <section id="process" className="py-24 bg-black relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        The Process
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        From requirement to execution, VBuild simplifies every step.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Number/Icon */}
                                <div className="absolute left-[3px] md:left-1/2 md:-translate-x-1/2 w-9 h-9 rounded-full bg-black border-2 border-primary z-10 flex items-center justify-center text-xs font-bold text-primary shadow-[0_0_15px_rgba(11,224,255,0.4)]">
                                    {step.id}
                                </div>

                                {/* Content Spacer for Desktop centering */}
                                <div className="hidden md:block w-1/2" />

                                {/* Card */}
                                <div className="flex-1 ml-12 md:ml-0">
                                    <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-primary/30 transition-colors backdrop-blur-sm group hover:bg-zinc-900/80">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-zinc-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
