import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, CheckCircle, Zap, Rocket, Users } from 'lucide-react';
import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import UnicornScene from 'unicornstudio-react';

// Create motion-wrapped Link component outside to prevent recreation
const MotionLink = motion(Link);

// Memoized Badge Component
const Badge = memo(() => (
  <motion.div
    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-full mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Sparkles className="w-4 h-4 text-purple-400" />
    <span className="text-sm text-gray-300 font-medium">Next-Gen Software Development Agency</span>
  </motion.div>
));
Badge.displayName = 'Badge';

// Memoized Value Proposition Item
const ValueItem = memo(({ item, idx }) => (
  <motion.div
    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:border-purple-500/40 transition-all duration-300"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <item.icon className="w-4 h-4 text-purple-400" />
    <span className="text-sm text-gray-200 font-medium">{item.text}</span>
  </motion.div>
));
ValueItem.displayName = 'ValueItem';

// Memoized App Switcher Button
const AppButton = memo(({ app, index, isSelected, onClick, delay }) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
      isSelected
        ? `bg-gradient-to-r ${app.color} text-white shadow-lg`
        : 'bg-white/10 text-gray-300 hover:bg-white/20'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <span className="flex items-center gap-2">
      <span className="text-lg">{app.icon}</span>
      <span className="hidden xl:inline">{app.name}</span>
    </span>
  </motion.button>
));
AppButton.displayName = 'AppButton';

// Memoized Stat Card
const StatCard = memo(({ stat, idx }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/40 transition-all duration-300"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 1.0 + idx * 0.1 }}
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
      {stat.number}
    </div>
    <div className="text-xs md:text-sm text-white font-semibold mb-1">
      {stat.label}
    </div>
    <div className="text-xs text-gray-400">
      {stat.subtext}
    </div>
  </motion.div>
));
StatCard.displayName = 'StatCard';

// Memoized Tech Badge
const TechBadge = memo(({ tech, idx }) => (
  <motion.div
    className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/30 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
    whileHover={{ scale: 1.05, y: -2 }}
  >
    <span className="text-gray-300 font-medium text-sm">{tech}</span>
  </motion.div>
));
TechBadge.displayName = 'TechBadge';

