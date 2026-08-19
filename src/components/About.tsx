import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  Flame,
  Code2,
  Users,
  Sparkles,
} from 'lucide-react';
import VBuildLogo from './VBuildLogo';

interface AboutProps {
  onOpenBooking: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const agencyValues = [
    {
      title: '100% Code & IP Ownership',
      description: 'You retain full intellectual property rights, repository ownership, and deployment keys upon completion.',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Zero Tech Debt Architecture',
      description: 'Strict TypeScript interfaces, automated CI/CD checks, and modular design patterns mean your codebase scales seamlessly.',
      icon: Code2,
      color: 'from-teal-600 to-cyan-600',
    },
    {
      title: 'Direct Senior Architect Access',
      description: 'No account managers or middle layers. You communicate directly with senior solutions architects on Slack.',
      icon: Users,
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-white dark:bg-[#04070A] relative overflow-hidden transition-colors">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-[#0A0F18] border border-indigo-200 dark:border-emerald-500/30 text-indigo-700 dark:text-emerald-400 text-xs font-semibold mb-4 shadow-sm">
            <Flame className="w-3.5 h-3.5 text-indigo-600 dark:text-emerald-400" />
            <span className="uppercase tracking-wider font-mono text-[11px]">Agency Principles & Culture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4 font-display">
            About <span className="shimmer-text">VBUILD</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We are an elite software & AI engineering studio building high-impact digital products for ambitious startups and enterprises.
          </p>
        </div>

        {/* Story Box with Official Logo Brand Sheet Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 sm:mb-16">
          {/* Left Text */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0A0F18] space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
              Engineered for Speed, Precision & Code Ownership
            </h3>
            <p>
              VBUILD (<a href="https://vbuild.shop/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-emerald-400 hover:underline font-mono font-bold">vbuild.shop</a>) was founded with a singular mission: to eliminate low-quality outsourced software development and replace it with <span className="text-indigo-600 dark:text-emerald-400 font-semibold">world-class, high-speed engineering precision</span>.
            </p>
            <p>
              Our senior engineering squad partners directly with tech founders and CTOs to design, develop, and deploy production-ready web applications, Flutter mobile products, and custom AI models with 100% intellectual property ownership.
            </p>
          </div>

          {/* Right Official Dual Brand Logos */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0A0F18] shadow-xl overflow-hidden text-center">
              <div className="flex items-center justify-between mb-4 px-1">
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Crisp Vector Brand Identity
                </span>
                <span className="text-[10px] font-mono text-slate-400">vbuild.shop</span>
              </div>

              {/* Both Logos Side by Side Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-3 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-mono font-bold text-slate-600 uppercase">Light Theme</span>
                  <VBuildLogo size="lg" showTagline={false} />
                </div>
                <div className="p-4 bg-[#04070A] border border-slate-800 rounded-2xl text-center space-y-3 flex flex-col items-center justify-center dark">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Dark Theme</span>
                  <VBuildLogo size="lg" showTagline={false} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {agencyValues.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <motion.div
                key={val.title}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0A0F18] space-y-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${val.color} text-slate-950 flex items-center justify-center shadow-md`}>
                  <IconComp className="w-6 h-6 text-slate-950" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white font-heading">{val.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{val.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;