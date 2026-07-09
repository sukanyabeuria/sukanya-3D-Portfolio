import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { cn } from "../../utils/cn";

type GlassCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  tilt?: boolean;
};

export default function GlassCard({ children, className, tilt = true, ...props }: GlassCardProps) {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!tilt) return;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    element.style.setProperty("--card-x", `${x}px`);
    element.style.setProperty("--card-y", `${y}px`);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <motion.div
      {...props}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "glass-panel group relative overflow-hidden transition-transform duration-200 ease-out will-change-transform",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--card-x,50%)_var(--card-y,50%),rgba(255,255,255,0.16),transparent_34%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}