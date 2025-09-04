import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Rocket, Zap, Star, Play } from 'lucide-react';

const Hero = () => {
  const floatingIcons = [
    { Icon: Code, delay: 0, position: { top: '20%', right: '15%' } },
    { Icon: Sparkles, delay: 0.5, position: { top: '60%', left: '10%' } },
    { Icon: Rocket, delay: 1, position: { bottom: '20%', right: '20%' } },
    { Icon: Zap, delay: 1.5, position: { top: '40%', right: '5%' } },
    { Icon: Star, delay: 2, position: { bottom: '40%', left: '5%' } }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 grid-rows-20 w-full h-full gap-1">
          {Array.from({ length: 400 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-purple-500 rounded-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: (i * 0.01) % 2
              }}
            />
          ))}
        </div>
      </div>

      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: '100px'
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Floating badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-3 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)'
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Rocket className="w-5 h-5 text-purple-400" />
          </motion.div>
          <span className="text-purple-300 font-semibold">🚀 Elite Development Agency</span>
        </motion.div>

        {/* Main title with crazy animations */}
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-white">We Build</span>
          <br />
          <motion.span 
            className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent bg-300% animate-gradient"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Digital Dreams
          </motion.span>
        </motion.h1>

        {/* Subtitle with typewriter effect */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Transforming innovative ideas into stunning <span className="text-purple-400 font-semibold">digital experiences</span> that drive growth and success
        </motion.p>

        {/* CTA Buttons with insane hover effects */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button 
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-white overflow-hidden shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600"
              initial={{ x: '100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>
          
          <motion.button 
            className="group flex items-center gap-3 px-8 py-4 border-2 border-purple-500/50 text-white rounded-2xl font-bold hover:bg-white/10 backdrop-blur-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              borderColor: '#a855f7',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
            View Our Work
          </motion.button>
        </motion.div>

        {/* Floating icons with crazy animations */}
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            className="absolute w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full flex items-center justify-center backdrop-blur-sm"
            style={position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0.5, 1],
              scale: [0, 1.2, 0.8, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.3,
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
            }}
          >
            <Icon className="w-8 h-8 text-purple-400" />
          </motion.div>
        ))}

        {/* Scroll indicator with pulse effect */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 border border-purple-500/30 rounded-full"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
          <span className="text-sm font-medium">Scroll to explore</span>
        </motion.div>
      </div>

      {/* Particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 1,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
