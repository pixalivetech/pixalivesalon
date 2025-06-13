import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function FilterBox({ onClose }) {
  const [sortBy, setSortBy] = useState("Recommended");
  const [venueType, setVenueType] = useState("Everyone");
  const [amenities, setAmenities] = useState(["Air Conditioned"]);
  const [maxPrice, setMaxPrice] = useState(500);

  const amenityOptions = [
    "Air Conditioned",
    "Online Payment",
    "Car Parking",
    "Staff Vaccinated",
    "Washroom",
    "Bike Parking",
  ];

  const toggleAmenity = (item) => {
    if (amenities.includes(item)) {
      setAmenities(amenities.filter((a) => a !== item));
    } else {
      setAmenities([...amenities, item]);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-transparent bg-opacity-40">
      <div className="bg-white w-[90%] max-w-sm rounded-xl shadow-lg p-5 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-5">Filter</h2>

        {/* Sort by */}
        <div className="mb-5">
          <p className="font-medium mb-2">Sort by</p>
          <div className="space-y-3">
            {["Recommended", "Nearest", "Top-rated"].map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="sort"
                  value={option}
                  checked={sortBy === option}
                  onChange={() => setSortBy(option)}
                  className="accent-black"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Price range */}
        <div className="mb-5">
          <p className="font-medium mb-2">Maximum price</p>
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full"
          />
          <div className="text-right text-sm mt-1 text-gray-600">₹{maxPrice}</div>
        </div>

        {/* Venue type */}
        <div className="mb-5">
          <p className="font-medium mb-2">Venue type</p>
          <div className="flex flex-wrap gap-2">
            {["Everyone", "Female only", "Male only"].map((type) => (
              <button
                key={type}
                onClick={() => setVenueType(type)}
                className={`px-3 py-1 rounded-full border ${
                  venueType === type
                    ? "bg-black text-white"
                    : "text-gray-700 border-gray-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-6">
          <p className="font-medium mb-2">Amenities</p>
          <div className="flex flex-wrap gap-2">
            {amenityOptions.map((item) => (
              <button
                key={item}
                onClick={() => toggleAmenity(item)}
                className={`px-3 py-1 rounded-full border text-sm ${
                  amenities.includes(item)
                    ? "bg-black text-white"
                    : "text-gray-700 border-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              setSortBy("Recommended");
              setVenueType("Everyone");
              setAmenities([]);
              setMaxPrice(500);
            }}
            className="text-black underline text-sm"
          >
            Clear all
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 bg-black text-white rounded-full"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
