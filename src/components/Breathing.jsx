import { motion } from "framer-motion";
import { FaCode, FaReact, FaGithub, FaJs, FaDatabase, FaHtml5 } from "react-icons/fa";

export default function BreathingBackground() {
  const iconsLeft = [FaCode, FaReact, FaGithub];
  const iconsRight = [FaHtml5, FaJs, FaDatabase];

  return (
    <motion.div
      className="absolute inset-0 z-0"
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 1, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Gradient background */}
      <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-950 opacity-95" />

      {/* Floating Icons Left */}
      <div className="absolute inset-0 flex flex-col justify-around items-start pl-12 text-white/30 text-6xl">
        {iconsLeft.map((Icon, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            className="drop-shadow-[0_0_15px_rgba(0,200,255,0.5)] hover:text-cyan-400 transition"
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* Floating Icons Right */}
      <div className="absolute inset-0 flex flex-col justify-around items-end pr-12 text-white/30 text-6xl">
        {iconsRight.map((Icon, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
            transition={{ duration: 7 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            className="drop-shadow-[0_0_15px_rgba(255,200,0,0.5)] hover:text-yellow-400 transition"
          >
            <Icon />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
