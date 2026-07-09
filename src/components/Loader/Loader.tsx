import { motion } from "framer-motion";
import Lottie from "lottie-react";
import orbitAnimation from "../../assets/lottie/orbit.json";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-night"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.04, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-5"
      >
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 rounded-full bg-purple/30 blur-3xl" />
          <Lottie animationData={orbitAnimation} loop className="relative h-full w-full" />
        </div>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.55em] text-white/55">Loading</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white">Sukanya Beuria</h1>
        </div>
      </motion.div>
    </motion.div>
  );
}