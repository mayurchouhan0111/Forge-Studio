import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Smartphone,
  Brain,
  Cloud,
  Layout,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  X,
} from 'lucide-react';

interface ServicesProps {
  onOpenBooking: (serviceName?: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalService, setActiveModalService] = useState<any | null>(null);

  const categories = ['All', 'Web Engineering', 'Mobile Apps', 'AI & Machine Learning', 'Cloud & Security'];

  const servicesList = [
    {
      id: 'web',
      category: 'Web Engineering',
      title: 'Full-Stack Web Engineering & Next.js Platforms',
      subtitle: 'High-performance, SSR-optimized, scalable web applications built for speed and conversion.',
      icon: Code,
      accent: 'from-emerald-500 via-teal-500 to-amber-500',
      badgeClass: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300',
      badge: 'Popular',
      deliveryTime: '2 - 5 Weeks',
      tech: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      features: [
        'Sub-100ms LCP & Core Web Vitals Optimization',
        'Server-Side Rendering (SSR) & Static Site Generation',
        'Full RESTful & GraphQL API Integration',
        'Real-time WebSocket & Live Data Feeds',
        'Secure Authentication & Role-Based Access (RBAC)',
        'Comprehensive Automated Unit & E2E Testing',
      ],
      deliverables: 'Full GitHub Repository, CI/CD Deployment Pipelines, Vercel/AWS Setup, System Documentation.',
    },
    {
      id: 'mobile',
      category: 'Mobile Apps',
      title: 'Cross-Platform Flutter & Native Mobile Apps',
      subtitle: 'iOS & Android mobile apps engineered with pixel-perfect UI, 60fps animations, and offline-first capabilities.',
      icon: Smartphone,
      accent: 'from-cyan-500 via-blue-600 to-indigo-600',
      badgeClass: 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300',
      badge: 'High Performance',
      deliveryTime: '3 - 6 Weeks',
      tech: ['Flutter', 'Dart', 'Firebase', 'Native iOS/Android', 'Bloc/Provider', 'SQLite'],
      features: [
        'Single Codebase iOS & Android Deployment',
        'Native Hardware Access (Camera, GPS, Biometrics)',
        'Push Notifications & Background Sync Engine',
        'Offline-First Local Database Synchronization',
        'App Store & Google Play Store Submission',
        'Biometric Auth (FaceID / Fingerprint)',
      ],
      deliverables: 'Compiled iOS .ipa & Android .apk / .aab, Play/App Store assets, Source Code.',
    },
    {
      id: 'ai',
      category: 'AI & Machine Learning',
      title: 'Autonomous AI Agents & RAG Custom Integrations',
      subtitle: 'Transform business operations with custom LLM agents, vector semantic search, and document intelligence.',
      icon: Brain,
      accent: 'from-purple-600 via-indigo-600 to-pink-600',
      badgeClass: 'bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300',
      badge: 'Cutting Edge',
      deliveryTime: '3 - 5 Weeks',
      tech: ['Python', 'OpenAI GPT-4o', 'LangChain', 'Pinecone', 'TensorFlow', 'FastAPI'],
      features: [
        'Custom Retrieval-Augmented Generation (RAG)',
        'Autonomous Multi-Agent AI Workflow Automation',
        'Vector Embeddings & Semantic Document Search',
        'NLP Resume, Document & PDF Extraction',
        'Fine-Tuned Domain Specific Language Models',
        'Real-time AI Chatbot & Agentic Assistants',
      ],
      deliverables: 'Python FastAPI Microservices, Vector DB Indexing, Model Weights & Prompts, API Documentation.',
    },
    {
      id: 'cloud',
      category: 'Cloud & Security',
      title: 'Enterprise Cloud Architecture & DevOps Systems',
      subtitle: 'Resilient cloud infrastructure, automated CI/CD pipelines, and microservice orchestration.',
      icon: Cloud,
      accent: 'from-emerald-500 via-teal-500 to-cyan-600',
      badgeClass: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300',
      badge: 'Scalability',
      deliveryTime: '2 - 4 Weeks',
      tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Redis'],
      features: [
        'Zero-Downtime CI/CD Automated Pipelines',
        'Containerized Docker & Kubernetes Deployment',
        'Auto-scaling Cloud Clusters (AWS / GCP / Vercel)',
        'Redis Caching & Database Load Balancing',
        'Microservice Mesh & Distributed Architecture',
        'Disaster Recovery & Daily Automated Backups',
      ],
      deliverables: 'Terraform Scripts, Dockerfiles, AWS IAM & VPC Setup, Security Policy Docs.',
    },
    {
      id: 'design',
      category: 'Web Engineering',
      title: 'UI/UX Design Systems & Product Architecture',
      subtitle: 'Bespoke design systems, interactive Figma prototypes, and user experience research.',
      icon: Layout,
      accent: 'from-rose-500 via-pink-500 to-amber-500',
      badgeClass: 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300',
      badge: 'Design System',
      deliveryTime: '1 - 3 Weeks',
      tech: ['Figma', 'Design Systems', 'Micro-Interactions', 'Prototyping', 'User Testing'],
      features: [
        'High-Fidelity Interactive Figma Wireframes',
        'Custom Design Tokens & Color Palette Schemas',
        'Component Library & Component Variants',
        'Mobile-Responsive Layout Standards',
        'Usability Audits & User Journey Mapping',
        'Developer-Ready Handout Specs & Assets',
      ],
      deliverables: 'Interactive Figma File, Tokens JSON, Exported SVGs, UI Guidelines Handbook.',
    },
    {
      id: 'security',
      category: 'Cloud & Security',
      title: 'IPDR & Cybersecurity Intelligence Systems',
      subtitle: 'Specialized log analysis, anomaly detection, and security audit platforms for enterprise compliance.',
      icon: ShieldAlert,
      accent: 'from-red-500 via-amber-600 to-yellow-500',
      badgeClass: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300',
      badge: 'CyberShield',
      deliveryTime: '3 - 5 Weeks',
      tech: ['Python', 'Pandas', 'Cyber Security', 'Threat Detection', 'React', 'D3.js'],
      features: [
        'IPDR Log Processing & Anomaly Analytics',
        'Real-time Threat Pattern Recognition',
        'OWASP Top 10 Security Audit & Remediation',
        'Interactive Security Dashboard & Graph Visualizations',
        'Role-based Audit Trail & Immutable Logging',
        'Compliance Reporting (GDPR / ISO27001 Ready)',
      ],
      deliverables: 'Security Audit Report, Anomaly Engine Source Code, Security Dashboard.',
    },
  ];

