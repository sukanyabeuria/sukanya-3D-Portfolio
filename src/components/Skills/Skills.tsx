import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaChartLine, FaCode, FaDatabase, FaRobot, FaServer, FaTools } from "react-icons/fa";
import { SiCss, SiHtml5, SiJavascript, SiMysql, SiNumpy, SiPandas, SiPostgresql, SiScikitlearn, SiTailwindcss, SiVite } from "react-icons/si";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { skillGroups } from "../../data/portfolio";
import GlassCard from "../GlassCard/GlassCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const groupIcons: Record<string, IconType> = {
  Languages: FaCode,
  Frontend: SiTailwindcss,
  Backend: FaServer,
  Database: FaDatabase,
  "AI and Analytics": FaRobot,
  Tools: FaTools,
};

const skillIcons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  Tailwind: SiTailwindcss,
  Vite: SiVite,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  "Scikit Learn": SiScikitlearn,
  "Power BI": FaChartLine,
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for intelligent products and polished interfaces."
          description="From language fundamentals to AI workflows, these tools support dashboards, analysis systems, and frontend applications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const GroupIcon = groupIcons[group.title] ?? FaCode;
            return (
              <GlassCard key={group.title} variants={fadeUp} className="p-7">
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-purple/80 to-pink/70 text-xl shadow-[0_0_32px_rgba(108,59,255,0.45)]">
                    <GroupIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    <p className="mt-1 text-sm text-white/50">{group.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const SkillIcon = skillIcons[skill];
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2 text-sm text-white/70 transition group-hover:border-violet/40 group-hover:text-white"
                      >
                        {SkillIcon ? <SkillIcon className="text-violet" aria-hidden="true" /> : null}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </GlassCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}