import { motion } from "motion/react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { conditions } from "../data/conditions";

export default function ConditionsSlider() {
  return (
    <section id="conditions" className="section-pad bg-white reveal-section">
      <div className="container-wide">
        <SectionHeading eyebrow="02 Conditions" title="Urological conditions, explained clearly" description="A structured overview of common areas of urological practice, designed to help patients understand symptoms, investigations and treatment choices." />
        <div className="mt-12 overflow-hidden rounded-[24px] border border-slate-200 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map(({ title, description, slug }, i) => (
              <motion.article key={slug} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6, delay: Math.min(i * 0.055, 0.35), ease: [0.22, 1, 0.36, 1] }} className={["group flex min-h-[274px] flex-col p-9","border-b border-slate-200","lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r","md:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0","transition-all duration-500 hover:-translate-y-1 hover:bg-slate-50/60 hover:shadow-lg hover:shadow-slate-900/5",i >= conditions.length - 3 ? "lg:border-b-0" : "",i >= conditions.length - 2 ? "md:border-b-0" : ""].join(" ")}>
                <h3 className="font-display text-[20px] font-semibold leading-7 text-ink">{title}</h3>
                <p className="mt-4 flex-1 text-[16px] leading-[1.85] text-slate-500">{description}</p>
                <Link to={`/conditions/${slug}`} className="mt-7 inline-flex w-fit items-center gap-2 text-[15px] font-bold text-blue-600 transition-all duration-300 hover:gap-3 hover:text-blue-700">
                  Learn More <span aria-hidden="true" className="text-lg leading-none transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
