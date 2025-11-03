import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    title: 'CEO',
    company: 'TechVision India',
    feedback: 'Outstanding Flutter development work. The team delivered a high-performance app that exceeded our expectations. Professional approach and excellent communication throughout.',
    rating: 5,
    avatar: 'RK',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Priya Sharma',
    title: 'Product Manager',
    company: 'Digital Solutions Ltd',
    feedback: 'The AI integration they implemented transformed our document processing workflow. Highly skilled team with deep expertise in modern technologies.',
    rating: 5,
    avatar: 'PS',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'Amit Patel',
    title: 'Founder',
    company: 'StartupHub',
    feedback: 'Exceptional full-stack development services. They built our entire platform from scratch with clean code and scalable architecture. Highly recommended!',
    rating: 5,
    avatar: 'AP',
    color: 'from-pink-500 to-purple-500'
  }
];

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-32 px-4 md:px-8 bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#0a0118]"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
          {/* Animated Badge */}
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
              Client Success Stories
            </span>
          </motion.div>

          {/* Animated Gradient Title */}
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            What Our{' '}
            <motion.span
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{
                backgroundPosition: ['0% center', '200% center'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Clients Say
            </motion.span>
          </h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don't just take our word for it. Hear from the businesses we've{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">
              helped transform
            </span>
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-10 overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                y: -10,
                scale: 1.02,
                borderColor: "rgba(168, 85, 247, 0.4)",
              }}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Glow effect on hover */}
              <motion.div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${testimonial.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Quote Icon with Animation */}
                <motion.div
                  className="relative mb-6"
                  animate={hoveredIndex === idx ? {
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="w-12 h-12 text-purple-400/40" />
                  <motion.div
                    className={`absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full blur-xl opacity-20`}
                  />
                </motion.div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.15 + i * 0.05
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="text-gray-300 mb-8 leading-relaxed italic text-lg">
                  "{testimonial.feedback}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-purple-500/20">
                  {/* Avatar with Gradient */}
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-lg shadow-purple-500/30`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {testimonial.avatar}
                  </motion.div>

                  {/* Client Details */}
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center gap-2">
                      <span>{testimonial.title}</span>
                      <span className="w-1 h-1 bg-purple-400 rounded-full" />
                      <span className="text-purple-300">{testimonial.company}</span>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <motion.div
                    className="flex-shrink-0"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { number: '100+', label: 'Happy Clients' },
            { number: '5.0', label: 'Average Rating' },
            { number: '98%', label: 'Client Retention' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
