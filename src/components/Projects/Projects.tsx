import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { projects } from "../../data/portfolio";
import GlassCard from "../GlassCard/GlassCard";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds across AI dashboards, analytics, and recommendation systems."
          description="Each project is structured to communicate a problem, a product experience, and a useful technical outcome."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <GlassCard key={project.title} variants={fadeUp} className="animated-border p-[1px]">
              <article className="relative rounded-[23px] bg-black/48 p-5 md:p-6">
                <div className="grid gap-6 md:grid-cols-[0.92fr_1.08fr] md:items-center">
                  <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035]">
                    <div className="absolute inset-0 opacity-45" style={{ background: `radial-gradient(circle at 50% 20%, ${project.accent}, transparent 64%)` }} />
                    <img src={project.image} alt="" className="relative h-56 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet/70">Featured Project</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/58">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs text-white/62">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/72 transition hover:border-violet/60 hover:text-white"
                      >
                        <FaGithub /> GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold transition hover:bg-violet"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}