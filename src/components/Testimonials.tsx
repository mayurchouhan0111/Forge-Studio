import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    title: 'CEO',
    company: 'TechVision India',
    feedback: 'Outstanding Flutter development work. The team delivered a high-performance app that exceeded our expectations. Professional approach and excellent communication throughout.',
    rating: 5,
    avatar: 'RK'
  },
  {
    name: 'Priya Sharma',
    title: 'Product Manager',
    company: 'Digital Solutions Ltd',
    feedback: 'The AI integration they implemented transformed our document processing workflow. Highly skilled team with deep expertise in modern technologies.',
    rating: 5,
    avatar: 'PS'
  },
  {
    name: 'Amit Patel',
    title: 'Founder',
    company: 'StartupHub',
    feedback: 'Exceptional full-stack development services. They built our entire platform from scratch with clean code and scalable architecture. Highly recommended!',
    rating: 5,
    avatar: 'AP'
  }
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
  >
    {/* Background accent */}
    <motion.div
      className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3] 
      }}
      transition={{ duration: 8, repeat: Infinity }}
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
          Client Success Stories
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.name}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {/* Quote Icon */}
            <Quote className="w-10 h-10 text-purple-400/30 mb-4" />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-gray-300 mb-6 leading-relaxed italic">
              "{testimonial.feedback}"
            </p>

            {/* Client Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">
                  {testimonial.title} at {testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
