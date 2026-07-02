import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Particle {
  id: number;
  emoji: "🐘" | "🦄";
  x: number; // percentage from left
  size: number; // size in px
  delay: number; // animation delay
  duration: number; // speed
  opacity: number;
}

export default function ParticleEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate initial particles
    const initialParticles: Particle[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      emoji: Math.random() > 0.5 ? "🐘" : "🦄",
      x: Math.random() * 100,
      size: Math.random() * 20 + 16, // 16px to 36px
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15, // 15s to 25s for slow cinematic float
      opacity: Math.random() * 0.3 + 0.15, // soft opacity
    }));
    setParticles(initialParticles);

    // Occasionally add new particles and remove old ones to keep the flow alive
    const interval = setInterval(() => {
      setParticles((prev) => {
        const kept = prev.filter((p) => Math.random() > 0.15 || prev.length < 12);
        if (kept.length < 20) {
          const newParticle: Particle = {
            id: Date.now() + Math.random(),
            emoji: Math.random() > 0.5 ? "🐘" : "🦄",
            x: Math.random() * 100,
            size: Math.random() * 20 + 16,
            delay: 0,
            duration: Math.random() * 10 + 15,
            opacity: Math.random() * 0.3 + 0.15,
          };
          return [...kept, newParticle];
        }
        return kept;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: "110vh", x: `${p.x}vw`, opacity: 0, scale: 0.6 }}
            animate={{
              y: "-10vh",
              x: [
                `${p.x}vw`,
                `${p.x + (Math.random() * 10 - 5)}vw`,
                `${p.x + (Math.random() * 16 - 8)}vw`,
                `${p.x}vw`,
              ],
              opacity: [0, p.opacity, p.opacity, 0],
              scale: [0.6, 1, 1, 0.8],
              rotate: [0, Math.random() * 15 - 7.5, Math.random() * -15 + 7.5, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              position: "absolute",
              fontSize: `${p.size}px`,
              filter: "drop-shadow(0 0 4px rgba(212, 175, 55, 0.2))",
            }}
          >
            {p.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
