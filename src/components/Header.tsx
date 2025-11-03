import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../asset/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-xl py-2' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <motion.img 
            src={logo} 
            alt="Vbuild Logo" 
            className={`transition-all duration-300 ${
              isScrolled 
                ? 'h-14 md:h-16 w-auto' 
                : 'h-16 md:h-20 w-auto'
            }`}
            style={{ 
              maxWidth: '200px',
              objectFit: 'contain'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>

        {/* Desktop Navigation - Improved Animation */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-2xl px-2 py-2 border border-white/10">
          {navigation.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className="relative px-6 py-2.5 font-semibold transition-colors duration-300 rounded-xl block"
              >
                {/* Animated Background for Active Tab */}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg shadow-purple-500/50"
                    layoutId="activeBackground"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                      mass: 0.8
                    }}
                  />
                )}
                
                {/* Text with smooth color transition */}
                <span className={`relative z-10 transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-white font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}>
                  {item.name}
                </span>

                {/* Animated underline on hover (only for inactive tabs) */}
                {!isActive(item.path) && (
                  <motion.div
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '80%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? 'close' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Navigation - Improved */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                >
                  <Link
                    to={item.path}
                    className="relative block overflow-hidden rounded-xl"
                  >
                    {/* Animated background for mobile */}
                    <motion.div
                      className={`px-4 py-3 font-semibold transition-all duration-300 relative z-10 ${
                        isActive(item.path)
                          ? 'text-white'
                          : 'text-gray-300'
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Active state background */}
                      {isActive(item.path) && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 -z-10"
                          layoutId="mobileActiveBackground"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                          }}
                        />
                      )}
                      
                      {/* Hover background for inactive */}
                      {!isActive(item.path) && (
                        <motion.div
                          className="absolute inset-0 bg-gray-800/50 -z-10"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      
                      <span className="relative flex items-center justify-between">
                        {item.name}
                        {isActive(item.path) && (
                          <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                          />
                        )}
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
