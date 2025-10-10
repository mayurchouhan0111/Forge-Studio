import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';

const TestimonialsPage = () => {
  return (
    <div className="bg-slate-950 pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Testimonials />
      </motion.div>
    </div>
  );
};

export default TestimonialsPage;
