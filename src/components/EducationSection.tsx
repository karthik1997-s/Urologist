import Slider from "react-slick";
import { ArrowRight, Clock3 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const articles = [
  ["Prostate Health", "Understanding PSA and Prostate Health", "PSA is a useful blood test but not a cancer test. Knowing what it can and cannot tell you makes decisions about prostate screening clearer.", "6 min read"],
  ["General Urology", "Blood in Urine: When Should You See a Urologist?", "Blood in the urine has many causes, but visible blood should never be dismissed, even if it happens only once.", "5 min read"],
  ["Urethral Stricture", "What Is a Urethral Stricture?", "A gradually weakening urine stream can have causes beyond the prostate. Scarring of the urine passage is a distinct, treatable condition.", "5 min read"],
  ["Kidney Stones", "How Are Kidney Stones Treated?", "Treatment depends on the stone size, location, symptoms and the patient's overall condition.", "5 min read"]
];

export default function EducationSection() {
const settings = {
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2800,
  pauseOnHover: true,
  pauseOnFocus: true,
  cssEase: "cubic-bezier(.22, 1, .36, 1)",
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  return (
    <section id="education" className="section-pad bg-[#f2faf8] reveal-section">
      <div className="container-wide">
        <SectionHeading eyebrow="04 Patient Education" title="Understand your condition, in plain language" />
        <div className="mt-12 pb-10">
          <Slider {...settings}>
            {articles.map(([tag, title, text, time]) => (
              <article key={title} className="px-2">
                <div className="mx-2 flex min-h-[350px] h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:shadow-card">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-teal-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-teal-700">{tag}</span>
                    <span className="flex shrink-0 items-center gap-1 text-xs text-slate-400"><Clock3 size={13} />{time}</span>
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-semibold leading-tight text-ink">{title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{text}</p>
                  <a href="#appointment" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-teal-700">Read article <ArrowRight size={15} /></a>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
