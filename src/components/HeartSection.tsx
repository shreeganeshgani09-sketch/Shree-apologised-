import { motion } from "motion/react";

export default function HeartSection() {
  return (
    <section id="my-heart" className="relative py-24 px-6 md:px-12 max-w-4xl mx-auto">
      {/* Background soft pastel radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 md:p-14 shadow-2xl shadow-slate-100/50"
      >
        {/* Section decorative accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-400 to-purple-400 p-[2px] rounded-full shadow-lg">
          <div className="bg-[#FAF9F6] px-5 py-2 rounded-full flex items-center gap-2">
            <span className="text-xl">🐘</span>
            <span className="font-mono text-xs tracking-widest text-slate-500 uppercase font-medium">
              Sincerity First
            </span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-10 mt-4">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight mb-3">
            Read My Heart 🐘
          </h2>
          <div className="w-12 h-[2px] bg-amber-400/80 mx-auto rounded-full"></div>
        </div>

        {/* The Apology Letter */}
        <div className="font-sans text-slate-700 space-y-6 text-base md:text-lg leading-relaxed md:leading-loose">
          <p className="font-serif text-xl italic text-slate-800 text-center mb-8">
            "Sincere apologies are built on accountability, not excuses. I am here to hold myself accountable to you."
          </p>

          <p>
            Dearest Sneha,
          </p>

          <p>
            I am writing this because words spoken in a hurry can never match the weight of what sits in my mind and heart. Sometimes, without intending to, we make mistakes that hurt the people we cherish and respect the absolute most in this world.
          </p>

          <p>
            I want to say, clearly and without any defenses: <strong>I am truly sorry.</strong> I deeply regret the moments of misunderstanding, and the actions on my part that caused you even a single second of sadness, frustration, or doubt. You have been a source of genuine happiness and inspiration, and realizing that I let you down is a heavy weight to carry.
          </p>

          <p>
            This space is built with total sincerity and patience. It is my dedicated promise to listen more closely, understand more deeply, and stand by you with the unwavering loyalty represented by the elephant 🐘 and the absolute hope represented by our unicorn 🦄.
          </p>

          <p className="pt-4 font-serif text-slate-900 italic">
            With quiet respect and a hopeful heart,
            <br />
            <span className="font-sans font-medium not-italic text-sm text-amber-500 tracking-widest uppercase mt-2 block">
              I Am Sincerely Yours 🐘🦄
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
