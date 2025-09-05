import { useState, useEffect } from 'react';
import { Menu, X, Code, Download } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState('#home');

  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  const navigation = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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
    return () => window.removeEventListener('scroll', handleScroll);
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
      setActivePath(path);
      setIsMenuOpen(false);
    }
  };

  const isActive = (path: string) => activePath === path;

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0D1117]/95 backdrop-blur-xl border-b border-[#AD8B73]/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home" 
          onClick={(e) => handleScrollLink(e, '#home')} 
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ scale: logoScale }}
        >
          <motion.div 
            className="w-10 h-10 bg-gradient-to-br from-[#AD8B73] to-[#8B6F47] rounded-xl flex items-center justify-center"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(173, 139, 115, 0.3)',
                '0 0 30px rgba(173, 139, 115, 0.5)',
                '0 0 20px rgba(173, 139, 115, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Code className="w-5 h-5 text-white" />
          </motion.div>
          <span className="text-xl font-bold text-white">
            Mayur<span className="text-[#AD8B73]">.</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.path}
              onClick={(e) => handleScrollLink(e, item.path)}
              className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                isActive(item.path) 
                  ? 'text-[#AD8B73]' 
                  : 'text-gray-300 hover:text-white'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.name}
              {isActive(item.path) && (
                <motion.div 
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#AD8B73] rounded-full"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
          
          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-[#AD8B73] text-white rounded-xl font-medium hover:bg-[#8B6F47] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Download className="w-4 h-4" />
            Resume
          </motion.a>
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
              className="absolute top-full left-4 right-4 bg-[#0D1117]/95 backdrop-blur-xl border border-[#AD8B73]/20 rounded-2xl p-6 lg:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleScrollLink(e, item.path)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-[#AD8B73]/20 text-[#AD8B73]'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Resume Button */}
              <motion.a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-3 mt-4 bg-[#AD8B73] text-white rounded-xl font-medium hover:bg-[#8B6F47] transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;