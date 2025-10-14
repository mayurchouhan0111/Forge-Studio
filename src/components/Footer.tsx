import { motion } from 'framer-motion';
import { Github, Linkedin, Briefcase, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../asset/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mayurchouhan0111', name: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mayur-chouhan-2005m17/', name: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Briefcase, href: 'https://flutterfoliomayur.netlify.app/', name: 'Portfolio', color: 'hover:text-green-400' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Flutter Development',
    'AI Solutions',
    'Full-Stack Development',
    'Cloud Architecture'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info with Logo */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <motion.img 
                src={logo} 
                alt="Vbuild Logo" 
                className="h-12 md:h-14 w-auto"
                style={{ 
                  maxWidth: '180px',
                  objectFit: 'contain'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Next-generation software development agency specializing in Flutter, AI integration, and full-stack solutions. 
              Transforming ideas into powerful digital experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Vbuild. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
