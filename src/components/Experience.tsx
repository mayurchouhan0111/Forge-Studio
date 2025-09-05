import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      location: "Remote",
      description: "Building custom mobile and web applications for clients worldwide, specializing in Flutter, React, and AI integration.",
      achievements: [
        "Delivered 20+ successful projects",
        "Maintained 100% client satisfaction rate",
        "Specialized in Flutter mobile development",
        "Integrated AI/ML solutions for various clients"
      ],
      icon: Briefcase,
      color: "from-[#AD8B73] to-[#8B6F47]"
    },
    {
      type: "internship",
      title: "Software Development Intern",
      company: "Paridhi Industries",
      period: "Summer 2023",
      location: "Indore, India",
      description: "Worked on enterprise software solutions, gained experience in full-stack development and project management.",
      achievements: [
        "Developed internal tools using React and Node.js",
        "Improved system efficiency by 30%",
        "Collaborated with senior developers",
        "Learned industry best practices"
      ],
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "education",
      title: "Bachelor of Technology - Information Technology",
      company: "SGSITS Indore",
      period: "2021 - 2025",
      location: "Indore, India",
      description: "Pursuing B.Tech in Information Technology with focus on software development, data structures, and emerging technologies.",
      achievements: [
        "Relevant coursework in DSA, DBMS, OS",
        "Active in coding competitions",
        "Member of technical societies",
        "Consistent academic performance"
      ],
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "achievement",
      title: "Hackathon Participant",
      company: "Various Events",
      period: "2022 - 2024",
      location: "India",
      description: "Participated in multiple hackathons, developing innovative solutions under time constraints and collaborating with diverse teams.",
      achievements: [
        "Participated in 5+ hackathons",
        "Built AI-powered solutions",
        "Collaborated with diverse teams",
        "Gained experience in rapid prototyping"
      ],
      icon: Award,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-[#AD8B73]';
      case 'internship': return 'bg-blue-500';
      case 'education': return 'bg-green-500';
      case 'achievement': return 'bg-purple-500';
      default: return 'bg-[#AD8B73]';
    }
  };

  return (
    <section
      id="experience"
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-[#0D1117] to-[#161B22] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#AD8B73] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#AD8B73] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
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
            My <span className="text-[#AD8B73]">Journey</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            My professional experience, education, and achievements in technology
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#AD8B73] to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 ${getTypeColor(exp.type)} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-white/5 backdrop-blur-xl border border-[#AD8B73]/20 rounded-3xl p-8 hover:border-[#AD8B73]/40 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#AD8B73] transition-colors mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-[#AD8B73] font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <p className="text-gray-400 text-sm mb-4">{exp.location}</p>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-[#AD8B73] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#AD8B73] text-white rounded-2xl font-bold hover:bg-[#8B6F47] transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(173, 139, 115, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;