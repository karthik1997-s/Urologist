import Slider from "react-slick";
import { Baby, CircleDot, Droplets, HeartPulse, ShieldCheck, UserRound } from "lucide-react";
import SectionHeading from "./SectionHeading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const conditions = [
  ["Kidney & Urinary Tract", "Stones, infection, blood in urine and urinary symptoms.", Droplets],
  ["Prostate", "Enlargement, inflammation and prostate cancer evaluation.", HeartPulse],
  ["Male Urology", "Fertility, varicocele and men's urological health.", UserRound],
  ["Urethra & Reconstructive", "Strictures and urethral reconstruction.", CircleDot],
  ["Urological Oncology", "Kidney, bladder and prostate cancer care.", ShieldCheck],
  ["Pediatric Urology", "Urological conditions in infants and children.", Baby]
];

export default function ConditionsSlider() {
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
    <section id="conditions" className="section-pad bg-sand reveal-section">
      <div className="container-wide">
        <SectionHeading eyebrow="02 Conditions" title="Urological conditions, explained clearly" description="A structured overview of common areas of urological practice, designed to help patients understand symptoms, investigations and treatment choices." />
        <div className="mt-12 pb-10">
          <Slider {...settings}>
            {conditions.map(([title, text, Icon], i) => {
              const I = Icon as typeof CircleDot;
              return (
                <article key={title as string} className="px-2">
                  <div className="mx-2 flex min-h-[310px] h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:shadow-card">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">0{i + 1}</span>
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700 transition duration-500 group-hover:rotate-6">
                        <I size={20} />
                      </span>
                    </div>
                    <h3 className="mt-7 font-display text-xl font-semibold leading-7 text-ink">{title as string}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{text as string}</p>
                    <a href="#appointment" className="mt-6 inline-flex text-sm font-bold text-teal-700 transition hover:gap-2">Explore →</a>
                  </div>
                </article>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
