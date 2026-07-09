import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="aurora-layer absolute -left-24 top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-purple/45"
        animate={{ x: [0, 140, 40, 0], y: [0, 40, 130, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-layer absolute right-[-10rem] top-16 h-[34rem] w-[34rem] rounded-full bg-pink/30"
        animate={{ x: [0, -130, -30, 0], y: [0, 90, -20, 0], scale: [1, 0.86, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-layer absolute bottom-[-12rem] left-1/3 h-[36rem] w-[36rem] rounded-full bg-violet/25"
        animate={{ x: [0, -90, 90, 0], y: [0, -80, -40, 0], rotate: [0, 12, -12, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(5,5,5,0.92)_72%)]" />
    </div>
  );
}