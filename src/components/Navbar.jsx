import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50
      bg-white/95 dark:bg-blue-900/95
      md:backdrop-blur
      text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Kalpesh</h1>

        <ul className="hidden md:flex gap-6">
          {["about", "skills", "projects", "experience", "contact"].map((i) => (
            <li key={i}>
              <a href={`#${i}`} className="capitalize hover:text-blue-500">
                {i}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode((p) => !p)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 bg-white dark:bg-black">
          {["about", "skills", "projects", "experience", "contact"].map((i) => (
            <a
              key={i}
              href={`#${i}`}
              className="block py-3 text-lg"
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
