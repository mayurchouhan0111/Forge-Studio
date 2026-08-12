import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Estimator from '../components/Estimator';
import Process from '../components/Process';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';

interface HomePageProps {
  onOpenBooking: (type?: string) => void;
}

const LaserDivider = () => (
  <div className="relative w-full h-px overflow-hidden bg-gradient-to-r from-transparent via-[#AD8B73]/30 to-transparent my-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent w-1/3 animate-laser-beam blur-[1px]" />
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const scrollToEstimator = () => {
    const element = document.getElementById('estimator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      {/* 1. Hero Section */}
      <Hero onOpenBooking={onOpenBooking} onScrollToEstimator={scrollToEstimator} />

      <LaserDivider />

      {/* 2. Capabilities & Services Matrix */}
      <Services onOpenBooking={onOpenBooking} />

      <LaserDivider />

      {/* 3. Featured Agency Showcase & Case Studies */}
      <Projects onOpenBooking={onOpenBooking} />

      <LaserDivider />

      {/* 4. Interactive Scope & Cost Calculator */}
      <Estimator onOpenBooking={onOpenBooking} />

      <LaserDivider />

      {/* 5. 5-Step Engineering Sprint Methodology */}
      <Process onOpenBooking={onOpenBooking} />

      <LaserDivider />

      {/* 6. Technology Stack Matrix */}
      <Skills />

      <LaserDivider />

      {/* 7. Wall of Love & Client Reviews */}
      <Testimonials onOpenBooking={onOpenBooking} />

      <LaserDivider />

      {/* 8. Agency Story & Principles */}
      <About onOpenBooking={onOpenBooking} />

      <LaserDivider />

      {/* 9. Contact Portal & FAQs */}
      <Contact onOpenBooking={onOpenBooking} />
    </motion.main>
  );
};

export default HomePage;