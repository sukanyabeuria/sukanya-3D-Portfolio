import type { HTMLMotionProps } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

type MagneticButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export default function MagneticButton({ children, className, href = "#", variant = "secondary", ...props }: MagneticButtonProps) {
  const external = href.startsWith("http");

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate3d(${x * 0.18}px, ${y * 0.28}px, 0)`;
  };

  const handleMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : props.target}
      rel={external ? "noreferrer" : props.rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "magnetic-button inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold",
        variant === "primary" &&
          "bg-gradient-to-r from-purple via-pink to-violet text-white shadow-[0_18px_60px_rgba(108,59,255,0.45)]",
        variant === "secondary" && "border border-white/12 bg-white/[0.06] text-white backdrop-blur-xl hover:border-violet/60",
        variant === "ghost" && "text-white/68 hover:text-white",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
}