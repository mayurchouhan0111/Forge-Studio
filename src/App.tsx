import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './index.css';

function App() {
  return (
    <div className="App bg-[#0D1117] text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Header />
        <HomePage />
        <Footer />
        
        {/* Cursor trail effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#AD8B73]/10 to-transparent blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '10%', right: '10%' }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-[#AD8B73]/10 to-transparent blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 80, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            style={{ bottom: '20%', left: '15%' }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default App;