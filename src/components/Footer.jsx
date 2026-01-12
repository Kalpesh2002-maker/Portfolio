import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      © {new Date().getFullYear()} Kalpesh Doshi — All Rights Reserved.

      <div className="flex justify-center gap-6 mt-4 text-xl">
  <a href="https://github.com/Kalpesh2002-maker" target="_blank">
    <FaGithub className="hover:text-blue-400 hover:scale-125 transition" />
  </a>

  <a href="https://www.linkedin.com/in/kalpesh-doshi-300a49224" target="_blank">
    <FaLinkedin className="hover:text-blue-400 hover:scale-125 transition" />
  </a>

  <a href="mailto:kalpeshdoshi150@gmail.com">
    <FaEnvelope className="hover:text-blue-400 hover:scale-125 transition" />
  </a>
</div>
    </footer>
  );
}
