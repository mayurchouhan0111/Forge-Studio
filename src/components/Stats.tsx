import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const Stats = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    experience: 0,
    support: 0
  });

  const stats = [
    { 
      key: 'projects',
      target: 500, 
      label: 'Projects Completed', 
      icon: TrendingUp,
      suffix: '+',
      color: 'from-purple-500 to-purple-700'
    },
    { 
      key: 'satisfaction',
      target: 99, 
      label: 'Client Satisfaction', 
      icon: Award,
      suffix: '%',
      color: 'from-cyan-500 to-cyan-700'
    },
    { 
      key: 'experience',
      target: 5, 
      label: 'Years Experience', 
      icon: Users,
      suffix: '+',
      color: 'from-pink-500 to-pink-700'
    },
    { 
      key: 'support',
      target: 24, 
      label: 'Support Available', 
      icon: Clock,
      suffix: '/7',
      color: 'from-green-500 to-green-700'
    }
  ];

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
  }, []);

  return (
    <section 
      id="stats-section"
      className="py-20 px-6 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="text-4xl md:text-5xl font-black text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {counters[stat.key]}{stat.suffix}
                </motion.div>
                
                <div className="text-gray-400 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;