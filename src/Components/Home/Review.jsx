// TestimonialSlider.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

// Testimonials with stars and profile images
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
      "Pixalive's environment pushes you to grow. The community vibe and the creative flow make it my go-to workspace.",
    name: "Rohit M",
    role: "Developer",
    image: "https://i.pravatar.cc/100?img=33",
    rating: 4,
  },
  {
    quote:
      "Love the energy at Pixalive! It’s the perfect blend of productivity and inspiration. The design of the place keeps me coming back.",
    name: "Sneha K",
    role: "Content Strategist",
    image: "https://i.pravatar.cc/100?img=34",
    rating: 5,
  },
  {
    quote:
      "I’ve tried multiple co-working spaces but none compare to the vibe and aesthetic of Pixalive. The team behind it really gets creatives.",
    name: "Arjun V",
    role: "Photographer",
    image: "https://i.pravatar.cc/100?img=35",
    rating: 5,
  },
];

// Duplicate for seamless loop
const SLIDER_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

const Review = () => {
  return (
    <section className="py-16 ">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-gray-900">
        Hear from our users
      </h2>

      {/* Horizontal scroll wrapper */}
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
            <div
              key={idx}
              className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] shrink-0 bg-[#f9f9f9] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
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

              <p className="text-gray-800 leading-relaxed mb-4">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex text-yellow-500">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
