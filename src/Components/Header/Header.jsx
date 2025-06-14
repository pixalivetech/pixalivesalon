import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiMenu } from "react-icons/fi";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import logo from "../../assets/home/Techlogo.png";

// Images
import img1 from "./../../assets/Home/hero1.jpg";
import img2 from "./../../assets/Home/hero2.jpg";
import img3 from "./../../assets/Home/hero3.jpg";
import img4 from "./../../assets/Home/hero4.jpg";
import img5 from "./../../assets/Home/hero5.jpg";
import img6 from "./../../assets/Home/hero6.jpg";

const Header = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const allImages = [...images, ...images, ...images];

  // Updated image rotation: every image gets rotation
  const getRotation = (index) => {
    const angles = [-1, -6, -5, -3, 2, 4, 6, 2, -4, 9];
    return angles[index % angles.length];
  };

  return (
    <header id="home-hero-header" className="relative ...">
      <div className="min-h-screen font-lufga bg-[#f6f6f6] overflow-hidden pb-10">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="cursor-pointer" loading="lazy" />
          </div>
          <div className="flex items-center gap-4  text-gray-600">
            <span className="text-sm cursor-pointer hover:underline ">Log in</span>
            <FiMenu size={24} className="cursor-pointer" />
            <FiUser size={24} className="cursor-pointer" />
          </div>
        </header>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden py-8 mt-4">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {allImages.map((src, index) => (
              <div
                key={index}
                className="w-28 h-36 shrink-0 rounded-xl overflow-hidden shadow-md"
                style={{
                  transform: `rotate(${getRotation(index)}deg)`,
                }}
              >
                <img
                  src={src}
                  alt={`img-${index}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Title */}
        <div className="text-center px-4 mt-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Book local beauty and<br />wellness services
          </h1>
        </div>

        <div className="relative w-fit mx-auto mt-10">
          <div className="flex items-center justify-between border border-gray-900 rounded-full px-4 py-2 shadow-sm overflow-visible bg-white relative z-10">

            {/* Treatments */}
            <div className="group relative flex flex-col items-center">
              <div className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
                <FaSearch className="text-black" />
                All Treatments and venues
              </div>
              <div className="absolute top-full mt-5 hidden group-hover:block bg-red-300 text-sm px-3 py-1 rounded shadow z-20">
                Hello World
              </div>
            </div>

            <div className="w-px h-6 bg-gray-300 mx-1"></div>

            {/* Location */}
            <div className="group relative flex flex-col items-center">
              <div className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
                <FaMapMarkerAlt className="text-black" />
                Current location
              </div>
              <div className="absolute top-full mt-5 hidden group-hover:block bg-blue-300 text-sm px-3 py-1 rounded shadow z-20">
                Choose your location
              </div>
            </div>

            <div className="w-px h-6 bg-gray-300 mx-1"></div>

            {/* Date */}
            <div className="group relative flex flex-col items-center">
              <div className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
                <FaCalendarAlt className="text-black" />
                Any date
              </div>
              <div className="absolute top-full mt-5 hidden group-hover:block bg-green-300 text-sm px-3 py-1 rounded shadow z-20">
                Pick a date
              </div>
            </div>

            <div className="w-px h-6 bg-gray-300 mx-1"></div>

            {/* Time */}
            <div className="group relative flex flex-col items-center">
              <div className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
                <FaClock className="text-black" />
                Any time
              </div>
              <div className="absolute top-full mt-5 hidden group-hover:block bg-yellow-300 text-sm px-3 py-1 rounded shadow z-20">
                Choose time
              </div>
            </div>

            <div className="w-px h-6 bg-gray-300 mx-1"></div>

            {/* Search Button */}
            <button className="bg-black cursor-pointer text-white rounded-full px-5 py-2 text-sm hover:bg-gray-800 whitespace-nowrap">
              Search
            </button>
          </div>
        </div>



      </div>
    </header>
  );
};

export default Header;
