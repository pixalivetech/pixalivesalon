// TestimonialSlider.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

/* -------------------------------- data -------------------------------- */
const TESTIMONIALS = [
  {
    quote:
      "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
    name: "Ananya R",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/100?img=32",
    rating: 5,
  },
  {
    quote:
      "Pixalive's environment pushes you to grow. The community vibe and the creative flow make it my go‑to workspace.",
    name: "Rohit M",
    role: "Developer",
    image: "https://i.pravatar.cc/100?img=33",
    rating: 4.5,
  },
  {
    quote:
      "Love the energy at Pixalive! It’s the perfect blend of productivity and inspiration. The design of the place keeps me coming back again and again.",
    name: "Sneha K",
    role: "Content Strategist",
    image: "https://i.pravatar.cc/100?img=34",
    rating: 5,
  },
  {
    quote:
      "I’ve tried multiple co‑working spaces but none compare to the vibe and aesthetic of Pixalive. The team behind it really gets creatives.",
    name: "Arjun V",
    role: "Photographer",
    image: "https://i.pravatar.cc/100?img=35",
    rating: 4,
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
  <section className="px-4 py-8 md:px-10 lg:px-20">
    {/* heading (left‑aligned) */}
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 px-4 md:px-0 max-w-7xl mx-auto text-left">
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
              shrink-0 bg-[#f9f9f9] rounded-xl p-6
              shadow-md hover:shadow-lg transition-shadow
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
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
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
