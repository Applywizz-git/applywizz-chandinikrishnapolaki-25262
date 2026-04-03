import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian"
    >
      <div className="text-center">
        <div className="flex gap-2 mb-8">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                y: [20, 0, 0, -20]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1
              }}
              className="text-5xl font-heading tracking-wider text-gradient animate-glow"
              style={{
                textShadow: '0 0 20px hsl(var(--champagne) / 0.5), 0 0 40px hsl(var(--sandstone) / 0.3)'
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <div className="w-64 h-1 bg-graphite rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-champagne to-sandstone"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
