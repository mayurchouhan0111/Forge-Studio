import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
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
        className="w-full h-px bg-gradient-to-r from-transparent via-[#AD8B73]/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      {/* About Section */}
      <About />
      
      {/* Section Divider */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-[#AD8B73]/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Section Divider */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-[#AD8B73]/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Section Divider */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-[#AD8B73]/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Section Divider */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-[#AD8B73]/50 to-transparent"
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