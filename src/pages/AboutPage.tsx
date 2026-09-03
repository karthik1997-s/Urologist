import { motion } from "motion/react";
import {
  Award,
  GraduationCap,
  HeartPulse,
  Stethoscope,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGES } from "../Utills/ImageConstant";
const highlights = [
  {
    icon: Stethoscope,
    title: "Specialist Urological Care",
    description:
      "Comprehensive evaluation and treatment for a wide range of urological conditions.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centred Approach",
    description:
      "Every treatment plan is designed around the patient's individual needs and wellbeing.",
  },
  {
    icon: GraduationCap,
    title: "Advanced Expertise",
    description:
      "Evidence-based medical practice combined with modern diagnostic and treatment techniques.",
  },
  {
    icon: Users,
    title: "Personalised Care",
    description:
      "Clear communication and compassionate care throughout diagnosis, treatment and recovery.",
  },
];

const expertise = [
  "Kidney stone management",
  "Prostate and men's health",
  "Urinary tract conditions",
  "Endourology",
  "Laparoscopic urology",
  "General urological care",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fbfcfa]">

      {/* HERO */}
      {/* BREADCRUMB */}
<section className="border-b border-slate-200 bg-white">
  <div className="mx-auto max-w-[1400px] px-5 py-4 sm:px-8 lg:px-10">
    <div className="flex items-center gap-2 text-sm">
      <Link
        to="/"
        className="font-medium text-slate-500 transition-colors hover:text-teal-700"
      >
        Home
      </Link>

      <span className="text-slate-300">/</span>

      <span className="font-semibold text-teal-700">
        About
      </span>
    </div>
  </div>
</section>
      <section className="relative overflow-hidden bg-[#edf8f6]">
        
        <div className="mx-auto grid min-h-[480px] max-w-[1400px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
              About Dr. Suryaram Aravind
            </p>

            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
              Compassionate care.
              <span className="block text-teal-700">
                Specialist expertise.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Dedicated to providing personalised, evidence-based urological
              care with a focus on clear communication, accurate diagnosis and
              better patient outcomes.
            </p>

            <motion.a
              href="/#appointment"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-8 inline-flex rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-800"
            >
              Book an Appointment
            </motion.a>
          </motion.div>

          {/* DOCTOR IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl">
              <img
                src={IMAGES.DoctorImage} 
                alt="Dr. Suryaram Aravind"
                className="h-[420px] w-full rounded-[1.5rem] object-cover object-top sm:h-[500px]"
              />
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
              About
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-5xl">
              Urology care built around people
            </h2>

            <div className="mt-7 max-w-4xl space-y-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              <p>
                Dr. Suryaram Aravind is a Consultant Urologist focused on
                delivering comprehensive and personalised care for patients
                with urological conditions.
              </p>

              <p>
                His approach combines clinical expertise, modern treatment
                options and patient education to help individuals understand
                their condition and make informed decisions about their care.
              </p>

              <p>
                From initial consultation and diagnosis through treatment and
                follow-up, the emphasis remains on safety, clarity and
                compassionate communication.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-[#f5f8f7] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1200px]">

          <motion.div
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
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
              What matters
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              A patient-first approach
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="flex min-h-[260px] flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-7 font-display text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2 lg:items-center">

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
              Areas of expertise
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
              Comprehensive urological care
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              A broad range of urological conditions can be assessed and
              treated with an individualised approach based on the patient's
              symptoms, diagnosis and goals.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {expertise.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-700 text-white">
                  ✓
                </span>

                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-800 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <motion.div
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
          }}
          className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-7 lg:flex-row lg:items-center"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-100">
              Take the next step
            </p>

            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
              Have a urological concern?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-teal-50 sm:text-base">
              Schedule a consultation to discuss your symptoms and treatment
              options.
            </p>
          </div>

          <a
            href="/#appointment"
            className="inline-flex shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-teal-800 transition-transform duration-300 hover:-translate-y-1"
          >
            Book Appointment
          </a>
        </motion.div>
      </section>
    </main>
  );
}