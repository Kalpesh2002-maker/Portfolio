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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section
        id="projects"
        className="relative py-24 px-10 transition-colors duration-300

        bg-gradient-to-b from-gray-100 via-white to-gray-100
        dark:from-black dark:via-[#070b16] dark:to-[#0b1220]"
      >
        <h2 className="text-3xl font-bold mb-10
        text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-2xl p-7 cursor-pointer
              border backdrop-blur-xl transition-all duration-500
              hover:-translate-y-2 hover:scale-[1.02]

              bg-white text-gray-900 border-gray-300
              hover:shadow-xl hover:shadow-gray-300/60

              dark:bg-white/5 dark:text-white dark:border-white/10
              dark:hover:border-blue-500/40
              dark:hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
              bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent"></div>

              <h3 className="relative text-xl font-semibold tracking-wide">
                {p.name}
              </h3>

              <p className="relative text-sm mt-1 text-gray-600 dark:text-gray-400">
                Tech: {p.stack}
              </p>

              <div className="relative flex gap-4 mt-5">
                <a
                  href={p.link}
                  target="_blank"
                  className="px-4 py-2 rounded-lg text-sm font-medium
                  border transition

                  bg-blue-600/15 text-blue-700 border-blue-300
                  hover:bg-blue-600/25

                  dark:bg-blue-600/20 dark:text-blue-400 dark:border-blue-500/30
                  dark:hover:bg-blue-600/40"
                >
                  Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  className="px-4 py-2 rounded-lg text-sm font-medium
                  border transition

                  bg-gray-200 text-gray-800 border-gray-300
                  hover:bg-gray-300

                  dark:bg-white/10 dark:text-gray-300 dark:border-white/20
                  dark:hover:bg-white/20"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
