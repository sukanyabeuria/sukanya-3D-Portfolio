import { motion } from "framer-motion";
import { orbitTech } from "../../data/portfolio";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function TechOrbit() {
  return (
    <section id="tech-orbit" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Orbit"
          title="Technologies moving around a product-focused center."
          description="A lightweight CSS 3D orbit visual keeps the portfolio immersive without adding unnecessary load."
        />

        <div className="relative mx-auto aspect-square max-w-[620px] rounded-full">
          <motion.div
            className="absolute inset-[9%] rounded-full border border-violet/25"
            animate={{ rotate: 360 }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-[23%] rounded-full border border-dashed border-pink/28"
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-[33%] grid place-items-center rounded-full bg-[radial-gradient(circle,rgba(108,59,255,0.36),rgba(255,79,191,0.12),transparent_72%)] text-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/52">Core</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">Sukanya</h3>
            </div>
          </div>
          {orbitTech.map((tech, index) => {
            const angle = (360 / orbitTech.length) * index;
            const radius = index % 2 === 0 ? 42 : 35;
            return (
              <motion.div
                key={tech}
                className="absolute left-1/2 top-1/2"
                style={{ transform: `rotate(${angle}deg) translate(${radius}vw, 0) rotate(-${angle}deg)` }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4 + (index % 4), repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
              >
                <span className="-translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-white/72 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  {tech}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}