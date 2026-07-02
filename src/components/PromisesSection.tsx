import { motion } from "motion/react";

interface PromiseItem {
  id: number;
  title: string;
  symbol: "🐘" | "🦄";
  description: string;
  highlightText: string;
}

const promises: PromiseItem[] = [
  {
    id: 1,
    title: "To Listen with Depth & Presence",
    symbol: "🐘",
    highlightText: "Hearing Your Truth",
    description: "I promise to hear not just the spoken words, but the quiet feelings and perspectives underneath. I will give you my full, undivided attention without defensive justifications, creating a safe sanctuary for your expression.",
  },
  {
    id: 2,
    title: "To Honor Your Boundaries & Space",
    symbol: "🦄",
    highlightText: "Respecting Your Peace",
    description: "Your comfort, your peace of mind, and your emotional space are sacred. I promise to support, honor, and protect the personal boundaries that keep you feeling secure, comfortable, and independent.",
  },
  {
    id: 3,
    title: "To Act with Steady Loyalty & Honesty",
    symbol: "🐘",
    highlightText: "An Unshakable Foundation",
    description: "Just as the elephant embodies resilience and faithfulness, I promise to hold myself to high standards of loyalty, consistency, and clear truthfulness. You will always know where I stand, and that I stand by you.",
  },
  {
    id: 4,
    title: "To Actively Cultivate Joy & Hope",
    symbol: "🦄",
    highlightText: "Protecting Our Magic",
    description: "I promise to never take our positive moments for granted. I will actively seek to create lightheartedness, optimism, and beautiful memories—keeping the magical, happy spirit of our unicorn alive in all we do.",
  },
];

export default function PromisesSection() {
  return (
    <section id="my-promises" className="relative py-24 bg-gradient-to-b from-slate-50 to-[#FAF9F6] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-2xl block mb-2 animate-bounce">🦄</span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            My Sincere Promises 🦄
          </h2>
          <p className="font-sans text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            An apology is only as strong as the actions that follow it. Here are my lasting, protective promises to you, Sneha.
          </p>
          <div className="w-16 h-[2px] bg-purple-400/60 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Timeline Path Line */}
        <div className="absolute left-[37px] md:left-1/2 top-48 bottom-16 w-[1.5px] bg-slate-200 -translate-x-1/2 z-0 hidden md:block"></div>

        {/* Vertical Timeline Items */}
        <div className="space-y-16 relative z-10">
          {promises.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={p.id}
                className={`flex flex-col md:flex-row items-stretch md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node Symbol Checkpoint */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-150 shadow-md z-20 text-xl font-serif">
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                  >
                    {p.symbol}
                  </motion.span>
                </div>

                {/* Left/Right Spacing Block for Desktop */}
                <div className="w-full md:w-1/2 hidden md:block px-8"></div>

                {/* Actual Promise Card Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8"
                >
                  <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/40 hover:shadow-xl hover:border-slate-200 transition-all duration-300 relative">
                    {/* Highlight Pill tag */}
                    <span className="inline-block font-mono text-[9px] tracking-widest font-semibold text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full mb-3 uppercase">
                      {p.highlightText}
                    </span>

                    {/* Promise Title */}
                    <h3 className="font-serif text-xl font-medium tracking-tight text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-base text-slate-400 font-sans">0{p.id}.</span> {p.title}
                    </h3>

                    {/* Promise description */}
                    <p className="font-sans text-sm text-slate-600 leading-relaxed md:leading-loose">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
