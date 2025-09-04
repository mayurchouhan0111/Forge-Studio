import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CEO',
    company: 'TechStart Inc.',
    feedback: 'DevForge delivered a fantastic website that exceeded our expectations. The team was professional and the results speak for themselves.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    title: 'Marketing Director',
    company: 'Growth Co.',
    feedback: 'Working with DevForge was a game-changer for our business. They transformed our vision into a stunning digital reality.',
    rating: 5,
    avatar: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    title: 'Founder',
    company: 'Creative Studio',
    feedback: 'Outstanding work! The attention to detail and innovative approach made all the difference. Highly recommend DevForge.',
    rating: 5,
    avatar: 'ER'
  }
];

const variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-24 px-4 md:px-8 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden"
  >
    {/* Blurred color accents */}
    <motion.div
      className="absolute top-10 left-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
      initial={{ scale: 0.9, opacity: 0.4 }}
      animate={{ scale: [1, 1.15, 0.95, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-10 right-16 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
      initial={{ scale: 1.05, opacity: 0.5 }}
      animate={{ scale: [1.05, 0.9, 1.2, 1.05], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="max-w-4xl mx-auto z-10 relative">
      {/* Section Title */}
      <motion.h2
        className="text-center text-5xl md:text-6xl font-black mb-16 bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent"
        initial="initial"
        whileInView="animate"
        variants={variants}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h2>

      {/* Testimonials List */}
      <motion.div
        className="grid md:grid-cols-3 gap-10"
        initial="initial"
        whileInView="animate"
        variants={variants}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.name}
            className="group bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/40 transition-all relative"
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
          >
            {/* Avatar */}
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6"
              initial={{ scale: 0.8, opacity: 0.5 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {testimonial.avatar}
            </motion.div>
            
            {/* Stars */}
            <motion.div
              className="flex gap-1 mb-6"
              initial={{ scale: 0.7, opacity: 0.5 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Feedback */}
            <motion.p
              className="text-lg text-gray-200 font-medium text-center mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.23 }}
              viewport={{ once: true }}
            >
              "{testimonial.feedback}"
            </motion.p>
            
            {/* Client info */}
            <div className="text-center">
              <div className="font-semibold text-white text-lg mb-1">
                {testimonial.name}
              </div>
              <div className="text-purple-400 text-sm">
                {testimonial.title} at {testimonial.company}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
