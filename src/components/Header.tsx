import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../asset/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false); // close mobile menu on route change
  }, [location]);

  const isActive = (p: string) => location.pathname === p;

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-14 w-auto object-contain"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 items-center">
          {nav.map((item, idx) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
            >
              <Link
                to={item.path}
                className="relative text-sm font-semibold tracking-wide"
              >
                {/* TEXT */}
                <span
                  className={`transition-colors ${
                    isActive(item.path)
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </span>

                {/* ACTIVE UNDERLINE (NEW STYLE) */}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    layoutId="activeUnderline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-black/70 backdrop-blur-2xl border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="px-5 py-6 flex flex-col gap-3">
              {nav.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-xl font-semibold ${
                      isActive(item.path)
                        ? "text-white bg-gradient-to-r from-purple-600 to-pink-500"
                        : "text-gray-200 bg-white/5 border border-white/10"
                    }`}
                  >
                    {item.name}
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
