import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-[100svh] flex items-center justify-center
      px-4 sm:px-6 text-center
      bg-white text-gray-900
      dark:bg-black dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
          Hi, I’m{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Kalpesh Doshi
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Full Stack Developer (MERN)
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            View Projects
          </a>

          <a
            href="https://drive.google.com/file/d/1BQUhsdl3-nxl_2j3tmWnVhlRya7aXvUx/view"
            target="_blank"
            className="border px-6 py-3 rounded-lg"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
