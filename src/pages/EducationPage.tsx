import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import {
  educationArticles,
  educationCategories,
  getEducationImage,
  type EducationCategory,
} from "../data/education";

const ease = [0.22, 1, 0.36, 1] as const;

function formatDate(value: string) {
  if (value === "Upcoming" || value === "Research") return value;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function EducationPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<EducationCategory>("All");

  const visible = useMemo(() => {
    if (active === "All") return educationArticles;
    return educationArticles.filter((article) => article.category === active);
  }, [active]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfcfa] pt-[72px]">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main>
        <h1 className="sr-only">Patient Education</h1>

        <section className="sticky  z-20 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8 lg:px-10">
            <div className="flex flex-wrap justify-center gap-2.5">
              {educationCategories.map((category) => {
                const selected = active === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActive(category)}
                    className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                      selected
                        ? "bg-[#111827] text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:text-teal-700"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
            <p className="mb-8 text-sm text-slate-500">
              {visible.length} {visible.length === 1 ? "article" : "articles"}
              {active !== "All" ? ` in ${active}` : ""}
            </p>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {visible.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.04, ease }}
                >
                  <Link
                    to={`/education/${article.slug}`}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-[20px]">
                      <img
                        src={getEducationImage(article.slug)}
                        alt={article.shortTitle}
                        className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Research Publication · {article.journal} · {article.year}
                    </p>

                    <h3 className="mt-3 font-display text-[26px] font-semibold leading-8 tracking-[-0.03em] text-slate-900 transition-colors group-hover:text-teal-800">
                      {article.shortTitle}
                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-slate-500">
                      {article.description}
                    </p>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
