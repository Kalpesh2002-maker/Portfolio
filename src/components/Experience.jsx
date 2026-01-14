import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "MASS IT Solutions LLP",
      role: "Web Developer Intern",
      period: "Dec 2024 – Feb 2025",
      logo: "https://www.albiorixtech.com/wp-content/uploads/2022/04/full-stack-development-company.svg",
      points: [
        "Built 5+ reusable React UI components improving development speed by 30%.",
        "Developed REST APIs using Node.js and Express for production features.",
        "Improved page load performance by optimizing component rendering.",
        "Collaborated with senior engineers in agile sprint cycles.",
      ],
    },
    {
      company: "Codveda Innovation",
      role: "Software Developer Intern",
      period: "Aug 2024 – Oct 2024",
      logo: "https://pbs.twimg.com/profile_images/1973357712944549888/wFXUuAZv_400x400.png",
      points: [
        "Worked on Java-based backend modules and debugging workflows.",
        "Optimized database queries improving response time by 25%.",
        "Implemented data validation and error handling features.",
        "Participated in code reviews and team demos.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 md:px-10
      bg-gray-100 text-gray-900
      dark:bg-black dark:text-white"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold mb-12 max-w-6xl mx-auto"
      >
        Experience
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-20">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className={`flex flex-col md:flex-row items-center gap-8
            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Logo */}
            <div
              className="w-32 h-32 flex-shrink-0 bg-white dark:bg-gray-900
              rounded-xl shadow flex items-center justify-center p-4"
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Experience Card */}
            <div
              className="group relative overflow-hidden flex-1
              rounded-xl p-6 border

              bg-white border-gray-200
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
                <h3 className="text-xl font-semibold">
                  {exp.company}
                </h3>

                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                  {exp.role}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {exp.period}
                </p>

                <ul className="list-disc ml-5 mt-4 space-y-2 text-sm">
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
