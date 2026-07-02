import { motion } from "motion/react";

interface Virtue {
  name: string;
  meaning: string;
  expression: string;
}

const virtues: Virtue[] = [
  {
    name: "Loyalty",
    meaning: "An unwavering, life-long allegiance to those we hold dear.",
    expression: "I promise to stand by your side, maintaining a steady and faithful presence that you can rely on through every single change.",
  },
  {
    name: "Patience & Wisdom",
    meaning: "The gentle strength to wait, understand, and learn from mistakes.",
    expression: "Real growth takes time. I stand ready with deep patience to listen, adapt, and build back the confidence and comfort we deserve.",
  },
  {
    name: "Quiet Protection",
    meaning: "Providing a safe, respectful, and nurturing shelter.",
    expression: "Like the elephant herd that shields its own, my feelings for you are protective. Your happiness, well-being, and boundaries are entirely safe with me.",
  },
  {
    name: "Never Forgetting",
    meaning: "A beautiful memory that holds onto every meaningful detail.",
    expression: "An elephant never forgets. I will always remember the unique bond, your kindness, and the laughter we created. It is too precious to ever lose.",
  },
];

export default function ElephantSymbolism() {
  return (
    <section id="elephant-symbolism" className="relative py-24 px-6 md:px-12 bg-[#FAF9F6] overflow-hidden">
      {/* Decorative Golden Ambient Lights */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Philosophy (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-3xl block animate-bounce">🐘</span>
            <span className="font-mono text-xs tracking-widest text-amber-500 uppercase font-semibold block">
              Symbol of Loyalty, Patience & Wisdom
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
              Why the Elephant Represents My Feelings 🐘
            </h2>
            <div className="w-12 h-[2px] bg-amber-400"></div>
            
            <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed md:leading-loose">
              In many traditions, the elephant represents far more than physical power. It represents a gentle giant—loyal to its family, incredibly patient, wise in its choices, protective of its circle, and famous for possessing a memory that never lets go of what is truly important.
            </p>
            <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed md:leading-loose">
              I chose the elephant 🐘 as my symbol to you because these are the exact feelings I carry. My respect for you is patient, my support is steady, and I will never forget the happiness and unique light you brought into my life.
            </p>
          </motion.div>

          {/* Column 2: Virtues Grid (Right Side) */}
          <div className="lg:col-span-7 space-y-6">
            {virtues.map((v, idx) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/50 hover:shadow-md transition-all duration-300 flex gap-5 items-start group"
              >
                {/* Virtue Index & Icon */}
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 font-mono text-xs font-semibold group-hover:bg-amber-100 transition-colors">
                  0{idx + 1}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {v.name}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    {v.meaning}
                  </p>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    {v.expression}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
