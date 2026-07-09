import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { commitData, githubMetrics, languageData, profile } from "../../data/portfolio";
import GlassCard from "../GlassCard/GlassCard";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function Github() {
  return (
    <section id="github" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Activity snapshots for repositories, commits, languages, and growth."
          description="Live API credentials are not required for this portfolio template; metrics are designed as production-ready placeholders that can be connected later."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <GlassCard variants={fadeUp} className="p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet/70">GitHub Activity</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Sukanyabeuria</h3>
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full bg-white text-black transition hover:bg-violet"
                aria-label="Open GitHub profile"
              >
                <FaGithub />
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {githubMetrics.map((metric) => (
                <div key={metric.label} className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5">
                  <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{metric.value}</p>
                  <p className="mt-2 text-sm text-white/50">{metric.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard variants={fadeUp} className="p-7">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet/70">Commits</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Contribution Momentum</h3>
              </div>
              <span className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1.5 text-xs text-violet">Placeholder API Ready</span>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={commitData} margin={{ left: -24, right: 8, top: 16, bottom: 0 }}>
                  <defs>
                    <linearGradient id="commitGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#B68CFF" stopOpacity={0.78} />
                      <stop offset="100%" stopColor="#6C3BFF" stopOpacity={0.04} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.45)" axisLine={false} tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.35)" axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "rgba(5,5,5,0.92)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, color: "#fff" }} />
                  <Area type="monotone" dataKey="commits" stroke="#B68CFF" strokeWidth={3} fill="url(#commitGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </motion.div>

        <GlassCard variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 p-7" tilt={false}>
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet/70">Top Languages</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Repository Language Mix</h3>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={languageData} margin={{ left: -24, right: 8, top: 10, bottom: 0 }}>
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.45)" axisLine={false} tickLine={false} />
                <YAxis stroke="rgba(255,255,255,0.35)" axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(5,5,5,0.92)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 16, color: "#fff" }} />
                <Bar dataKey="value" radius={[14, 14, 4, 4]} fill="#6C3BFF" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}