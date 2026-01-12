import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedBackground() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1500], [0, -300]);
  const y2 = useTransform(scrollY, [0, 1500], [0, 300]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* Blue Blob */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-20%] left-[-10%]
        w-[600px] h-[600px] rounded-full
        blur-[140px] opacity-40
        bg-blue-400 dark:bg-blue-600"
      />

      {/* Purple Blob */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-20%] right-[-10%]
        w-[600px] h-[600px] rounded-full
        blur-[140px] opacity-40
        bg-purple-400 dark:bg-purple-700"
      />
    </div>
  );
}
