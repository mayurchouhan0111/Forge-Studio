import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Flame, Menu, X, ArrowUpRight, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (type?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState('#home');

  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 100], ['5.5rem', '4.5rem']);

  const navigation = [
    { name: 'Home', path: '#home' },
    { name: 'Services', path: '#services' },
    { name: 'Showcase', path: '#projects' },
    { name: 'Estimator', path: '#estimator' },
    { name: 'Process', path: '#process' },
    { name: 'Tech Stack', path: '#skills' },
    { name: 'Reviews', path: '#testimonials' },
    { name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      const sections = navigation.map((item) => item.path.substring(1));
      const scrollPosition = currentScrollY + 200;

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-slate-200/50'
          : 'bg-transparent'
      }`}
      style={{ height: headerHeight }}
    >
      <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <motion.a
          href="#home"
          onClick={(e) => handleScrollLink(e, '#home')}
          className="flex items-center gap-2.5 sm:gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <Flame className="w-5 h-5 text-white animate-pulse-glow-icon" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-display flex items-center gap-1">
              V<span className="text-indigo-600">BUILD</span>
            </span>
            <span className="text-[10px] text-slate-500 font-mono tracking-wider font-semibold -mt-1 hidden xs:block">
              vbuild.shop
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={(e) => handleScrollLink(e, item.path)}
              className={`relative px-2.5 py-1.5 xl:px-3.5 xl:py-2 text-xs xl:text-sm font-semibold transition-all rounded-xl whitespace-nowrap flex-shrink-0 ${
                isActive(item.path)
                  ? 'text-indigo-600 bg-indigo-50 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <motion.div
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full"
                  layoutId="navIndicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Callouts & CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Live Availability Badge */}
          <div className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-semibold text-emerald-700 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
            <span>2 Spots Open for Q3</span>
          </div>

          <motion.button
            onClick={() => onOpenBooking('Discovery Session')}
            className="group relative inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white overflow-hidden shadow-lg shadow-indigo-500/25 whitespace-nowrap flex-shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 transition-all duration-300 group-hover:opacity-95" />
            <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book Discovery Call</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-full left-0 right-0 max-h-[85vh] overflow-y-auto bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-5 py-6 shadow-2xl space-y-4 text-slate-900"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Accepting Enterprise & Startup Q3 Clients</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleScrollLink(e, item.path)}
                  className={`px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all text-center ${
                    isActive(item.path)
                      ? 'bg-indigo-50 text-indigo-600 border border-indigo-200 shadow-sm'
                      : 'text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenBooking('Mobile Menu Consultation');
                }}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:opacity-95 text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/25 active:scale-[0.98] transition-transform"
              >
                <PhoneCall className="w-4 h-4" />
                Book Discovery Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;