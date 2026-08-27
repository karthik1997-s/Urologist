import { Syringe } from "lucide-react";
import SectionHeading from "./SectionHeading";

const procedures = [
  ["Stone Surgery", "RIRS · URSL · PCNL · ESWL"],
  ["Prostate Procedures", "TURP · HoLEP · Medical therapy"],
  ["Urethral Reconstruction", "Dilatation · DVIU · Urethroplasty"],
  ["Bladder Procedures", "Cystoscopy · TURBT · Intravesical therapy"],
  ["Urological Oncology", "Kidney · Bladder · Prostate cancer care"],
  ["Male Infertility", "Evaluation · Varicocele · Sperm retrieval"]
];

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="section-pad">
      <div className="container-wide">
        <SectionHeading eyebrow="03 Treatments & Procedures" title="Procedures explained before they are recommended" description="Every procedure conversation should cover what it is, when it is considered, what it involves, recovery, risks and common questions." />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {procedures.map(([title, sub], i) => <article key={title} className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-teal-200 hover:shadow-card">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-50 text-teal-700"><Syringe size={20}/></div>
            <div><p className="text-xs font-bold text-slate-400">0{i+1}</p><h3 className="mt-1 font-display text-xl font-semibold text-ink">{title}</h3><p className="mt-2 text-sm text-slate-600">{sub}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
