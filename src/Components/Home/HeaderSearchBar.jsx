import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence and motion
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { FiUser, FiMenu, FiX } from "react-icons/fi"; // Import FiX for the close icon
import logo from "../../assets/home/Techlogo.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear, format } from "date-fns";

const Header = () => {
  /* ───────────────────────────────────────── state ───────────────────────────────────────── */
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu

  // **selected values that drive the button labels**
  const [selectedTreatment, setSelectedTreatment] = useState(
    "All Treatments and venues"
  );
  const [selectedLocation, setSelectedLocation] = useState("Current location");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("Any time");

  /* ───────────────────────────────────────── refs ───────────────────────────────────────── */
  const headerRef = useRef(null);
  const treatmentsRef = useRef(null);
  const locationRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const mobileMenuRef = useRef(null); // Ref for the mobile menu

  /* ─────────────────────────────────── helpers / handlers ─────────────────────────────────── */
  const handleSelectTreatment = (val) => {
    setSelectedTreatment(val);
    setActiveDropdown(null);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Close menu if a selection is made in mobile view
  };
  const handleSelectLocation = (val) => {
    setSelectedLocation(val);
    setActiveDropdown(null);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Close menu if a selection is made in mobile view
  };
  const handleSelectTime = (val) => {
    setSelectedTime(val);
    setActiveDropdown(null);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Close menu if a selection is made in mobile view
  };
  const handleSelectDate = (d) => { // Added handleSelectDate for direct DatePicker use
    setSelectedDate(d);
    setActiveDropdown(null);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Close menu if a selection is made in mobile view
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the mobile menu AND not on the hamburger icon itself
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        event.target.closest(".fi-menu") === null // Added class to hamburger for exclusion
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

  /* ───────────────────────────── effect: position portal dropdowns ───────────────────────────── */
  useEffect(() => {
    const updatePos = () => {
      const map = {
        treatments: treatmentsRef,
        location: locationRef,
        date: dateRef,
        time: timeRef,
      };
      // Portal dropdowns only for desktop, not when mobile menu is open
      const ref = isMobileMenuOpen ? null : map[activeDropdown];
      if (ref && ref.current) {
        const r = ref.current.getBoundingClientRect();
        setDropdownPosition({
          top: r.bottom + window.scrollY + 5,
          left: r.left + r.width / 2,
        });
      }
    };
    if (activeDropdown && !isMobileMenuOpen) { // Only update position if activeDropdown and not mobile menu open
      updatePos();
      window.addEventListener("scroll", updatePos);
      window.addEventListener("resize", updatePos);
    }
    return () => {
      window.removeEventListener("scroll", updatePos);
      window.removeEventListener("resize", updatePos);
    };
  }, [activeDropdown, isMobileMenuOpen]); // Added isMobileMenuOpen to dependency array

  /* ──────────────────────────────── date‑picker custom header ──────────────────────────────── */
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

  /* ───────────────────────────── dropdown content definitions ───────────────────────────── */
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
        onChange={handleSelectDate} // Use the dedicated handler
        inline
        calendarClassName="rounded-lg shadow-lg"
        renderCustomHeader={renderDatePickerHeader}
        dateFormat="MMMM d, BBBB"
      />
    ),

    time: (
      <div className="p-6 rounded-lg shadow-sm flex flex-wrap gap-4"> {/* Adjusted for better mobile wrapping */}
        {[
          ["Morning", ["9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am"]],
          ["Afternoon", ["12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm"]],
          ["Evening", ["3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm"]],
        ].map(([title, arr]) => (
          <div key={title} className="flex-1 min-w-[120px]"> {/* Added flex-1 and min-w for wrapping */}
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

  /* ────────────────────────────── portal helper (with hover keep‑alive) ────────────────────────────── */
  const renderPortalDropdown = (key) => {
    // Only render portal dropdowns if not in mobile menu mode
    if (!activeDropdown || activeDropdown !== key || !document.getElementById("dropdown-root") || isMobileMenuOpen)
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

  /* ───────────────────────────────────────── JSX ───────────────────────────────────────── */
  return (
    <>
      <header
        ref={headerRef}
        className="shadow-sm z-[100] w-full bg-white" // Added bg-white for consistent background
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center p-6">
          <img src={logo} alt="logo" loading="lazy" className="cursor-pointer" />

          {/* Search bar - visible only on medium and up screens */}
          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <div
              className="flex items-center border border-gray-300 rounded-full px-4 py-2 text-sm bg-white shadow-sm"
            >
              {/* Treatments */}
              <div
                ref={treatmentsRef}
                className="group relative flex-1 text-center"
                onMouseEnter={() => setActiveDropdown("treatments")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center justify-center gap-2 text-gray-700 cursor-pointer">
                  <FaSearch />
                  <span className="truncate">{selectedTreatment}</span>
                </div>
              </div>

              <div className="w-px h-6 bg-gray-300 mx-1" />

              {/* Location */}
              <div
                ref={locationRef}
                className="group relative flex-1 text-center"
                onMouseEnter={() => setActiveDropdown("location")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center justify-center gap-2 text-gray-700 cursor-pointer">
                  <FaMapMarkerAlt />
                  <span className="truncate">{selectedLocation}</span>
                </div>
              </div>

              <div className="w-px h-6 bg-gray-300 mx-1" />

              {/* Date */}
              <div
                ref={dateRef}
                className="group relative flex-1 text-center"
                onMouseEnter={() => setActiveDropdown("date")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center justify-center gap-2 text-gray-700 cursor-pointer">
                  <FaCalendarAlt />
                  <span className="truncate">
                    {selectedDate ? format(selectedDate, "MMM d, BBBB") : "Any date"}
                  </span>
                </div>
              </div>

              <div className="w-px h-6 bg-gray-300 mx-1" />

              {/* Time */}
              <div
                ref={timeRef}
                className="group relative flex-1 text-center"
                onMouseEnter={() => setActiveDropdown("time")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center justify-center gap-2 bg-white text-gray-700 cursor-pointer">
                  <FaClock />
                  <span className="truncate">{selectedTime}</span>
                </div>
              </div>

              <button className="ml-2 bg-black text-white rounded-full px-4 py-1 hover:bg-gray-800">
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-600">
            <span className="hidden md:inline cursor-pointer hover:underline text-sm">
              Log in
            </span>
            {/* Hamburger menu icon, visible on small screens */}
            <FiMenu
              size={24}
              className="cursor-pointer md:hidden fi-menu" // Added fi-menu class for click outside logic
              onClick={toggleMobileMenu}
            />
            {/* User icon, always visible */}
            <FiUser size={24} className="cursor-pointer" />
          </div>
        </div>
      </header>

      {/* ───────────────────────── Mobile Side Menu ───────────────────────── */}
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
              {/* Add other navigation links here if needed */}
            </nav>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-bold mb-4">Book a Service</h3>
              {/* Mobile-friendly search options */}
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

      {/* Overlay when mobile menu is open */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black z-[150] md:hidden"
            onClick={toggleMobileMenu} // Close menu on overlay click
          />
        )}
      </AnimatePresence>

      {/* Portal mounts for dropdowns */}
      {renderPortalDropdown("treatments")}
      {renderPortalDropdown("location")}
      {renderPortalDropdown("date")}
      {renderPortalDropdown("time")}
    </>
  );
};

export default Header;