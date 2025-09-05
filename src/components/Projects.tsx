import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Brain, FileText, Shield, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Flutter Dating App",
      description: "A comprehensive dating application with real-time chat, user matching algorithms, and social features built with Flutter and Firebase.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Firebase", "Dart", "Real-time Chat"],
      category: "Mobile App",
      icon: Smartphone,
      color: "from-pink-500 to-rose-500",
      features: ["Real-time messaging", "User matching", "Profile management", "Push notifications"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Resume Analyzer",
      description: "An intelligent system that analyzes resumes using AI/ML to provide insights, scoring, and recommendations for job seekers.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "NLP", "React"],
      category: "AI/ML",
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      features: ["Resume scoring", "Skill extraction", "Job matching", "Improvement suggestions"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "PDF Processing System",
      description: "Advanced document analysis tool for processing PDFs, extracting data, and generating insights using machine learning.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "OpenCV", "PyPDF2", "Machine Learning"],
      category: "Document Processing",
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      features: ["Text extraction", "Data analysis", "Automated processing", "Report generation"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Sports Venue Booking",
      description: "React-based platform for booking sports venues with real-time availability, payment integration, and user management.",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Application",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time booking", "Payment processing", "Venue management", "User dashboard"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "IPDR Log Processor",
      description: "Cybersecurity tool for processing and analyzing IPDR logs to detect patterns, anomalies, and security threats.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Pandas", "Data Analysis", "Security"],
      category: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      features: ["Log analysis", "Threat detection", "Pattern recognition", "Security reporting"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React, featuring smooth animations and interactive elements.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "Web Development",
      icon: Globe,
      color: "from-[#AD8B73] to-[#8B6F47]",
      features: ["Responsive design", "Smooth animations", "Modern UI", "Fast performance"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-8 bg-[#0D1117] relative overflow-hidden"
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
            Featured <span className="text-[#AD8B73]">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work in mobile development, web applications, and AI solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-xl border border-[#AD8B73]/20 rounded-3xl overflow-hidden hover:border-[#AD8B73]/40 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#AD8B73]/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="absolute top-4 right-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#AD8B73] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 border border-[#AD8B73]/20 rounded-lg text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-1 mb-6">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center text-xs text-gray-400">
                      <div className="w-1 h-1 bg-[#AD8B73] rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.demoUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#AD8B73] text-white rounded-xl font-medium hover:bg-[#8B6F47] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-[#AD8B73]/30 text-gray-300 rounded-xl font-medium hover:border-[#AD8B73] hover:text-[#AD8B73] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#AD8B73]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-[#AD8B73]/30 text-white rounded-2xl font-bold hover:border-[#AD8B73] hover:bg-[#AD8B73]/10 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(173, 139, 115, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;