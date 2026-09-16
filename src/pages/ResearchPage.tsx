import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import {
  researchFilters,
  researchItems,
  type ResearchFilter,
} from "../data/research";

export default function ResearchPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<ResearchFilter>("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const visible = useMemo(() => {
    if (active === "All") return researchItems;
    return researchItems.filter((item) => item.filter === active);
  }, [active]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfcfa] pt-[72px]">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main>
        <section className="relative overflow-hidden bg-[#edf8f6]">
          <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
              05 Research
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl">
              Conference presentations
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Academic work presented by Dr. Suryaram Aravind at TAPASUCON,
              USICON, SZUSICON and UAA. Open an item for the focus, clinical
              significance and conference details.
            </p>
          </div>
        </section>

        <section className="sticky top-[72px] z-20 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8 lg:px-10">
            <div className="flex flex-wrap justify-center gap-2.5">
              {researchFilters.map((filter) => {
                const selected = active === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => {
                      setActive(filter);
                      setOpenSlug(null);
                    }}
                    className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                      selected
                        ? "bg-[#111827] text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:text-teal-700"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
            <p className="mb-6 text-sm text-slate-500">
              {visible.length} {visible.length === 1 ? "presentation" : "presentations"}
              {active !== "All" ? ` at ${active}` : ""}
            </p>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {visible.map((item, index) => {
                const open = openSlug === item.slug;
                const number = String(index + 1).padStart(2, "0");

                return (
                  <article key={item.slug}>
                    <button
                      type="button"
                      onClick={() => setOpenSlug(open ? null : item.slug)}
                      className="flex w-full items-start gap-4 py-6 text-left sm:gap-6 sm:py-7"
                      aria-expanded={open}
                    >
                      <span className="mt-1 w-10 shrink-0 text-sm font-bold text-slate-300">
                        {number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-700">
                            {item.conference} · {item.category}
                          </p>
                          {item.award && (
                            <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
                              {item.award}
                            </span>
                          )}
                        </div>
                        <h2 className="mt-2 font-display text-xl font-semibold leading-7 tracking-[-0.02em] text-slate-900 sm:text-[22px]">
                          {item.title}
                        </h2>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`mt-1 shrink-0 text-slate-400 transition-transform duration-300 ${
                          open ? "rotate-180 text-teal-700" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-5 pb-8 pl-0 sm:pl-16">
                          <p className="text-[15px] leading-7 text-slate-600">{item.intro}</p>

                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                              Focus of the presentation
                            </p>
                            <p className="mt-2 text-[15px] leading-7 text-slate-600">{item.focus}</p>
                          </div>

                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                              Clinical significance
                            </p>
                            <ul className="mt-3 space-y-2">
                              {item.points.map((point) => (
                                <li
                                  key={point}
                                  className="flex gap-2 text-[15px] leading-7 text-slate-600"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="rounded-2xl border border-slate-200 bg-[#fbfcfa] p-5">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                              Conference details
                            </p>
                            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                              {item.details.map((detail) => (
                                <div key={detail.label}>
                                  <dt className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                                    {detail.label}
                                  </dt>
                                  <dd className="mt-1 text-sm leading-6 text-slate-700">{detail.value}</dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
