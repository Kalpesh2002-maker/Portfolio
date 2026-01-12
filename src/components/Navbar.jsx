import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur
      bg-white/80 dark:bg-blue-800/80
      text-black dark:text-white
      transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Kalpesh</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {["about", "skills", "projects", "experience", "contact"].map((i) => (
            <li key={i}>
              <a
                href={`#${i}`}
                className="capitalize transition hover:text-blue-500"
              >
                {i}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4">

          {/* 🌗 Theme Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full border
            bg-gray-200 hover:bg-gray-300
            dark:bg-gray-800 dark:hover:bg-gray-700
            transition-all duration-300"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-700 dark:text-gray-300" />
            )}
          </button>

          {/* 📱 Mobile Menu */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4
        bg-white dark:bg-black
        text-black dark:text-white transition-colors">
          {["about", "skills", "projects", "experience", "contact"].map((i) => (
            <a
              key={i}
              href={`#${i}`}
              className="block py-2 capitalize hover:text-blue-500"
              onClick={() => setOpen(false)}
            >
              {i}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
