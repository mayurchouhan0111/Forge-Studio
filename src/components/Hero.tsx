import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, CheckCircle, Zap, Rocket, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden pt-20 pb-20"
    >
      {/* Animated CSS Gradient Background - No Performance Impact */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0b2e] to-[#0f0820]">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Large purple orb */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Medium cyan orb */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Small pink orb */}
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-600/25 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Additional small orbs for depth */}
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              x: [0, -25, 0],
              y: [0, 35, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Subtle noise texture overlay for depth */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/40 pointer-events-none" />

      {/* Content */}
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
          className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed"
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
