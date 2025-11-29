import { motion } from "framer-motion";
import {
  Users,
  Award,
  Target,
  Shield,
  Globe,
  Zap,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const stats = [
  { number: "50+", label: "Projects Delivered", icon: Target },
  { number: "98%", label: "Client Satisfaction", icon: Award },
  { number: "15+", label: "Countries Served", icon: Globe },
  { number: "100%", label: "Growth Focused", icon: Zap },
];

const values = [
  {
    icon: Sparkles,
    title: "Innovation First",
    desc: "We combine creative design with deep engineering to build meaningful, future-proof digital products.",
  },
  {
    icon: Users,
    title: "Team‐Driven Engineering",
    desc: "Our designers, architects and developers work in sync to deliver precision and performance.",
  },
  {
    icon: Target,
    title: "Scalable Foundations",
    desc: "We build systems that grow—from lean MVPs to enterprise-scale architecture.",
  },
  {
    icon: Shield,
    title: "Quality as a Standard",
    desc: "Security, maintainability, and clean architecture are always top priorities.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-4 md:px-8 bg-gradient-to-b from-[#080014] via-[#150A28] to-[#080014] overflow-hidden"
    >
      {/* Ambient gradient lights */}
      <motion.div
        className="absolute top-20 left-16 w-[420px] h-[420px] bg-purple-600/20 blur-[180px]"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-16 right-10 w-[380px] h-[380px] bg-cyan-600/20 blur-[170px]"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-purple-500/30 rounded-full backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300 font-medium">
              About VBuild
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold text-white mt-6 tracking-tight leading-snug">
            Crafting the Future{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
              of Digital Products
            </span>
          </h2>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
            At{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              VBuild
            </span>
            , we transform ambitious ideas into world-class apps —
            engineered with precision, designed with purpose, and built to scale
            globally.
          </p>
        </div>

        {/* Stats — NEW Clean cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-8 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-purple-400/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-400/30 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
              </div>

              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                {stat.number}
              </h3>

              <p className="text-gray-300 mt-3 text-center font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* VALUES — New Balanced Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-28">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="p-10 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-purple-400/30 transition-all group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 mt-2 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FINAL EXPERTISE CTA */}
        <motion.div
          className="mt-24 p-14 rounded-[2.5rem] bg-white/[0.06] backdrop-blur-xl border border-purple-500/20 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">
              Engineering That Scales
            </h3>

            <p className="text-gray-300 text-lg mt-6 leading-relaxed">
              From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                Flutter apps
              </span>{" "}
              to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">
                AI-powered systems
              </span>
              — we build future-ready products backed by battle-tested
              engineering.
            </p>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 mt-10 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white shadow-lg shadow-purple-600/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let’s Work Together
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
