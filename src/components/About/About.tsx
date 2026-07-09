import { motion } from "framer-motion";
import { FaChartLine, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { aboutTraits, stats } from "../../data/portfolio";
import GlassCard from "../GlassCard/GlassCard";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A developer profile shaped by AI, analytics, and product-grade frontend craft."
          description="Sukanya blends CSIT fundamentals with hands-on execution across machine learning, dashboards, React interfaces, and continuous learning."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div variants={fadeUp} className="glass-panel relative overflow-hidden p-8 md:p-10">
            <div className="relative z-10 grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <p className="text-lg leading-9 text-white/70">
                  I am a B.Tech CSIT student focused on building meaningful digital products where data, AI, and interface design work together. My work moves from Python notebooks and SQL thinking to polished React experiences that are fast, accessible, and clear.
                </p>
                <p className="mt-5 text-lg leading-9 text-white/56">
                  I enjoy transforming complex ideas into simple product flows, from AI recommendation systems to business dashboards and animated web portfolios.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <FaGraduationCap className="text-violet" />
                  <span>B.Tech CSIT Student</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <FaChartLine className="text-pink" />
                  <span>Data Analyst</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <FaLightbulb className="text-violet" />
                  <span>Problem Solver</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            {aboutTraits.map((trait) => (
              <div key={trait} className="rounded-[24px] border border-white/10 bg-white/[0.045] p-5 text-sm font-medium text-white/72 backdrop-blur-xl">
                {trait}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item) => (
            <GlassCard key={item.label} variants={fadeUp} className="p-6" tilt={false}>
              <p className="text-4xl font-semibold tracking-[-0.05em] text-white">{item.value}</p>
              <h3 className="mt-3 font-semibold text-violet">{item.label}</h3>
              <p className="mt-2 text-sm leading-6 text-white/52">{item.detail}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}