import { motion } from "framer-motion";
import { Star, Quote, Sparkles, CheckCircle } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "CEO",
    company: "TechVision India",
    feedback:
      "Outstanding Flutter development work. The team delivered a high-performance app that exceeded our expectations.",
    rating: 5,
    avatar: "RK",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Priya Sharma",
    title: "Product Manager",
    company: "Digital Solutions Ltd",
    feedback:
      "The AI integration they implemented transformed our workflow. Highly skilled team with modern engineering expertise.",
    rating: 5,
    avatar: "PS",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Amit Patel",
    title: "Founder",
    company: "StartupHub",
    feedback:
      "Exceptional full-stack development services. Clean code, scalable architecture — truly best in class.",
    rating: 5,
    avatar: "AP",
    color: "from-pink-500 to-purple-500",
  },
];

const Testimonials = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="testimonials"
      className="relative py-28 px-4 md:px-8 bg-gradient-to-b from-[#080011] via-[#150823] to-[#080011] overflow-hidden"
    >
      {/* Soft ambient lights */}
      <motion.div
        className="absolute top-0 left-1/4 w-[420px] h-[420px] bg-purple-500/10 blur-[180px] rounded-full"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-cyan-500/10 blur-[160px] rounded-full"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300 tracking-wide font-medium">
              Testimonials
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold text-white mt-6 tracking-tight leading-[1.1]">
            Loved By{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Clients Worldwide
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Real experiences. Real impact. Here’s what teams & founders say
            about working with us.
          </p>
        </div>

        {/* Updated modern grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-8 bg-white/[0.04] border border-white/10 backdrop-blur-xl rounded-3xl
                         hover:border-purple-500/30 transition-all shadow-xl hover:shadow-purple-500/20"
            >
              {/* Floating quote icon */}
              <motion.div
                animate={
                  hovered === i
                    ? { rotate: [-5, 5, -5], scale: 1.1 }
                    : { scale: 1 }
                }
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <Quote className="w-10 h-10 text-purple-400/40" />
              </motion.div>

              {/* Feedback */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                "{t.feedback}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Client info */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${t.color} rounded-xl flex items-center justify-center text-white font-bold`}
                >
                  {t.avatar}
                </div>

                <div className="flex-1">
                  <div className="text-white text-lg font-semibold">
                    {t.name}
                  </div>
                  <div className="text-gray-400 text-sm flex items-center gap-2">
                    {t.title}
                    <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                    <span className="text-purple-300 font-medium">
                      {t.company}
                    </span>
                  </div>
                </div>

                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats — More minimal style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 text-center">
          {[
            { label: "Happy Clients", value: "100+" },
            { label: "Avg. Rating", value: "5.0" },
            { label: "Retention Rate", value: "98%" },
            { label: "Support", value: "24/7" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="space-y-2"
            >
              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {s.value}
              </h3>
              <p className="text-gray-400">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
