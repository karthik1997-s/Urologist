import { motion } from "motion/react";
import {
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const items = [
  {
    label: "Evidence-based diagnosis",
    icon: Stethoscope,
  },
  {
    label: "Appropriate treatment selection",
    icon: ShieldCheck,
  },
  {
    label: "Clear patient education",
    icon: HeartPulse,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ClinicInfo() {
  return (
    <section
      id="practice"
      className="section-pad overflow-hidden bg-ink text-white"
    >
      <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* SMALL LABEL */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-xs font-bold uppercase tracking-[0.24em] text-teal-200"
          >
            01 The Practice
          </motion.p>

          {/* HEADING */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl"
          >
            A calm, clear approach to urological care.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="mt-5 max-w-xl leading-8 text-slate-300"
          >
            Good urology is not only about procedures. It is about finding
            the right diagnosis, explaining the choices and helping patients
            make informed decisions.
          </motion.p>
        </motion.div>

        {/* =====================================================
            RIGHT CARDS
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid gap-3"
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                variants={cardVariants}
                whileHover={{
                  x: 8,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group flex cursor-default items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-semibold transition-colors duration-300 hover:border-teal-400/30 hover:bg-white/10"
              >

                {/* ICON */}

                <motion.span
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-600 transition-colors duration-300 group-hover:bg-teal-500"
                >
                  <Icon size={18} />
                </motion.span>

                {/* TEXT */}

                <motion.span
                  initial={{
                    opacity: 0,
                    x: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                  }}
                  className="transition-colors duration-300 group-hover:text-teal-100"
                >
                  {item.label}
                </motion.span>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}