import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, CheckCircle, Zap, Rocket, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x7c3aed,      // Vibrant purple (more visible)
          midtoneColor: 0x5b21b6,        // Rich purple
          lowlightColor: 0x3b1f66,       // Deep purple
          baseColor: 0x1a0b2e,           // Dark purple-black background
          blurFactor: 0.6,
          speed: 1.00,
          zoom: 1.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      ref={vantaRef}
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden pt-20 pb-20"
    >
      {/* Light overlay for better text readability - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/30 pointer-events-none z-[1]" />

      {/* Content with higher z-index to appear above Vanta background */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-full mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-300 font-medium">Next-Gen Software Development Agency</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block mb-4">Innovative Solutions</span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Next-Gen Technology
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering your digital transformation journey with tailored IT solutions 
          that move you from today's challenges to tomorrow's success.
        </motion.p>

        {/* Value Propositions */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { icon: Zap, text: 'Fast Delivery' },
            { icon: CheckCircle, text: 'Quality Assured' },
            { icon: Users, text: 'Expert Team' },
            { icon: Rocket, text: 'Scalable Solutions' }
          ].map((item, idx) => (
            <motion.div
              key={item.text}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:border-purple-500/40 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-200 font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a
            href="/services"
            className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full flex items-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="/contact"
            className="group px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-white/20 transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-5 h-5" />
            Get Started
          </motion.a>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { number: '12+', label: 'Years Experience', subtext: 'Industry expertise' },
            { number: '98%', label: 'Client Retention', subtext: 'Satisfaction rate' },
            { number: '500+', label: 'Projects Delivered', subtext: 'Successfully completed' },
            { number: '24/7', label: 'Global Support', subtext: 'Always available' }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/40 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 + idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          className="pt-8 border-t border-white/10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-6">Trusted by Startups to Enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Technology badges */}
            {['Flutter', 'React', 'Node.js', 'AI/ML', 'Firebase', 'MongoDB'].map((tech, idx) => (
              <motion.div
                key={tech}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="text-gray-300 font-medium text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-purple-500/30 rounded-full mx-auto flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-purple-400 rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
