import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  key?: string;
  onComplete: () => void;
}

const quotes = [
  "Every bond has its seasons, but some are too precious to let fade. 🐘",
  "Unicorns teach us that true magic is rare and worth protecting. 🦄",
  "A sincere apology is not just admitting a mistake, but promising a better tomorrow. 🐘🦄",
  "Sincerity is the quiet space where healing begins. 🐘",
  "True strength lies in patience, loyalty, and never letting go of what matters. 🦄",
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    // Progress counter animation
    const duration = 3800; // 3.8 seconds total loader duration
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, intervalTime);

    // Quote rotation
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 1800);

    return () => {
      clearInterval(timer);
      clearInterval(quoteTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF9F6] text-slate-800"
    >
      {/* Background soft glowing lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-md px-6 text-center">
        {/* Cinematic Symbol Combination */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <motion.span
            animate={{
              y: [0, -12, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-6xl drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] filter"
          >
            🐘
          </motion.span>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 rounded-full border-t-2 border-b-2 border-amber-400 border-r-transparent border-l-transparent flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full border-t border-b border-purple-300 border-r-transparent border-l-transparent animate-spin-reverse"></div>
          </motion.div>
          <motion.span
            animate={{
              y: [0, 12, 0],
              rotate: [0, -5, 5, 0],
              scale: [1, 0.95, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="text-6xl drop-shadow-[0_0_15px_rgba(167,139,250,0.3)] filter"
          >
            🦄
          </motion.span>
        </div>

        {/* Loading Header */}
        <h2 className="font-serif text-2xl tracking-wider text-slate-900 mb-2">
          Preparing A Heartfelt Message
        </h2>
        <p className="font-mono text-xs tracking-widest text-slate-400 uppercase mb-8">
          FOR SNEHA SUDHAKAR BUBLY 🐘🦄
        </p>

        {/* Dynamic Quotes Card */}
        <div className="h-20 flex items-center justify-center mb-8 px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.5 }}
              className="font-sans text-sm italic text-slate-600 leading-relaxed max-w-sm"
            >
              {quotes[quoteIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Premium Progress Bar */}
        <div className="relative w-64 h-1 bg-slate-100 rounded-full mx-auto overflow-hidden mb-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 via-purple-400 to-emerald-400"
          ></motion.div>
        </div>

        {/* Percentage Counter */}
        <motion.p
          className="font-mono text-sm font-medium tracking-widest text-slate-500"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
}
