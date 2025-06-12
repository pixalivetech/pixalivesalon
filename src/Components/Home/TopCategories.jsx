import React from "react";

import img1 from '../../assets/home/cat1.png'
import img2 from '../../assets/home/cat2.png'
import img3 from '../../assets/home/cat3.png'
import img4 from '../../assets/home/cat4.png'

const categories = [
  {
    title: "Haircut Salon",
    image: img1,
  },
  {
    title: "Parlor",
    image: img2,
  },
  {
    title: "Nail Salon",
    image: img3,
  },
  {
    title: "Spa",
    image: img4,
  },
];

const TopCategories = () => {
  return (
    <div className="px-4 py-8 md:px-10 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-48 object-cover cursor-pointer"
              loading="lazy"
            />
            <div className="p-3">
              <h3 className="text-start text-lg font-medium text-gray-800">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
