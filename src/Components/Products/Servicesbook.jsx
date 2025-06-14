import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const tabs = [
  { name: "Women's Cut & Blow Dry", key: "cut" },
  { name: "Hair Colour", key: "colour" },
  { name: "Hair Treatments", key: "treatment1" },
  { name: "Essential Hair Care", key: "treatment" },
  { name: "Men's Grooming", key: "care" },
  { name: "Facials & Skincare", key: "extra2" },
  { name: "Waxing & Detan", key: "extra3" },
];

const allServices = [
  { category: "cut", title: "Hair Cut (Creative Director)", duration: "60 mins", price: "₹1322" },
  { category: "cut", title: "Hair Cut (Top Stylist)", duration: "60 mins", price: "₹999" },
  { category: "cut", title: "Hair Cut (Senior Stylist)", duration: "45 mins", price: "₹799" },
  { category: "cut", title: "Zero Trim", duration: "30 mins", price: "₹150" },
  { category: "care", title: "Beard Trim", duration: "30 mins", price: "₹350" },
  { category: "care", title: "Beard Design", duration: "30 mins", price: "₹499" },
  { category: "extra2", title: "Hydrating Facial", duration: "60 mins", price: "₹1999" },
  { category: "extra2", title: "Anti-Acne Facial", duration: "75 mins", price: "₹2499" },
  { category: "extra3", title: "Full Arm Waxing", duration: "30 mins", price: "₹599" },
  { category: "extra3", title: "Detan Pack (Face & Neck)", duration: "45 mins", price: "₹799" },
  { category: "treatment", title: "Wash & Blast Dry", duration: "45 mins", price: "₹599" },
  { category: "treatment", title: "dandruff treatment", duration: "30 mins", price: "₹999" },
  { category: "treatment", title: "scalp treatment", duration: "45 mins", price: "₹1499" },
  { category: "treatment1", title: "Body Massage ", duration: "30 mins", price: "₹799" },
  { category: "treatment1", title: "Keratin Treatment", duration: "120 mins", price: "₹2999" },
  { category: "treatment1", title: "Hair Spa (Luxury)", duration: "45 mins", price: "₹1999" },
  { category: "colour", title: "Global hair colour (Expert)", duration: "45 mins", price: "₹1199" },
  { category: "colour", title: "Root touch up(Expert) ", duration: "30 mins", price: "₹999" },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("cut");
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scrollTabs = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  const filteredServices = allServices.filter((s) => s.category === activeTab);

  return (
    <div className="max-w-[1440px] mx-auto mt-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-30 pt-8 md:p-4 font-lufga">
      <div className="w-full xl:w-[98%] mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-black mb-6"
        >
          Services
        </motion.h2>

        {/* Tabs and Arrows */}
        <div className="flex items-center mb-6 relative gap-3">
          {/* Tabs */}
          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-2 overflow-x-auto whitespace-nowrap w-[747px] no-scrollbar"
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`min-w-fit px-4 py-2 text-sm font-semibold md:text-base transition ${
                  activeTab === tab.key
                    ? "bg-black text-white rounded-full"
                    : "text-black"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </motion.div>

          {/* Chevron Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scrollTabs("left")}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm flex items-center justify-center"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => scrollTabs("right")}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm flex items-center justify-center"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Services List */}
        <div className="grid gap-5 max-w-2xl">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="border border-[#D1D1D1] rounded-xl p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center shadow-md"
            >
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500">{service.duration}</p>
                <p className="text-lg font-bold text-gray-800 mt-1">{service.price}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/service")}
                className="mt-4 sm:mt-0 border text-[#4F4F4F] border-gray-300 text-sm px-5 py-2 rounded-md hover:bg-gray-100 transition"
              >
                Book
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-400 rounded-md px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition"
          >
            See all
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
