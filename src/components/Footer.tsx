import { motion } from 'framer-motion';
import { Github, Linkedin, Briefcase, ArrowUp, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../asset/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/mayurchouhan0111', 
      name: 'GitHub', 
      gradient: 'from-gray-600 to-gray-800' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/mayur-chouhan-2005m17/', 
      name: 'LinkedIn', 
      gradient: 'from-blue-600 to-blue-800' 
    },
    { 
      icon: Briefcase, 
      href: 'https://flutterfoliomayur.netlify.app/', 
      name: 'Portfolio', 
      gradient: 'from-purple-600 to-pink-600' 
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Flutter Development',
    'React & Web Apps',
    'AI/ML Solutions',
    'Full-Stack Development',
    'Cloud Architecture',
    'API Development'
  ];

  const contactInfo = [
    { icon: Mail, text: 'mayurchouhan8055@gmail.com', href: 'mailto:mayurchouhan8055@gmail.com' },
    { icon: MapPin, text: 'Indore, India', href: null },
    { icon: Phone, text: '6263850508', href: 'tel:6263850508' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#000000]">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -bottom-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Top Border with Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Company Info - Spans 5 columns */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block mb-6">
              <motion.img 
                src={logo} 
                alt="Vbuild Logo" 
                className="h-14 md:h-16 w-auto"
                style={{ 
                  maxWidth: '200px',
                  objectFit: 'contain'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
            
            <p className="text-gray-400 mb-8 leading-relaxed text-lg max-w-md">
              Next-generation software development agency specializing in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                Flutter, AI integration,
              </span>{' '}
              and full-stack solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-white/5 border border-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-4 h-4 text-purple-400" />
                  </div>
                  {contact.href ? (
                    <a href={contact.href} className="hover:text-purple-400 transition-colors">
                      {contact.text}
                    </a>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl flex items-center justify-center overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -3, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Spans 3 columns */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-white font-bold text-xl">Quick Links</h3>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300"
                  >
                    <motion.span
                      className="w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-4 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services - Spans 4 columns */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-white font-bold text-xl">Our Services</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
            </div>
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="group flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-default"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1.5 h-1.5 bg-purple-500/50 group-hover:bg-purple-400 rounded-full transition-colors" />
                  <span className="text-sm">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
            <p>
              © {currentYear}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                Vbuild
              </span>
              . All rights reserved.
            </p>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group relative w-12 h-12 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.1, y: -3, borderColor: 'rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
