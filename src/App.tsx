import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Loader from "./components/Loader";
import ParticleEffect from "./components/ParticleEffect";
import HeartSection from "./components/HeartSection";
import MemoriesSection from "./components/MemoriesSection";
import MatterSection from "./components/MatterSection";
import PromisesSection from "./components/PromisesSection";
import ElephantSymbolism from "./components/ElephantSymbolism";
import FinalApologySection from "./components/FinalApologySection";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Set the document title on mount with the requested symbols
  useEffect(() => {
    document.title = "I'm Truly Sorry, Sneha 🐘🦄";
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] selection:bg-amber-100 selection:text-amber-900">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Ambient Background Particles */}
            <ParticleEffect />

            {/* Hero Section */}
            <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
              {/* Parallax background image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1920')",
                }}
              />
              {/* Warm Golden Dawn Radial Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/40 to-[#FAF9F6] z-10" />

              {/* Fog effects and sun rays lighting */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF9F6] to-transparent z-15 pointer-events-none" />
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/10 rounded-full filter blur-3xl pointer-events-none z-10 animate-pulse" />

              {/* Hero Inner Content */}
              <div className="relative z-20 text-center px-6 max-w-4xl mx-auto space-y-6 text-white mt-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <span className="inline-block font-mono text-xs md:text-sm tracking-widest text-amber-300 uppercase font-semibold bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
                    A Sincere Dedication 🐘🦄
                  </span>
                  <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight text-white font-medium leading-tight drop-shadow-lg">
                    I'm Truly Sorry, <br className="sm:hidden" />
                    <span className="text-amber-200">Sneha</span> 🐘🦄
                  </h1>
                  <p className="font-sans text-sm sm:text-base md:text-lg text-slate-100 max-w-xl mx-auto leading-relaxed drop-shadow-md opacity-90">
                    Some mistakes hurt the people we care about the most. This website is my sincere apology to you.
                  </p>
                </motion.div>

                {/* Hero Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                  <button
                    onClick={() => scrollToSection("my-heart")}
                    className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#FAF9F6] text-slate-900 rounded-full font-serif font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer border border-white/20"
                  >
                    Read My Heart 🐘
                  </button>
                  <button
                    onClick={() => scrollToSection("final-apology")}
                    className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-full font-serif font-semibold backdrop-blur-md border border-white/20 hover:border-white/35 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Forgive Me 🦄
                  </button>
                </motion.div>

                {/* Scroll Down Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 1 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-300/80 cursor-pointer hover:text-slate-100 transition-colors"
                  onClick={() => scrollToSection("my-heart")}
                >
                  <span className="text-[10px] font-mono tracking-widest uppercase">
                    Begin Reading
                  </span>
                  <motion.span
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-2xl"
                  >
                    🐘
                  </motion.span>
                </motion.div>
              </div>
            </header>

            {/* Main Sections Wrapper */}
            <main className="relative z-20">
              
              {/* Section 1: My Heart */}
              <HeartSection />

              {/* Section 2: Beautiful Memories */}
              <MemoriesSection />

              {/* Section 3: Reasons Why You Matter */}
              <MatterSection />

              {/* Section 4: My Promises */}
              <PromisesSection />

              {/* Section 5: Why the Elephant Represents My Feelings */}
              <ElephantSymbolism />

              {/* Section 6: Final Apology */}
              <FinalApologySection />

            </main>

            {/* Footer */}
            <footer className="relative bg-slate-900 text-white/70 py-16 px-6 text-center border-t border-white/5 overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full filter blur-3xl pointer-events-none" />

              <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                <div className="flex justify-center gap-3 text-2xl">
                  <span>🐘</span>
                  <span className="text-amber-400">✨</span>
                  <span>🦄</span>
                </div>

                <p className="font-serif text-lg tracking-wide text-white">
                  Made with sincerity, hope, respect, and unforgettable memories 🐘🦄
                </p>

                <p className="font-sans text-xs text-white/40 tracking-wider">
                  Dedicated to Sneha Sudhakar Bubly. All rights reserved.
                </p>

                <div className="w-12 h-[1px] bg-white/10 mx-auto" />

                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="font-mono text-[10px] tracking-widest uppercase text-amber-400/80 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Scroll To Top 🐘
                </button>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
