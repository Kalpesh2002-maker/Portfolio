import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-16 overflow-hidden
      transition-colors duration-300
      bg-gray-100 text-gray-900
      dark:bg-black dark:text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30
      bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        {/* Description */}
        <p className="leading-8 max-w-5xl
        text-gray-700 dark:text-gray-300">
          I'm a passionate Full Stack Developer specializing in the MERN stack,
          with hands-on experience gained through internships and real-world
          projects. I enjoy building scalable, clean, and user-focused web
          applications while continuously learning modern technologies.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">

          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-xl p-6 border
          bg-white border-gray-200 shadow-sm
          transition-all duration-500
          hover:-translate-y-1 hover:shadow-lg

          dark:bg-white/5 dark:border-white/10">
            
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
            bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent"></div>

            <h3 className="relative text-3xl font-bold text-blue-600 dark:text-blue-400">
              2+
            </h3>
            <p className="relative mt-2 font-medium">
              Internships
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-xl p-6 border
          bg-white border-gray-200 shadow-sm
          transition-all duration-500
          hover:-translate-y-1 hover:shadow-lg

          dark:bg-white/5 dark:border-white/10">
            
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
            bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent"></div>

            <h3 className="relative text-3xl font-bold text-blue-600 dark:text-blue-400">
              8+
            </h3>
            <p className="relative mt-2 font-medium">
              Projects Built
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-xl p-6 border
          bg-white border-gray-200 shadow-sm
          transition-all duration-500
          hover:-translate-y-1 hover:shadow-lg

          dark:bg-white/5 dark:border-white/10">
            
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
            bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent"></div>

            <h3 className="relative text-3xl font-bold text-blue-600 dark:text-blue-400">
              SIH 2023
            </h3>
            <p className="relative mt-2 font-medium">
              Hackathon Participant
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
