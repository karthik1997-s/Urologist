import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Hospital3DOverlay from "./Hospital3DOverlay";

/* ─── constants ─────────────────────────────────────────────── */
const STEP_MS = 8000;

/* ─── videos (alternate per tab) ─────────────────────────────── */
const VIDEOS = [
  "/assets/videos/kidney-anatomy.mp4",
  "/assets/videos/hospital-consult.mp4",
  "/assets/videos/kidney-anatomy.mp4",
  "/assets/videos/hospital-consult.mp4",
];

/* ─── slides — only images NOT used in other sections ─────────
   Used elsewhere (excluded):
   conditions/*, education/bladder-cancer-and-visible-blood, blood-in-urine,
   bph-and-urine-flow, erectile-difficulty, how-are-kidney-stones-treated,
   male-infertility-explained, recurrent-uti-explained, reflux-in-children,
   undescended-testis-in-children,
   treatments/bladder-cancer-surgery, cystoscopy, dj-stent, dviu, eswl,
   fertility-eval, holep, intravesical, kidney-cancer-surgery, lap-adrenal,
   lap-nephrectomy, lap-other, medical-bph, pcnl, rirs, sperm-retrieval,
   turbt, turp, urethral-dilatation, urethroplasty, ursl, varicocele
──────────────────────────────────────────────────────────────── */
const slides = [
  {
    id: "kidney",
    tab: "Kidney",
    accent: "#2dd4bf",
    glow: "#0d5c55",
    badge: "Kidney care",
    title: "Kidney stones & kidney health",
    body: "Help with kidney stones, pain, and kidney disease — explained in simple terms before any treatment.",
    stats: [{ v: "Stones", l: "Removal options" }, { v: "Kidney", l: "Surgery if needed" }, { v: "Follow-up", l: "Ongoing care" }],
    images: [
      { src: "/assets/treatments/dj-stent-landscape.jpg",           label: "Urinary stent" },
      { src: "/assets/treatments/dj-stenting-diagram.jpg",          label: "How stenting works" },
      { src: "/assets/education/delayed-pcnl-hemorrhage-ssae.jpg",  label: "Stone treatment" },
      { src: "/assets/education/ecirs-cut-to-light.jpg",            label: "Kidney procedure" },
      { src: "/assets/education/fungal-renal-cyst.jpg",             label: "Kidney cyst" },
    ],
  },
  {
    id: "bladder",
    tab: "Bladder",
    accent: "#60a5fa",
    glow: "#1a3f8f",
    badge: "Bladder care",
    title: "Bladder & prostate problems",
    body: "Support for frequent urination, weak stream, prostate enlargement, and bladder conditions.",
    stats: [{ v: "Prostate", l: "Enlargement care" }, { v: "Bladder", l: "Scope treatments" }, { v: "Comfort", l: "Easier urination" }],
    images: [
      { src: "/assets/treatments/intravesical-therapy.jpg",         label: "Bladder therapy" },
      { src: "/assets/treatments/medical-bph-treatment.jpg",        label: "Prostate treatment" },
      { src: "/assets/education/two-step-pyelonephritis.jpg",       label: "Kidney infection" },
      { src: "/assets/education/nocturia-waking-at-night.jpg",      label: "Night-time urination" },
      { src: "/assets/education/understanding-psa.jpg",             label: "PSA test explained" },
    ],
  },
  {
    id: "andrology",
    tab: "Men's health",
    accent: "#22d3ee",
    glow: "#0c4a6e",
    badge: "Men's health",
    title: "Fertility & men's health",
    body: "Private care for couples who want to conceive and for men's fertility or sexual health concerns.",
    stats: [{ v: "Fertility", l: "Tests & planning" }, { v: "Sperm", l: "Retrieval if needed" }, { v: "Couples", l: "Clear next steps" }],
    images: [
      { src: "/assets/treatments/varicocele-management.jpg",        label: "Varicocele care" },
      { src: "/assets/treatments/surgical-sperm-retrieval.jpg",     label: "Sperm retrieval" },
      { src: "/assets/treatments/male-infertility-evaluation.jpg",  label: "Fertility check" },
      { src: "/assets/education/prostate-cancer-explained.jpg",     label: "Prostate health" },
      { src: "/assets/education/news2-qsofa-pyelonephritis.jpg",    label: "Infection care" },
    ],
  },
  {
    id: "pediatric",
    tab: "Children",
    accent: "#34d399",
    glow: "#065f46",
    badge: "Children",
    title: "Urology for children",
    body: "Gentle care for children — from birth through the teenage years, with parents involved at every step.",
    stats: [{ v: "Birth issues", l: "Undescended testis" }, { v: "Reflux", l: "Kidney protection" }, { v: "Parents", l: "Plain-language advice" }],
    images: [
      { src: "/assets/treatments/dj-stenting.jpg",                  label: "Child stent care" },
      { src: "/assets/education/emphysematous-pyelonephritis-management.jpg", label: "Severe infection" },
      { src: "/assets/education/urinary-frequency-and-urgency.jpg", label: "Frequent urination" },
      { src: "/assets/education/what-is-a-urethral-stricture.jpg",  label: "Narrow urethra" },
      { src: "/assets/treatments/laparoscopic-adrenal-surgery.jpg", label: "Keyhole surgery" },
    ],
  },
] as const;

