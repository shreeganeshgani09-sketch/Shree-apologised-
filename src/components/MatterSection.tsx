import { motion } from "motion/react";

interface Reason {
  id: number;
  title: string;
  symbol: "🐘" | "🦄";
  description: string;
  bgClass: string;
  borderClass: string;
}

const reasons: Reason[] = [
  {
    id: 1,
    title: "Your Authentic Kindness",
    symbol: "🐘",
    description: "You possess a rare, deeply rooted capacity to care for others without expecting anything in return. Your empathy has a quiet strength that instantly comforts those around you.",
    bgClass: "bg-amber-50/50 backdrop-blur-md",
    borderClass: "border-amber-100",
  },
  {
    id: 2,
    title: "Your Inspiring Individuality",
    symbol: "🦄",
    description: "Like our unicorn, you are entirely unique, standing apart with your own thoughts, beautiful perspectives, and gentle magic. You bring color to the grayest spaces.",
    bgClass: "bg-purple-50/50 backdrop-blur-md",
    borderClass: "border-purple-100",
  },
  {
    id: 3,
    title: "Your Grace & Strength",
    symbol: "🐘",
    description: "You face life's complex seasons with an admirable, quiet resilience. You don't just endure; you grow with a dignity and wisdom that commands endless respect.",
    bgClass: "bg-[#F5F2EB]/60 backdrop-blur-md",
    borderClass: "border-amber-200/40",
  },
  {
    id: 4,
    title: "Your Genuine Presence",
    symbol: "🦄",
    description: "When you interact, you are fully there. Your sincerity and truthfulness make conversations feel comfortable, safe, and profoundly meaningful.",
    bgClass: "bg-emerald-50/50 backdrop-blur-md",
    borderClass: "border-emerald-100",
  },
];

export default function MatterSection() {
  return (
    <section id="reasons-why-you-matter" className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none animate-pulse"></div>

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
          Reasons Why You Matter 🐘🦄
        </h2>
        <p className="font-sans text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          It is simple: you make this world a kinder, more authentic place. Here is what makes your presence so irreplaceable to me.
        </p>
        <div className="w-16 h-[2px] bg-amber-400/60 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Interactive Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((r, idx) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`p-8 rounded-3xl border ${r.borderClass} ${r.bgClass} shadow-lg shadow-slate-100/30 flex flex-col justify-between relative overflow-hidden group`}
          >
            {/* Corner floating glowing symbol */}
            <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 pointer-events-none">
              {r.symbol}
            </div>

            <div>
              {/* Card Title with symbol icon prefix */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
                  {r.symbol}
                </span>
                <h3 className="font-serif text-xl font-medium tracking-tight text-slate-900">
                  {r.title}
                </h3>
              </div>

              {/* Card Body text */}
              <p className="font-sans text-sm text-slate-600 leading-relaxed md:leading-loose">
                {r.description}
              </p>
            </div>

            {/* Accent bottom-border indicator */}
            <div className="w-10 h-1 bg-gradient-to-r from-amber-400 to-purple-400 rounded-full mt-6 group-hover:w-20 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
