import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  Flame,
  Code2,
  Users,
} from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const agencyValues = [
    {
      title: '100% Code & IP Ownership',
      description: 'You retain full intellectual property rights, repository ownership, and deployment keys upon completion.',
      icon: ShieldCheck,
      color: 'from-indigo-600 to-indigo-700',
    },
    {
      title: 'Zero Tech Debt Architecture',
      description: 'Strict TypeScript interfaces, automated CI/CD checks, and modular design patterns mean your codebase scales seamlessly.',
      icon: Code2,
      color: 'from-violet-600 to-indigo-600',
    },
    {
      title: 'Direct Senior Architect Access',
      description: 'No account managers or middle layers. You communicate directly with senior solutions architects on Slack.',
      icon: Users,
      color: 'from-emerald-600 to-teal-600',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-50 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4 shadow-sm">
            <Flame className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider font-mono text-[11px]">Agency Principles & Culture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4 font-display">
            About <span className="shimmer-text">VBUILD</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We are an elite software & AI engineering studio building high-impact digital products for ambitious startups and enterprises.
          </p>
        </div>

        {/* Story Box */}
        <div className="glass-card p-6 sm:p-12 rounded-3xl border border-slate-200 bg-white mb-12 sm:mb-16 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Engineered for Speed, Precision & Code Ownership
            </h3>
            <p>
              VBUILD (<a href="https://vbuild.shop/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-mono font-bold">vbuild.shop</a>) was founded with a singular mission: to eliminate low-quality outsourced software development and replace it with <span className="text-indigo-600 font-semibold">world-class, high-speed engineering precision</span>.
            </p>
            <p>
              Our senior engineering squad partners directly with tech founders and CTOs to design, develop, and deploy production-ready web applications, Flutter mobile products, and custom AI models with 100% intellectual property ownership.
            </p>
          </div>
        </div>

        {/* Agency Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {agencyValues.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <motion.div
                key={val.title}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white space-y-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${val.color} text-white flex items-center justify-center shadow-md`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{val.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;