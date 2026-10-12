import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { IMAGES } from "../Utills/ImageConstant";

const STEP_MS = 5200;

const steps = [
  {
    id: "arrive",
    label: "Hospital",
    title: "He checks in at the hospital",
    line: "The visit starts at Sri Usha Medical Centre. He gives his name at the urology desk in Karaikudi and waits to be called.",
  },
  {
    id: "office",
    label: "Concern",
    title: "He describes the change",
    line: "Passing urine takes longer to start, and the stream is weaker than it used to be.",
  },
  {
    id: "notes",
    label: "Questions",
    title: "The doctor asks first",
    line: "How many weeks this has lasted, any pain or blood, and how often he wakes at night.",
  },
  {
    id: "name",
    label: "Doctor",
    title: "He meets the consultant",
    line: "Dr. Suryaram Aravind listens, then explains what a proper urology check would look at next.",
  },
] as const;

type SceneId = (typeof steps)[number]["id"];

const sceneGif: Record<SceneId, string> = {
  arrive: "/assets/animations/Urinary_system_2.gif",
  office: "/assets/animations/doctor.gif",
  notes: "/assets/animations/health-report.gif",
  name: "/assets/animations/doctors.gif",
};

export default function PatientJourney() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const scene = steps[step];

  useEffect(() => {
    if (reduceMotion || !playing) return;
    const timer = window.setTimeout(() => setStep((current) => (current + 1) % steps.length), STEP_MS);
    return () => window.clearTimeout(timer);
  }, [playing, reduceMotion, step]);

  return (
    <section className="relative overflow-hidden bg-[#f4f1e8]" aria-label="Going to the hospital">
      <div className="container-wide relative grid items-center gap-8 py-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:py-14">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3d6b5a]">
            {playing && !reduceMotion ? "Playing" : "Paused"}
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={scene.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-4xl">
                {scene.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600" aria-live="polite">
                {scene.line}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex flex-wrap gap-2">
            {steps.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setStep(index)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  index === step ? "bg-[#3d6b5a] text-white" : "bg-white text-slate-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-[#e7eee9] bg-white shadow-soft">
          <img
            key={scene.id}
            src={sceneGif[scene.id]}
            alt=""
            className="pointer-events-none absolute bottom-10 left-1/2 h-[420px] w-auto -translate-x-1/2 object-contain"
          />

          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            className="absolute right-4 top-4 z-20 grid h-12 w-12 place-items-center rounded-full bg-white text-[#3d6b5a] shadow-card"
            aria-label={playing ? "Pause" : "Play"}
            aria-pressed={playing}
          >
            <svg viewBox="0 0 36 36" className="absolute inset-0 h-full w-full -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="#e4efe6" strokeWidth="2" />
              {playing && !reduceMotion && (
                <motion.circle
                  key={scene.id}
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="#3d6b5a"
                  strokeWidth="2"
                  strokeDasharray="94.2"
                  initial={{ strokeDashoffset: 94.2 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: STEP_MS / 1000, ease: "linear" }}
                />
              )}
            </svg>
            {playing ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={scene.id}
              className="relative flex min-h-[520px] items-end justify-center px-8 pb-8 pt-10"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Scene id={scene.id} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Scene({ id }: { id: SceneId }) {
  if (id === "arrive") {
    return (
      <div className="relative h-[440px] w-full">
        <NoteCard
          className="absolute left-0 top-1 w-[11.5rem] sm:w-48"
          title="The hospital"
          description="He walks into Sri Usha Medical Centre and looks for the urology clinic."
          lines={["Karaikudi", "Outpatient desk", "Urology wing"]}
          delay={0.05}
        />
        <NoteCard
          className="absolute bottom-1 left-0 w-[11.5rem] sm:w-48"
          title="Check-in"
          description="The desk takes his name and marks this as a first visit."
          lines={["Name given", "First visit", "Called in next"]}
          delay={0.15}
        />
        <NoteCard
          className="absolute bottom-1 right-0 w-[11.5rem] sm:w-52"
          title="The room"
          description="He waits a short while, then sits down for the consultation."
          lines={["Waiting area", "Consultation room", "One doctor"]}
          delay={0.25}
        />
      </div>
    );
  }

  if (id === "office") {
    return (
      <div className="flex h-[440px] w-full items-end justify-end pr-2">
        <Actor role="patient" compact />
      </div>
    );
  }

  if (id === "notes") {
    return (
      <div className="flex w-full items-end justify-end pr-2">
        <NoteCard
          title="Clinic notes"
          description="What he answers when the doctor asks about the change."
          lines={["A few weeks", "Weaker stream", "Waking at night", "No blood seen"]}
        />
      </div>
    );
  }

  return (
    <div className="mb-10 flex items-center gap-5 rounded-[36px] border border-white/80 bg-white/85 px-5 py-4 shadow-card backdrop-blur-md">
      <img
        src={IMAGES.DoctorImage}
        alt=""
        className="h-28 w-28 shrink-0 rounded-full object-cover object-[center_18%] ring-4 ring-[#d7ebe4]"
      />
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#3d6b5a]">Consultant urologist</p>
        <p className="mt-1 font-display text-2xl font-semibold leading-tight text-ink">Dr. Suryaram Aravind</p>
        <p className="mt-1 text-sm text-slate-500">MBBS, MS, MCh · Karaikudi</p>
      </div>
    </div>
  );
}

function NoteCard({
  title,
  lines,
  description,
  className = "",
  delay = 0,
}: {
  title: string;
  lines: string[];
  description?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ rotate: -6, y: 12, opacity: 0 }}
      animate={{ rotate: 0, y: 0, opacity: 1 }}
      transition={{ delay }}
      className={`overflow-hidden rounded-[32px] bg-white p-4 shadow-card ${className || "mb-8 w-52"}`}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#3d6b5a]">{title}</p>
      {description && <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>}
      <ul className="mt-3 space-y-2">
        {lines.map((line, index) => (
          <motion.li
            key={line}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.25 + index * 0.35 }}
            className="border-b border-slate-100 pb-1 text-sm text-ink"
          >
            {line}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function Actor({ role, compact = false }: { role: "doctor" | "patient"; compact?: boolean }) {
  return (
    <motion.img
      src={role === "doctor" ? "/assets/images/doctor-flat.png" : "/assets/images/patient-flat.png"}
      alt=""
      aria-hidden
      className={`relative w-auto object-contain drop-shadow-[0_16px_18px_rgba(61,80,60,.18)] ${compact ? "h-64 sm:h-72" : "h-80 sm:h-[22rem]"}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
