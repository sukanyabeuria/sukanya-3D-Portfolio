import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { timelineItems } from "../../data/portfolio";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function Timeline() {
  return (
    <section id="timeline" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Timeline"
          title="A learning path moving from foundations to full-stack intelligence."
          description="The roadmap connects programming fundamentals, analytics, frontend engineering, AI, and LLM-enabled product thinking."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-purple via-pink to-violet md:left-1/2" aria-hidden="true" />
          {timelineItems.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className={`relative mb-8 grid gap-4 pl-12 md:grid-cols-2 md:pl-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
            >
              <div className={index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"}>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:border-violet/40 hover:bg-white/[0.07]">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-violet/72">{item.year}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{item.detail}</p>
                </div>
              </div>
              <span className="absolute left-2 top-7 h-5 w-5 rounded-full border-4 border-night bg-violet shadow-[0_0_24px_rgba(182,140,255,0.8)] md:left-[calc(50%-0.625rem)]" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}