import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { certifications } from "../../data/portfolio";
import GlassCard from "../GlassCard/GlassCard";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function Certificates() {
  return (
    <section id="certifications" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="A learning record across programming, analytics, frontend, and ML."
          description="Certificates are structured as editable portfolio entries and can be swapped with verified credential links."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((certificate) => (
            <GlassCard key={certificate.title} variants={fadeUp} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-black">
                  <FaCertificate />
                </div>
                <span className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-xs text-violet">{certificate.status}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{certificate.title}</h3>
              <p className="mt-2 text-sm text-white/52">{certificate.issuer}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}