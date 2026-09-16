import { Clock } from "lucide-react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { educationArticles } from "../data/education";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  swipeToSlide: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1, dots: false, arrows: false },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1, slidesToScroll: 1, dots: false, arrows: false },
    },
  ],
};

export default function EducationSection() {
  return (
    <section id="education" className="section-pad bg-[#f2faf8] reveal-section">
      <div className="container-wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="04 Patient Education"
            title="Understand the evidence, in plain language"
            description="Published case reports and prospective studies on complex infection, endourology and kidney preservation."
          />

          <Link
            to="/education"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-teal-700 transition-all duration-300 hover:border-teal-300 hover:bg-teal-50 lg:self-auto"
          >
            All Education
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="education-slider mt-12 overflow-hidden">
          <Slider {...sliderSettings}>
            {educationArticles.map((article) => (
              <div key={article.slug} className="h-full px-3">
                <Link
                  to={`/education/${article.slug}`}
                  className="group flex h-full min-h-[320px] flex-col rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-teal-300"
                >
                  <div className="flex shrink-0 items-center justify-between gap-3">
                    <span className="truncate rounded-full bg-[#f3f6f5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {article.category}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-[12px] text-slate-400">
                      <Clock size={13} strokeWidth={1.75} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mt-6 line-clamp-2 min-h-[64px] font-display text-[26px] font-semibold leading-8 tracking-[-0.03em] text-slate-900">
                    {article.shortTitle}
                  </h3>

                  <p className="mt-4 line-clamp-3 min-h-[84px] flex-1 text-[15px] leading-7 text-slate-500">
                    {article.description}
                  </p>

                  <span className="mt-6 shrink-0 text-[15px] font-semibold text-[#0f766e] transition-all group-hover:translate-x-0.5">
                    Read article →
                  </span>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
