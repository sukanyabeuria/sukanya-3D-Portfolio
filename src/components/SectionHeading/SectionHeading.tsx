import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="gsap-reveal mx-auto mb-14 max-w-3xl text-center"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-violet/70">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/58 md:text-lg">{description}</p>
    </motion.div>
  );
}