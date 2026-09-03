import { motion } from "motion/react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { conditions } from "../data/conditions";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ConditionsSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    swipeToSlide: true,
    draggable: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="conditions"
      className="section-pad bg-white reveal-section"
    >
      <div className="container-wide">

        <SectionHeading
          eyebrow="02 Conditions"
          title="Urological conditions, explained clearly"
          description="A structured overview of common areas of urological practice, designed to help patients understand symptoms, investigations and treatment choices."
        />

        <div className="mt-12 overflow-hidden">
          <Slider {...settings}>

            {conditions.map(({ title, description, slug }) => (
              <div key={slug} className="px-3">
                
         <motion.article
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="
    group
    relative
    flex
    h-[300px]
    w-full
    flex-col
    overflow-hidden
    rounded-[24px]
    border
    border-slate-200
   bg-gradient-to-r
from-white
to-white
group-hover:from-[#f2faf8]
group-hover:to-[#f2faf8]
    p-9

    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]

    hover:-translate-y-[0.5]
    hover:border-[#8EB6A8]
    hover:shadow-lg
    hover:bg-gradient-to-r
    hover:from-[#f2faf8]
    hover:to-[#f2faf8]
    hover:shadow-slate-900/10

    before:absolute
    before:inset-0
    before:z-0
    before:origin-left
    before:scale-x-0
    before:rounded-[24px]
    before:!bg-[#f2faf8]
    before:transition-transform
    before:duration-700
    before:ease-[cubic-bezier(0.22,1,0.36,1)]
    group-hover:before:scale-x-100
  "
>
  <div className="relative z-10 flex h-full flex-col">
    
    <motion.h3
      variants={itemVariants}
      className="
        min-h-[56px]
        font-display
        text-[20px]
        font-semibold
        leading-7
        text-ink
      "
    >
      {title}
    </motion.h3>

    <motion.p
      variants={itemVariants}
      className="
        mt-4
        flex-1
        overflow-hidden
        text-[14px]
        leading-[1.85]
        text-slate-500
      "
    >
      {description}
    </motion.p>

    <motion.div variants={itemVariants}>
      <Link
        to={`/conditions/${slug}`}
        className="
          mt-7
          inline-flex
          w-fit
          items-center
          gap-2
          text-[15px]
          font-bold
          text-blue-600
          transition-all
          duration-300
          hover:gap-3
          hover:text-blue-700
        "
      >
        <span>Learn More</span>

        <span
          aria-hidden="true"
          className="
            text-lg
            leading-none
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        >
          ↗
        </span>
      </Link>
    </motion.div>

  </div>
</motion.article>
              </div>
            ))}

          </Slider>
        </div>

      </div>
    </section>
  );
}