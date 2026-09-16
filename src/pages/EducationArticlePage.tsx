import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { educationBySlug, getEducationImage } from "../data/education";

const ease = [0.22, 1, 0.36, 1] as const;

export default function EducationArticlePage() {
  const { slug } = useParams();
  const article = slug ? educationBySlug[slug] : undefined;
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  if (!article) {
    return (
      <>
        <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <main className="min-h-[70vh] bg-[#fbfcfa] px-5 pb-24 pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">Education</p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-slate-900">Page not found</h1>
            <Link to="/education" className="mt-8 inline-flex rounded-full bg-teal-700 px-6 py-3 font-semibold text-white">
              Back to Education
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfcfa] pt-[72px]">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-[#edf8f6]">
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

          <div className="mx-auto max-w-[1400px] px-5 py-7 sm:px-8 lg:px-10">
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
              <Link to="/education" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-teal-700">
                <ArrowLeft size={16} /> All Education
              </Link>
            </motion.div>

            <div className="grid gap-10 py-14 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:py-20">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05, ease }}
                  className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700"
                >
                  04 Education / {article.category}
                </motion.p>

                <div className="mt-5 overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, y: 55 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.12, ease }}
                    className="max-w-4xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-900 sm:text-5xl"
                  >
                    {article.title}
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.28, ease }}
                  className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
                >
                  {article.intro}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 45, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.2, ease }}
                className="overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-xl shadow-teal-900/5"
              >
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img src={getEducationImage(article.slug)} alt={article.shortTitle} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                    {article.journal === "Patient Education" ? "Patient guide" : "Publication"}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-slate-800">
                    {article.category} · {article.readTime}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {article.role}. {article.authors}.
                  </p>
                  {article.doi && (
                    <a
                      href={`https://doi.org/${article.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-700"
                    >
                      DOI {article.doi} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
              <motion.aside
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease }}
                className="lg:sticky lg:top-28 lg:self-start"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">In brief</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-slate-900">Key points</h2>
                <div className="mt-7 space-y-3">
                  {article.points.map((point, index) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: index * 0.07, ease }}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#fbfcfa] p-4"
                    >
                      <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-teal-700" />
                      <span className="text-sm leading-6 text-slate-600">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 rounded-[24px] border border-slate-200 bg-[#edf8f6] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Publication details</p>
                  <dl className="mt-4 space-y-3">
                    {article.details.map((item) => (
                      <div key={item.label}>
                        <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">{item.label}</dt>
                        <dd className="mt-1 text-sm leading-6 text-slate-700">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.aside>

              <div className="space-y-5">
                {article.sections.map((section, index) => (
                  <motion.article
                    key={section.title}
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.7, delay: index * 0.08, ease }}
                    className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 sm:p-9"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <span className="text-xs font-bold tracking-[0.18em] text-teal-700">0{index + 1}</span>
                        <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.025em] text-slate-900 sm:text-3xl">
                          {section.title}
                        </h2>
                      </div>
                      <ArrowUpRight size={21} className="mt-1 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal-700" />
                    </div>
                    <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">{section.text}</p>
                  </motion.article>
                ))}

                <motion.article
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.7, ease }}
                  className="rounded-[28px] bg-[#092f2d] p-7 text-white sm:p-9"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Key takeaway</p>
                  <p className="mt-4 text-sm leading-8 text-teal-50 sm:text-base">{article.takeaway}</p>
                </motion.article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#edf8f6] px-5 py-20 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto max-w-[1180px] rounded-[30px] bg-[#092f2d] px-7 py-10 text-white shadow-2xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-12"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">Need an assessment?</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Discuss how this evidence applies to your care.
              </h2>
            </div>
            <Link
              to="/#appointment"
              className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#092f2d] transition-transform duration-300 hover:-translate-y-1 lg:mt-0"
            >
              Book an Appointment <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