const Hero = () => {
  const [selectedApp, setSelectedApp] = useState(0);
  const [shouldLoadWebGL, setShouldLoadWebGL] = useState(false);

  // Memoize apps array to prevent recreation on every render
  const apps = useMemo(() => [
    {
      id: 0,
      name: 'WallHub',
      description: 'AI Wallpaper Generator',
      url: 'https://wall-hub01.netlify.app/',
      color: 'from-purple-600 to-pink-600',
      icon: '🎨'
    },
    {
      id: 1,
      name: 'vBuild Agency',
      description: 'Software Development',
      url: 'https://vbuild.shop/',
      color: 'from-cyan-600 to-blue-600',
      icon: '💼'
    },
    {
      id: 2,
      name: 'Portfolio',
      description: 'Your Projects Showcase',
      url: 'https://flutterfoliomayur.netlify.app/',
      color: 'from-pink-600 to-rose-600',
      icon: '🚀'
    }
  ], []);

  // Memoize value propositions
  const valueItems = useMemo(() => [
    { icon: Zap, text: 'Fast Delivery' },
    { icon: CheckCircle, text: 'Quality Assured' },
    { icon: Users, text: 'Expert Team' },
    { icon: Rocket, text: 'Scalable Solutions' }
  ], []);

  // Memoize stats
  const stats = useMemo(() => [
    { number: '3+', label: 'Years Experience', subtext: 'Industry expertise' },
    { number: '98%', label: 'Client Retention', subtext: 'Satisfaction rate' },
    { number: '50+', label: 'Projects Delivered', subtext: 'Successfully completed' },
    { number: '24/7', label: 'Global Support', subtext: 'Always available' }
  ], []);

  // Memoize technologies
  const technologies = useMemo(() => 
    ['Flutter', 'React', 'Node.js', 'AI/ML', 'Firebase', 'MongoDB'],
    []
  );

  // Device capability check with useCallback
  const checkDeviceCapability = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    const hasGoodConnection = navigator.connection 
      ? navigator.connection.effectiveType === '4g' || navigator.connection.effectiveType === 'wifi'
      : true;
    
    setShouldLoadWebGL(!isMobile || (isMobile && hasGoodConnection));
  }, []);

  useEffect(() => {
    checkDeviceCapability();
    
    // Throttle resize events
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkDeviceCapability, 150);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [checkDeviceCapability]);

  // Hide Unicorn Studio watermark
  useEffect(() => {
    const hideWatermark = () => {
      const style = document.createElement('style');
      style.innerHTML = `
        /* Hide Unicorn Studio watermark */
        a[href*="unicorn.studio"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        
        div[data-us-project] a {
          display: none !important;
        }
        
        canvas + a,
        canvas ~ a {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    };

    const timeoutId = setTimeout(hideWatermark, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  // Memoized callbacks for button clicks
  const handleAppSelect = useCallback((index) => {
    setSelectedApp(index);
  }, []);

  // Memoize current app to prevent unnecessary recalculations
  const currentApp = useMemo(() => apps[selectedApp], [apps, selectedApp]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden pt-32 md:pt-40 pb-20"
    >
      {/* Optimized Unicorn Studio Background - Conditional Loading with watermark hidden */}
      {shouldLoadWebGL ? (
        <div className="absolute inset-0 w-full h-full z-0 [&_a]:!hidden">
          <UnicornScene 
            projectId="OVWJ53NGLjDJCtcsaoQO"
            width="100%"
            height="100%"
            scale={0.5}
            dpi={1}
            fps={30}
            lazyload={false}
            production={true}
            className="w-full h-full"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0b2e] to-[#0f0820]" />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/40 pointer-events-none z-[2]" />

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Text Content */}
          <div className="text-center lg:text-left">
            <Badge />

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
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
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering your digital transformation journey with tailored IT solutions 
              that move you from today's challenges to tomorrow's success.
            </motion.p>

            {/* Value Propositions */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {valueItems.map((item, idx) => (
                <ValueItem key={item.text} item={item} idx={idx} />
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 lg:mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <MotionLink
                to="/services"
                className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full flex items-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MotionLink>
              <MotionLink
                to="/contact"
                className="group px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-white/20 transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" />
                Get Started
              </MotionLink>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Mobile Screen Mockup with App Switcher */}
          <motion.div
            className="hidden lg:flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* App Switcher Tabs */}
            <div className="flex gap-3">
              {apps.map((app, index) => (
                <AppButton
                  key={app.id}
                  app={app}
                  index={index}
                  isSelected={selectedApp === index}
                  onClick={() => handleAppSelect(index)}
                  delay={0.7 + index * 0.1}
                />
              ))}
            </div>

            {/* Mobile Screen Container */}
            <div className="relative">
              {/* Glow effect behind screen */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${currentApp.color} rounded-[2.5rem] blur-3xl opacity-50`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Mobile Screen Frame */}
              <motion.div
                className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl border border-gray-700/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Screen Content with iframe */}
                <div className="relative rounded-[2rem] overflow-hidden w-[320px] h-[640px] bg-black shadow-inner">
                  {/* Status bar overlay */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/80 to-transparent z-10 flex items-center justify-between px-6">
                    <span className="text-white text-xs font-semibold">11:11</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 bg-white/80 rounded-sm" />
                      <div className="w-4 h-3 bg-white/60 rounded-sm" />
                      <div className="w-4 h-3 bg-white/40 rounded-sm" />
                    </div>
                  </div>

                  {/* Animated iframe transition */}
                  <AnimatePresence mode="wait">
                    <motion.iframe
                      key={selectedApp}
                      src={currentApp.url}
                      className="w-full h-full border-none"
                      title={currentApp.name}
                      loading="lazy"
                      scrolling="yes"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                  
                  {/* Bottom indicator bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-10" />
                </div>

                {/* Decorative camera notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-800 rounded-full" />
                </div>
              </motion.div>

              {/* Floating live badge */}
              <motion.div
                className={`absolute -top-4 -right-4 bg-gradient-to-r ${currentApp.color} text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                key={`badge-${selectedApp}`}
              >
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  Live Demo
                </span>
              </motion.div>

              {/* App info tag */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${selectedApp}`}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className="text-white text-sm font-medium">{currentApp.name}</div>
                    <div className="text-gray-400 text-xs">{currentApp.description}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 lg:mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {stats.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} idx={idx} />
          ))}
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          className="pt-8 border-t border-white/10 max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-6 text-center">Trusted Technologies</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {technologies.map((tech, idx) => (
              <TechBadge key={tech} tech={tech} idx={idx} />
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 text-center"
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

export default memo(Hero);
