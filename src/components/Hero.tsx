import { ArrowRight, Sparkles, Stethoscope } from "lucide-react";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(175,233,223,.55),transparent_34%),linear-gradient(180deg,#f4fbf9_0%,#fbfcfa_70%)]" />
      <div className="container-wide grid min-h-[680px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
            <Sparkles size={14} /> Consultant Urologist — Madurai
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
  }} className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Dr. Krishnakanth AVB — MBBS, MS (General Surgery), MCh (Urology). Evaluation and management of urological conditions at Preethi Multispeciality Hospital, Madurai.
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
  }} href="#conditions" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-ink hover:border-teal-400 hover:text-teal-700">
              Explore Urology Conditions
           </motion.a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {["MCh (Urology)", "Preethi Multispeciality Hospital", "Adult & Pediatric Urology"].map((item, i) => (
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
            <div className="h-[520px] bg-[linear-gradient(145deg,#d9f4ee,#f6f8f5)]">
              <div className="absolute left-7 top-7 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-teal-800 shadow-sm">MCh (Urology)</div>
              <div className="flex h-full items-end justify-center">
                <div className="relative h-[420px] w-[280px]">
                  <div className="absolute left-[78px] top-[22px] h-[120px] w-[120px] rounded-full bg-[#d8a987]" />
                  <div className="absolute left-[67px] top-[14px] h-[62px] w-[142px] rounded-[55%] bg-[#1d2425]" />
                  <div className="absolute left-[52px] top-[120px] h-[265px] w-[176px] rounded-t-[90px] bg-white shadow-[0_-10px_30px_rgba(0,0,0,.05)]" />
                  <div className="absolute left-[123px] top-[142px] h-[205px] w-[35px] rounded-full bg-teal-700" />
                  <div className="absolute left-[96px] top-[163px] h-[56px] w-[88px] rounded-xl bg-white shadow-sm" />
                  <div className="absolute bottom-0 left-[70px] h-[170px] w-[48px] rounded-t-[20px] bg-[#263c3c]" />
                  <div className="absolute bottom-0 left-[160px] h-[170px] w-[48px] rounded-t-[20px] bg-[#263c3c]" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-t border-slate-100">
              <div className="p-5"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Focus</p><p className="mt-1 font-semibold text-ink">Stone & prostate care</p></div>
              <div className="border-l border-slate-100 p-5"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Location</p><p className="mt-1 font-semibold text-ink">Madurai, Tamil Nadu</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
