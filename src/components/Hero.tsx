import { ArrowRight, Sparkles, Stethoscope } from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../Utills/ImageConstant";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(175,233,223,.55),transparent_34%),linear-gradient(180deg,#f4fbf9_0%,#fbfcfa_70%)]" />
      <div className="container-wide grid min-h-[680px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
            <Sparkles size={14} /> Consultant UROLOGIST & ANDROLOGIST — Karaikudi
          </div>
          <motion.h1
  initial={{
    opacity: 0,
    y: 45,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.9,
    delay: 0.2,
    ease: [0.22, 1, 0.36, 1],
  }} className="max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-ink md:text-7xl">
            Urological care with <span className="text-teal-700">evidence-based</span> patient education.
         </motion.h1>
           <motion.p
  initial={{
    opacity: 0,
    y: 25,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
    delay: 0.45,
  }} className="mt-7 mt-5 font-display text-xl font-medium tracking-tight text-steel sm:text-2xl">
            Dr. Suryaram Aravind — MBBS, MS (General Surgery), MCh (Urology)
                 </motion.p>
          <motion.p
  initial={{
    opacity: 0,
    y: 25,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
    delay: 0.45,
  }} className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
             Evaluation and management of urological conditions at{" "}
            <a
              href="https://sriushamedicalcentre.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-teal-700 underline decoration-teal-200 underline-offset-[5px] transition hover:text-teal-800 hover:decoration-teal-500"
            >
              Sri Usha Medical Centre
            </a>
            , Karaikudi.
          </motion.p>
          <div className="mt-9 flex flex-wrap gap-3">
           <motion.a

  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.7,
    delay: 0.65,
  }}
  whileHover={{
    y: -3,
    scale: 1.02,
  }}
  whileTap={{
    scale: 0.97,
  }} href="#appointment" className="group inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 font-semibold text-white shadow-soft hover:bg-teal-800">
              Book an Appointment <ArrowRight size={17} className="transition group-hover:translate-x-1" />
           </motion.a>
           <motion.a
  
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.7,
    delay: 0.65,
  }}
  whileHover={{
    y: -3,
    scale: 1.02,
  }}
  whileTap={{
    scale: 0.97,
  }} href="/conditions" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-ink hover:border-teal-400 hover:text-teal-700">
              Explore Urology Conditions
           </motion.a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {["MCh (Urology)", "Sri Usha Medical Centre", "Adult & Pediatric Urology"].map((item, i) => (
              <div key={item} className="border-l-2 border-teal-300 pl-4">
                <p className="text-sm font-semibold text-ink">{item}</p>
                <p className="mt-1 text-xs text-slate-500">{["Specialist qualification", "Hospital affiliation", "Clinical practice"][i]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[510px]">
          <div className="absolute -inset-5 rounded-[42px] bg-teal-100/60 blur-2xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white bg-white shadow-soft">
            <div className="relative h-[520px] bg-[linear-gradient(145deg,#9fe0d4,#edf8f6_55%,#c5efe6)]">
              <div className="absolute left-7 top-7 z-20 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-teal-800 shadow-sm">MCh (Urology)</div>
              <img
                src={IMAGES.DoctorImage}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover object-[center_12%] mix-blend-multiply"
              />
              <img
                src={IMAGES.DoctorImage}
                alt="Dr. Suryaram Aravind"
                className="absolute inset-0 h-full w-full object-cover object-[center_12%] [mask-image:radial-gradient(ellipse_52%_62%_at_50%_36%,#000_46%,transparent_98%)] [-webkit-mask-image:radial-gradient(ellipse_52%_62%_at_50%_36%,#000_46%,transparent_98%)]"
              />
            </div>
            {/* <div className="grid grid-cols-2 border-t border-slate-100">
              <div className="p-5"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Focus</p><p className="mt-1 font-semibold text-ink">Stone & prostate care</p></div>
              <div className="border-l border-slate-100 p-5"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Location</p><p className="mt-1 font-semibold text-ink">Karaikudi, Tamil Nadu</p></div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
