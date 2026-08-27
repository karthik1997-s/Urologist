import { Check, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

const items = [
  ["Evidence-based diagnosis", Stethoscope],
  ["Appropriate treatment selection", ShieldCheck],
  ["Clear patient education", HeartPulse]
];

export default function ClinicInfo() {
  return (
    <section className="section-pad bg-ink text-white">
      <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-200">01 The Practice</p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">A calm, clear approach to urological care.</h2>
          <p className="mt-5 max-w-xl leading-8 text-slate-300">Good urology is not only about procedures. It is about finding the right diagnosis, explaining the choices and helping patients make informed decisions.</p>
        </div>
        <div className="grid gap-3">
          {items.map(([label, Icon]) => {
            const I = Icon as typeof Check;
            return <div key={label as string} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-semibold"><span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-600"><I size={18}/></span>{label as string}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
