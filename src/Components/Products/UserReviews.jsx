import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import user1 from "./../../assets/Product/user1.png";
import user2 from "./../../assets/Product/user2.png";
import user3 from "./../../assets/Product/user3.png";
import user4 from "./../../assets/Product/user4.png";
import user5 from "./../../assets/Product/user5.png";
import user6 from "./../../assets/Product/user6.png";

const reviews = [
  {
    name: "Somanathan",
    role: "UI/UX Designer",
    image: user1,
    rating: 4.5,
    review:
      "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
  },
  {
    name: "Somanathan",
    role: "UI/UX Designer",
    image: user2,
    rating: 4.5,
    review:
      "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
  },
  {
    name: "Somanathan",
    role: "UI/UX Designer",
    image: user3,
    rating: 4.5,
    review:
      "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
  },
  {
    name: "Somanathan",
    role: "UI/UX Designer",
    image: user4,
    rating: 4.5,
    review:
      "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
  },
  {
    name: "Somanathan",
    role: "UI/UX Designer",
    image: user5,
    rating: 4.5,
    review:
      "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
  },
  {
    name: "Somanathan",
    role: "UI/UX Designer",
    image: user6,
    rating: 4.5,
    review:
      "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I’ve finally found a space that keeps me focused and inspired.",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-black" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-black" />}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <FaRegStar key={i} className="text-black" />
      ))}
    </div>
  );
};

export default function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
     <div className="p-6">
      <div className="font-lufga">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-black mb-4 md:mb-0">Hear from our users</h2>
          <button className="flex items-center gap-2 border border-gray-500 px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Write a review
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.83 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.686a4.5 4.5 0 011.13-1.897L16.863 4.487z"
              />
            </svg>
          </button>
        </div>

        <div className="mb-6 text-black font-semibold flex items-center gap-2">
          <span>4.3</span>
          <FaStar className="text-black" />
          <span className="text-blue-600 cursor-pointer">(32)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-black">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
              <StarRating rating={item.rating} />
              <p className="text-black mt-2 mb-1">
                {expandedIndex === idx ? item.review : `${item.review.slice(0, 120)}...`}
              </p>
              <button
                className="text-blue-600 hover:underline"
                onClick={() => toggleReadMore(idx)}
              >
                {expandedIndex === idx ? "Show less" : "Read more"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
