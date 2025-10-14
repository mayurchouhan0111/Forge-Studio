import { motion } from 'framer-motion';
import { Target, Award, Globe, Zap } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

const Stats = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    countries: 0,
    growth: 0
  });

  const stats = useMemo(() => [
    {
      key: 'projects',
      target: 50,
      label: 'Projects Delivered',
      icon: Target,
      suffix: '+'
    },
    {
      key: 'satisfaction',
      target: 98,
      label: 'Client Satisfaction',
      icon: Award,
      suffix: '%'
    },
    {
      key: 'countries',
      target: 15,
      label: 'Countries Served',
      icon: Globe,
      suffix: '+'
    },
    {
      key: 'growth',
      target: 100,
      label: 'Growth Focused',
      icon: Zap,
      suffix: '%'
    }
  ], []);

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat) => {
        let current = 0;
        const increment = stat.target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }));
        }, 40);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [stats]);

  return (
    <section
      id="stats-section"
      className="py-16 px-4 md:px-8 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-500/20">
                <stat.icon className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {counters[stat.key]}{stat.suffix}
              </div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
