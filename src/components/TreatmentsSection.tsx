import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { featuredTreatments, getTreatmentImage, treatmentBySlug } from "../data/treatments";

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="section-pad">
      <div className="container-wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="03 Treatments & Procedures"
            title="Procedures explained before they are recommended"
            description="Every procedure conversation should cover what it is, when it is considered, what it involves, recovery, risks and common questions."
          />

          <Link
            to="/treatments"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-teal-700 transition-all duration-300 hover:border-teal-300 hover:bg-teal-50 lg:self-auto"
          >
            All Treatments
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredTreatments.map((slug, index) => {
            const treatment = treatmentBySlug[slug];
            if (!treatment) return null;

            return (
              <Link
                key={treatment.slug}
                to={`/treatments/${treatment.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={getTreatmentImage(treatment.slug)}
                    alt={treatment.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">{treatment.shortTitle}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{treatment.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-700 transition-all group-hover:gap-3">
                    Learn More
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
