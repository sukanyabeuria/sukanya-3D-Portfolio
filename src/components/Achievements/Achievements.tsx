import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { achievements } from "../../data/portfolio";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones that reflect consistency, curiosity, and execution."
          description="A concise snapshot of Sukanya's progress across AI, data analysis, frontend development, and learning discipline."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 md:grid-cols-2"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={achievement} variants={fadeUp} className="group rounded-[24px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:border-violet/40 hover:bg-white/[0.07]">
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-purple to-pink text-white shadow-[0_0_36px_rgba(108,59,255,0.38)]">
                  <FaAward />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet/68">Achievement {String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-3 leading-7 text-white/68">{achievement}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}