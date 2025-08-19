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
    className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
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
      {/* Section Heading */}
      <motion.h2
        className="text-center text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h2>
      <motion.p
        className="text-center text-xl text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We are a team of passionate designers and developers dedicated to creating <span className="text-purple-400 font-semibold">stunning and functional</span> websites.
        <br />
        Our mission is to help businesses succeed online through <span className="text-cyan-400 font-semibold">innovative design</span> and <span className="font-semibold text-purple-400">cutting-edge technology</span>.
      </motion.p>

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
        className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-10 md:p-12 max-w-3xl mx-auto shadow-xl"
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
          className="text-lg md:text-xl text-gray-300 text-center leading-relaxed"
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
