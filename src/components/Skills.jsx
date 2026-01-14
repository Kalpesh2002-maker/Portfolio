import { motion } from "framer-motion";
import { FaAws, FaGit, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGit /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "AWS", icon: <FaAws /> },
  ];

  return (
    <section
      id="skills"
      className="py-24 transition-colors duration-300
      bg-gradient-to-b 
      from-gray-100 via-white to-gray-100
      dark:from-[#05070d] dark:via-[#0b1220] dark:to-black"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold mb-12
        text-gray-900 dark:text-white "
      >
        Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto"
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 px-6 py-3 rounded-full 
            cursor-pointer backdrop-blur-md border
            transition-all duration-300 hover:scale-110

            bg-gray-200 text-gray-900 border-gray-300
            hover:bg-blue-200

            dark:bg-white/10 dark:text-white dark:border-white/10
            dark:hover:bg-blue-500/20 dark:hover:shadow-lg dark:hover:shadow-blue-500/30"
          >
            <span className="text-xl text-blue-600 dark:text-blue-400">
              {skill.icon}
            </span>
            <span className="font-medium tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
