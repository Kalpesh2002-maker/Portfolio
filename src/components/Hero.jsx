import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center text-center px-6
      transition-colors duration-300
      bg-white text-gray-900
      dark:bg-black dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Kalpesh Doshi
          </span>
        </h1>

        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Full Stack Developer (MERN)
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700
            text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            View Projects
          </a>

          <a
            href="https://drive.google.com/file/d/1BQUhsdl3-nxl_2j3tmWnVhlRya7aXvUx/view?usp=sharing"
            target="_blank"
            className="border border-gray-400 dark:border-gray-600
            px-6 py-3 rounded-lg
            text-gray-800 dark:text-gray-200
            hover:bg-gray-200 dark:hover:bg-gray-800
            transition"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
