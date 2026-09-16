import { Link } from "react-router-dom";

export default function InstagramSection() {
  return (
    <section id="research" className="section-pad">
      <div className="container-wide rounded-[36px] bg-ink p-8 text-white md:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-200">05 Research & Learning</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">A practice built around continuous learning.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">Conference presentations from TAPASUCON, USICON, SZUSICON and UAA — including a Best Paper award at UAA 25, Taiwan.</p>
            <Link
              to="/research"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#092f2d] transition-transform duration-300 hover:-translate-y-0.5"
            >
              All Research
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
          {/* <a href="https://www.instagram.com/uro_bytes/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-600"><Instagram size={22}/></span>
            <span><span className="block font-semibold">Follow @uro_bytes</span><span className="text-sm text-slate-400">Patient education & urology updates</span></span>
          </a> */}
        </div>
      </div>
    </section>
  );
}
