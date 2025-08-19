import { motion } from 'framer-motion';
import { Code, Palette, Search, Smartphone, Database, Shield, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      title: 'Web Development', 
      description: 'Fast, secure, and scalable websites built with cutting-edge technologies and modern frameworks.',
      icon: Code,
      color: 'purple',
      features: ['React/Next.js', 'Node.js Backend', 'Database Integration', 'API Development']
    },
    { 
      title: 'UI/UX Design', 
      description: 'Stunning and user-friendly designs that convert visitors into customers with intuitive experiences.',
      icon: Palette,
      color: 'cyan',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    { 
      title: 'SEO Optimization', 
      description: 'Improve your search engine rankings and attract more customers with proven SEO strategies.',
      icon: Search,
      color: 'pink',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Analytics']
    },
    { 
      title: 'Mobile Apps', 
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: Smartphone,
      color: 'green',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development']
    },
    { 
      title: 'Backend Systems', 
      description: 'Robust and scalable backend infrastructure to power your applications and handle growth.',
      icon: Database,
      color: 'blue',
      features: ['Cloud Architecture', 'API Design', 'Database Optimization', 'Microservices']
    },
    { 
      title: 'Security & Performance', 
      description: 'Enterprise-level security measures and performance optimization for maximum efficiency.',
      icon: Shield,
      color: 'orange',
      features: ['Security Audits', 'Performance Testing', 'Load Balancing', 'Monitoring']
    }
  ];

  const colorClasses = {
    purple: 'from-purple-500 to-purple-700',
    cyan: 'from-cyan-500 to-cyan-700',
    pink: 'from-pink-500 to-pink-700',
    green: 'from-green-500 to-green-700',
    blue: 'from-blue-500 to-blue-700',
    orange: 'from-orange-500 to-orange-700'
  };

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive digital solutions to transform your business and drive success in the digital age
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden group-hover:border-purple-500/50 transition-all duration-500">
                {/* Animated background gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${colorClasses[service.color]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>

                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${colorClasses[service.color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  whileHover={{ 
                    boxShadow: `0 0 30px rgba(139, 92, 246, 0.5)` 
                  }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center text-sm text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button 
                  className="group/btn flex items-center gap-2 text-purple-400 font-semibold hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                {/* Hover overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
            whileHover={{ 
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' 
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
