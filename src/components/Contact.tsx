import { motion } from "framer-motion";
import {
  MessageSquare,
  Rocket,
  Sparkles,
  Smartphone,
  Clock,
  Wallet,
} from "lucide-react";
import { useState, useMemo } from "react";

const WHATSAPP_NUMBER = "916263850508";

const projectTypes = [
  "Mobile app (Flutter)",
  "Web app / Dashboard",
  "E-commerce / Booking",
  "SaaS / Internal tool",
  "Not sure yet",
];

const budgets = [
  "Under ₹25K",
  "₹25K – ₹75K",
  "₹75K – ₹1.5L",
  "₹1.5L+",
  "Figuring it out",
];

const timelines = ["ASAP (this month)", "Next 2–3 months", "Flexible / exploring"];

const Contact = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [projectNote, setProjectNote] = useState("");

  const canNext = useMemo(() => {
    if (step === 1) return name.trim().length > 1;
    if (step === 2) return !!projectType;
    if (step === 3) return !!budget && !!timeline;
    if (step === 4) return projectNote.trim().length > 5;
    return false;
  }, [step, name, projectType, budget, timeline, projectNote]);

  const handleNext = () => {
    if (!canNext) return;
    if (step < 4) {
      setStep((p) => ((p + 1) as 1 | 2 | 3 | 4));
    } else {
      openWhatsApp();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((p) => ((p - 1) as 1 | 2 | 3 | 4));
  };

  const openWhatsApp = () => {
    const message = `
New project enquiry via Forge Studio ⚡

Name: ${name}
Project type: ${projectType}
Budget: ${budget}
Timeline: ${timeline}

Quick project note:
${projectNote}
    `.trim();

    window.open(
      `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  const stepLabel: Record<1 | 2 | 3 | 4, string> = {
    1: "Who is reaching out?",
    2: "What are we building?",
    3: "Budget & timeline",
    4: "Project in one message",
  };

  const stepIconMap = {
    1: Smartphone,
    2: Rocket,
    3: Wallet,
    4: MessageSquare,
  } as const;

  const StepIcon = stepIconMap[step];

  return (
    <section
      id="contact"
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* New modern floating lights */}
      <motion.div
        className="absolute inset-x-0 top-0 h-72 bg-gradient-to-br from-purple-500/20 via-cyan-500/10 to-transparent blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 text-sm uppercase tracking-widest mb-3 font-semibold">
            WhatsApp Brief Generator
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              unforgettable
            </span>
            .
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Just answer a few quick questions — we’ll prepare a ready-to-send
            WhatsApp project brief for you.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="mx-auto max-w-3xl bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Step header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <StepIcon className="w-6 h-6 text-white" />
              </div>

              <div>
                <div className="text-xs tracking-widest text-purple-300 uppercase">
                  Step {step} of 4
                </div>
                <div className="text-white font-semibold text-lg">
                  {stepLabel[step]}
                </div>
              </div>
            </div>

            <Sparkles className="w-5 h-5 text-purple-300" />
          </div>

          {/* Progress */}
          <div className="h-2 w-full bg-white/10 rounded-full mb-10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-400 rounded-full"
              animate={{ width: `${step * 25}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* STEPS */}
          <div className="min-h-[150px]">
            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <label className="block text-sm text-gray-300">Your name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Hey, I’m Mayur…"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/40 focus:outline-none transition-all"
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <p className="text-sm text-gray-300">What are you building?</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`px-4 py-3 rounded-2xl border text-left transition-all ${
                        projectType === type
                          ? "bg-purple-600/30 border-purple-500 text-white shadow-md shadow-purple-500/20"
                          : "bg-white/5 border-white/10 text-gray-300 hover:border-purple-500/40"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="s3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Budget */}
                <div>
                  <p className="text-sm text-gray-300 mb-2 flex gap-2 items-center">
                    <Wallet className="w-4 h-4 text-purple-300" /> Budget range
                  </p>

                  <div className="grid sm:grid-cols-3 gap-3">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`px-3 py-3 rounded-2xl border text-xs transition-all ${
                          budget === b
                            ? "bg-purple-600/30 border-purple-500 text-white shadow-purple-500/20 shadow"
                            : "bg-white/5 border-white/10 text-gray-300 hover:border-purple-500/40"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <p className="text-sm text-gray-300 mb-2 flex gap-2 items-center">
                    <Clock className="w-4 h-4 text-purple-300" /> Start timeline
                  </p>

                  <div className="grid sm:grid-cols-3 gap-3">
                    {timelines.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`px-3 py-3 rounded-2xl border text-xs transition-all ${
                          timeline === t
                            ? "bg-purple-600/30 border-purple-500 text-white shadow-purple-500/20 shadow"
                            : "bg-white/5 border-white/10 text-gray-300 hover:border-purple-500/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="s4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <label className="block text-sm text-gray-300">
                  Describe your project
                </label>

                <textarea
                  rows={5}
                  value={projectNote}
                  onChange={(e) => setProjectNote(e.target.value)}
                  placeholder="Example: A Flutter app for my fitness studio, bookings, memberships…"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500/40 focus:outline-none transition-all resize-none"
                />
              </motion.div>
            )}
          </div>

          {/* Controls */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleNext}
              disabled={!canNext}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm shadow-md shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-purple-500/40 transition-all"
            >
              {step < 4 ? "Next" : "Open WhatsApp & Send"}
              <MessageSquare className="w-4 h-4" />
            </button>

            <button
              onClick={handleBack}
              disabled={step === 1}
              className="px-5 py-4 rounded-2xl border border-white/15 text-xs text-gray-300 hover:border-purple-500/40 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Back
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
