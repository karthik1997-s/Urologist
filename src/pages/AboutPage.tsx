
import { motion } from "motion/react";
import {
  Award,
  BookOpen,
  GraduationCap,
  HeartPulse,
  Languages,
  Microscope,
  Stethoscope,
  Users,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { IMAGES } from "../Utills/ImageConstant";

const highlights = [
  {
    icon: Stethoscope,
    title: "Advanced Urology",
    description:
      "Experienced across advanced endourology, reconstructive urology and uro-oncological procedures, with growing expertise in laparoscopic surgery.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centred Care",
    description:
      "Focused on clear communication, empathetic counselling and helping patients understand their condition, treatment options and recovery.",
  },
  {
    icon: GraduationCap,
    title: "Academic Leadership",
    description:
      "Served as an Assistant Professor of Urology, mentoring junior trainees and contributing to postgraduate surgical education.",
  },
  {
    icon: Users,
    title: "Collaborative Practice",
    description:
      "Experienced in managing high-volume outpatient and inpatient services while working closely with multidisciplinary perioperative teams.",
  },
];

const expertise = [
  "Advanced Endourology",
  "Endoscopic Urological Surgery",
  "Core Reconstructive & Functional Urology",
  "Uro-Oncological Surgery",
  "Laparoscopic Urology",
  "Emergency Urological Care",
  "PCNL & RIRS",
  "TURP",
];
const memberships = [
  {
    abbr: "USI",
    name: "Urological Society of India",
  },
  {
    abbr: "ASU",
    name: "Association of Southern Urologists",
  },
  {
    abbr: "TAPA",
    name: "Tamil Nadu & Pondicherry Association of Urologists",
  },
  {
    abbr: "UAA",
    name: "Urological Association of Asia",
  },
];
const education = [
  {
    year: "2025",
    degree: "MCh Urology",
    institution: "Sri Ramachandra Medical College, Chennai",
  },
  {
    year: "2017",
    degree: "MS General Surgery",
    institution: "Mahatma Gandhi Medical College and Research Institute",
  },
  {
    year: "2014",
    degree: "MBBS",
    institution: "Amrita Institute of Medical Sciences, Kochi",
  },
];

const publications = [
  {
    title:
      "Endoscopic Synergy: Endoscopic Combined Intrarenal Surgery (ECIRS)-Guided “Cut-to-Light” Holmium Laser Retrograde Endoureterotomy in Ureteral Stricture Management",
    journal: "Cureus",
    role: "First author",
  },
  {
    title:
      "From Mortality to Morbidity Control: A Paradigm Shift in Emphysematous Pyelonephritis Management",
    journal: "Cureus",
    role: "First author",
  },
  {
    title:
      "Renal Cyst’s Dark Secret: A Rare Case of Fungal-Infested Necrotizing Granulomatous Inflammation in a Renal Cyst",
    journal: "Cureus",
    role: "Second author",
  },
  {
    title:
      "National Early Warning Score 2 (NEWS2) and Quick Sequential Organ Failure Assessment (qSOFA) Score in Acute Pyelonephritis: Tools for Expedited Care and Improved Outcomes",
    journal: "WJN",
    role: "Second author",
  },
];



export default function AboutPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfcfa] pt-[72px]">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main className="overflow-hidden bg-[#fbfcfa]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#edf8f6]">
          <div className="mx-auto grid min-h-[520px] max-w-[1400px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">
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
                Specialist expertise.
                <span className="block text-teal-700">
                  Compassionate care.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Urologist and Andrologist with experience in advanced
                endourology, reconstructive and uro-oncological procedures,
                emergency urological care and high-volume clinical services.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm">
                  MCh Urology
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  Urologist & Andrologist
                </span>
              </div>

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
              <div className="overflow-hidden rounded-[2rem] bg-white  shadow-xl">
                <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,#9fe0d4,#edf8f6_55%,#c5efe6)] sm:h-[650px]">
                  <img
                    src={IMAGES.DoctorImage}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover object-top mix-blend-multiply"
                  />

                  <img
                    src={IMAGES.DoctorImage}
                    alt="Dr. Suryaram Aravind"
                    className="absolute inset-0 h-full w-full object-cover object-top [mask-image:radial-gradient(ellipse_52%_62%_at_50%_36%,#000_46%,transparent_98%)] [-webkit-mask-image:radial-gradient(ellipse_52%_62%_at_50%_36%,#000_46%,transparent_98%)]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROFESSIONAL OVERVIEW */}
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
                Professional Overview
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-5xl">
                Experienced urological care with a patient-first approach
              </h2>

              <div className="mt-7 max-w-4xl space-y-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                <p>
                  Dr. Suryaram is an experienced Urologist and Andrologist
                  proficient across a wide surgical spectrum, including
                  advanced endourology, reconstructive and uro-oncological
                  procedures, alongside growing expertise in laparoscopic
                  surgery.
                </p>

                <p>
                  He has experience managing high-acuity elective and
                  emergency cases, as well as leading high-volume outpatient
                  clinics and inpatient services. His clinical approach
                  combines careful evaluation with personalised,
                  evidence-based treatment planning.
                </p>

                <p>
                  Patient communication is an important part of his practice.
                  Through clear and empathetic preoperative counselling, he
                  focuses on helping patients understand risks, expectations
                  and recovery.
                </p>

                <p>
                  His professional experience also includes interdisciplinary
                  collaboration, postgraduate teaching, mentoring junior
                  trainees and contributing to specialist academic and
                  continuing medical education initiatives.
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
                Clinical Approach
              </p>

              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                Expertise supported by experience, education and empathy
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
                    className="flex min-h-[280px] flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
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
                Areas of Expertise
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
                A broad spectrum of urological surgery
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                His clinical experience spans advanced endourological
                procedures, reconstructive and functional urology,
                uro-oncological surgery and emergency urological management.
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                He has performed procedures including TURP, PCNL and RIRS,
                while continuing to develop expertise in laparoscopic
                urological surgery.
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
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-700 text-sm font-bold text-white">
                    ✓
                  </span>

                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ACADEMIC JOURNEY */}
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
                Academic Journey
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                Education & professional development
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {education.map((item, index) => (
                <motion.article
                  key={item.degree}
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
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700">
                      <GraduationCap size={23} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-xl font-semibold text-slate-900">
                    {item.degree}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.institution}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ACADEMIC & TEACHING */}
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2 lg:items-start">
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
                Academic & Teaching
              </p>

              <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                Contributing beyond clinical practice
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Dr. Suryaram has served as an Assistant Professor of Urology,
                mentoring junior trainees and providing didactic and practical
                instruction. He has also contributed to specialist CME and CPD
                initiatives, including SURGE 2025 and MIST-2015.
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                His academic interests include endourological surgery,
                pyelonephritis, ureteral stricture management and other complex
                urological conditions.
              </p>

              <div className="mt-8 flex items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-teal-50 text-teal-700">
                  <Award size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Award-winning presentation
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Podium presentation at UAA 2025 in Taiwan, awarded Best
                    Paper.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-700">
                  <BookOpen size={21} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                    Selected Publications
                  </p>

                  <h3 className="mt-1 font-display text-2xl font-semibold text-slate-900">
                    Research & publications
                  </h3>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {publications.map((publication, index) => (
                  <motion.article
                    key={publication.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-sm font-semibold leading-6 text-slate-800">
                      {publication.title}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full bg-white px-3 py-1 font-medium text-teal-700">
                        {publication.journal}
                      </span>

                      <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-600">
                        {publication.role}
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* MEMBERSHIPS */}
        <section className="relative overflow-hidden bg-[#edf8f6] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />

          <div className="relative mx-auto max-w-[1200px]">
            <motion.div
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
              }}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
                Professional Associations
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                Memberships
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Active membership in national, regional and international
                urological associations.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {memberships.map((membership, index) => (
                <motion.article
                  key={membership.abbr}
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.55,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group flex flex-col items-center rounded-[28px] border border-white/80 bg-white/90 px-6 py-8 text-center shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-teal-700 text-white shadow-[0_10px_24px_rgba(15,118,110,0.28)] transition-transform duration-300 group-hover:scale-105">
                    <span className="font-display text-lg font-semibold tracking-wide">
                      {membership.abbr}
                    </span>
                  </div>

                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
                    Member
                  </p>

                  <h3 className="mt-2 font-display text-lg font-semibold leading-6 text-slate-900">
                    {membership.name}
                  </h3>
                </motion.article>
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
                Schedule a consultation to discuss your symptoms, diagnosis
                and treatment options.
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
    </div>
  );
}
