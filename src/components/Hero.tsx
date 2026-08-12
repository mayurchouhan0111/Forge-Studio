import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Rocket, Zap, Star, Play, Github, Linkedin, Mail } from 'lucide-react';
import Estimator from './Estimator';

const Hero = () => {
  const roles = [
    "Full-Stack Developer",
    "Flutter Expert", 
    "AI Integrator"
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:mayurchouhan8055@gmail.com", label: "Email" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D1117]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#AD8B73] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#0D1117]/90 to-[#AD8B73]/10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Floating badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-[#AD8B73]/30 rounded-full px-6 py-3 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 30px rgba(173, 139, 115, 0.3)'
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Code className="w-5 h-5 text-[#AD8B73]" />
          </motion.div>
          <span className="text-[#AD8B73] font-semibold">Available for Freelance</span>
        </motion.div>

        {/* Main title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-6 leading-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Mayur Chouhan
        </motion.h1>

        {/* Animated role text */}
        <motion.div
          className="text-2xl md:text-4xl font-bold mb-8 h-16 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {roles.map((role, index) => (
            <motion.span
              key={role}
              className="absolute text-[#AD8B73]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                y: [20, 0, 0, -20]
              }}
              transition={{
                duration: 2,
                delay: index * 2,
                repeat: Infinity,
                repeatDelay: 4
              }}
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          IT Student at SGSITS Indore crafting innovative mobile apps, web solutions, and AI-powered systems
        </motion.p>

        <Estimator />

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-[#AD8B73] rounded-2xl font-bold text-white overflow-hidden shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(173, 139, 115, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#AD8B73] to-[#8B6F47]"
              initial={{ x: '100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <Rocket className="w-5 h-5" />
            </span>
          </motion.a>
          
          <motion.a
            href="#contact"
            className="group flex items-center gap-3 px-8 py-4 border-2 border-[#AD8B73]/50 text-white rounded-2xl font-bold hover:bg-white/5 backdrop-blur-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              borderColor: '#AD8B73',
              boxShadow: '0 0 20px rgba(173, 139, 115, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 group-hover:text-[#AD8B73] transition-colors" />
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-xl border border-[#AD8B73]/20 rounded-xl text-gray-400 hover:text-[#AD8B73] transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                y: -2,
                boxShadow: '0 10px 25px rgba(173, 139, 115, 0.2)'
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 border border-[#AD8B73]/30 rounded-full"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
          <span className="text-sm font-medium">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;