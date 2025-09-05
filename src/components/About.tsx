import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "IT Student",
      description: "Pursuing Information Technology at SGSITS Indore",
      color: "from-[#AD8B73] to-[#8B6F47]"
    },
    {
      icon: Award,
      title: "Freelancer",
      description: "Building custom solutions for clients worldwide",
      color: "from-[#AD8B73] to-[#8B6F47]"
    },
    {
      icon: MapPin,
      title: "Based in Indore",
      description: "Available for remote and local projects",
      color: "from-[#AD8B73] to-[#8B6F47]"
    }
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 bg-[#0D1117] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#AD8B73] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#AD8B73] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About <span className="text-[#AD8B73]">Me</span>
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-[#AD8B73]/20 rounded-3xl p-8 hover:border-[#AD8B73]/40 transition-all duration-300">
              <motion.p
                className="text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm a passionate <span className="text-[#AD8B73] font-semibold">full-stack developer</span> and 
                IT student at SGSITS Indore, specializing in creating innovative mobile applications, 
                web solutions, and AI-powered systems.
              </motion.p>
              
              <motion.p
                className="text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                My journey in technology spans across <span className="text-[#AD8B73] font-semibold">Flutter mobile development</span>, 
                <span className="text-[#AD8B73] font-semibold"> React web applications</span>, and 
                <span className="text-[#AD8B73] font-semibold"> AI integration</span>. I love turning complex problems 
                into simple, beautiful, and intuitive solutions.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                When I'm not coding, you'll find me exploring new technologies, participating in hackathons, 
                or working on freelance projects that challenge my skills and creativity.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-white/5 backdrop-blur-xl border border-[#AD8B73]/20 rounded-2xl p-6 hover:border-[#AD8B73]/40 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#AD8B73] transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: '20+', label: 'Projects Completed' },
            { number: '3+', label: 'Years Learning' },
            { number: '5+', label: 'Technologies' },
            { number: '100%', label: 'Dedication' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-[#AD8B73]/20 rounded-2xl p-6 hover:border-[#AD8B73]/40 transition-all duration-300">
                <motion.div
                  className="text-4xl font-black text-[#AD8B73] mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 font-medium text-sm">
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

export default About;