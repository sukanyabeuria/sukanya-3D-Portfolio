import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navLinks, profile } from "../../data/portfolio";
import { cn } from "../../utils/cn";

export default function Navbar() {
  const [active, setActive] = useState("#about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: 0.01 },
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed left-0 right-0 top-4 z-50 mx-auto w-[min(1120px,calc(100%-24px))] rounded-full border border-white/10 px-4 py-3 transition-all duration-300",
        scrolled ? "bg-black/55 shadow-2xl shadow-purple/15 backdrop-blur-2xl" : "bg-white/[0.035] backdrop-blur-md",
      )}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="flex items-center justify-between gap-4" aria-label="Primary navigation">
        <a href="#hero" className="flex items-center gap-3" aria-label="Sukanya Beuria home">
          <img src="/assets/logo.svg" alt="" className="h-9 w-9" />
          <span className="hidden text-sm font-semibold tracking-[0.22em] text-white sm:block">SUKANYA</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm text-white/62 transition hover:text-white",
                active === link.href && "bg-white/10 text-white shadow-[0_0_30px_rgba(108,59,255,0.22)]",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-violet/60 hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-violet/60 hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative h-3.5 w-5">
            <span className={cn("absolute left-0 top-0 h-px w-5 bg-white transition", open && "top-1.5 rotate-45")} />
            <span className={cn("absolute bottom-0 left-0 h-px w-5 bg-white transition", open && "bottom-2 -rotate-45")} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 grid gap-2 rounded-[22px] border border-white/10 bg-black/80 p-3 backdrop-blur-2xl lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}