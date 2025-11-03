import { motion } from 'framer-motion';
import { Smartphone, Code, Brain, Database, Cloud, Palette, ArrowRight, Check, Sparkles, Zap } from 'lucide-react';
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
      color: 'from-purple-500 to-pink-500',
      features: ['Node.js & Express', 'MongoDB & PostgreSQL', 'JWT Authentication', 'Microservices'],
      stats: '99.9% Uptime'
    },
    {
      title: 'Cloud Solutions',
      tagline: 'Scale With Confidence',
      description: 'Modern cloud infrastructure with automated deployment, monitoring, and serverless architecture.',
      icon: Cloud,
      color: 'from-cyan-500 to-purple-500',
      features: ['AWS & Firebase', 'Docker Containers', 'CI/CD Pipelines', 'Auto-Scaling'],
      stats: '24/7 Monitoring'
    },
    {
      title: 'UI/UX Design',
      tagline: 'Design That Converts',
      description: 'User-centric design combining aesthetics with functionality for intuitive digital experiences.',
      icon: Palette,
      color: 'from-pink-500 to-purple-500',
      features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
      stats: '98% User Satisfaction'
    }
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden py-32 px-4 md:px-8 bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#0a0118]"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-200 font-semibold tracking-wide">
              Our Expertise
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Comprehensive{' '}
            <motion.span
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ backgroundPosition: ['0% center', '200% center'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Digital Solutions
            </motion.span>
          </h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From concept to deployment, we deliver{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">
              future-ready solutions
            </span>{' '}
            that drive measurable results and transform your digital presence
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-10 overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                y: -10,
                scale: 1.02,
                borderColor: "rgba(168, 85, 247, 0.4)",
              }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <motion.div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30`}
                  animate={hoveredIndex === index ? {
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  className="absolute top-0 right-0 px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs text-purple-300 font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {service.stats}
                  </span>
                </motion.div>

                <div className="mb-5">
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                    {service.tagline}
                  </p>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`w-6 h-6 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="w-3.5 h-3.5 text-white" />
                      </motion.div>
                      <span className="group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  className={`inline-flex items-center gap-2 font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-4 transition-all duration-300`}
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <motion.div
                    animate={hoveredIndex === index ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.5, repeat: hoveredIndex === index ? Infinity : 0 }}
                  >
                    <ArrowRight className={`w-5 h-5 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                  </motion.div>
                </motion.a>
              </div>
              <motion.div
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <ArrowRight className="w-6 h-6 text-purple-400" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
