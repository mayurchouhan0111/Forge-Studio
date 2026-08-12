import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Brain,
  Cloud,
  Layers,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

interface SkillsProps {
  onOpenBooking: () => void;
}

const Skills: React.FC<SkillsProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = [
    {
      id: 'Frontend & UI',
      title: 'Frontend & UI Engineering',
      description: 'Modern, high-speed single page applications & responsive design systems.',
      icon: Code2,
      gradient: 'from-indigo-600 via-violet-600 to-indigo-700',
      skills: [
        { name: 'React 18 & Next.js 14', level: 98, color: '#4F46E5', tag: 'Core Stack' },
        { name: 'TypeScript & JavaScript ES6+', level: 96, color: '#3B82F6', tag: 'Strict Typing' },
        { name: 'Tailwind CSS & CSS Modules', level: 95, color: '#06B6D4', tag: 'Responsive' },
        { name: 'Framer Motion & Micro-animations', level: 92, color: '#8B5CF6', tag: 'Animations' },
      ],
    },
    {
      id: 'Backend & Cloud',
      title: 'Backend Microservices & Cloud Architecture',
      description: 'Resilient REST & GraphQL APIs, serverless computing, and database clusters.',
      icon: Database,
      gradient: 'from-blue-600 via-indigo-600 to-cyan-600',
      skills: [
        { name: 'Node.js & Express / NestJS', level: 94, color: '#10B981', tag: 'Runtime' },
        { name: 'Python & FastAPI / Django', level: 93, color: '#3B82F6', tag: 'AI Backends' },
        { name: 'PostgreSQL, Redis & MongoDB', level: 92, color: '#6366F1', tag: 'Databases' },
        { name: 'AWS, Docker & Terraform', level: 90, color: '#F59E0B', tag: 'DevOps' },
      ],
    },
    {
      id: 'AI & Data Systems',
      title: 'AI Agents, Vector DBs & LLM Systems',
      description: 'Custom Retrieval-Augmented Generation (RAG) and autonomous AI pipelines.',
      icon: Brain,
      gradient: 'from-purple-600 via-indigo-600 to-pink-600',
      skills: [
        { name: 'OpenAI GPT-4o & LangChain', level: 95, color: '#8B5CF6', tag: 'LLM Systems' },
        { name: 'Pinecone, ChromaDB & Vector Embeddings', level: 92, color: '#EC4899', tag: 'Vector DB' },
        { name: 'Python Data Extraction (Pandas/Numpy)', level: 94, color: '#06B6D4', tag: 'Data Science' },
        { name: 'Autonomous Multi-Agent Workflows', level: 90, color: '#4F46E5', tag: 'AI Agents' },
      ],
    },
    {
      id: 'Mobile & Security',
      title: 'Cross-Platform Mobile & Cybersecurity',
      description: 'High-performance Flutter mobile apps and IPDR security analytics platforms.',
      icon: Layers,
      gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
      skills: [
        { name: 'Flutter & Dart Mobile Systems', level: 96, color: '#0284C7', tag: 'iOS / Android' },
        { name: 'Firebase & Realtime WebSockets', level: 94, color: '#F59E0B', tag: 'Live Data' },
        { name: 'IPDR Log Analysis & Threat Detection', level: 92, color: '#EF4444', tag: 'Security' },
        { name: 'OWASP Security & Penetration Testing', level: 90, color: '#10B981', tag: 'Audit SLA' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-slate-50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4 shadow-sm animate-soft-breath">
            <Cpu className="w-3.5 h-3.5 text-indigo-600 animate-pulse-glow-icon" />
            <span className="uppercase tracking-wider font-mono text-[11px]">Modern Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 font-display tracking-tight">
            Battle-Tested <span className="shimmer-text">Technology Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We build exclusively with modern, highly-maintained frameworks and cloud infrastructure that guarantee maximum security and lightning speed.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {categories
            .filter((c) => activeTab === 'All' || c.id === activeTab)
            .map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white space-y-6 shadow-md hover:shadow-2xl hover:shadow-indigo-500/15 relative overflow-hidden group cursor-default"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -7, scale: 1.025 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Top Gradient Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cat.gradient}`} />

                  <div className="flex items-center gap-4 pt-1">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${cat.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{cat.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">{cat.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-slate-800 flex items-center gap-2 pr-2">
                            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: skill.color }} />
                            <span className="truncate">{skill.name}</span>
                          </span>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="px-2 py-0.5 bg-indigo-50 border border-indigo-200 rounded text-[10px] text-indigo-700 font-mono font-bold">
                              {skill.tag}
                            </span>
                            <span className="font-mono text-slate-700">{skill.level}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Additional Stack Pill Grid */}
        <div className="glass-card p-8 rounded-3xl border border-slate-200 bg-white text-center shadow-md">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Additional Ecosystem Tools & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              'Git',
              'Docker',
              'AWS EC2/S3',
              'Figma',
              'Postman',
              'Linux',
              'REST APIs',
              'GraphQL',
              'Socket.io',
              'Redux',
              'Tailwind CSS',
              'Vite',
              'PostgreSQL',
              'Redis',
              'Stripe',
              'Vercel',
              'GitHub Actions',
              'Cypress',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-700 hover:border-indigo-500 hover:text-indigo-600 transition-colors cursor-default shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;