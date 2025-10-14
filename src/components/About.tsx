import { motion } from 'framer-motion';
import { Users, Award, Target, Shield, Globe, Zap } from 'lucide-react';

const stats = [
  { number: '50+', label: 'Projects Delivered', icon: Target },
  { number: '98%', label: 'Client Satisfaction', icon: Award },
  { number: '15+', label: 'Countries Served', icon: Globe },
  { number: '100%', label: 'Growth Focused', icon: Zap }
];

const values = [
  { 
    icon: Award, 
    title: 'Innovation at Every Step', 
    desc: 'We deeply understand your unique challenges to craft personalized, impactful solutions that deliver measurable success' 
  },
  { 
    icon: Users, 
    title: 'Multidisciplinary Teams', 
    desc: 'Expert Flutter developers, AI specialists, and full-stack engineers working in harmony' 
  },
  { 
    icon: Target, 
    title: 'Future-Ready Solutions', 
    desc: 'Cutting-edge technology stack with AI integration, cloud architecture, and scalable design' 
  },
  { 
    icon: Shield, 
    title: 'Enterprise-Grade Quality', 
    desc: 'Robust, secure, and maintainable code following industry best practices and standards' 
  }
];

const About = () => (
  <section
    id="about"
    className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
  >
    {/* Subtle animated background */}
    <motion.div
      className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3] 
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
      animate={{ 
        scale: [1.2, 1, 1.2],
        opacity: [0.3, 0.5, 0.3] 
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Know the Company
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Fueling Client Success Through{' '}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Next-Gen Technology
          </span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          We unite multidisciplinary teams to deliver innovative, future-ready solutions to clients around the globe. 
          We seamlessly bridge the gap between cutting-edge technology and real-world business needs.
        </motion.p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-500/20">
              <stat.icon className="w-7 h-7 text-purple-400" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Values Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {values.map((value) => (
          <motion.div
            key={value.title}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Company Description Card */}
      <motion.div
        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-12 max-w-4xl mx-auto shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Our Expertise
          </h3>
          <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
        </motion.div>
        <motion.p
          className="text-lg text-gray-300 text-center leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Specializing in <span className="text-purple-400 font-semibold">Flutter mobile & web development</span>, 
          {' '}<span className="text-cyan-400 font-semibold">AI-powered solutions</span>, and 
          {' '}<span className="text-purple-400 font-semibold">full-stack architecture</span>. 
          We transform complex business challenges into elegant, scalable digital products that drive measurable results.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {['Flutter', 'React', 'Node.js', 'AI/ML', 'Cloud', 'MongoDB'].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 bg-white/10 border border-purple-500/20 rounded-full text-sm text-gray-300 font-medium hover:border-purple-500/40 hover:bg-white/15 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;