  const filteredServices =
    selectedCategory === 'All'
      ? servicesList
      : servicesList.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#04070A] relative overflow-hidden transition-colors">
      {/* Ambient Background Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-[#0A0F18] border border-indigo-200 dark:border-emerald-500/30 text-indigo-700 dark:text-emerald-400 text-xs font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-emerald-400" />
            <span className="uppercase tracking-wider font-mono text-[11px]">Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight font-display">
            End-to-End <span className="shimmer-text font-black">Digital Services</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            We assemble elite cross-functional squads to architect, engineer, and deploy high-performance software systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 mb-10 sm:mb-12 overflow-x-auto no-scrollbar pb-2 pt-1 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap active:scale-[0.97] ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-500/25 font-black'
                  : 'bg-white dark:bg-[#0A0F18] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.id}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0A0F18] relative overflow-hidden group cursor-default shadow-md hover:shadow-2xl hover:shadow-emerald-500/15"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -7, scale: 1.025 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                viewport={{ once: true }}
              >
                {/* Top Vibrant Multi-Color Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.accent}`} />

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5 pt-1">
                    <div className={`w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-br ${service.accent} rounded-2xl flex items-center justify-center shadow-lg text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <IconComp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <span className={`px-3.5 py-1 border rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-sm ${service.badgeClass}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors font-heading">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tech.map((t: string) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-md text-[11px] font-mono text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Features Bullet List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((ft: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{ft}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Link & SLA */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.deliveryTime}</span>
                  </div>
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-emerald-400 hover:text-indigo-700 dark:hover:text-emerald-300 group/btn"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalService(null)}
            />

            <motion.div
              className="relative w-full max-w-2xl bg-white dark:bg-[#0A0F18] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto text-slate-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className={`p-3 bg-gradient-to-br ${activeModalService.accent} rounded-2xl text-white shadow-md`}>
                    {React.createElement(activeModalService.icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-indigo-600 dark:text-emerald-400 font-bold uppercase">{activeModalService.category}</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-heading">{activeModalService.title}</h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeModalService.subtitle}
                </p>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 font-heading">Technical Capabilities Included:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalService.features.map((f: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-indigo-50 dark:bg-emerald-950/40 border border-indigo-200 dark:border-emerald-800/60 p-4 rounded-2xl">
                  <h4 className="text-xs font-bold text-indigo-900 dark:text-emerald-300 uppercase tracking-wider mb-1 font-heading">Guaranteed Client Deliverables:</h4>
                  <p className="text-xs text-indigo-700 dark:text-emerald-200 leading-relaxed">{activeModalService.deliverables}</p>
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Estimated SLA: {activeModalService.deliveryTime}</span>
                  <button
                    onClick={() => {
                      const srvName = activeModalService.title;
                      setActiveModalService(null);
                      onOpenBooking(srvName);
                    }}
                    className="btn-primary-gradient px-6 py-3 text-slate-950 font-black text-xs uppercase rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Book Service Sprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
