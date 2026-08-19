import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';

interface TestimonialsProps {
  onOpenBooking: (type?: string) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onOpenBooking }) => {
  const reviews = [
    {
      id: 'rev-1',
      name: 'Sarah Jenkins',
      role: 'VP of Product @ Synapse AI',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      project: 'AI Resume Analytics System',
      quote:
        'VBUILD delivered our custom AI RAG pipeline in under 4 weeks. Their team writes cleaner TypeScript and Python than any external agency I have worked with. Our resume processing time dropped by 85% on day one.',
    },
    {
      id: 'rev-2',
      name: 'David Chen',
      role: 'Founder & CEO @ Aura Social',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      project: 'Flutter Mobile App',
      quote:
        'We needed a 60fps Flutter mobile app with real-time WebSockets that could handle 50,000 active users. VBUILD engineered a flawless architecture that launched on both App Store and Google Play on schedule.',
    },
    {
      id: 'rev-3',
      name: 'Vikram Malhotra',
      role: 'Chief Security Officer @ CyberShield',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      project: 'IPDR Log Processing Platform',
      quote:
        'Their deep knowledge of Python data processing and graph visualizers helped us build an anomaly detection engine capable of analyzing 500GB+ daily IPDR log files with zero latency.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#04070A] relative overflow-hidden transition-colors">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-[#0A0F18] border border-indigo-200 dark:border-emerald-500/30 text-indigo-700 dark:text-emerald-400 text-xs font-semibold mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-600 dark:text-emerald-400" />
            <span className="uppercase tracking-wider font-mono text-[11px]">Client Wall of Love</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight font-display">
            Trusted by <span className="shimmer-text">Tech Leaders</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Read how engineering directors, CTOs, and founders scale their software platforms with VBUILD.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0A0F18] flex flex-col justify-between relative shadow-md hover:shadow-2xl hover:shadow-emerald-500/15 overflow-hidden group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -7, scale: 1.025 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Top Gradient Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-400" />

              <div className="space-y-4 pt-1">
                {/* Author Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-12 h-12 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-emerald-500 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors font-heading">{rev.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{rev.role}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-300 dark:text-emerald-800 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                </div>

                {/* Rating Stars & Project Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 bg-indigo-50 dark:bg-emerald-950/60 border border-indigo-200 dark:border-emerald-800/80 rounded-full text-[10px] sm:text-[11px] font-mono text-indigo-700 dark:text-emerald-300 font-bold">
                    {rev.project}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic pt-1">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-6">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Verified Client Partnership</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout Footer Banner */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-indigo-200 dark:border-emerald-500/30 bg-gradient-to-r from-emerald-500 via-teal-600 to-amber-500 text-slate-950 text-center sm:text-left max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-black text-slate-950 font-heading">Ready to join our roster of successful clients?</h3>
            <p className="text-xs text-slate-900 font-semibold">Reserve your Q3 sprint slot before our calendar fills up.</p>
          </div>
          <button
            onClick={() => onOpenBooking('Reviews CTA')}
            className="w-full sm:w-auto px-6 py-3.5 bg-slate-950 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg whitespace-nowrap active:scale-[0.98] transition-transform"
          >
            Book Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
