import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingModal from './components/BookingModal';
import './index.css';

function App() {
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
    <div className="App bg-[#07090E] text-slate-100 min-h-screen relative font-sans">
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

        {/* Background Ambient Glow Trail */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#AD8B73]/10 to-amber-600/10 blur-[130px]"
            animate={{
              x: [0, 80, 0],
              y: [0, -60, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ top: '15%', right: '5%' }}
          />
          <motion.div
            className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-blue-600/10 to-transparent blur-[130px]"
            animate={{
              x: [0, -60, 0],
              y: [0, 80, 0],
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

export default App;