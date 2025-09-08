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
    <section className="px-4 py-12 bg-gradient-to-b from-gray-950 via-black to-gray-900">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">
        Skills ⚡
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="relative px-6 py-2.5 text-sm font-medium text-white rounded-full 
                       bg-gradient-to-r from-white/20 to-white/5 
                       border border-white/20 shadow-md
                       backdrop-blur-md
                       transition-all duration-300 
                       hover:scale-110 hover:border-white/40 hover:shadow-lg hover:shadow-blue-500/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
