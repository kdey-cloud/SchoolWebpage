import { useRef } from "react";
import { motion, useInView } from "motion/react";

type PhotoAnimationProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  rotate?: number;
};

export default function PhotoAnimation({
  children,
  delay = 0,
  className = "",
  rotate = 0,
}: PhotoAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.92,
        rotate: rotate - 5,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              rotate,
            }
          : {
              opacity: 0,
              y: 45,
              scale: 0.92,
              rotate: rotate - 5,
            }
      }
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}