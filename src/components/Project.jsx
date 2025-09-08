import { Link, MoveUpRight } from "lucide-react";

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
    <section className="px-4 py-12 bg-gradient-to-b from-gray-950 via-black to-gray-900">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">
        Projects 🚀
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-black/80 border border-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:border-white/40"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6 text-justify">
                {project.description}
              </p>

              {/* Links */}
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
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
                >
                  <MoveUpRight className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
