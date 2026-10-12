import { motion } from "motion/react";

type Props = {
  accent: string;
  reduceMotion: boolean;
};

function MedicalCross({ size = 28, color }: { size?: number; color: string }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 rounded-sm"
        style={{ width: size * 0.28, height: size, background: color, boxShadow: `0 0 18px ${color}88` }}
      />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-sm"
        style={{ width: size, height: size * 0.28, background: color, boxShadow: `0 0 18px ${color}88` }}
      />
    </div>
  );
}

/** Isometric hospital block (CSS 3D) */
function IsoHospital({ accent }: { accent: string }) {
  return (
    <div
      className="relative h-36 w-28"
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateX(62deg) rotateZ(-38deg)",
      }}
    >
      {/* main tower */}
      <div
        className="absolute inset-x-2 bottom-0 top-6 rounded-sm border"
        style={{
          transform: "translateZ(24px)",
          borderColor: `${accent}55`,
          background: `linear-gradient(145deg, ${accent}22, rgba(6,15,14,0.55))`,
          boxShadow: `inset 0 0 0 1px ${accent}22`,
        }}
      >
        <div className="absolute inset-x-3 top-3 grid grid-cols-2 gap-1.5 opacity-70">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-2 rounded-[1px]" style={{ background: `${accent}35` }} />
          ))}
        </div>
        <div className="absolute left-1/2 top-[-18px] -translate-x-1/2" style={{ transform: "translateZ(12px)" }}>
          <MedicalCross size={22} color={accent} />
        </div>
      </div>
      {/* wing */}
      <div
        className="absolute bottom-0 left-[-14px] h-10 w-20 rounded-sm border"
        style={{
          transform: "translateZ(8px)",
          borderColor: `${accent}40`,
          background: `linear-gradient(160deg, ${accent}18, rgba(6,15,14,0.45))`,
        }}
      />
      {/* entrance canopy */}
      <div
        className="absolute bottom-0 left-1/2 h-3 w-10 -translate-x-1/2 rounded-t-sm"
        style={{
          transform: "translateZ(32px)",
          background: `linear-gradient(90deg, transparent, ${accent}55, transparent)`,
        }}
      />
    </div>
  );
}

export default function Hospital3DOverlay({ accent, reduceMotion }: Props) {
  const still = reduceMotion;

  return (
    <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden" aria-hidden>
      {/* soft vignette depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 55% at 72% 42%, ${accent}12 0%, transparent 62%)`,
        }}
      />

      <div className="hospital3d-scene absolute inset-0">
        {/* central 3D rig — slow yaw */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1400px", perspectiveOrigin: "58% 42%" }}
        >
          <motion.div
            className="relative h-[520px] w-[min(100%,680px)]"
            style={{ transformStyle: "preserve-3d" }}
            animate={still ? undefined : { rotateY: [0, 8, 0, -6, 0], rotateX: [0, 4, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* isometric hospital — left */}
            <motion.div
              className="absolute left-[4%] top-[22%]"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(-80px)" }}
              animate={still ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <IsoHospital accent={accent} />
              <p
                className="mt-2 text-center text-[10px] font-medium"
                style={{ color: `${accent}99`, transform: "rotateX(62deg) rotateZ(-38deg)" }}
              >
                Hospital
              </p>
            </motion.div>

            {/* floating medical crosses at depth */}
            {[
              { x: "78%", y: "28%", z: 90, s: 18, d: 6 },
              { x: "88%", y: "58%", z: 40, s: 14, d: 7 },
            ].map((c, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: c.x,
                  top: c.y,
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${c.z}px)`,
                }}
                animate={still ? undefined : { y: [0, -14, 0], rotateY: [0, 25, 0] }}
                transition={{ duration: c.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
              >
                <MedicalCross size={c.s} color={accent} />
              </motion.div>
            ))}

            {/* floor grid plane */}
            <div
              className="absolute left-1/2 top-[62%] h-48 w-[420px] -translate-x-1/2 rounded-full opacity-40"
              style={{
                transform: "rotateX(78deg) translateZ(-40px)",
                background: `repeating-linear-gradient(90deg, ${accent}22 0 1px, transparent 1px 28px), repeating-linear-gradient(0deg, ${accent}18 0 1px, transparent 1px 28px)`,
                maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, #000 20%, transparent 72%)",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* scan line (OR / imaging feel) */}
      {!still && (
        <motion.div
          className="absolute left-0 right-0 h-px opacity-35"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
          animate={{ top: ["18%", "82%", "18%"] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
