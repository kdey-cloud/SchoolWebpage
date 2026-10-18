import { useRef } from "react";
import { motion, useInView } from "motion/react";

type ScrollRevealProps = {
children: React.ReactNode;
delay?: number;
};

export default function ScrollReveal({
children,
delay = 0,
}: ScrollRevealProps) {
const ref = useRef<HTMLDivElement>(null);

const isInView = useInView(ref, {
once: true,
amount: 0.2,
});

return (
<motion.div
ref={ref}
initial={{ opacity: 0, y: 50 }}
animate={
isInView
? { opacity: 1, y: 0 }
: { opacity: 0, y: 50 }
}
transition={{
duration: 0.7,
delay,
ease: "easeOut",
}}
>
{children}
</motion.div>
);
}
