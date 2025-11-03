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
    desc: "We merge creativity with strategy to craft meaningful, measurable digital experiences.",
  },
  {
    icon: Users,
    title: "Collaborative Engineering",
    desc: "Cross-functional teams blending design, tech, and AI for unmatched precision.",
  },
  {
    icon: Target,
    title: "Scalable Architecture",
    desc: "From startup MVPs to enterprise systems — we build for the long run.",
  },
  {
    icon: Shield,
    title: "Uncompromising Quality",
    desc: "Security, maintainability, and performance baked into every line of code.",
  },
];

const About = () => (
  <section
    id="about"
    className="relative overflow-hidden py-32 px-4 md:px-8 bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#0a0118]"
  >
    {/* Animated Background Effects */}
    <div className="absolute inset-0">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header Section */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-200 font-semibold tracking-wide">
            About VBuild
          </span>
        </motion.div>

        {/* Animated Gradient Title */}
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Building the{" "}
          <motion.span
            className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto]"
            animate={{
              backgroundPosition: ["0% center", "200% center"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Future of Apps
          </motion.span>
        </h2>

        <motion.p
          className="mt-6 max-w-3xl mx-auto text-gray-300 leading-relaxed text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">VBuild</span>, we turn ambitious ideas into powerful digital products.
          We empower brands and agencies with cutting-edge development that scales globally.
        </motion.p>
      </motion.div>

      {/* Stats Cards - Modern Glass Design */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="group relative bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 text-center overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.1,
              type: "spring",
              stiffness: 200 
            }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              borderColor: "rgba(168, 85, 247, 0.5)",
            }}
          >
            {/* Animated gradient background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

            {/* Icon */}
            <motion.div
              className="relative w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-400/30 rounded-2xl flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <stat.icon className="w-8 h-8 text-purple-400 group-hover:text-pink-400 transition-colors" />
            </motion.div>

            {/* Number */}
            <h3 className="relative text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              {stat.number}
            </h3>

            {/* Label */}
            <p className="relative text-sm text-gray-300 font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Core Values Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-10 overflow-hidden"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: i * 0.15,
              type: "spring",
              stiffness: 100 
            }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8,
              borderColor: "rgba(168, 85, 247, 0.4)",
            }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/10 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Content */}
            <div className="relative flex items-start gap-6">
              {/* Icon Container */}
              <motion.div
                className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/50"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <value.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Text */}
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            </div>

            {/* Hover arrow indicator */}
            <motion.div
              className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-5 h-5 text-purple-400" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Expertise Card - Hero CTA */}
      <motion.div
        className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-purple-500/30 rounded-[2.5rem] p-12 md:p-16 shadow-2xl shadow-purple-900/20 overflow-hidden max-w-5xl mx-auto"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, type: "spring" }}
        viewport={{ once: true }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-20" />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),transparent_50%)]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              Our Core Expertise
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              We specialize in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">
                Flutter Development
              </span>
              ,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                AI Solutions
              </span>
              , and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">
                Full-Stack Engineering
              </span>
              . From design to deployment, we deliver seamless, intelligent, and
              future-proof apps.
            </p>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {["Flutter", "React", "Node.js", "AI/ML", "Cloud", "MongoDB"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl text-gray-200 font-semibold overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -4,
                    borderColor: "rgba(168, 85, 247, 0.6)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    {tech}
                  </span>
                </motion.span>
              )
            )}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full mt-12 shadow-2xl shadow-purple-500/50 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Let's Build Together</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
