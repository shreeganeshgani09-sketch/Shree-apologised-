import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FinalApologySection() {
  const [showGratitude, setShowGratitude] = useState(false);
  const [snehaNote, setSnehaNote] = useState("");
  const [isNoteSaved, setIsNoteSaved] = useState(false);
  const [activeHearts, setActiveHearts] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);

  // load saved note if any
  useEffect(() => {
    const savedNote = localStorage.getItem("sneha_apology_note");
    if (savedNote) {
      setSnehaNote(savedNote);
      setIsNoteSaved(true);
    }
  }, []);

  const handleForgiveClick = (e: React.MouseEvent) => {
    setShowGratitude(true);
    
    // Spawn a burst of elephant and unicorn emojis at the click position or center
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const burstX = e.clientX || rect.left + rect.width / 2;
    const burstY = e.clientY || rect.top;

    const newEmojis = Array.from({ length: 24 }).map((_, i) => ({
      id: Date.now() + i,
      x: burstX + (Math.random() * 200 - 100),
      y: burstY - (Math.random() * 150 + 50),
      emoji: Math.random() > 0.5 ? "🐘" : "🦄",
    }));

    setActiveHearts(newEmojis);

    // clear burst after 3 seconds
    setTimeout(() => {
      setActiveHearts([]);
    }, 3000);
  };

  const handleSaveNote = () => {
    if (snehaNote.trim()) {
      localStorage.setItem("sneha_apology_note", snehaNote.trim());
      setIsNoteSaved(true);
    }
  };

  const handleResetNote = () => {
    localStorage.removeItem("sneha_apology_note");
    setSnehaNote("");
    setIsNoteSaved(false);
  };

  return (
    <section id="final-apology" className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-[#FAF9F6] via-slate-50 to-[#FAF9F6] overflow-hidden text-center flex flex-col items-center justify-center">
      
      {/* Background Soft Rainbow Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-50 via-purple-50 to-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none"></div>

      {/* Burst Floating Emojis */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        <AnimatePresence>
          {activeHearts.map((emojiObj) => (
            <motion.div
              key={emojiObj.id}
              initial={{ opacity: 1, scale: 0.5, x: emojiObj.x, y: emojiObj.y }}
              animate={{
                opacity: [1, 1, 0],
                scale: [0.5, 1.5, 1],
                y: emojiObj.y - 400,
                x: emojiObj.x + (Math.random() * 200 - 100),
                rotate: Math.random() * 360,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className="absolute text-3xl filter drop-shadow-md"
            >
              {emojiObj.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="max-w-3xl w-full relative z-10">
        
        {/* Decorative Top Segment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 flex gap-3 justify-center text-3xl"
        >
          <span>🐘</span>
          <span className="text-xl animate-pulse">✨</span>
          <span>🦄</span>
        </motion.div>

        {/* Closing Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-5xl text-slate-900 tracking-tight mb-6"
        >
          My Sincere Hope, Sneha
        </motion.h2>

        <div className="w-16 h-[2.5px] bg-gradient-to-r from-amber-400 to-purple-400 mx-auto mb-8 rounded-full"></div>

        {/* Heartfelt message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-slate-600 text-base md:text-lg leading-relaxed md:leading-loose mb-12 space-y-6 max-w-2xl mx-auto"
        >
          <p>
            No matter the distance, nor how much time slips by, some connections are meant to be nurtured with absolute care, respect, and loyalty. You are deeply important to me, and I wish to earn back your comfort and trust.
          </p>
          <p className="italic font-serif text-slate-800">
            "We cannot change the past, but we can write a beautiful tomorrow. 🐘🦄"
          </p>
        </motion.div>

        {/* The Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative inline-block group"
        >
          {/* Pulsing button shadow */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-purple-400 rounded-full blur-xl opacity-35 group-hover:opacity-60 group-hover:scale-105 transition-all duration-300"></div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleForgiveClick}
            className="relative px-10 py-5 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-950 hover:to-slate-900 text-white rounded-full font-serif text-lg md:text-xl tracking-wider shadow-xl flex items-center gap-3 border border-white/10"
          >
            Please Forgive Me <span className="text-2xl animate-pulse">🐘🦄</span>
          </motion.button>
        </motion.div>

      </div>

      {/* Gratitude Overlaid Lightbox Modal */}
      <AnimatePresence>
        {showGratitude && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="bg-[#FAF9F6] border border-amber-200/50 p-8 md:p-12 rounded-3xl shadow-2xl max-w-xl w-full relative overflow-hidden"
            >
              {/* Top ambient lights */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-200/40 rounded-full filter blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-200/40 rounded-full filter blur-3xl pointer-events-none"></div>

              {/* Close Button */}
              <button
                onClick={() => setShowGratitude(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>

              <div className="relative z-10 text-center space-y-6">
                
                <div className="flex justify-center gap-4 text-5xl">
                  <span>🐘</span>
                  <span>🦄</span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-slate-900 tracking-tight">
                  Thank You for Visiting 🐘🦄
                </h3>

                <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
                  Your time, patience, and reading of my heart mean the absolute universe to me. This website stands as my dedicated token of hope and loyalty to you.
                </p>

                {/* Optional interactive Message area */}
                <div className="bg-white/80 p-5 rounded-2xl border border-slate-100 space-y-3 shadow-inner mt-4 text-left">
                  <label className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    {isNoteSaved ? "Your saved response to me 🐘🦄" : "Leave a small response or word here (Optional):"}
                  </label>
                  
                  {isNoteSaved ? (
                    <div className="space-y-4">
                      <p className="font-serif italic text-slate-800 text-sm md:text-base bg-[#FAF9F6] p-4 rounded-xl border border-slate-50">
                        "{snehaNote}"
                      </p>
                      <button
                        onClick={handleResetNote}
                        className="font-sans text-xs text-red-500 hover:text-red-700 underline font-medium cursor-pointer"
                      >
                        Change Response
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <textarea
                        value={snehaNote}
                        onChange={(e) => setSnehaNote(e.target.value)}
                        placeholder="e.g. I appreciate this sincere effort... 🦄"
                        maxLength={400}
                        rows={3}
                        className="w-full font-sans text-sm p-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:outline-none bg-slate-50 transition-colors"
                      />
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">{snehaNote.length}/400</span>
                        <button
                          onClick={handleSaveNote}
                          disabled={!snehaNote.trim()}
                          className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium rounded-lg disabled:opacity-40 transition-all cursor-pointer"
                        >
                          Save Response 🐘
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => setShowGratitude(false)}
                    className="font-serif text-sm tracking-widest uppercase text-amber-600 hover:text-amber-800 font-semibold cursor-pointer"
                  >
                    Close & Keep Exploring 🦄
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
