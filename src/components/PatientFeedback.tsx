import { ArrowUpRight, MessageSquareQuote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function PatientFeedback() {
  return (
    <section id="feedback" className="section-pad bg-[#f7f9fc] reveal-section">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Patient Feedback" title="What patients say on Google" />
          <a
            href="https://www.google.com/search?q=Dr+Krishnakanth+AVB+Urologist+Madurai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#0b1b33] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <MessageSquareQuote size={18} />
            Share your experience on Google
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-dashed border-slate-300 bg-white shadow-sm">
          <div className="grid min-h-[300px] lg:grid-cols-[.65fr_1.35fr]">
            <div className="relative min-h-[270px] overflow-hidden bg-[#eaf4f2]">
              <img src="/patient-feedback.svg" alt="Patient feedback illustration" className="h-full w-full object-cover p-8 transition duration-700 hover:scale-105" />
              <div className="absolute left-7 top-7 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-700 shadow-sm">
                Patient first
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex gap-1 text-[#f6b91a]" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={22} fill="currentColor" />)}
              </div>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Verified Google reviews from patients can appear here in a scrolling feed as they are posted. If you have consulted Dr. Krishnakanth, your honest review helps other patients choose with confidence.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-ink">
                <span className="rounded-full bg-teal-50 px-4 py-2 text-teal-700">Google Reviews</span>
                <span className="text-slate-400">•</span>
                <span>Real patient experiences</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
