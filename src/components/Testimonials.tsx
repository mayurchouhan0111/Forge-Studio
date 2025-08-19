import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'CreativeAgency delivered a fantastic website that exceeded our expectations.'
  },
  {
    name: 'Jane Smith',
    feedback: 'The team was professional, responsive, and a pleasure to work with.'
  },
  {
    name: 'Sam Wilson',
    feedback: 'Our new website has significantly improved our online presence.'
  }
];

const variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-24 px-4 md:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
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
        className="text-center text-5xl md:text-6xl font-black mb-9 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
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
            className="group bg-gradient-to-br from-gray-900/60 to-black/80 border border-purple-500/10 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-purple-500/10 transition-all relative"
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
          >
            <motion.div
              className="mb-4"
              initial={{ scale: 0.7, opacity: 0.5 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star className="w-6 h-6 text-purple-400 drop-shadow" />
            </motion.div>
            <motion.p
              className="text-lg text-gray-200 font-medium text-center mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.23 }}
              viewport={{ once: true }}
            >
              "{testimonial.feedback}"
            </motion.p>
            <div className="font-semibold text-purple-400 text-center text-xl">
              - {testimonial.name}
            </div>
            {/* Pulsing gradient border on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              whileHover={{
                boxShadow: '0 0 40px 0px #8b5cf688'
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
