import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence for exit animations
import { FiUser, FiMenu, FiX } from "react-icons/fi"; // Added FiX for close icon
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import logo from "../../assets/home/Techlogo.png";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear, format } from "date-fns";
import img1 from "./../../assets/Home/hero1.jpg";
import img2 from "./../../assets/Home/hero2.jpg";
import img3 from "./../../assets/Home/hero3.jpg";
import img4 from "./../../assets/Home/hero4.jpg";
import img5 from "./../../assets/Home/hero5.jpg";
import img6 from "./../../assets/Home/hero6.jpg";

const Header = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const allImages = [...images, ...images, ...images];

  
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  
  const [selectedTreatment, setSelectedTreatment] = useState(
    "All Treatments and venues"
  );
  const [selectedLocation, setSelectedLocation] = useState("Current location");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("Any time");

  
  const headerRef = useRef(null);
  const searchBarRef = useRef(null);
  const searchBarInitialOffset = useRef(0);
  const treatmentsRef = useRef(null);
  const locationRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const mobileMenuRef = useRef(null); 

  
  const getRotation = (index) => {
    const angles = [-1, -6, -5, -3, 2, 4, 6, 2, 4, 9];
    return angles[index % angles.length];
  };

  const handleSelectTreatment = (val) => {
    setSelectedTreatment(val);
    setActiveDropdown(null);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); 
  };
  const handleSelectLocation = (val) => {
    setSelectedLocation(val);
    setActiveDropdown(null);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); 
  };
  const handleSelectTime = (val) => {
    setSelectedTime(val);
    setActiveDropdown(null);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); 
  };
  const handleSelectDate = (d) => {
    setSelectedDate(d);
    setActiveDropdown(null);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); 
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        event.target.closest(".fi-menu") === null 
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  
  useEffect(() => {
    if (searchBarRef.current) {
      searchBarInitialOffset.current =
        searchBarRef.current.getBoundingClientRect().top + window.scrollY;
    }
  }, []);

  
  useEffect(() => {
    const handleScroll = () => {
      if (searchBarRef.current && headerRef.current) {
        const headerH = headerRef.current.offsetHeight;
        const thresh = searchBarInitialOffset.current - headerH;
        setIsHeaderFixed(window.scrollY >= thresh);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const updatePos = () => {
      const map = {
        treatments: treatmentsRef,
        location: locationRef,
        date: dateRef,
        time: timeRef,
      };
      
      const ref =
        isHeaderFixed || isMobileMenuOpen ? null : map[activeDropdown];
      if (ref && ref.current) {
        const r = ref.current.getBoundingClientRect();
        setDropdownPosition({
          top: r.bottom + window.scrollY + 5,
          left: r.left + r.width / 2,
        });
      }
    };
    updatePos();
    window.addEventListener("scroll", updatePos);
    window.addEventListener("resize", updatePos);
    return () => {
      window.removeEventListener("scroll", updatePos);
      window.removeEventListener("resize", updatePos);
    };
  }, [activeDropdown, isHeaderFixed, isMobileMenuOpen]);

  
  const renderDatePickerHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <div className="flex justify-center gap-2 my-2">
      <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {"<"}
      </button>
      <select
        value={getYear(date)}
        onChange={({ target: { value } }) => changeYear(+value)}
      >
        {Array.from({ length: 10 }, (_, i) => getYear(new Date()) + i).map(
          (y) => (
            <option key={y} value={y}>
              {y}
            </option>
          )
        )}
      </select>
      <select
        value={getMonth(date)}
        onChange={({ target: { value } }) => changeMonth(+value)}
      >
        {Array.from({ length: 12 }, (_, i) => i).map((m) => (
          <option key={m} value={m}>
            {new Date(2000, m).toLocaleString("default", { month: "long" })}
          </option>
        ))}
      </select>
      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {">"}
      </button>
    </div>
  );

  
  const dropdownData = {
    treatments: (
      <div className="p-6 bg-white rounded-lg shadow-lg w-64 max-h-80 overflow-y-auto">
        <h3 className="font-semibold mb-3">All Treatment</h3>
        <ul className="space-y-1 text-gray-700">
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-100">
            Categories
          </li>
          {[
            ["💇‍♀️ Hair & Styling", "Hair & Styling"],
            ["💅 Parlor", "Parlor"],
            ["🧖‍♀️ Nail Salon", "Nail Salon"],
            ["🧘 Spa", "Spa"],
          ].map(([label, val]) => (
            <li
              key={val}
              onClick={() => handleSelectTreatment(val)}
              className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-100 cursor-pointer"
            >
              <span className="text-lg">{label.split(" ")[0]}</span>
              {label.split(" ").slice(1).join(" ")}
            </li>
          ))}
        </ul>
      </div>
    ),

    location: (
      <div className="p-6 bg-white rounded-lg shadow-lg w-64">
        <h3 className="font-semibold mb-3">Suggested Destination</h3>
        {[
          "Current location",
          "HSR Layout",
          "Koramangala",
          "BTM Layout",
          "Electronic City Phase 1",
          "Electronic City Phase 2",
        ].map((loc) => (
          <div
            key={loc}
            onClick={() => handleSelectLocation(loc)}
            className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-100 cursor-pointer text-gray-700"
          >
            {loc === "Current location" && <FaMapMarkerAlt />}
            {loc}
          </div>
        ))}
      </div>
    ),

    date: (
      <DatePicker
        selected={selectedDate}
        onChange={handleSelectDate}
        inline
        calendarClassName="rounded-lg shadow-lg"
        renderCustomHeader={renderDatePickerHeader}
        dateFormat="MMMM d, BBBB"
      />
    ),

    time: (
      <div className="p-6 rounded-lg shadow-sm flex flex-wrap gap-4">
        {[
          ["Morning", ["9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am"]],
          ["Afternoon", ["12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm"]],
          ["Evening", ["3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm"]],
        ].map(([title, arr]) => (
          <div key={title} className="flex-1 min-w-[120px]">
            <h4 className="font-semibold mb-2">{title}</h4>
            <ul className="space-y-1 text-gray-700">
              {arr.map((t) => (
                <li
                  key={t}
                  onClick={() => handleSelectTime(t)}
                  className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  };

  
  const renderPortalDropdown = (key) => {
    if (
      !activeDropdown ||
      activeDropdown !== key ||
      !document.getElementById("dropdown-root") ||
      isHeaderFixed || 
      isMobileMenuOpen 
    )
      return null;

    return createPortal(
      <div
        style={{
          position: "absolute",
          top: dropdownPosition.top,
          left: dropdownPosition.left,
          transform: "translateX(-40%)",
          zIndex: 9999,
        }}
        onMouseEnter={() => setActiveDropdown(key)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {dropdownData[key]}
      </div>,
      document.getElementById("dropdown-root")
    );
  };

  
  return (
    <div className="flex flex-col items-center mx-auto max-w-[1600px]">
      {/* ───────────────────────── header ───────────────────────── */}
      <header
        ref={headerRef}
        className={`transition-all duration-300 w-full z-[100] ${
          isHeaderFixed ? "fixed top-0 left-0 right-0" : ""
        }`}
      >
        <div
          className={`flex justify-between items-center w-full max-w-[1600 px] mx-auto ${
            isHeaderFixed ? "bg-white shadow-sm p-6" : "p-6"
          }`}
        >
          <img src={logo} alt="logo" loading="lazy" className="cursor-pointer" />

          
          {isHeaderFixed && (
            <div className="flex-1 max-w-2xl mx-4 hidden md:block">
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 text-sm bg-white shadow-sm">
                
                <div
                  className="group relative flex-1 text-center"
                  onMouseEnter={() => setActiveDropdown("treatments")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center justify-center gap-2 text-gray-700 cursor-pointer">
                    <FaSearch />
                    <span className="truncate">{selectedTreatment}</span>
                  </div>
                  {activeDropdown === "treatments" && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[9999] min-w-max">
                      {dropdownData.treatments}
                    </div>
                  )}
                </div>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                
                <div
                  className="group relative flex-1 text-center"
                  onMouseEnter={() => setActiveDropdown("location")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center justify-center gap-2 text-gray-700 cursor-pointer">
                    <FaMapMarkerAlt />
                    <span className="truncate">{selectedLocation}</span>
                  </div>
                  {activeDropdown === "location" && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[9999] min-w-max">
                      {dropdownData.location}
                    </div>
                  )}
                </div>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                
                <div
                  className="group relative flex-1 text-center"
                  onMouseEnter={() => setActiveDropdown("date")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center justify-center bg gap-2 text-gray-700 cursor-pointer">
                    <FaCalendarAlt />
                    <span className="truncate">
                      {selectedDate ? format(selectedDate, "MMM d, BBBB") : "Any date"}
                    </span>
                  </div>
                  {activeDropdown === "date" && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[9999] min-w-max">
                      {dropdownData.date}
                    </div>
                  )}
                </div>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                {/* Time */}
                <div
                  className="group relative flex-1 text-center bg-white"
                  onMouseEnter={() => setActiveDropdown("time")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center justify-center bg-white gap-2 text-gray-700 cursor-pointer">
                    <FaClock />
                    <span className="truncate">{selectedTime}</span>
                  </div>
                  {activeDropdown === "time" && (
                    <div className="absolute bg-white top-full mt-2 left-1/2 -translate-x-1/2 z-[9999] min-w-max">
                      {dropdownData.time}
                    </div>
                  )}
                </div>

                <button className="ml-2 bg-black text-white rounded-full px-4 py-1 hover:bg-gray-800">
                  Search
                </button>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 text-gray-600">
            <span className="hidden md:inline cursor-pointer hover:underline text-sm">
              Log in
            </span>
            {/* Hamburger menu icon, visible on small screens */}
            <FiMenu
              size={24}
              className="cursor-pointer md:hidden fi-menu"
              onClick={toggleMobileMenu}
            />
            {/* User icon, always visible */}
            <FiUser size={24} className="cursor-pointer" />
          </div>
        </div>
      </header>

      
      {isHeaderFixed && (
        <div style={{ height: headerRef.current?.offsetHeight || "72px" }} />
      )}

      {!isHeaderFixed && (
        <>
          
          <div className="relative w-full overflow-hidden py-8 mt-4">
            <motion.div
              className="flex gap-4"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {allImages.map((src, i) => (
                <div
                  key={i}
                  className="w-28 h-36 shrink-0 rounded-xl overflow-hidden shadow-md"
                  style={{ transform: `rotate(${getRotation(i)}deg)` }}
                >
                  <img
                    src={src}
                    alt={`img-${i}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>

         
          <div className="text-center px-4 mt-10">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Book local beauty and
              <br />
              wellness services
            </h1>
          </div>
        </>
      )}

      
      <div
        ref={searchBarRef}
        className={`relative w-fit mx-auto mt-10 ${isHeaderFixed ? "hidden" : "hidden md:block" 
          } px-4 md:px-0 z-20`}
        className={`relative w-fit mx-auto mt-10 ${
          isHeaderFixed ? "hidden" : "hidden md:block" // Hidden on mobile, block on md and up
        } px-4 md:px-0 z-20`}
      >
        <div className="flex items-center border border-gray-900 rounded-full px-4 py-2 shadow-sm bg-white">
          
          <div
            ref={treatmentsRef}
            className="group relative flex flex-col items-center"
            onMouseEnter={() => setActiveDropdown("treatments")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-2 px-4 text-sm text-gray-700 cursor-pointer">
              <FaSearch />
              {selectedTreatment}
            </div>
          </div>

          <div className="w-px h-6 bg-gray-300 mx-1" />

          
          <div
            ref={locationRef}
            className="group relative flex flex-col items-center"
            onMouseEnter={() => setActiveDropdown("location")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-2 px-4 text-sm text-gray-700 cursor-pointer">
              <FaMapMarkerAlt />
              {selectedLocation}
            </div>
          </div>

          <div className="w-px h-6 bg-gray-300 mx-1" />

         
          <div
            ref={dateRef}
            className="group relative flex flex-col items-center"
            onMouseEnter={() => setActiveDropdown("date")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-2 px-4 text-sm text-gray-700 cursor-pointer">
              <FaCalendarAlt />
              {selectedDate ? format(selectedDate, "MMM d, BBBB") : "Any date"}
            </div>
          </div>

          <div className="w-px h-6 bg-gray-300 mx-1" />

          
          <div
            ref={timeRef}
            className="group relative flex flex-col bg-white items-center"
            onMouseEnter={() => setActiveDropdown("time")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-2 px-4 text-sm bg-white text-gray-700 cursor-pointer">
              <FaClock />
              {selectedTime}
            </div>
          </div>

          <div className="w-px h-6 bg-gray-300 mx-1" />

          <button className="bg-black cursor-pointer text-white rounded-full px-5 py-2 text-sm hover:bg-gray-800">
            Search
          </button>
        </div>
      </div>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-[200] p-6 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <FiX size={24} className="cursor-pointer" onClick={toggleMobileMenu} />
            </div>

            <nav className="flex flex-col space-y-4 mb-8">
              <a href="#" className="text-gray-800 hover:text-black font-semibold">
                Log In
              </a>
              
            </nav>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-bold mb-4">Book a Service</h3>
              
              <div className="flex flex-col space-y-4">
                <button
                  className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg text-left"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "treatments" ? null : "treatments")
                  }
                >
                  <FaSearch className="text-gray-600" />
                  <span className="flex-1 truncate">{selectedTreatment}</span>
                </button>
                {activeDropdown === "treatments" && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    {dropdownData.treatments}
                  </div>
                )}

                <button
                  className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg text-left"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "location" ? null : "location")
                  }
                >
                  <FaMapMarkerAlt className="text-gray-600" />
                  <span className="flex-1 truncate">{selectedLocation}</span>
                </button>
                {activeDropdown === "location" && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    {dropdownData.location}
                  </div>
                )}

                <button
                  className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg text-left"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "date" ? null : "date")
                  }
                >
                  <FaCalendarAlt className="text-gray-600" />
                  <span className="flex-1 truncate">
                    {selectedDate ? format(selectedDate, "MMM d, BBBB") : "Any date"}
                  </span>
                </button>
                {activeDropdown === "date" && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    {dropdownData.date}
                  </div>
                )}

                <button
                  className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg text-left"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "time" ? null : "time")
                  }
                >
                  <FaClock className="text-gray-600" />
                  <span className="flex-1 truncate">{selectedTime}</span>
                </button>
                {activeDropdown === "time" && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    {dropdownData.time}
                  </div>
                )}

                <button className="bg-black text-white rounded-lg px-5 py-3 text-base hover:bg-gray-800 w-full mt-4">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black z-[150] md:hidden"
            onClick={toggleMobileMenu} 
          />
        )}
      </AnimatePresence>

      
      {renderPortalDropdown("treatments")}
      {renderPortalDropdown("location")}
      {renderPortalDropdown("date")}
      {renderPortalDropdown("time")}
    </div>
  );
};

export default Header;