import React, { useState, useEffect, useRef } from "react";
import {
  FiClock,
  FiChevronDown,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { FaStar, FaHeart } from "react-icons/fa";

import mainImg from "./../../assets/Product/main.png";
import thumb1 from "./../../assets/Product/thumb1.png";
import thumb2 from "./../../assets/Product/thumb2.png";
import thumb3 from "./../../assets/Product/thumb3.png";
import Icon1 from "./../../assets/Product/icon1.png";
import Icon2 from "./../../assets/Product/icon2.png";

import { Link } from 'react-router-dom';

import AmenitiesSection from "./AmenitiesSection";
import Services from "./Servicesbook";
import Navbar from "../SeeMore/Navbar";

import UserReviews from './UserReviews';
import OpeningTimes from './OpeningTimes';
import OtherLocation from './OtherLocation';
import Venue from './Venue';
import AboutSection from './AboutSection';
import FAQ from '../Salons/Faq';

const SalonPage = () => {
  const [liked, setLiked] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  const amenitiesRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const amenitiesTop = amenitiesRef.current?.getBoundingClientRect().top;
      const faqBottom = faqRef.current?.getBoundingClientRect().bottom;

      if (amenitiesTop !== undefined && faqBottom !== undefined) {
        if (amenitiesTop <= 0 && faqBottom > 0) {
          setShowStickyNav(true);
        } else {
          setShowStickyNav(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Toni & Guy Hairdressing",
        text: "Check out Toni & Guy Hairdressing on Pixalive!",
        url: window.location.href,
      }).catch((error) => console.log("Sharing failed:", error));
    } else {
      alert("Share not supported on this browser.");
    }
  };

  const handleContact = () => {
    const confirm = window.confirm("Would you like to call or WhatsApp?");
    if (confirm) {
      window.location.href = "tel:9167886732";
    }
  };

  return (
    <div className="p-6">
      {/* Sticky Navbar */}
      {showStickyNav && <Navbar />}

      {/* Breadcrumb */}
      <nav className="text-sm md:text-md xl:text-md text-gray-500 mb-6 flex items-center space-x-1">
        <Link to="/" className="text-gray-500 hover:underline">Home</Link> &nbsp;&gt;&nbsp;
        <Link to="/salon" className="text-gray-500 hover:underline">Salon</Link> &nbsp;&gt;&nbsp;
        <Link to="/product" className="text-black font-medium hover:underline">Bodycraft Salon & Spa</Link>
      </nav>

      {/* Title and meta */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h1 className="md:text-4xl text-2xl font-lufga text-black mb-4">
            Toni & Guy Hairdressing
          </h1>
          <div className="flex flex-wrap items-center gap-[17px] text-md text-black">
            <span className="font-semibold">4</span>
            <div className="flex items-center gap-0.5 text-black">
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
            </div>
            <span className="text-blue-600 font-medium">(5)</span>
            <span className="text-black text-2xl">•</span>
            <span className="text-green-600 text-md font-medium">
              Open <span className="text-[#B0B0B0]">Until 10:00PM</span>
            </span>
            <span className="text-black text-2xl">•</span>
            <span className="text-[#B0B0B0] text-md">
              Koramangala Mantri Avenue Bengaluru
            </span>
            <Link to="/map" className="text-blue-600 hover:underline">
              Get directions
            </Link>
          </div>
        </div>
        <div className="flex mt-2 md:mt-11 cursor-pointer gap-2">
          <button className="p-2" onClick={handleShare}>
            <img src={Icon1} alt="Share" className="w-[38.3px] h-[38.3px]" />
          </button>
          <button className="p-2" onClick={() => setLiked(!liked)}>
            {liked ? (
              <FaHeart className="text-red-600 w-[25.3px] h-[25.3px]" />
            ) : (
              <img src={Icon2} alt="Heart" className="w-[38.3px] h-[38.3px]" />
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col mt-16 lg:flex-row gap-6">
        {/* Left - Images */}
        <div className="flex-1">
          <img
            src={mainImg}
            alt="Salon main"
            className="rounded-xl md:w-[970px] md:h-[533px] object-cover"
          />
          <div className="flex flex-col sm:flex-row gap-[20px] mt-4">
            <img src={thumb1} alt="thumb1" className="w-full sm:w-[236px] lg:w-[310px] h-[163px] rounded-lg object-cover" />
            <img src={thumb2} alt="thumb2" className="w-full sm:w-[236px] lg:w-[310px] h-[163px] rounded-lg object-cover" />
            <div className="relative w-full sm:w-[236px] lg:w-[310px] h-[163px] rounded-lg cursor-pointer overflow-hidden">
              <img src={thumb3} alt="thumb3" className="w-full h-full rounded-lg object-cover" />
              <a href="/see-more" className="absolute inset-0 bg-black/80 flex items-center justify-center text-white text-lg font-medium">
                See more
              </a>
            </div>
          </div>
        </div>

        {/* Right - Info Card */}
        <div className="md:w-[407px] md:h-[482px] flex flex-col gap-4 md:gap-[20px]">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-lufga mb-1">
              Toni & Guy Hairdressing
            </h2>
            <span className="inline-block text-sm text-[#888888] border border-[#E7E7E7] rounded-full px-2 py-0.5 mb-2">
              Hair Salon
            </span>
            <div className="flex items-center gap-1 text-sm mb-2">
              <span className="font-semibold">4.3</span>
              <span className="ml-1 text-black"><FaStar size={18} /></span>
              <span className="ml-1 text-blue-600">(32)</span>
            </div>
            <p className="text-sm md:text-md text-black mb-1">Services start from</p>
            <p className="text-xl font-semibold mb-3">₹99</p>
            <Link to="/service" className="hover:underline">
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900">
                Book now
              </button>
            </Link>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm space-y-2 text-sm">
            <span className="flex items-center gap-2">
              <FiClock size={14} className="text-gray-500" />
              <span className="text-green-600 font-medium">Open</span> until 10:00 pm
              <FiChevronDown size={16} className="text-gray-500" />
            </span>

            <div className="flex justify-between items-start">
              <div className="flex items-center mt-2 gap-2">
                <FiMapPin size={16} className="text-gray-500" />
                <span>
                  Shop No: A008, Koramangala<br />
                  Bengaluru Karnataka
                </span>
              </div>
              <Link to="/map" className="text-blue-600 hover:underline">
                Get directions
              </Link>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center mt-2 gap-2">
                <FiPhone size={16} className="text-gray-500" />
                <span className="text-black">9167886732</span>
              </div>
              <button
                onClick={handleContact}
                className="text-blue-600 hover:underline mt-2 text-right"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section - Amenities to FAQ */}
      <div className="mt-10">
        <div id="amenities" ref={amenitiesRef}>
          <AmenitiesSection />
        </div>

        <div id="Servicesbook">
          <Services />
        </div>
        <div id="reviews">
          <UserReviews />
        </div>

        <div id="about">
          <AboutSection />
        </div>

        <div id="times">
          <OpeningTimes />
        </div>

        <div id="other-location">
          <OtherLocation />
        </div>



        <div id="venue">
          <Venue />
        </div>

        <div id="FAQ" ref={faqRef}>
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default SalonPage;