/* ─────────────────────────────────────────────────────────────
   Fan positions: 5 cards in 3-D arc
───────────────────────────────────────────────────────────── */
const FAN = [
  { rotY: -52, rotX: 6,  tx: -210, ty: 30,  tz: -120, scale: 0.82 },
  { rotY: -26, rotX: 3,  tx: -108, ty: -20, tz: -40,  scale: 0.92 },
  { rotY:   0, rotX: 0,  tx:    0, ty: -48, tz:  60,  scale: 1.00 },
  { rotY:  26, rotX: -3, tx:  108, ty: -20, tz: -40,  scale: 0.92 },
  { rotY:  52, rotX: -6, tx:  210, ty: 30,  tz: -120, scale: 0.82 },
];

/* ─────────────────────────────────────────────────────────────
   FAN_HOVER positions: hovered card bursts forward, others retract
───────────────────────────────────────────────────────────── */
function getHoverFan(hovered: number) {
  return FAN.map((pos, i) => {
    if (i === hovered) {
      return { rotY: 0, rotX: 0, tx: 0, ty: -20, tz: 240, scale: 1.45 };
    }
    const spread = i < hovered ? -1.35 : 1.35;
    return {
      ...pos,
      tx: pos.tx * spread,
      tz: pos.tz - 60,
      scale: pos.scale * 0.78,
    };
  });
}

const SLIDE_MS = 3200;

