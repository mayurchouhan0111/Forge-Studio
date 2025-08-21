import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://forge-studio.onrender.com/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Blurred accent blobs */}
      <motion.div
        className="absolute top-8 left-8 w-48 h-48 bg-purple-500/30 rounded-full blur-2xl"
        initial={{ scale: 0.8, opacity: 0.4 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-52 h-52 bg-cyan-500/30 rounded-full blur-2xl"
        initial={{ scale: 1.2, opacity: 0.5 }}
        animate={{ scale: [1.2, 0.95, 1.1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-xl mx-auto z-10 relative">
        <motion.h2
          className="text-center text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-center text-lg text-gray-300 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Got a project or inquiry? Let’s build something incredible together!
        </motion.p>

        {/* Contact Info Row */}
        <motion.div
          className="flex justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-purple-400">
            <Mail className="w-5 h-5" />
            <span>mayurchouhan8055@gamail.com</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-400">
            <Phone className="w-5 h-5" />
            <span>+916263850508</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-pink-400">
            <MapPin className="w-5 h-5" />
            <span>India, Indore</span>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-900/70 to-black/80 border border-purple-500/10 backdrop-blur-xl rounded-3xl shadow-xl p-8 flex flex-col gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name" className="text-gray-300 font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="off"
              className="bg-black/50 rounded-xl border border-purple-500/30 py-3 px-4 text-white focus:border-purple-400 transition-all"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="text-gray-300 font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="off"
              className="bg-black/50 rounded-xl border border-cyan-500/30 py-3 px-4 text-white focus:border-cyan-400 transition-all"
              placeholder="you@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="text-gray-300 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="bg-black/50 rounded-xl border border-pink-500/30 py-3 px-4 text-white focus:border-pink-400 transition-all resize-none"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
            />
          </motion.div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl flex items-center gap-2 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 transition-all disabled:opacity-50"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="w-5 h-5 ml-2" />
          </motion.button>
          {submitStatus === 'success' && (
            <p className="text-green-500 text-center">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
