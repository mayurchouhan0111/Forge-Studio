import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Calculator,
  ShieldCheck,
  Zap,
  Globe2,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { VBuildLogoIcon } from './VBuildLogo';

interface HeroProps {
  onOpenBooking: (type?: string) => void;
  onScrollToEstimator: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToEstimator }) => {
  const clientLogos = [
    { name: 'VORTEX AI', icon: Cpu },
    { name: 'SYNAPSE LABS', icon: Zap },
    { name: 'NEXUS PAY', icon: ShieldCheck },
    { name: 'QUANTUM OS', icon: Code2 },
    { name: 'APEX MOBILITY', icon: Globe2 },
    { name: 'CYBERSHIELD', icon: Layers },
  ];

  const stats = [
    { label: 'Client Revenue Generated', value: '$25M+' },
    { label: 'Projects Delivered On-Time', value: '100%' },
    { label: 'Avg Lighthouse Performance', value: '99.4%' },
    { label: 'Average Client ROI', value: '3.8x' },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex flex-col justify-center overflow-hidden bg-slate-50 dark:bg-[#04070A] transition-colors">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-tr from-emerald-500/15 via-amber-500/10 to-teal-500/15 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none animate-orb-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Live Tagline Pill */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-50/90 dark:bg-[#0A0F18] border border-indigo-200 dark:border-emerald-500/30 text-indigo-700 dark:text-emerald-400 text-xs font-semibold mb-6 shadow-sm backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <VBuildLogoIcon className="w-4 h-4 flex-shrink-0" />
          <span className="uppercase tracking-[0.18em] font-mono text-[11px] font-bold">
            AUTOMATE <span className="text-emerald-500">•</span> CONNECT <span className="text-amber-500">•</span> GROW
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 font-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          We Build <span className="shimmer-text">High-Impact</span> Web Apps, Mobile & <span className="text-indigo-600 dark:text-emerald-400">AI Systems</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From rapid MVP launches to enterprise scaling, <span className="text-indigo-600 dark:text-emerald-400 font-semibold font-display">VBUILD</span> partners with tech leaders to build hyper-scalable web platforms, Flutter mobile apps, and autonomous AI agents with 100% IP code ownership.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-center mb-12 sm:mb-16 w-full max-w-md sm:max-w-none mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={() => onOpenBooking('Hero Discovery Call')}
            className="btn-primary-gradient button-shine-flare w-full sm:w-auto px-8 py-4 font-extrabold text-sm sm:text-base rounded-2xl active:scale-[0.98] flex items-center justify-center gap-3 group shadow-xl"
          >
            <Sparkles className="w-5 h-5 text-white dark:text-slate-950 animate-pulse-glow-icon group-hover:rotate-45 transition-transform duration-300" />
            <span>Book Discovery Session</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={onScrollToEstimator}
            className="btn-secondary-outline w-full sm:w-auto px-8 py-4 font-bold text-sm sm:text-base rounded-2xl backdrop-blur-xl flex items-center justify-center gap-3 active:scale-[0.98] group"
          >
            <Calculator className="w-5 h-5 text-indigo-600 dark:text-amber-400 animate-wiggle-icon group-hover:scale-110 transition-transform" />
            <span>Launch Scope Calculator</span>
          </button>
        </motion.div>

        {/* Live Feature Chips */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#0A0F18] border border-slate-200 dark:border-emerald-500/20 shadow-sm hover:border-emerald-400/40 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>Zero Tech Debt Codebase</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#0A0F18] border border-slate-200 dark:border-emerald-500/20 shadow-sm hover:border-emerald-400/40 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>24/7 Dedicated Slack Channel</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#0A0F18] border border-slate-200 dark:border-emerald-500/20 shadow-sm hover:border-emerald-400/40 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>100% Code & IP Ownership</span>
          </div>
        </motion.div>

        {/* Agency Metrics Banner */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {stats.map((st, i) => (
            <motion.div
              key={i}
              className="glass-card glass-card-hover p-4 sm:p-6 rounded-2xl text-center border border-slate-200 dark:border-slate-800 cursor-default bg-white dark:bg-[#0A0F18] shadow-sm"
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-1 shimmer-text break-words">
                {st.value}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-600 dark:text-slate-400 leading-tight">{st.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Partner Marquee Ticker */}
        <motion.div
          className="border-t border-b border-slate-200 dark:border-slate-800/80 py-5 sm:py-6 overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-3 sm:mb-4 px-2 font-bold">
            TRUSTED BY FORWARD-THINKING TECH COMPANIES & STARTUPS
          </div>
          
          <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => {
              const IconComp = client.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm tracking-wider"
                >
                  <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-emerald-400" />
                  <span>{client.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;