import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 md:px-10
      bg-gray-100 text-gray-900
      dark:bg-black dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>

        <p className="max-w-4xl leading-7 text-gray-700 dark:text-gray-300">
          I'm a Full Stack Developer specializing in the MERN stack, with
          hands-on experience from internships and real-world projects.
          I enjoy building scalable, clean, and user-focused web applications
          while continuously learning modern technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {[
            { title: "2+", label: "Internships" },
            { title: "8+", label: "Projects Built" },
            { title: "SIH 2023", label: "Hackathon" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white dark:bg-white/5
              border border-gray-200 dark:border-white/10
              rounded-xl p-6 text-center
              transition-shadow hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {item.title}
              </h3>
              <p className="mt-2 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
