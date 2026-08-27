const topics = ["Kidney Stones","Recurrent UTI","Hematuria","BPH","Urethral Stricture","Varicocele","Nocturia","Bladder Cancer","Hydronephrosis","Erectile Dysfunction","Prostate Health"];

export default function Ticker() {
  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="container-wide flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-semibold text-slate-500">Common urological concerns</p>
        <div className="flex flex-wrap gap-2">
          {topics.map(x => <span key={x} className="rounded-full bg-sand px-3 py-1.5 text-xs font-medium text-slate-600">{x}</span>)}
        </div>
      </div>
    </section>
  );
}
