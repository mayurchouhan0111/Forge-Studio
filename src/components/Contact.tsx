import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Shield,
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Clock,
} from 'lucide-react';

interface ContactProps {
  onOpenBooking: (type?: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Web Engineering');
  const [selectedBudget, setSelectedBudget] = useState<string>('$10k - $25k USD');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'' | 'success' | 'error'>('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = [
    'Web Engineering',
    'Mobile App (Flutter)',
    'Autonomous AI & RAG',
    'Enterprise SaaS Suite',
  ];

  const budgetRanges = ['< $10,000 USD', '$10k - $25k USD', '$25k - $50k USD', '$50,000+ USD'];

  const faqs = [
    {
      q: 'How fast can VBUILD start on our project?',
      a: 'We can kick off discovery & system blueprinting within 48 hours of contract signing. We assign a dedicated senior team immediately.',
    },
    {
      q: 'Who owns the intellectual property and code repository?',
      a: 'You retain 100% full intellectual property rights and full ownership of all code, repositories, Figma design assets, and cloud deployment keys.',
    },
    {
      q: 'What is included in your 30-day post-launch warranty?',
      a: 'We provide 30 days of complimentary bug fixes, performance monitoring, and SLA maintenance after production launch to ensure 100% stability.',
    },
    {
      q: 'How do we communicate with the engineering squad?',
      a: 'We set up a dedicated private Slack channel, conduct weekly video sprint demos, and provide daily asynchronous progress updates.',
    },
    {
      q: 'Do you sign Mutual Non-Disclosure Agreements (NDAs)?',
      a: 'Yes. We sign strict mutual NDAs before reviewing sensitive technical docs or business blueprints.',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Direct Engineering Email',
      value: 'hello@vbuild.shop',
      href: 'mailto:hello@vbuild.shop',
    },
    {
      icon: Phone,
      label: 'Direct Phone / WhatsApp',
      value: '+91 6263850508',
      href: 'https://wa.me/916263850508',
    },
    {
      icon: MapPin,
      label: 'Global Engineering Hub',
      value: 'vbuild.shop Agency Hub',
      href: 'https://vbuild.shop/',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#04070A] relative overflow-hidden transition-colors">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-[#0A0F18] border border-indigo-200 dark:border-emerald-500/30 text-indigo-700 dark:text-emerald-400 text-xs font-semibold mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-600 dark:text-emerald-400" />
            <span className="uppercase tracking-wider font-mono text-[11px]">Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight font-display">
            Let's Build Your <span className="shimmer-text">Next Product</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Have a project in mind? Send us a brief or schedule a 30-minute discovery call with our principal architect.
          </p>
        </div>

        {/* Main Grid: Contact Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0A0F18] space-y-6 shadow-md hover:shadow-xl hover:shadow-emerald-500/10 relative overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-400" />

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white pt-1 font-heading">Direct Agency Desk</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                Have an urgent project requirement or RFQ? Reach out directly to our engineering team.
              </p>

              <div className="space-y-3.5">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/40 transition-all group active:scale-[0.98]"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-50 dark:bg-emerald-950/60 border border-indigo-200 dark:border-emerald-800 rounded-xl flex items-center justify-center text-indigo-600 dark:text-emerald-400 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 font-bold shadow-sm">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">{info.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Direct Booking Callout */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center space-y-3">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Prefer an instant calendar slot?</div>
                <button
                  onClick={() => onOpenBooking('Direct Contact Card')}
                  className="btn-primary-gradient button-shine-flare w-full py-3.5 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 30-Min Discovery Session</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0A0F18] shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">Project Inquiry Form</h3>

              {/* Capability Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-emerald-400 mb-2 font-heading">
                  Select Product Capability Needed
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all border text-left active:scale-[0.98] ${
                        selectedCategory === cat
                          ? 'bg-indigo-50 dark:bg-emerald-950/60 border-indigo-600 dark:border-emerald-500 text-indigo-700 dark:text-emerald-300 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Investment Tier */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-emerald-400 mb-2 font-heading">
                  Estimated Budget Range
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetRanges.map((bgt) => (
                    <button
                      key={bgt}
                      type="button"
                      onClick={() => setSelectedBudget(bgt)}
                      className={`p-2 rounded-xl text-center text-[11px] font-bold transition-all border active:scale-[0.98] ${
                        selectedBudget === bgt
                          ? 'bg-indigo-50 dark:bg-emerald-950/60 border-indigo-600 dark:border-emerald-500 text-indigo-700 dark:text-emerald-300 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      {bgt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Project Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Full-Stack Web & Mobile App Development"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Project Overview & Objectives *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe desired features, target launch dates, or existing code bases..."
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none resize-none transition-colors"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                <Shield className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Strict Mutual NDA included. Your idea is 100% protected.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary-gradient button-shine-flare w-full py-4 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-xl flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting Proposal...</span>
                ) : (
                  <>
                    <span>Submit Inquiry to VBUILD</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-xl text-center text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  ✅ Thank you! A VBUILD Solutions Architect will respond within 2 hours.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Agency FAQ Accordion */}
        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0A0F18] shadow-sm">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-emerald-400 uppercase tracking-wider mb-2 font-mono">
              <HelpCircle className="w-4 h-4" /> FREQUENTLY ASKED QUESTIONS
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">Got Questions? We Have Answers</h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/60 dark:bg-slate-800/40"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-emerald-400 transition-colors font-heading"
                >
                  <span className="pr-4 leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-indigo-600 dark:text-emerald-400' : 'text-slate-400'}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/80 dark:border-slate-800 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;