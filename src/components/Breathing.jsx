import { motion } from "framer-motion";
import { FaCode, FaReact, FaGithub, FaJs, FaDatabase, FaHtml5 } from "react-icons/fa";

export default function BreathingBackground() {
  const iconsLeft = [FaCode, FaReact, FaGithub];
  const iconsRight = [FaHtml5, FaJs, FaDatabase];

  return (
    <motion.div
      className="absolute inset-0 z-0"
      animate={{
        scale: [1, 1.08, 1],
        rotate: [0, 1, -1, 0],
        opacity: [1, 0.95, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >

      <div className="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-950 to-purple-900 opacity-95" />

      <div className="absolute inset-0 flex flex-col justify-around items-start pl-12 text-white/40 text-6xl">
        {iconsLeft.map((Icon, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 20, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="drop-shadow-[0_0_20px_rgba(0,200,255,0.6)] hover:text-cyan-400 transition"
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col justify-around items-end pr-12 text-white/40 text-6xl">
        {iconsRight.map((Icon, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 25, 0],
              rotate: [0, -15, 15, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 7 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="drop-shadow-[0_0_20px_rgba(255,180,0,0.6)] hover:text-yellow-400 transition"
          >
            <Icon />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
