import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { IMAGES } from "../Utills/ImageConstant";
import { conditionBySlug, conditionGroups, conditionImageClassName, getConditionImage, isConditionDiagram } from "../data/conditions";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ConditionsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfcfa] pt-[72px]">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main>
        <section className="relative overflow-hidden bg-[#edf8f6]">
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-24">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700"
              >
                01 Urology Conditions
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease }}
                className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Conditions we evaluate and treat
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease }}
                className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
              >
                Plain-language guides to common urological conditions. This is
                general education — personal advice always needs a consultation.
              </motion.p>
            </div>

            {/* <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease }}
              className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(145deg,#9fe0d4,#edf8f6_55%,#c5efe6)] shadow-xl"
            >
              <div className="relative h-[280px] sm:h-[360px] lg:h-[420px]">
                <img
                  src={IMAGES.DoctorImage}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover object-top mix-blend-multiply"
                />
                <img
                  src={IMAGES.DoctorImage}
                  alt="Dr. Suryaram Aravind"
                  className="absolute inset-0 h-full w-full object-cover object-top [mask-image:radial-gradient(ellipse_52%_62%_at_50%_36%,#000_46%,transparent_98%)] [-webkit-mask-image:radial-gradient(ellipse_52%_62%_at_50%_36%,#000_46%,transparent_98%)]"
                />
              </div>
            </motion.div> */}
          </div>
        </section>

        {conditionGroups.map((group, groupIndex) => (
          <section
            key={group.title}
            className={groupIndex % 2 === 0 ? "bg-white" : "bg-[#f5f8f7]"}
          >
            <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease }}
                className="flex items-end gap-4"
              >
                <span className="font-display text-sm font-semibold tracking-[0.18em] text-teal-700">
                  {group.number}
                </span>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-3xl">
                  {group.title}
                </h2>
              </motion.div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.slugs.map((slug, index) => {
                  const condition = conditionBySlug[slug];
                  if (!condition) return null;
                  const imageSrc = getConditionImage(condition.slug, group.image);

                  return (
                    <motion.article
                      key={`${group.number}-${slug}`}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.05,
                        ease,
                      }}
                    >
                      <Link
                        to={`/conditions/${condition.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
                      >
                        <div className="relative h-48 overflow-hidden bg-white">
                          <img
                            src={imageSrc}
                            alt={condition.title}
                            className={`${conditionImageClassName(imageSrc)} transition-transform duration-700 group-hover:scale-105`}
                          />
                          <div className={`absolute inset-0 ${isConditionDiagram(imageSrc) ? "bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" : "bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent"}`} />
                          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-teal-700">
                            {group.number}
                          </span>
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                          <h3 className="font-display text-xl font-semibold leading-7 text-slate-900">
                            {condition.title}
                          </h3>

                          <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
                            {condition.description}
                          </p>

                          <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-teal-700 transition-all duration-300 group-hover:gap-3">
                            Learn More
                            <ArrowUpRight
                              size={16}
                              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </span>
                        </div>
                      </Link>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
