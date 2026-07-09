import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent } from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowDownRight, FiDownload, FiLayers } from "react-icons/fi";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { profile } from "../../data/portfolio";
import { useTyping } from "../../hooks/useTyping";
import MagneticButton from "./MagneticButton";

const heroBadges = ["AI", "Data", "React", "ML"];

export default function Hero() {
  const typedRole = useTyping(profile.roles);
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, { stiffness: 120, damping: 18 });
  const rotateY = useSpring(rotateYValue, { stiffness: 120, damping: 18 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateYValue.set(x * 18);
    rotateXValue.set(y * -14);
  };

  const resetTilt = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 md:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.2),#050505_96%)]" aria-hidden="true" />
      <motion.div
        className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="relative z-10">
          <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-3 text-xs uppercase tracking-[0.42em] text-violet/78">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-violet" />
            Luxury 3D Portfolio
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-balance text-6xl font-semibold tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
            <span className="block text-white/72">Sukanya</span>
            <span className="gradient-text block">Beuria</span>
          </motion.h1>
          <motion.div variants={fadeUp} className="mt-7 flex min-h-12 flex-wrap items-center gap-3 text-2xl font-medium text-white md:text-3xl">
            <span className="text-white/50">I build as</span>
            <span className="relative text-violet">
              {typedRole}
              <span className="ml-1 inline-block h-8 w-[2px] translate-y-1 bg-pink shadow-[0_0_18px_rgba(255,79,191,0.9)]" />
            </span>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
            B.Tech CSIT student crafting intelligent dashboards, machine learning experiences, and immersive interfaces with a premium product mindset.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href="#projects" variant="primary">
              View Projects <FiArrowDownRight />
            </MagneticButton>
            <MagneticButton href={profile.resume} download>
              Resume <FiDownload />
            </MagneticButton>
            <MagneticButton href={profile.github}>
              GitHub <FaGithub />
            </MagneticButton>
            <MagneticButton href={profile.linkedin}>
              LinkedIn <FaLinkedinIn />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact <FaEnvelope />
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="perspective-1200 relative mx-auto aspect-square w-full max-w-[560px]"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
        >
          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
            className="relative h-full w-full preserve-3d"
          >
            <motion.div
              className="absolute inset-[7%] rounded-full border border-violet/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[15%] rounded-full border border-dashed border-pink/35"
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[23%] rounded-full bg-[radial-gradient(circle,rgba(108,59,255,0.36),transparent_65%)] blur-xl"
              animate={{ scale: [0.92, 1.05, 0.92], opacity: [0.62, 1, 0.62] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src="/assets/profile.svg"
              alt="Cyberpunk female developer illustration with visor, not a real face"
              className="absolute inset-0 m-auto h-[82%] w-[82%] object-contain drop-shadow-[0_34px_80px_rgba(108,59,255,0.48)]"
            />
            {heroBadges.map((badge, index) => (
              <motion.span
                key={badge}
                className="absolute rounded-full border border-white/12 bg-white/[0.055] px-4 py-2 text-sm font-semibold text-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                style={{
                  left: `${index % 2 === 0 ? 4 : 72}%`,
                  top: `${18 + index * 18}%`,
                }}
                animate={{ y: [0, -14, 0], opacity: [0.68, 1, 0.68] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
              >
                <FiLayers className="mr-2 inline" aria-hidden="true" />
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}