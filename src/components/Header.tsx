import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, PhoneCall, Sparkles, CheckCircle2, Sun, Moon, Zap, Shield, Compass } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import VBuildLogo from './VBuildLogo';

interface HeaderProps {
  onOpenBooking: (type?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState('#home');

  const navigation = [
    { name: 'Home', path: '#home' },
    { name: 'Services', path: '#services' },
    { name: 'Showcase', path: '#projects', badge: 'PRO' },
    { name: 'Estimator', path: '#estimator', badge: 'CALC' },
    { name: 'Process', path: '#process' },
    { name: 'Tech Stack', path: '#skills' },
    { name: 'Reviews', path: '#testimonials' },
    { name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 25);

      const sections = navigation.map((item) => item.path.substring(1));
      const scrollPosition = currentScrollY + 220;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
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
        block: 'start',
      });
      setActivePath(path);
      setIsMenuOpen(false);
    }
  };

  const isActive = (path: string) => activePath === path;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 pt-2 sm:pt-4 px-3 sm:px-6 pointer-events-none transition-all duration-300"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Floating Modern Glass Capsule Island */}
      <div
        className={`pointer-events-auto max-w-[1400px] mx-auto rounded-2xl sm:rounded-3xl transition-all duration-500 relative overflow-hidden border ${
          isScrolled
            ? 'bg-white/85 dark:bg-[#0A0F18]/90 backdrop-blur-2xl border-slate-200/90 dark:border-emerald-500/30 shadow-2xl shadow-emerald-500/10 dark:shadow-black/80 py-2.5 px-3.5 sm:px-6'
            : 'bg-white/60 dark:bg-[#04070A]/80 backdrop-blur-xl border-slate-200/60 dark:border-slate-800/60 shadow-lg py-3 px-4 sm:px-6'
        }`}
      >
        {/* Animated Top Laser Sweep Border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-500 opacity-90" />

        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Left Brand Identity Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleScrollLink(e, '#home')}
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <VBuildLogo size="md" showTagline={false} />
          </motion.a>

          {/* Center Futuristic Floating Navigation Pills */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md">
            {navigation.map((item) => {
              const active = isActive(item.path);
              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleScrollLink(e, item.path)}
                  className={`relative px-3 py-1.5 text-xs font-bold transition-all rounded-xl whitespace-nowrap flex items-center gap-1.5 ${
                    active
                      ? 'text-indigo-600 dark:text-emerald-300 font-extrabold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="floatingNavPill"
                      className="absolute inset-0 bg-white dark:bg-emerald-950/60 rounded-xl shadow-md border border-slate-200/80 dark:border-emerald-500/40 z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 font-heading">{item.name}</span>
                  {item.badge && (
                    <span className="relative z-10 px-1.5 py-0.2 text-[9px] font-mono font-black rounded bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 shadow-xs">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls & CTA */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Live Squad Availability Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 rounded-xl text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
              <span>SQUAD ACTIVE • Q3 SLOTS</span>
            </div>

            {/* Futuristic Theme Switcher */}
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle Dark / Light Theme"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-xs relative group"
              whileHover={{ rotate: 15, scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 fill-indigo-600/20" />
              )}
            </motion.button>

            {/* Direct Booking CTA Button with Flare */}
            <motion.button
              onClick={() => onOpenBooking('Header Floating Island')}
              className="btn-primary-gradient button-shine-flare group relative inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white dark:text-slate-950 overflow-hidden shadow-lg active:scale-[0.97] whitespace-nowrap"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Zap className="w-3.5 h-3.5 text-amber-300 dark:text-slate-950 fill-current group-hover:rotate-12 transition-transform" />
              <span className="font-heading">Book Call</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="lg:hidden p-2.5 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Glass Floating Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden pointer-events-auto max-w-[1400px] mx-auto mt-2 bg-white/95 dark:bg-[#0A0F18]/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-2xl space-y-4 text-slate-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          >
            <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-300 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>VBUILD 2.0 • Accepting Q3 Client Sprints</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleScrollLink(e, item.path)}
                  className={`px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all text-center flex items-center justify-center gap-1.5 ${
                    isActive(item.path)
                      ? 'bg-emerald-500 text-slate-950 font-black shadow-md'
                      : 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <span className="font-heading">{item.name}</span>
                  {item.badge && (
                    <span className="px-1 py-0.2 text-[8px] font-mono font-black bg-amber-400 text-slate-950 rounded">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-1">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenBooking('Mobile Island Menu Consultation');
                }}
                className="btn-primary-gradient w-full py-3 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Discovery Call</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;