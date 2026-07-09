import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { profile } from "../../data/portfolio";
import GlassCard from "../GlassCard/GlassCard";
import SectionHeading from "../SectionHeading/SectionHeading";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FaEnvelope },
  { label: "Phone", value: profile.phone, href: "tel:+916371713171", icon: FaPhoneAlt },
  { label: "GitHub", value: "Sukanyabeuria", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", value: "Sukanya Beuria", href: profile.linkedin, icon: FaLinkedinIn },
  { label: "Location", value: profile.location, href: "#contact", icon: FaMapMarkerAlt },
];

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    setStatus("sending");
    setMessage("");

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, formData, { publicKey });
        setMessage("Message sent successfully. Thank you for reaching out.");
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 700));
        setMessage("EmailJS is ready. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to enable live sending.");
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email Sukanya directly using the contact link.");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let us turn an idea into a polished intelligent experience."
          description="Send a project note, collaboration request, or opportunity. The form is wired for EmailJS and includes a safe placeholder mode."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={fadeUp} className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:border-violet/40 hover:bg-white/[0.07]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-purple to-pink text-white shadow-[0_0_32px_rgba(108,59,255,0.34)]">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-sm text-white/45">{item.label}</span>
                    <span className="mt-1 block font-medium text-white/78 group-hover:text-white">{item.value}</span>
                  </span>
                </a>
              );
            })}
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-violet"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          <GlassCard variants={fadeUp} className="p-6 md:p-8" tilt={false}>
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-white/60">
                  Name
                  <input
                    name="from_name"
                    required
                    placeholder="Your name"
                    className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-violet/70"
                  />
                </label>
                <label className="grid gap-2 text-sm text-white/60">
                  Email
                  <input
                    name="from_email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-violet/70"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm text-white/60">
                Subject
                <input
                  name="subject"
                  required
                  placeholder="Project or opportunity"
                  className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-violet/70"
                />
              </label>
              <label className="grid gap-2 text-sm text-white/60">
                Message
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your idea..."
                  className="resize-none rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-violet/70"
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="magnetic-button inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-purple via-pink to-violet px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(108,59,255,0.42)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"} <FaPaperPlane />
              </button>
              {message ? (
                <p className={`rounded-2xl border px-4 py-3 text-sm ${status === "error" ? "border-pink/35 bg-pink/10 text-pink" : "border-violet/35 bg-violet/10 text-violet"}`}>
                  {message}
                </p>
              ) : null}
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}