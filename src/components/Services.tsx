import { motion } from 'framer-motion';
import { Smartphone, Code, Brain, Database, Cloud, Palette, ArrowRight, Check, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Flutter Development',
      tagline: 'Cross-Platform Excellence',
      description: 'Native-quality mobile and web applications with stunning UI, built once and deployed everywhere.',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      features: ['iOS & Android Apps', 'Progressive Web Apps', 'GetX State Management', 'Firebase Integration'],
      stats: '50+ Apps Delivered'
    },
    {
      title: 'AI-Powered Solutions',
      tagline: 'Intelligence Built In',
      description: 'Transform your business with cutting-edge AI integration, from intelligent chatbots to automated workflows.',
      icon: Brain,
      color: 'from-cyan-500 to-blue-500',
      features: ['Document Processing', 'Conversational AI', 'ML Model Integration', 'Predictive Analytics'],
      stats: '10+ AI Projects'
    },
    {
      title: 'Full-Stack Development',
      tagline: 'End-to-End Solutions',
      description: 'Complete web applications with modern frameworks, scalable architecture, and seamless user experiences.',
      icon: Code,
      color: 'from-violet-500 to-purple-500',
      features: ['React & Next.js', 'Real-time Features', 'RESTful APIs', 'Responsive Design'],
      stats: '30+ Web Apps'
    },
    {
      title: 'Backend Architecture',
      tagline: 'Robust & Scalable',
      description: 'Secure server-side solutions with optimized databases, authentication systems, and API development.',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      features: ['Node.js & Express', 'MongoDB & PostgreSQL', 'JWT Authentication', 'Microservices'],
      stats: '99.9% Uptime'
    },
    {
      title: 'Cloud Solutions',
      tagline: 'Scale With Confidence',
      description: 'Modern cloud infrastructure with automated deployment, monitoring, and serverless architecture.',
      icon: Cloud,
      color: 'from-sky-500 to-cyan-500',
      features: ['AWS & Firebase', 'Docker Containers', 'CI/CD Pipelines', 'Auto-Scaling'],
      stats: '24/7 Monitoring'
    },
    {
      title: 'UI/UX Design',
      tagline: 'Design That Converts',
      description: 'User-centric design combining aesthetics with functionality for intuitive digital experiences.',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
      stats: '98% User Satisfaction'
    }
  ];

  return (
    <section
      id="services"
      className="py-24 px-4 md:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-semibold uppercase tracking-wider">Our Expertise</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From concept to deployment, we deliver future-ready solutions that drive measurable results 
            and transform your digital presence
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Animated corner accent */}
              <motion.div
                className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with gradient background */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  animate={hoveredIndex === index ? { rotate: [0, -5, 5, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Stats badge */}
                <div className="absolute top-0 right-0 px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                  <span className="text-xs text-gray-400 font-medium">{service.stats}</span>
                </div>

                {/* Title and tagline */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list with checkmarks */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Learn more link */}
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="relative bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative gradient */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-20" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Digital Presence?
            </motion.h3>
            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let's discuss how our expertise can help you achieve your business goals
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About Us
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;