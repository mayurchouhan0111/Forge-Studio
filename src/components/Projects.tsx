import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Smartphone,
  Globe,
  Brain,
  Shield,
  Sparkles,
  TrendingUp,
  X,
  CheckCircle2,
  ArrowRight,
  Zap,
} from 'lucide-react';

interface ProjectsProps {
  onOpenBooking: (projectName: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);

  const filterTabs = ['All', 'AI & Neural Systems', 'Mobile Apps', 'Web Platforms', 'Cybersecurity'];

  const projectsList = [
    {
      id: 'flutter-dating',
      title: 'Aura Social & Matching Ecosystem',
      category: 'Mobile Apps',
      metric: '+340% User Retention',
      badgeClass: 'bg-cyan-500 text-white font-mono font-black',
      image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=1000&q=80',
      description: 'Ultra-fast cross-platform mobile application featuring real-time WebSockets chat, AI match recommendations, and biometric user verification.',
      technologies: ['Flutter', 'Firebase', 'Dart', 'WebSockets', 'OpenAI'],
      icon: Smartphone,
      accent: 'from-cyan-500 via-blue-600 to-indigo-600',
      features: [
        'Real-time encrypted WebSockets messaging',
        'AI user similarity vector matching algorithm',
        'Biometric FaceID profile verification',
        'Sub-100ms push notifications engine',
      ],
      challenge: 'The client needed a mobile application capable of serving 50k concurrently active users without WebSocket chat latency or server drops.',
      solution: 'We engineered a Flutter mobile architecture backed by Firebase Realtime DB and an automated NodeJS event dispatcher on AWS.',
      results: ['50,000+ Active Monthly Users', '4.9 Star Rating on App Store', '99.98% Server Uptime'],
      demoUrl: 'https://vbuild.shop',
    },
    {
      id: 'ai-resume',
      title: 'Synapse AI Talent Analytics Engine',
      category: 'AI & Neural Systems',
      metric: '10M+ Documents Processed',
      badgeClass: 'bg-purple-600 text-white font-mono font-black',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      description: 'Autonomous AI talent intelligence platform utilizing GPT-4o LLM embeddings to score, parse, and match tech candidates in seconds.',
      technologies: ['Python', 'FastAPI', 'OpenAI GPT-4o', 'Pinecone', 'React 18'],
      icon: Brain,
      accent: 'from-purple-600 via-indigo-600 to-pink-600',
      features: [
        'Multi-format PDF & DOCX vector parsing engine',
        'Semantic search across 10M+ candidate profiles',
        'Custom fine-tuned HR scoring LLM model',
        'Interactive candidate analytics dashboard',
      ],
      challenge: 'Manual resume screening caused hiring delays of up to 3 weeks per senior engineering role.',
      solution: 'VBUILD built a vector RAG pipeline indexing candidate resumes with sub-second hybrid semantic keyword matching.',
      results: ['85% Reduction in Screening Time', '10M+ Resumes Parsed', '99.2% Parsing Accuracy'],
      demoUrl: 'https://vbuild.shop',
    },
    {
      id: 'saas-booking',
      title: 'ArenaX SaaS Booking & Payment Platform',
      category: 'Web Platforms',
      metric: '$4.2M GMV Processed',
      badgeClass: 'bg-indigo-600 text-white font-mono font-black',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      description: 'Next.js enterprise multi-tenant booking SaaS with automated Stripe billing, dynamic calendar scheduling, and SMS reminders.',
      technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'PostgreSQL'],
      icon: Globe,
      accent: 'from-indigo-600 via-violet-600 to-indigo-700',
      features: [
        'Multi-tenant workspace isolation & custom domain routing',
        'Stripe Connect split payments & subscription billing',
        'Dynamic drag-and-drop calendar scheduler',
        'Twilio SMS & SendGrid automated transactional alerts',
      ],
      challenge: 'High customer churn due to clunky legacy booking UI and slow server-side page loads.',
      solution: 'Re-architected into a Next.js 14 App Router application with sub-100ms LCP and automated Stripe checkout hooks.',
      results: ['$4.2M+ Annual GMV', '0.4s Average Load Speed', '3.8x Conversion Rate Lift'],
      demoUrl: 'https://vbuild.shop',
    },
    {
      id: 'cybershield-ipdr',
      title: 'CyberShield IPDR Security Intelligence',
      category: 'Cybersecurity',
      metric: '500GB+ Daily Logs Analyzed',
      badgeClass: 'bg-emerald-600 text-white font-mono font-black',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
      description: 'A-Party to B-Party relationship mapping system for internet protocol detail record (IPDR) log analysis and anomaly detection.',
      technologies: ['Python', 'D3.js', 'PostgreSQL', 'NetworkX', 'Tailwind CSS'],
      icon: Shield,
      accent: 'from-emerald-600 via-teal-600 to-cyan-600',
      features: [
        'A-Party to B-Party graph relationship visualizer',
        'Real-time IPDR telecom log ingestion & parsing',
        'High-risk anomaly and threat classification',
        'Exportable forensic PDF & CSV intelligence reports',
      ],
      challenge: 'Security analysts spent hours manually querying millions of raw IPDR log lines in SQL databases.',
      solution: 'VBUILD built an interactive D3 graph network map with automatic cell-tower relationship detection.',
      results: ['500GB+ Daily Log Capacity', 'Sub-Second Graph Rendering', '100% Security Audit Compliance'],
      demoUrl: 'https://vbuild.shop',
    },
  ];

  const filteredProjects =
    activeTab === 'All' ? projectsList : projectsList.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#04070A] relative overflow-hidden transition-colors">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-[#0A0F18] border border-indigo-200 dark:border-emerald-500/30 text-indigo-700 dark:text-emerald-400 text-xs font-bold mb-4 shadow-sm animate-soft-breath">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-emerald-400 animate-pulse-glow-icon" />
            <span className="uppercase tracking-wider font-mono text-[11px]">Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight font-display">
            Featured <span className="shimmer-text">Client Successes</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Explore production software engineered by VBUILD for high-growth tech startups and enterprise platforms.
          </p>
        </div>

        {/* Filter Pills - Clean Flex Wrapper */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 active:scale-[0.97] ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-xl shadow-emerald-500/30 scale-105 border-0'
                  : 'bg-white dark:bg-[#0A0F18] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white shadow-sm'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => {
            const IconComp = project.icon;
            return (
              <motion.div
                key={project.id}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0A0F18] flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 cursor-default group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Top Multi-Color Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accent} z-20`} />

                {/* Preview Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden pt-1.5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                  {/* Floating Metric Badge */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="px-4 py-2 rounded-xl text-xs font-black font-mono shadow-2xl bg-slate-900/90 text-white border border-white/20 backdrop-blur-md flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      {project.metric}
                    </span>
                  </div>

                  {/* Category Pill Overlay */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white z-10">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.accent} text-white shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors font-display">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-medium">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-indigo-50 dark:bg-emerald-950/40 border border-indigo-200/80 dark:border-emerald-800/60 rounded-xl text-xs font-mono font-bold text-indigo-700 dark:text-emerald-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="btn-primary-gradient button-shine-flare px-5 py-3 rounded-xl text-xs font-black text-slate-950 flex items-center gap-2 shadow-md active:scale-[0.98]"
                    >
                      <TrendingUp className="w-4 h-4" />
                      <span>View Case Study</span>
                    </button>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary-outline px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-[0.98]"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detailed Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
            />

            <motion.div
              className="relative w-full max-w-3xl bg-white dark:bg-[#0A0F18] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl z-10 max-h-[90vh] overflow-y-auto text-slate-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Modal Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${selectedCaseStudy.accent}`} />

              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-full z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-6 space-y-2 pt-1">
                <span className="px-3.5 py-1 bg-indigo-50 dark:bg-emerald-950/60 border border-indigo-200 dark:border-emerald-800 text-indigo-700 dark:text-emerald-300 rounded-full text-xs font-black font-mono uppercase">
                  {selectedCaseStudy.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white pt-1 font-display">
                  {selectedCaseStudy.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {selectedCaseStudy.description}
                </p>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 dark:bg-amber-950/40 p-4.5 rounded-2xl border border-amber-200 dark:border-amber-800/80">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2 font-heading">
                    The Challenge:
                  </h4>
                  <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed font-medium">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>
                <div className="bg-indigo-50 dark:bg-emerald-950/40 p-4.5 rounded-2xl border border-indigo-200 dark:border-emerald-800/80">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-indigo-900 dark:text-emerald-300 mb-2 font-heading">
                    The VBUILD Solution:
                  </h4>
                  <p className="text-xs text-indigo-800 dark:text-emerald-200 leading-relaxed font-medium">
                    {selectedCaseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Outcome Metrics */}
              <div className="mb-6">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 font-heading">
                  Verified Outcome & Metrics:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedCaseStudy.results.map((res: string, i: number) => (
                    <div key={i} className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-center font-extrabold text-xs text-slate-900 dark:text-white flex items-center justify-center gap-2 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition-colors"
                >
                  Close Case Study
                </button>
                <button
                  onClick={() => {
                    const title = selectedCaseStudy.title;
                    setSelectedCaseStudy(null);
                    onOpenBooking(`Replicate Architecture: ${title}`);
                  }}
                  className="btn-primary-gradient button-shine-flare px-6 py-3 text-xs font-black text-slate-950 rounded-xl shadow-lg active:scale-[0.98] flex items-center gap-2"
                >
                  <span>Build Similar Product</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;