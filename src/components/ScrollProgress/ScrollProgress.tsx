import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left bg-gradient-to-r from-purple via-pink to-violet shadow-[0_0_22px_rgba(182,140,255,0.85)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}