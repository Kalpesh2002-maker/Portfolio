import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "AI Resume And Cover Letter Builder",
      stack: "React + Tailwind + Node.js + OpenAI",
      link: "https://resumecoverlatterbuilder.netlify.app/",
      github: "https://github.com/Kalpesh2002-maker/ai-career-companion",
    },
    {
      name: "Code Editor",
      stack: "React + Tailwind",
      link: "https://serene-narwhal-40d5e2.netlify.app/",
      github: "https://github.com/Kalpesh2002-maker/Pro-Code-Editor",
    },
    {
      name: "Hotel Management System",
      stack: "MERN",
      link: "#",
      github: "#",
    },
    {
      name: "Waste Collection IoT System",
      stack: "Firebase + Routing",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-10
      bg-gray-100 text-gray-900
      dark:bg-[#070b16] dark:text-white"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold mb-10"
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.name}
            className="group relative overflow-hidden rounded-xl p-6 border
            bg-white border-gray-300
            dark:bg-white/5 dark:border-white/10

            transition-all duration-300
            md:hover:shadow-xl
            md:hover:border-blue-500/40"
          >
            {/* 🔥 Glow overlay (desktop only) */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0
              md:group-hover:opacity-100 transition-opacity duration-300
              bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent"
            />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold tracking-wide">
                {p.name}
              </h3>

              <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                Tech: {p.stack}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-5">
                <a
                  href={p.link}
                  target="_blank"
                  className="px-4 py-2 rounded-lg text-sm font-medium
                  border transition-colors duration-300

                  bg-blue-600/15 text-blue-700 border-blue-300
                  md:hover:bg-blue-600/25

                  dark:bg-blue-600/20 dark:text-blue-400 dark:border-blue-500/30
                  md:dark:hover:bg-blue-600/40"
                >
                  Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  className="px-4 py-2 rounded-lg text-sm font-medium
                  border transition-colors duration-300

                  bg-gray-200 text-gray-800 border-gray-300
                  md:hover:bg-gray-300

                  dark:bg-white/10 dark:text-gray-300 dark:border-white/20
                  md:dark:hover:bg-white/20"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
