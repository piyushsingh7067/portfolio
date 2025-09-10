import { Link, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Project() {
  const projects = [
    {
      title: "Logic-Chat",
      description:
        "An interactive chatbot platform powered by OpenAI GPT. Users can chat in real-time with an intelligent assistant that responds to queries, providing a clean UI, smooth rendering, and seamless API communication.",
      github: "https://github.com/piyushsingh7067/LogicChat",
      live: "https://logic-chat-minor-project.vercel.app/",
    },
    {
      title: "Drawing-App",
      description:
        "A lightweight, interactive web app for drawing on a digital canvas. Includes tools for color selection, brush size adjustment, and reset functionality. Built with HTML, CSS, and JavaScript for a responsive experience.",
      github: "https://github.com/piyushsingh7067/Drawing-app",
      live: "https://drawing-app-wheat-ten.vercel.app/",
    },
    {
      title: "Astrology Birth Info",
      description:
        "A creative astrology web app where users input birth details to generate personalized astrological insights. Displays zodiac signs, charts, and related details using JavaScript logic and DOM manipulation.",
      github: "https://github.com/piyushsingh7067/Astrology-Birth-Info",
      live: "https://astrology-birth-info.vercel.app/",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "A classic two-player Tic Tac Toe game built with HTML, CSS, and JavaScript. Features win/draw detection, player turn indicators, and responsive design for smooth gameplay.",
      github: "https://github.com/piyushsingh7067/Tic-tac-toe-game",
      live: "https://tic-tac-toe-game-eight-xi.vercel.app/",
    },
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
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Projects 🚀
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative bg-black/70 border border-gray-700 rounded-2xl shadow-lg overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(59,130,246,0.6)", 
            }}
          >
          
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6 text-justify">
                {project.description}
              </p>

             
              <div className="mt-auto flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition"
                >
                  <Link className="w-5 h-5 text-white" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition"
                >
                  <MoveUpRight className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
