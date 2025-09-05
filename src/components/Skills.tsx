import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Brain, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "Flutter", level: 90, color: "#02569B" },
        { name: "Dart", level: 85, color: "#0175C2" },
        { name: "Firebase", level: 80, color: "#FFCA28" },
        { name: "Android", level: 75, color: "#3DDC84" }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "React", level: 85, color: "#61DAFB" },
        { name: "JavaScript", level: 90, color: "#F7DF1E" },
        { name: "TypeScript", level: 80, color: "#3178C6" },
        { name: "HTML/CSS", level: 95, color: "#E34F26" }
      ]
    },
    {
      title: "Backend & Database",
      icon: Server,
      skills: [
        { name: "Node.js", level: 80, color: "#339933" },
        { name: "Python", level: 85, color: "#3776AB" },
        { name: "MongoDB", level: 75, color: "#47A248" },
        { name: "PostgreSQL", level: 70, color: "#336791" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 70, color: "#FF6F00" },
        { name: "OpenAI API", level: 80, color: "#412991" },
        { name: "NLP", level: 75, color: "#AD8B73" },
        { name: "Computer Vision", level: 65, color: "#AD8B73" }
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-[#0D1117] to-[#161B22] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#AD8B73] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#AD8B73] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            Technical <span className="text-[#AD8B73]">Skills</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white/5 backdrop-blur-xl border border-[#AD8B73]/20 rounded-3xl p-8 hover:border-[#AD8B73]/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#AD8B73] to-[#8B6F47] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#AD8B73] transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-[#AD8B73] font-bold text-sm">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'Docker', 'AWS', 'Figma', 'Postman', 'VS Code', 
              'Linux', 'REST APIs', 'GraphQL', 'Socket.io', 'Redux', 'Tailwind CSS'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-[#AD8B73]/20 rounded-full text-gray-300 hover:border-[#AD8B73]/40 hover:text-[#AD8B73] transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;