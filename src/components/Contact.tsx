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
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden"
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

      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.h2
          className="text-center text-5xl md:text-6xl font-display font-black mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-center text-lg text-gray-300 mb-12 font-sans"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Got a project or inquiry? Let's build something incredible together!
        </motion.p>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/10 hover:border-purple-500/30"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-purple-400">mayurchouhan8055@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/10 hover:border-purple-500/30"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-cyan-400">+916263850508</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/10 hover:border-purple-500/30"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-pink-400">Indore, India</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl shadow-xl p-8 flex flex-col gap-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
                className="bg-white/5 backdrop-blur-xl rounded-xl border border-purple-500/30 py-4 px-4 text-white focus:border-purple-400 focus:bg-white/10 transition-all focus:outline-none"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
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
                className="bg-white/5 backdrop-blur-xl rounded-xl border border-cyan-500/30 py-4 px-4 text-white focus:border-cyan-400 focus:bg-white/10 transition-all focus:outline-none"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="text-gray-300 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="bg-white/5 backdrop-blur-xl rounded-xl border border-pink-500/30 py-4 px-4 text-white focus:border-pink-400 focus:bg-white/10 transition-all resize-none focus:outline-none"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
              />
            </motion.div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl flex items-center justify-center gap-2 hover:scale-105 hover:shadow-purple-500/30 transition-all disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="w-5 h-5" />
            </motion.button>
            {submitStatus === 'success' && (
              <motion.p 
                className="text-green-400 text-center font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Message sent successfully!
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p 
                className="text-red-400 text-center font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ❌ Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;