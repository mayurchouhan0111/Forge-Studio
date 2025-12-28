"use strict";
import { motion } from "framer-motion";
import { LineChart, Users, HardHat } from "lucide-react";

const services = [
    {
        icon: LineChart,
        title: "Market Intelligence",
        description: "Real-time data analytics and forecasting to optimize procurement decisions.",
        color: "from-blue-500/20 to-cyan-500/20",
        glow: "group-hover:shadow-[0_0_30px_rgba(11,224,255,0.2)]",
        border: "group-hover:border-primary/50"
    },
    {
        icon: Users,
        title: "Supplier Network",
        description: "Connect with a vetted network of premium suppliers and subcontractors.",
        color: "from-purple-500/20 to-indigo-500/20",
        glow: "group-hover:shadow-[0_0_30px_rgba(79,70,229,0.2)]",
        border: "group-hover:border-indigo-500/50"
    },
    {
        icon: HardHat,
        title: "Procurement Software",
        description: "Streamline RFIs, submittals, and change orders with our integrated suite.",
        color: "from-green-500/20 to-emerald-500/20",
        glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]",
        border: "group-hover:border-green-500/50"
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-black relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="container px-6 relative z-10">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Capabilities
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        viewport={{ once: true }}
                        className="h-1 bg-primary"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 ${service.border} ${service.glow}`}
                        >
                            {/* Hover Gradient Background */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-white group-hover:text-primary transition-colors group-hover:scale-110 duration-300 border border-zinc-700 group-hover:border-primary/30">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
