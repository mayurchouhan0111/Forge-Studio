import { motion } from 'framer-motion';
import { Users, Award, Rocket, Shield } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Projects Completed', icon: Rocket },
  { number: '99%', label: 'Client Satisfaction', icon: Award },
  { number: '5+', label: 'Years Experience', icon: Shield },
  { number: '24/7', label: 'Support Available', icon: Users }
];

const About = () => (
  <section
    id="about"
    className="py-24 px-4 md:px-8 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden"
  >
    {/* Animated background blobs */}
    <motion.div
      className="absolute top-16 left-16 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
      initial={{ scale: 0.8, opacity: 0.3 }}
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-16 right-16 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
      initial={{ scale: 1.2, opacity: 0.3 }}
      animate={{ scale: [1, 0.9, 1.1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="max-w-5xl mx-auto z-10 relative">
      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Left column - Content */}
          className="text-5xl md:text-6xl font-display font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Crafting Digital Excellence
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We are a team of passionate designers and developers dedicated to creating <span className="text-purple-400 font-semibold">stunning and functional</span> digital experiences.
          </motion.p>
          <motion.p
            className="text-lg text-gray-400 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our mission is to help businesses succeed online through <span className="text-cyan-400 font-semibold">innovative design</span> and <span className="font-semibold text-purple-400">cutting-edge technology</span>.
          </motion.p>
        </motion.div>

        {/* Right column - Feature highlights */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Award, title: 'Premium Quality', desc: 'Every project meets the highest standards' },
            { icon: Users, title: 'Expert Team', desc: 'Skilled professionals with years of experience' },
            { icon: Rocket, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
            { icon: Shield, title: 'Reliable Support', desc: '24/7 support and maintenance services' }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
               <h3 className="text-white font-display font-semibold mb-2">{feature.title}</h3>
               <p className="text-gray-400 text-sm font-sans">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Animated stats grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7 }}
            >
              <stat.icon className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div
              className="text-4xl font-black text-white mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + idx * 0.08 }}
              viewport={{ once: true }}
            >
              {stat.number}
            </motion.div>
            <div className="text-gray-400 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mission Statement - Highlighted Card */}
      <motion.div
        className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-10 md:p-12 max-w-3xl mx-auto shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ boxShadow: '0 0 50px rgba(139, 92, 246, 0.2)', scale: 1.02 }}
      >
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-white mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Mission
        </motion.h3>
        <motion.p
          className="text-lg text-gray-400 mb-8 leading-relaxed font-sans"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          To help businesses succeed online through <span className="text-cyan-400 font-semibold">innovative design</span> and 
          <span className="text-purple-400 font-semibold"> cutting-edge technology</span>. 
          We transform ideas into powerful digital solutions that drive growth and create lasting impact.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default About;
