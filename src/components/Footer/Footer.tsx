import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center text-sm text-white/52 md:flex-row md:text-left">
        <p>Made with ❤️ by Sukanya Beuria</p>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href={`mailto:${profile.email}`} className="transition hover:text-white">
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}