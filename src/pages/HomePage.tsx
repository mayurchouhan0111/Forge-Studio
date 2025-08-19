import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Hero Section */}
      <Hero />
      
      {/* Section Divider */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      {/* About Section */}
      <About />
      
      {/* Section Divider */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      {/* Services Section */}
      <Services />
      
      {/* Section Divider */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Section Divider */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      {/* Contact Section */}
      <Contact />
    </motion.main>
  );
};

export default HomePage;
