import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Layout,
  Code2,
  TestTube2,
  Rocket,
  Clock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface ProcessProps {
  onOpenBooking: (stageName: string) => void;
}

const Process: React.FC<ProcessProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Blueprint & Architecture',
      subtitle: 'Technical Scope & Wireframes',
      time: 'Days 1 - 3',
      icon: FileText,
      description:
        'We draft system architecture blueprints, define database schemas, document API endpoints, and create interactive Figma prototypes to align on 100% of product specifications.',
      deliverables: [
        'Figma Interactive UI/UX Prototype',
        'Database Schema & Entity Diagrams',
        'Technical Architecture Specification',
        'Milestone Delivery Schedule',
      ],
    },
    {
      num: '02',
      title: 'UI/UX Design Systems',
      subtitle: 'Component Libraries & Tokens',
      time: 'Days 4 - 7',
      icon: Layout,
      description:
        'Our design engineers craft accessible, responsive design systems with micro-animations, tailored color palettes, and component variants built for high conversion.',
      deliverables: [
        'Component Library & Design Tokens',
        'Mobile & Desktop Responsive Views',
        'Design System Documentation',
        'Assets Export & Developer Handoff',
      ],
    },
    {
      num: '03',
      title: 'Agile Sprint Engineering',
      subtitle: 'High-Velocity Sprints',
      time: 'Weeks 2 - 4',
      icon: Code2,
      description:
        'Senior engineers write clean, strictly-typed React/Next.js, Flutter, or Python code with automated CI/CD unit testing and daily staging deployments.',
      deliverables: [
        'Production-Grade Source Code',
        'Automated CI/CD Pipeline Build',
        'RESTful / GraphQL Microservices',
        'Live Staging Preview Environment',
      ],
    },
    {
      num: '04',
      title: 'QA & Security Audits',
      subtitle: 'Performance & Pen-Testing',
      time: 'Week 5',
      icon: TestTube2,
      description:
        'Rigorous automated cross-browser testing, mobile device lab validation, OWASP security audits, and Core Web Vitals optimization for sub-100ms LCP.',
      deliverables: [
        'Security & OWASP Audit Report',
        'Lighthouse Performance Metrics (>95)',
        'Cross-Browser & Device Test Suite',
        'Load & Stress Simulation Test Logs',
      ],
    },
    {
      num: '05',
      title: 'Production Deployment',
      subtitle: 'Cloud Launch & Transfer',
      time: 'Week 6+',
      icon: Rocket,
      description:
        'Zero-downtime production release to your AWS/Vercel cloud infrastructure. Complete IP code repository transfer with 30-day post-launch warranty.',
      deliverables: [
        'Live Production Deployment',
        '100% IP & Git Repository Handover',
        'Cloud Infrastructure & DNS Setup',
        '30-Day Post-Launch SLA Warranty',
      ],
    },
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 bg-white dark:bg-[#04070A] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-[#0A0F18] border border-indigo-200 dark:border-emerald-500/30 text-indigo-700 dark:text-emerald-400 text-xs font-semibold mb-4 shadow-sm animate-soft-breath">
            <Rocket className="w-3.5 h-3.5 text-indigo-600 dark:text-emerald-400 animate-float-icon" />
            <span className="uppercase tracking-wider font-mono text-[11px]">Engineering Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight font-display">
            How We <span className="shimmer-text">Build Products</span> Fast
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Our 5-step engineering sprint framework delivers high-impact web, mobile, and AI software from blueprint to production launch.
          </p>
        </div>

        {/* Step Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {steps.map((st, idx) => {
            const IconComp = st.icon;
            const isActive = activeStep === idx;
            return (
              <motion.button
                key={st.num}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all border relative overflow-hidden active:scale-[0.98] ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 border-emerald-500 text-slate-950 shadow-xl shadow-emerald-500/25 font-bold'
                    : 'bg-white dark:bg-[#0A0F18] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white shadow-sm'
                }`}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-slate-950' : 'text-indigo-600 dark:text-emerald-400'}`}>{st.num}</span>
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                </div>
                <div className="text-xs font-extrabold line-clamp-1 font-heading">{st.title}</div>
                <div className={`text-[10px] font-mono mt-1 ${isActive ? 'text-slate-900' : 'text-slate-500 dark:text-slate-400'}`}>{st.time}</div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0A0F18] relative overflow-hidden shadow-xl card-shine-effect"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-500 dark:bg-emerald-500 text-slate-950 font-mono font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    {steps[activeStep].num}
                  </span>
                  <div>
                    <span className="text-[11px] sm:text-xs font-mono text-indigo-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Turnaround: {steps[activeStep].time}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight font-heading">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {steps[activeStep].description}
                </p>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 font-heading">
                    Phase Deliverables & Milestones:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {steps[activeStep].deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-xl text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Graphic Card */}
              <div className="lg:col-span-5 bg-indigo-50/70 dark:bg-emerald-950/30 border border-indigo-100 dark:border-emerald-800/60 rounded-2xl p-5 sm:p-6 relative overflow-hidden text-center space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto text-slate-950 shadow-lg">
                  {React.createElement(steps[activeStep].icon, { className: 'w-7 h-7 sm:w-8 sm:h-8' })}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading">
                  {steps[activeStep].subtitle}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Guaranteed code quality and zero technical debt.
                </p>
                <button
                  onClick={() => onOpenBooking(`Process Phase: ${steps[activeStep].title}`)}
                  className="btn-primary-gradient w-full py-3 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Start Stage {steps[activeStep].num}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Process;
