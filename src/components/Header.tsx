import { useState, useEffect } from 'react';
import { Menu, X, Zap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState('#home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.8]);

  const navigation = [
    { name: 'Home', path: '#home', color: 'from-purple-400 to-purple-600' },
    { name: 'About', path: '#about', color: 'from-blue-400 to-blue-600' },
    { name: 'Services', path: '#services', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Testimonials', path: '#testimonials', color: 'from-pink-400 to-pink-600' },
    { name: 'Contact', path: '#contact', color: 'from-green-400 to-green-600' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / documentHeight) * 100;
      
      setScrollProgress(progress);
      setIsScrolled(currentScrollY > 20);

      // Active section detection
      const sections = navigation.map(item => item.path.substring(1));
      const scrollPosition = currentScrollY + 150;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActivePath(`#${sectionId}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    const id = path.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, '', path);
      setActivePath(path);
    }
  };

  const isActive = (path: string) => activePath === path;
  const activeNavItem = navigation.find(item => item.path === activePath);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 origin-left"
        style={{ 
          scaleX: scrollProgress / 100,
          opacity: scrollProgress > 5 ? 1 : 0
        }}
        transition={{ duration: 0.1 }}
      />

      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: 0 }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Morphing Logo */}
          <motion.a 
            href="#home" 
            onClick={(e) => handleScrollLink(e, '#home')} 
            className="flex items-center gap-3 group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ scale: logoScale }}
          >
            <motion.div 
              className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center overflow-hidden"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                  '0 0 40px rgba(6, 182, 212, 0.5)',
                  '0 0 20px rgba(139, 92, 246, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-6 h-6 text-white relative z-10" />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Morphing Text Logo */}
            <AnimatePresence mode="wait">
              {!isScrolled ? (
                <motion.div
                  key="full-logo"
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl font-display font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    DevForge
                  </span>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.span
                  key="compact-logo"
                  className="text-xl font-display font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  DF
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>

          {/* Desktop Navigation with Advanced Indicators */}
          <div className="hidden lg:flex items-center gap-2 relative">
            {/* Sliding Background Indicator */}
            <motion.div
              className={`absolute h-10 rounded-full bg-gradient-to-r ${activeNavItem?.color || 'from-purple-500 to-cyan-500'} opacity-20 blur-sm`}
              layoutId="navBackground"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.path}
                onClick={(e) => handleScrollLink(e, item.path)}
                className={`relative px-4 py-2 font-sans font-medium transition-all duration-300 rounded-full ${
                  isActive(item.path) 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -2,
                  textShadow: '0 0 8px rgba(139, 92, 246, 0.8)'
                }}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div 
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r ${item.color} rounded-full`}
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                {/* Magnetic hover effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 rounded-full`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2 text-white relative z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="absolute top-full left-4 right-4 bg-black/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 lg:hidden"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => {
                      handleScrollLink(e, item.path);
                      setIsMenuOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-xl font-sans font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? `bg-gradient-to-r ${item.color} bg-opacity-20 text-white`
                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Page Position Indicator */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {navigation.map((item, index) => (
          <motion.div
            key={item.name}
            className="relative group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleScrollLink(e as any, item.path);
            }}
            whileHover={{ scale: 1.2 }}
          >
            {/* Dot indicator */}
            <motion.div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                isActive(item.path)
                  ? `bg-gradient-to-r ${item.color} border-transparent`
                  : 'border-gray-500 hover:border-white'
              }`}
              animate={isActive(item.path) ? {
                boxShadow: [
                  '0 0 0 0 rgba(139, 92, 246, 0.4)',
                  '0 0 0 8px rgba(139, 92, 246, 0)',
                  '0 0 0 0 rgba(139, 92, 246, 0.4)'
                ]
              } : {}}
              transition={{ duration: 1.5, repeat: isActive(item.path) ? Infinity : 0 }}
            />
            
            {/* Section name tooltip */}
            <motion.div
              className={`absolute right-6 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-black/90 backdrop-blur-xl border border-purple-500/20 rounded-lg text-sm font-sans text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300`}
              initial={{ x: 10 }}
              whileHover={{ x: 0 }}
            >
              {item.name}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/90 border-y-4 border-y-transparent"></div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Header;