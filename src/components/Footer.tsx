import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Flame,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
  Heart,
  Send,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Capabilities & Services', href: '#services' },
    { name: 'Project Showcase', href: '#projects' },
    { name: 'Scope Estimator', href: '#estimator' },
    { name: 'Engineering Process', href: '#process' },
    { name: 'Tech Stack Matrix', href: '#skills' },
    { name: 'Client Wall of Love', href: '#testimonials' },
    { name: 'Contact Agency', href: '#contact' },
  ];

  const services = [
    'Web Engineering (Next.js / React)',
    'Flutter Mobile Apps (iOS/Android)',
    'Autonomous AI Agents & RAG',
    'Enterprise Cloud & DevOps',
    'UI/UX Product Architecture',
    'IPDR Cybersecurity & Log Analysis',
  ];

  return (
    <footer className="bg-[#0F172A] text-slate-300 relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main 4-Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-12">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-violet-600 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-display">
                V<span className="text-indigo-400">BUILD</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              VBUILD (<a href="https://vbuild.shop/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline font-mono">vbuild.shop</a>) is a premier digital engineering agency crafting high-impact web platforms, Flutter mobile products, and autonomous AI systems with 100% IP code ownership.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 bg-white/5 p-2.5 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>100% Codebase IP Ownership</span>
            </div>

            <div className="flex space-x-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-indigo-500 transition-colors active:scale-[0.95]"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-indigo-400 hover:border-indigo-500 transition-colors active:scale-[0.95]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-sky-400 hover:border-sky-400 transition-colors active:scale-[0.95]"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5 py-0.5">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0" />
                    <span className="truncate">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Capabilities</h4>
            <ul className="space-y-2 text-xs">
              {services.map((srv) => (
                <li key={srv} className="text-slate-400 hover:text-white transition-colors cursor-default leading-tight">
                  {srv}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box (3 cols) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Tech Insights Newsletter</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get monthly engineering breakdowns, AI architecture benchmarks, and tech trends.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="cto@company.com"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors active:scale-[0.95]"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {isSubscribed && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Subscribed! Check your inbox soon.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            &copy; {currentYear} VBUILD Digital Agency (<a href="https://vbuild.shop/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline font-mono">vbuild.shop</a>). All rights reserved. Crafted with precision.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 hover:text-white transition-colors active:scale-[0.95]"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;