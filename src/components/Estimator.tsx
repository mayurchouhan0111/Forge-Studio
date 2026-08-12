import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Zap,
} from 'lucide-react';

interface EstimatorProps {
  onOpenBooking: (type?: string) => void;
}

const Estimator: React.FC<EstimatorProps> = ({ onOpenBooking }) => {
  const [projectType, setProjectType] = useState<string>('web');
  const [scope, setScope] = useState<string>('mvp');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['ai-rag']);

  const projectTypesList = [
    { id: 'web', label: 'Full-Stack Web App (Next.js)', cost: 6000, weeks: 3, desc: 'Responsive SPA / SSR web application with custom DB & admin panel' },
    { id: 'mobile', label: 'Cross-Platform Mobile (Flutter)', cost: 8000, weeks: 4, desc: 'iOS & Android app with 60fps animations & WebSockets' },
    { id: 'ai', label: 'Autonomous AI Agent System', cost: 7500, weeks: 4, desc: 'LLM agents, vector DB RAG pipeline & automated workflows' },
    { id: 'enterprise', label: 'Complete Ecosystem (Web + App + AI)', cost: 16000, weeks: 7, desc: 'Full product suite: Web, Mobile, and integrated AI engine' },
  ];

  const scopeOptions = [
    { id: 'mvp', label: 'MVP / V1 Launch', mult: 1, weeksAdd: 0, desc: 'Core essential capabilities for fast public market validation' },
    { id: 'growth', label: 'Growth & Scaling', mult: 1.5, weeksAdd: 2, desc: 'Advanced analytics, payment gateways & automated marketing' },
    { id: 'enterprise', label: 'Enterprise Suite', mult: 2.2, weeksAdd: 4, desc: 'High-availability clustering, SOC2 compliance & custom SLA' },
  ];

  const addOnOptions = [
    { id: 'ai-rag', label: 'Custom AI Vector RAG Document Indexer', cost: 2500, weeksAdd: 1 },
    { id: 'stripe', label: 'Stripe Subscription Billing & Connect Workflows', cost: 1500, weeksAdd: 0.5 },
    { id: 'design-system', label: 'Bespoke Figma UI/UX Design System Suite', cost: 2000, weeksAdd: 1 },
    { id: 'devops', label: 'AWS Automated Kubernetes Multi-Region Cluster', cost: 1800, weeksAdd: 1 },
  ];

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const selectedPt = projectTypesList.find((p) => p.id === projectType) || projectTypesList[0];
  const selectedSc = scopeOptions.find((s) => s.id === scope) || scopeOptions[0];
  
  const addOnsTotalCost = selectedAddOns.reduce((acc, currId) => {
    const item = addOnOptions.find((a) => a.id === currId);
    return acc + (item ? item.cost : 0);
  }, 0);

  const addOnsTotalWeeks = selectedAddOns.reduce((acc, currId) => {
    const item = addOnOptions.find((a) => a.id === currId);
    return acc + (item ? item.weeksAdd : 0);
  }, 0);

  const estimatedTotal = Math.round(selectedPt.cost * selectedSc.mult + addOnsTotalCost);
  const estimatedWeeks = Math.ceil(selectedPt.weeks + selectedSc.weeksAdd + addOnsTotalWeeks);

  return (
    <section id="estimator" className="py-24 px-4 sm:px-6 bg-slate-50 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4 shadow-sm animate-soft-breath">
            <Calculator className="w-3.5 h-3.5 text-indigo-600 animate-wiggle-icon" />
            <span className="uppercase tracking-wider font-mono text-[11px]">Instant Scope Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight font-display">
            Interactive <span className="shimmer-text">Project Calculator</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Select your architecture preferences, stage, and add-ons to calculate a budget and timeline estimate in seconds.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Controls */}
          <motion.div
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white space-y-6 sm:space-y-8 shadow-sm card-shine-effect"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Step 1: Select Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-indigo-600 mb-3">
                1. Select Core Product Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypesList.map((pt) => (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setProjectType(pt.id)}
                    className={`p-3.5 rounded-2xl text-left transition-all border active:scale-[0.98] ${
                      projectType === pt.id
                        ? 'bg-indigo-50 border-indigo-600 text-slate-900 shadow-md font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-slate-900 mb-0.5">{pt.label}</div>
                    <div className="text-[11px] text-slate-500 font-mono leading-tight">{pt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Scope Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-violet-600 mb-3">
                2. Select Development Stage / Scope
              </label>
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5">
                {scopeOptions.map((sc) => (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => setScope(sc.id)}
                    className={`p-3 sm:p-3.5 rounded-2xl text-left transition-all border active:scale-[0.98] ${
                      scope === sc.id
                        ? 'bg-violet-50 border-violet-600 text-slate-900 shadow-md font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-xs text-slate-900 mb-1">{sc.label}</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">{sc.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Select Power Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-600 mb-3">
                3. Select Capability Add-Ons (Optional)
              </label>
              <div className="space-y-2">
                {addOnOptions.map((ao) => {
                  const isChecked = selectedAddOns.includes(ao.id);
                  return (
                    <button
                      key={ao.id}
                      type="button"
                      onClick={() => toggleAddOn(ao.id)}
                      className={`w-full p-3 rounded-xl text-left flex items-center justify-between text-xs font-semibold transition-all border active:scale-[0.99] ${
                        isChecked
                          ? 'bg-cyan-50 border-cyan-500 text-cyan-900 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border flex-shrink-0 ${
                            isChecked ? 'bg-cyan-600 border-cyan-600 text-white font-bold' : 'border-slate-300'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3 h-3 text-white stroke-[3]" />}
                        </div>
                        <span className="truncate">{ao.label}</span>
                      </div>
                      <span className="font-mono text-cyan-700 text-xs font-bold flex-shrink-0">+${ao.cost}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real-Time Estimate Summary Card */}
          <motion.div
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white sticky top-28 space-y-6 shadow-xl animate-border-pulse"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Calculated Estimate</h3>
                  <p className="text-xs text-slate-500">Live configuration summary</p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-bold rounded-full">
                Fixed Price SLA
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
                <span className="text-slate-500">Estimated Investment:</span>
                <span className="text-xl sm:text-2xl font-black text-indigo-600 font-mono">
                  ${estimatedTotal.toLocaleString()} USD
                </span>
              </div>

              <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
                <span className="text-slate-500">Estimated Turnaround:</span>
                <span className="text-sm font-bold text-slate-900 font-mono flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-indigo-600" />
                  {estimatedWeeks} Weeks
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() =>
                  onOpenBooking(
                    `Estimator Config: ${selectedPt.label} (${selectedSc.label}) - ~$${estimatedTotal}`
                  )
                }
                className="button-shine-flare w-full py-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:opacity-95 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>Lock In Estimate & Reserve Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;
