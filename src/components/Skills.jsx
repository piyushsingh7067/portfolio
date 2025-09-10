import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "TailwindCSS",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Blockchain",
    "Git/Github",
    "REST API",
    "C++",
  ];

  return (
    <section className="relative px-4 py-16 overflow-hidden">
     
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
             "linear-gradient(135deg, #0f172a, #1e3a8a, #9333ea)"
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Skills ⚡
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ scale: 1.15, boxShadow: "0 0 18px rgba(59,130,246,0.6)" }}
            className="relative px-6 py-2.5 text-sm font-medium text-white rounded-full 
                       bg-gradient-to-r from-white/40 to-white/5 
                       border border-white/40 shadow-md
                       backdrop-blur-md
                       transition-all duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
