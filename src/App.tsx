import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Aurora from "./components/Aurora/Aurora";
import BackToTop from "./components/BackToTop/BackToTop";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import FloatingParticles from "./components/FloatingParticles/FloatingParticles";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import { useGsapReveal } from "./hooks/useGsapReveal";
import { useLenis } from "./hooks/useLenis";

const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Timeline = lazy(() => import("./components/Timeline/Timeline"));
const Github = lazy(() => import("./components/Github/Github"));
const Achievements = lazy(() => import("./components/Achievements/Achievements"));
const Certificates = lazy(() => import("./components/Certificates/Certificates"));
const TechOrbit = lazy(() => import("./components/TechOrbit/TechOrbit"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Background3D = lazy(() => import("./components/Background3D/Background3D"));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useLenis();
  useGsapReveal();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-white selection:bg-violet selection:text-night">
      <AnimatePresence>{isLoading ? <Loader key="loader" /> : null}</AnimatePresence>
      <Aurora />
      <FloatingParticles />
      <div className="star-field pointer-events-none fixed inset-0 z-0 opacity-25" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative z-10"
      >
        <Hero />
        <Suspense
          fallback={
            <div className="mx-auto flex min-h-[40vh] max-w-7xl items-center justify-center px-6 text-sm uppercase tracking-[0.4em] text-white/45">
              Loading sections
            </div>
          }
        >
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Github />
          <Achievements />
          <Certificates />
          <TechOrbit />
          <Contact />
        </Suspense>
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  );
}