/* ─────────────────────────────────────────────────────────────
   3-D card fan component
───────────────────────────────────────────────────────────── */
function CardFan({ slide }: { slide: (typeof slides)[number] }) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);
  const [offset, setOffset] = useState(0);
  const count = slide.images.length;

  useEffect(() => {
    setOffset(0);
    setHovered(null);
  }, [slide.id]);

  useEffect(() => {
    if (reduceMotion || hovered !== null) return;
    const timer = window.setInterval(() => {
      setOffset((current) => (current + 1) % count);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion, hovered, count, slide.id]);

  const positions = hovered !== null ? getHoverFan(hovered) : FAN;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ perspective: "1100px", minHeight: 400, perspectiveOrigin: "50% 46%" }}
    >
      {/* rotating halo ring */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 320, height: 120,
          border: `1.5px solid ${slide.accent}50`,
          rotateX: "72deg",
          boxShadow: `0 0 40px 6px ${slide.accent}28`,
        }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />
      {/* second ring */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 380, height: 140,
          border: `1px dashed ${slide.accent}28`,
          rotateX: "70deg",
        }}
        animate={{ rotateZ: -360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      />

      {/* floating particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 155 + (i % 3) * 22;
        return (
          <motion.div
            key={i}
            className="pointer-events-none absolute rounded-full"
            style={{
              width: i % 4 === 0 ? 6 : 3,
              height: i % 4 === 0 ? 6 : 3,
              background: slide.accent,
              left: `calc(50% + ${Math.cos(angle) * r}px)`,
              top:  `calc(50% + ${Math.sin(angle) * r * 0.36}px)`,
            }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale:   [0.7, 1.4, 0.7],
              y: [0, -10, 0],
            }}
            transition={{ duration: 2.5 + i * 0.2, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
          />
        );
      })}

      {/* cards — photos slide to the next image on their own */}
      {FAN.map((_, slot) => {
        const img = slide.images[(slot + offset) % count];
        const pos = positions[slot];
        const isHov = hovered === slot;
        return (
          <motion.div
            key={slot}
            className="absolute cursor-pointer overflow-hidden rounded-2xl"
            style={{
              width: 178, height: 130,
              transformStyle: "preserve-3d",
              zIndex: isHov ? 50 : 20 - Math.abs(slot - 2),
            }}
            animate={{
              rotateY: pos.rotY,
              rotateX: pos.rotX,
              x: pos.tx,
              y: pos.ty,
              z: pos.tz,
              scale: pos.scale,
            }}
            whileHover={{ scale: pos.scale }}
            transition={{ type: "spring", stiffness: 230, damping: 22 }}
            onHoverStart={() => setHovered(slot)}
            onHoverEnd={() => setHovered(null)}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={img.src}
                className="absolute inset-0"
                initial={reduceMotion ? false : { x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img
                  src={img.src}
                  alt={img.label}
                  className="h-full w-full object-cover"
                  animate={{ filter: isHov ? "brightness(1) saturate(1.15)" : "brightness(0.72) saturate(0.85)" }}
                  transition={{ duration: 0.3 }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-3 py-2"
                  style={{ background: `linear-gradient(to top, ${slide.glow}f0 0%, transparent 100%)` }}
                >
                  <p className="truncate text-[10px] font-bold uppercase tracking-wider text-white">
                    {img.label}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div
              className="absolute left-0 top-0 h-[3px] w-full"
              style={{ background: `linear-gradient(90deg, ${slide.accent}, transparent)` }}
            />

            <motion.div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ border: `1.5px solid ${slide.accent}` }}
              animate={{ opacity: isHov ? 1 : 0.3, boxShadow: isHov ? `0 0 30px 6px ${slide.accent}66` : "none" }}
              transition={{ duration: 0.25 }}
            />

            {isHov && (
              <motion.div
                className="absolute left-2 top-2 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest"
                style={{ background: slide.accent, color: slide.glow }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                See
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {/* centre orb */}
      <motion.div
        className="pointer-events-none relative z-40 flex flex-col items-center justify-center rounded-full text-center"
        style={{
          width: 80, height: 80,
          background: `radial-gradient(circle at 38% 35%, ${slide.accent}ee, ${slide.glow}cc)`,
          boxShadow: `0 0 36px 12px ${slide.accent}44, 0 0 0 2px ${slide.accent}`,
        }}
        animate={{ scale: [1, 1.07, 1], boxShadow: [
          `0 0 30px 8px ${slide.accent}44, 0 0 0 2px ${slide.accent}`,
          `0 0 55px 18px ${slide.accent}66, 0 0 0 2px ${slide.accent}`,
          `0 0 30px 8px ${slide.accent}44, 0 0 0 2px ${slide.accent}`,
        ]}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-display text-base font-semibold leading-tight text-white">{slide.tab}</span>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main section
───────────────────────────────────────────────────────────── */
export default function PatientJourney() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slide               = slides[step];

  /* auto-advance */
  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setTimeout(() => setStep((s) => (s + 1) % slides.length), STEP_MS);
    return () => window.clearTimeout(t);
  }, [reduceMotion, step]);

  /* video: restart on slide change */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  }, [step]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "96vh" }}
      aria-label="Urology specialties"
    >
      {/* ── VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.video
            key={`vid-${slide.id}`}
            ref={videoRef}
            src={VIDEOS[step]}
            autoPlay loop muted playsInline
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3 }}
          />
        </AnimatePresence>
        {/* layered dark overlays — deep teal, NO orange */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #060f0e 0%, #0a2320cc 40%, #071410aa 100%)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #060f0e 0%, transparent 55%)" }} />
        {/* accent colour bleed from left */}
        <motion.div
          key={`bleed-${slide.id}`}
          className="absolute inset-y-0 left-0 w-1/2"
          style={{ background: `linear-gradient(to right, ${slide.glow}66, transparent)` }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* ── GRID OVERLAY ── */}
      <div className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage: "linear-gradient(rgba(45,212,191,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Hospital3DOverlay accent={slide.accent} reduceMotion={!!reduceMotion} />

      {/* ── CONTENT ── */}
      <div className="container-wide relative z-10 grid min-h-[96vh] items-center gap-10 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:py-28">

        {/* LEFT: text */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${slide.id}`}
              initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.36 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{ background: `${slide.accent}18`, border: `1px solid ${slide.accent}44` }}
            >
              <motion.span className="h-1.5 w-1.5 rounded-full" style={{ background: slide.accent }}
                animate={{ opacity: [1, 0.25, 1] }} transition={{ duration: 1.1, repeat: Infinity }} />
              <span className="text-xs font-semibold" style={{ color: slide.accent }}>
                {slide.badge}
              </span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h2
              key={`h-${slide.id}`}
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.48, delay: 0.07 }}
              className="mt-5 font-display text-4xl font-semibold leading-[1.07] tracking-[-0.03em] text-white sm:text-5xl"
            >
              {slide.title}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`p-${slide.id}`}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="mt-5 text-lg leading-8"
              style={{ color: "rgba(255,255,255,0.58)" }}
            >
              {slide.body}
            </motion.p>
          </AnimatePresence>

          {/* stat chips */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`s-${slide.id}`}
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.36, delay: 0.24 }}
            >
              {slide.stats.map((st) => (
                <div key={st.v} className="rounded-xl px-5 py-3"
                  style={{ background: `${slide.accent}14`, border: `1px solid ${slide.accent}33` }}>
                  <p className="font-display text-lg font-semibold" style={{ color: slide.accent }}>{st.v}</p>
                  <p className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255,0.46)" }}>{st.l}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* topic tabs */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {slides.map((item, i) => {
              const active = i === step;
              return (
                <button key={item.id} type="button" onClick={() => setStep(i)}
                  className="rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300"
                  style={active
                    ? { background: slide.accent, color: "#060f0e", boxShadow: `0 0 20px 5px ${slide.accent}55` }
                    : { background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.12)" }
                  }
                >
                  {item.tab}
                </button>
              );
            })}
          </div>

          {/* doctor micro-card */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
            <div className="h-2 w-2 rounded-full" style={{ background: slide.accent }} />
            <div>
              <p className="text-sm font-semibold text-white">Dr. Suryaram Aravind</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                Urologist · Sri Usha Medical Centre, Karaikudi
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: 3-D card fan */}
        <div className="relative" style={{ perspective: "1200px" }}>
          {/* local hospital 3D accents around the fan */}
          <div className="pointer-events-none absolute -left-6 top-1/4 z-0 hidden lg:block" style={{ transformStyle: "preserve-3d" }}>
            <motion.div
              className="h-24 w-24 rounded-full border border-dashed"
              style={{ borderColor: `${slide.accent}35`, transform: "rotateX(68deg) translateZ(-20px)" }}
              animate={reduceMotion ? undefined : { rotateZ: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
          </div>
          {/* card shell */}
          <div className="relative z-[1] overflow-visible rounded-[44px] px-4 py-10"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.008) 100%)",
              border: `1px solid ${slide.accent}28`,
              backdropFilter: "blur(10px)",
              minHeight: 460,
            }}
          >
            {/* corner marks */}
            {[["left-5 top-5", "borderTop borderLeft rounded-tl-[4px]"],
              ["right-5 bottom-5", "borderBottom borderRight rounded-br-[4px]"]
            ].map(([pos]) => (
              <div key={pos} className={`pointer-events-none absolute ${pos} h-8 w-8`}
                style={{ border: "none",
                  borderTop:    pos.includes("top")    ? `2px solid ${slide.accent}` : undefined,
                  borderLeft:   pos.includes("left")   ? `2px solid ${slide.accent}` : undefined,
                  borderBottom: pos.includes("bottom") ? `2px solid ${slide.accent}` : undefined,
                  borderRight:  pos.includes("right")  ? `2px solid ${slide.accent}` : undefined,
                }}
              />
            ))}

            <p className="absolute bottom-[88px] left-1/2 z-20 -translate-x-1/2 text-center text-xs"
              style={{ color: "rgba(255,255,255,0.45)" }}>
              Photos rotate on their own.
              <span className="hidden sm:inline"> Hover a photo to enlarge.</span>
            </p>

            {/* 3-D fan */}
            <AnimatePresence mode="wait">
              <motion.div key={slide.id}
                initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.06 }}
                transition={{ duration: 0.55 }}
              >
                <CardFan slide={slide} />
              </motion.div>
            </AnimatePresence>

            {/* bottom strip */}
            <div className="absolute bottom-0 left-0 right-0 rounded-b-[44px] px-6 pb-5 pt-3"
              style={{ background: `linear-gradient(to top, ${slide.glow}cc, transparent)` }}>
              <p className="text-sm font-medium text-white/90">{slide.badge}</p>
              <p className="mt-0.5 text-xs text-white/45">Sri Usha Medical Centre</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
