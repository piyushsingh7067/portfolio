import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [hoveredIconIndex, setHoveredIconIndex] = useState(null);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setTimeout(() => setShowNavbar(true), 100);
    }
  }, []);

  const icons = [
    <GithubIcon
      key="github"
      onClick={() => window.open("https://github.com/piyushsingh7067")}
    />,
    <Twitter
      key="twitter"
      onClick={() => window.open("https://x.com/PiyushSingh_25")}
    />,
    <LinkedinIcon
      key="linkedin"
      onClick={() => window.open("https://www.linkedin.com/in/me/")}
    />,
  ];

  return (
    <div className="hidden sm:flex justify-center mt-6">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={showNavbar ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        whileHover={{ scale: 1.05 }}
        className="rounded-full px-6 py-4 flex gap-16 shadow-2xl relative overflow-hidden"
      >
      
        <motion.div
          className="absolute inset-0 rounded-full -z-10"
          animate={{
            background: [
              "linear-gradient(90deg, #1e3a8a, #9333ea)", 
               "linear-gradient(90deg, #9333ea, #0ea5e9)"
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

       
        <motion.div
          className="absolute inset-0 rounded-full -z-20 bg-black/30 backdrop-blur-md"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

      
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            onHoverStart={() => setHoveredIconIndex(index)}
            onHoverEnd={() => setHoveredIconIndex(null)}
            animate={{
              scale:
                hoveredIconIndex === null
                  ? 1
                  : hoveredIconIndex === index
                  ? 1.4
                  : 0.85,
              filter:
                hoveredIconIndex === null
                  ? "drop-shadow(0 0 0px transparent)"
                  : hoveredIconIndex === index
                  ? "drop-shadow(0 0 12px #38bdf8)" 
                  : "blur(0.5px)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
            className="cursor-pointer text-white"
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
