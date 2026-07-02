import { motion } from "motion/react";

interface Memory {
  id: number;
  title: string;
  symbol: "🐘" | "🦄";
  description: string;
  imageUrl: string;
  dateTag: string;
}

const memories: Memory[] = [
  {
    id: 1,
    title: "The Laughter We Shared",
    symbol: "🦄",
    description: "Those spontaneous, uncontainable smiles that brightened even the most ordinary moments. Your laughter has an irreplaceable light that I always cherish.",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
    dateTag: "Warmth & Joy",
  },
  {
    id: 2,
    title: "Quiet Understanding",
    symbol: "🐘",
    description: "Deep, comfortable exchanges where words weren't even required. A silent promise that we could be exactly who we are, fully accepted and heard.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    dateTag: "Trust & Peace",
  },
  {
    id: 3,
    title: "The Spark of Magic",
    symbol: "🦄",
    description: "Every time we encouraged each other's dreams, creating a beautiful space of positivity, hope, and beautiful memories that time can never erase.",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
    dateTag: "Inspiration",
  },
  {
    id: 4,
    title: "Unwavering Support",
    symbol: "🐘",
    description: "The secure presence of knowing there is someone who genuinely cares about your well-being. A steady, protective shelter in times of doubt.",
    imageUrl: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&q=80&w=800",
    dateTag: "Strength",
  },
];

export default function MemoriesSection() {
  return (
    <section id="beautiful-memories" className="relative py-24 bg-gradient-to-b from-[#FAF9F6] to-slate-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-2xl block mb-2 animate-bounce">🦄</span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            Beautiful Memories 🦄
          </h2>
          <p className="font-sans text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Time moves forward, but some chapters remain beautifully etched in gold. These represent the light we built together.
          </p>
          <div className="w-16 h-[2px] bg-purple-400/60 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Horizontal Scroll/Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memories.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative h-[420px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col justify-end p-6 cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={m.imageUrl}
                  alt={m.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
              </div>

              {/* Memory Details Overlay */}
              <div className="relative z-10 text-white">
                {/* Symbol & Date tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-widest text-amber-300 uppercase bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 font-semibold">
                    {m.dateTag}
                  </span>
                  <span className="text-2xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {m.symbol}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg md:text-xl font-medium tracking-tight text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {m.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs text-slate-200 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[120px] transition-all duration-500 overflow-hidden mt-1">
                  {m.description}
                </p>

                {/* Action hint */}
                <span className="font-mono text-[9px] tracking-widest uppercase text-purple-200/80 group-hover:hidden transition-all block mt-2">
                  Hover to read 🦄
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
