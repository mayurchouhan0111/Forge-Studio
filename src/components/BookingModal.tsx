import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, CheckCircle2, Send, Shield } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Full-Stack Web Engineering',
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>(initialService);
  const [selectedBudget, setSelectedBudget] = useState<string>('$10k - $25k USD');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    'Full-Stack Web Engineering',
    'Cross-Platform Flutter Mobile',
    'Autonomous AI Agents & RAG',
    'Cloud Architecture & DevOps',
    'UI/UX Design System Suite',
  ];

  const budgetRanges = ['< $10,000 USD', '$10k - $25k USD', '$25k - $50k USD', '$50,000+ USD'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-[99]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Dialog Card */}
          <motion.div
            className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-2xl z-[100] overflow-hidden text-slate-900"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Top Multi-Color Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500" />

            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-100/70 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-cyan-100/70 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <div>
                {/* Modal Header */}
                <div className="flex items-center gap-3 mb-2 pr-8 pt-1">
                  <div className="p-2 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-600 flex-shrink-0 shadow-sm">
                    <Sparkles className="w-5 h-5 animate-pulse-glow-icon" />
                  </div>
                  <span className="text-xs font-bold tracking-wider text-indigo-700 uppercase font-mono">
                    VBUILD ENGINEERING SQUAD
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1.5 font-display">
                  Book a Discovery Call
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 font-medium leading-relaxed">
                  Schedule a 30-minute technical roadmap session with our Senior Solutions Architect.
                </p>

                {/* Step Indicator */}
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-extrabold ${
                        step >= 1 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      1
                    </div>
                    <span className={`text-xs ${step >= 1 ? 'text-slate-900 font-extrabold' : 'text-slate-400 font-medium'}`}>
                      Project Scope
                    </span>
                  </div>
                  <div className="w-8 h-px bg-slate-200" />
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-extrabold ${
                        step >= 2 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      2
                    </div>
                    <span className={`text-xs ${step >= 2 ? 'text-slate-900 font-extrabold' : 'text-slate-400 font-medium'}`}>
                      Contact & Schedule
                    </span>
                  </div>
                </div>

                {step === 1 ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-extrabold text-indigo-700 uppercase tracking-wider mb-2.5">
                        Select Capability Needed
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {services.map((srv) => {
                          const isSelected = selectedService === srv;
                          return (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => setSelectedService(srv)}
                              className={`p-3.5 rounded-xl text-left text-xs font-bold transition-all border active:scale-[0.98] ${
                                isSelected
                                  ? 'bg-indigo-50/90 border-2 border-indigo-600 text-indigo-950 shadow-md'
                                  : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="truncate">{srv}</span>
                                {isSelected && <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-indigo-700 uppercase tracking-wider mb-2.5">
                        Target Investment Tier
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgetRanges.map((bgt) => {
                          const isSelected = selectedBudget === bgt;
                          return (
                            <button
                              key={bgt}
                              type="button"
                              onClick={() => setSelectedBudget(bgt)}
                              className={`p-3 rounded-xl text-center text-xs font-bold transition-all border active:scale-[0.98] ${
                                isSelected
                                  ? 'bg-indigo-50/90 border-2 border-indigo-600 text-indigo-950 shadow-md'
                                  : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100'
                              }`}
                            >
                              {bgt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-3 flex justify-end">
                      <button
                        onClick={() => setStep(2)}
                        className="btn-primary-gradient button-shine-flare w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-extrabold rounded-xl active:scale-[0.98]"
                      >
                        <span>Next: Contact Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="TechLabs Inc."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Project Brief / Objectives</label>
                      <textarea
                        rows={3}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Tell us about target launch dates, existing codebases, or desired features..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none resize-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <Shield className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Strict Mutual NDA included automatically. Your idea is 100% safe.</span>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-bold text-slate-600 hover:text-slate-900 underline flex-shrink-0"
                      >
                        ← Back to Scope
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary-gradient button-shine-flare flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-extrabold rounded-xl disabled:opacity-50 active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <span>Booking Session...</span>
                        ) : (
                          <>
                            <span>Confirm Booking</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-display">Discovery Call Confirmed!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                  Thank you, <span className="text-indigo-600 font-bold">{formData.name || 'Partner'}</span>. Our principal architect will review your project brief ({selectedService}) and email a calendar link to <span className="text-slate-900 font-mono font-bold">{formData.email}</span> within 2 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl shadow-md"
                  >
                    Done & Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
