import Slider from "react-slick";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { conditionBySlug, conditionGroups } from "../data/conditions";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slugs = [...new Set(conditionGroups.flatMap((group) => group.slugs))];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
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

export default function ConditionsSlider() {
  return (
    <section id="conditions" className="section-pad reveal-section bg-white">
      <div className="container-wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="02 Conditions"
            title="Urological conditions, explained clearly"
            description="A structured overview of common areas of urological practice, designed to help patients understand symptoms, investigations and treatment choices."
          />

          <Link
            to="/conditions"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-teal-700 transition-all duration-300 hover:border-teal-300 hover:bg-teal-50 lg:self-auto"
          >
            All Conditions
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="conditions-slider mt-12 overflow-hidden">
          <Slider {...settings}>
            {slugs.map((slug) => {
              const condition = conditionBySlug[slug];
              if (!condition) return null;

              return (
                <div key={slug} className="h-full px-3">
                  <Link
                    to={`/conditions/${slug}`}
                    className="group flex h-full min-h-[280px] flex-col rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-teal-300"
                  >
                    <h3 className="line-clamp-2 min-h-[64px] font-display text-[22px] font-semibold leading-8 tracking-[-0.03em] text-slate-900">
                      {condition.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 min-h-[84px] flex-1 text-[15px] leading-7 text-slate-500">
                      {condition.description}
                    </p>

                    <span className="mt-6 inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-[#2563eb] transition-all group-hover:gap-3">
                      Learn More
                      <span aria-hidden="true">↗</span>
                    </span>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
