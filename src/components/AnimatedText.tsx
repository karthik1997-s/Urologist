import { motion } from "motion/react";

type AnimatedTextProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}