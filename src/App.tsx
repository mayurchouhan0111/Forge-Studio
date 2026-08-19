import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingModal from './components/BookingModal';
import './index.css';

function MainLayout() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingInitialType, setBookingInitialType] = useState<string>('Discovery Call');

  const handleOpenBooking = (type: string = 'Discovery Call') => {
    setBookingInitialType(type);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="App bg-slate-50 dark:bg-[#04070A] text-slate-900 dark:text-slate-100 min-h-screen relative font-sans transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Navigation Header */}
        <Header onOpenBooking={handleOpenBooking} />

        {/* Main Agency Home Page */}
        <HomePage onOpenBooking={handleOpenBooking} />

        {/* Agency Footer */}
        <Footer />

        {/* Interactive Booking & Proposal Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          initialType={bookingInitialType}
        />

        {/* Midnight Emerald & Solar Amber Ambient Glow Trail */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-70 dark:opacity-90">
          <motion.div
            className="absolute w-[550px] h-[550px] rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent blur-[140px]"
            animate={{
              x: [0, 90, 0],
              y: [0, -70, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ top: '15%', right: '5%' }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-transparent blur-[140px]"
            animate={{
              x: [0, -70, 0],
              y: [0, 90, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3,
            }}
            style={{ bottom: '25%', left: '5%' }}
          />
        </div>
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;