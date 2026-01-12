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
      className="py-28 px-6 md:px-16 transition-colors duration-300
      bg-gray-100 text-gray-900
      dark:bg-black dark:text-white"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-16 text-left max-w-6xl mx-auto">
        Experience
      </h2>

      <div className="relative max-w-6xl mx-auto space-y-24">

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10
            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-50 h-50 rounded-2xl shadow-lg
              bg-white dark:bg-gray-900 p-4 flex items-center justify-center">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Card */}
            <div className="flex-1">
              <div className="group relative overflow-hidden
p-8 rounded-2xl border backdrop-blur
bg-white border-gray-200 shadow-md
transition-all duration-500

hover:shadow-xl hover:-translate-y-1
hover:border-blue-400/50

dark:bg-white/5 dark:border-white/10
dark:hover:border-blue-500/40
dark:hover:shadow-blue-500/20">

                <h3 className="text-2xl font-semibold">
                  {exp.company}
                </h3>

                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                  {exp.role}
                </p>

                <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                  {exp.period}
                </p>

                <ul className="list-disc ml-5 mt-5 space-y-2
                text-gray-700 dark:text-gray-300">
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
