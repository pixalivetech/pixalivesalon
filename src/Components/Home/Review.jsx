// TestimonialSlider.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

/* -------------------------------- data -------------------------------- */
const TESTIMONIALS = [
  {
    quote:
      "This salon is my happy place! The hair spa and styling were done so professionally. I loved how calm and soothing the entire experience felt.",
    name: "Keerthana S",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/65.jpg", // Female
    rating: 5,
  },
  {
    quote:
      "Loved the attention to detail during my haircut. The stylist really understood what I was looking for. Easily one of the best salons in town.",
    name: "Ajay R",
    role: "Engineering Graduate",
    image: "https://randomuser.me/api/portraits/men/43.jpg", // Male
    rating: 4.5,
  },
  {
    quote:
      "Went for a facial and threading session. The staff was polite, skilled, and made me feel super comfortable. Definitely coming back!",
    name: "Shravya M",
    role: "Content Creator",
    image: "https://randomuser.me/api/portraits/women/68.jpg", // Female
    rating: 5,
  },
  {
    quote:
      "The beard grooming and hair wash experience was amazing. Super clean place with a modern vibe. Highly recommend for guys in their 20s!",
    name: "Vignesh K",
    role: "Freelance Videographer",
    image: "https://randomuser.me/api/portraits/men/56.jpg", // Male
    rating: 4,
  },
  {
    quote:
      "Got my hair colored for the first time and I’m in love with the results! The stylist explained every step clearly and the outcome was perfect.",
    name: "Divyashree N",
    role: "Fashion Student",
    image: "https://randomuser.me/api/portraits/women/71.jpg", // Female
    rating: 5,
  },
];




/* duplicate so the marquee loops seamlessly */
const SLIDER_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

/* rating → stars/half/empties */
const Stars = ({ value }) => {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    <div className="flex text-[#1f1f1f]">
      {Array.from({ length: full }).map((_, i) => (
        <FaStar key={`f${i}`} />
      ))}
      {half === 1 && <FaStarHalfAlt key="half" />}
      {Array.from({ length: empty }).map((_, i) => (
        <FaRegStar key={`e${i}`} />
      ))}
    </div>
  );
};

/* -------------------------------- component -------------------------------- */
const Review = () => (
  <section className="p-6">
    {/* heading (left‑aligned) */}
    <h2 className="text-3xl  font-semibold mb-10 ">
      Hear from our users
    </h2>

    {/* marquee track */}
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 40,
        }}
      >
        {SLIDER_ITEMS.map((item, idx) => (
          <article
            key={idx}
            className="
              w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]
              h-[340px] sm:h-[360px] md:h-[380px] lg:h-[300px]
              shrink-0  rounded-lg p-4
                bg-white
              flex flex-col
            "
            style={{ "--clamp": 6 }}
          >
            {/* stars TOP */}
            <Stars value={item.rating} />

            {/* quote (ellipsis when too long) */}
            <p
              className="
                text-gray-800 my-4 flex-1 overflow-hidden text-ellipsis
                [display:-webkit-box] [-webkit-line-clamp:var(--clamp)]
                [-webkit-box-orient:vertical]
              "
            >
              &ldquo;{item.quote}&rdquo;
            </p>

            {/* avatar + meta BOTTOM */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 mt-20 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold mt-20 ">{item.name}</p>
                <p className="text-sm text-gray-600">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Review;
