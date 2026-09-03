import Slider from "react-slick";
import {
  CircleDot,
  Droplets,
  FlaskConical,
  Activity,
  ShieldAlert,
  CircleGauge,
  Moon,
  Shield,
  Waves,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const topics = [
  { title: "Kidney Stones", icon: CircleDot },
  { title: "Recurrent UTI", icon: Droplets },
  { title: "Hematuria", icon: FlaskConical },
  { title: "BPH", icon: Activity },
  { title: "Urethral Stricture", icon: ShieldAlert },
  { title: "Varicocele", icon: CircleGauge },
  { title: "Nocturia", icon: Moon },
  { title: "Bladder Cancer", icon: Shield },
  { title: "Hydronephrosis", icon: Waves },
  { title: "Erectile Dysfunction", icon: HeartPulse },
  { title: "Prostate Health", icon: Stethoscope },
];

export default function Ticker() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6500,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50">
      <Slider {...settings}>
        {topics.map(({ title, icon: Icon }) => (
          <div key={title}>
            <div className="group flex h-[70px] items-center justify-center px-6">
              <div className="flex items-center gap-3 transition-all duration-300 group-hover:-translate-y-1">
                <Icon
                  size={25}
                  strokeWidth={1.8}
                  className="shrink-0 text-slate-800 transition-transform duration-300 group-hover:scale-110"
                />

                <span className="whitespace-nowrap text-[16px] font-semibold text-slate-800">
                  {title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
