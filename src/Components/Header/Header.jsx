import React, { useState, useEffect, useRef } from "react";
import { createPortal } from 'react-dom'; // Import createPortal
import { motion } from "framer-motion";
import { FiUser, FiMenu } from "react-icons/fi";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import logo from "../../assets/home/Techlogo.png"; // Ensure this path is correct
 
// Import React Datepicker components and styles
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Don't forget to import the CSS!
import { getMonth, getYear } from 'date-fns'; // For custom header in datepicker
 
// Images (ensure these paths are correct in your project)
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
  const [activeDropdown, setActiveDropdown] = useState(null); // State to manage which dropdown is open
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 }); // State for dropdown position
 
  const headerRef = useRef(null);
  const searchBarRef = useRef(null);
  const searchBarInitialOffset = useRef(0); // Store initial top offset of search bar
 
  // Refs for individual search bar items to calculate dropdown position
  const treatmentsRef = useRef(null);
  const locationRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
 
  // Function to determine rotation for carousel images
  const getRotation = (index) => {
    const angles = [-1, -6, -5, -3, 2, 4, 6, 2, 4, 9]; // Corrected last two values, assuming a typo
    return angles[index % angles.length];
  };
 
  // Effect to calculate initial search bar position on mount
  useEffect(() => {
    if (searchBarRef.current) {
      searchBarInitialOffset.current = searchBarRef.current.getBoundingClientRect().top + window.scrollY;
    }
  }, []);
 
  // Effect to handle fixed header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (searchBarRef.current && headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const scrollThreshold = searchBarInitialOffset.current - headerHeight;
 
        setIsHeaderFixed(window.scrollY >= scrollThreshold);
      }
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  // Effect to update dropdown position when activeDropdown or scroll changes
  useEffect(() => {
    const updatePosition = () => {
      let ref;
      switch (activeDropdown) {
        case 'treatments':
          ref = isHeaderFixed ? null : treatmentsRef; // Only calculate for hero section
          break;
        case 'location':
          ref = isHeaderFixed ? null : locationRef;
          break;
        case 'date':
          ref = isHeaderFixed ? null : dateRef;
          break;
        case 'time':
          ref = isHeaderFixed ? null : timeRef;
          break;
        default:
          ref = null;
      }
 
      if (ref && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Calculate position relative to the viewport
        const top = rect.bottom + window.scrollY + 5; // 5px margin below the trigger
        const left = rect.left + (rect.width / 2); // Center dropdown horizontally
 
        setDropdownPosition({ top, left });
      }
    };
 
    // Update on mount, on dropdown change, and on scroll
    updatePosition();
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition); // Also update on resize for responsiveness
 
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [activeDropdown, isHeaderFixed]); // Recalculate if activeDropdown or fixed state changes
 
 
  // Calendar rendering logic for custom header
  const renderDatePickerHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <div
      style={{
        margin: 10,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {"<"}
      </button>
      <select
        value={getYear(date)}
        onChange={({ target: { value } }) => changeYear(parseInt(value))}
      >
        {Array.from({ length: 10 }, (_, i) => getYear(new Date()) + i).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
 
      <select
        value={getMonth(date)}
        onChange={({ target: { value } }) => changeMonth(parseInt(value))}
      >
        {Array.from({ length: 12 }, (_, i) => i).map((month) => (
          <option key={month} value={month}>
            {new Date(2000, month).toLocaleString('default', { month: 'long' })}
          </option>
        ))}
      </select>
 
      <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {">"}
      </button>
    </div>
  );
 
 
  // Dropdown data (mocked based on your second image)
  const dropdownData = {
    treatments: (
      <div className="p-4 bg-white rounded-lg shadow-lg w-64 max-h-80 overflow-y-auto">
        <h3 className="font-semibold mb-2">All Treatment</h3>
        <ul className="space-y-1 text-gray-700">
          <li>Categories</li>
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
            <span className="text-lg">💇‍♀️</span> Hair & Styling
          </li>
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
            <span className="text-lg">💅</span> Parlor
          </li>
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
            <span className="text-lg">🧖‍♀️</span> Nail Salon
          </li>
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
            <span className="text-lg">🧘</span> Spa
          </li>
        </ul>
        <h3 className="font-semibold mb-2 mt-4">Venues</h3>
        <ul className="space-y-1 text-gray-700">
          <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
            <p className="font-medium">Bodysurfing Salon & Spa</p>
            <p className="text-xs text-gray-500">2B, Primrose, Lancaster Gate, W2 3NJ</p>
          </li>
          <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
            <p className="font-medium">Bodysurfing Salon & Spa</p>
            <p className="text-xs text-gray-500">2B, Primrose, Lancaster Gate, W2 3NJ</p>
          </li>
          <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
            <p className="font-medium">Bodysurfing Salon & Spa</p>
            <p className="text-xs text-gray-500">2B, Primrose, Lancaster Gate, W2 3NJ</p>
          </li>
        </ul>
      </div>
    ),
    location: (
      <div className="p-4 bg-white rounded-lg shadow-lg w-64">
        <h3 className="font-semibold mb-2">Suggested Destination</h3>
        <ul className="space-y-1 text-gray-700">
          <li className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">
            <FaMapMarkerAlt /> Current Location
          </li>
          <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">HSR Layout</li>
          <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">Koramangala</li>
          <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">BTM Layout</li>
          <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">Electronic City Phase 1</li>
          <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">Electronic City Phase 2</li>
        </ul>
      </div>
    ),
    date: (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            // setActiveDropdown(null); // Optionally close dropdown after selecting date
          }}
          inline // Renders the calendar directly
          calendarClassName="rounded-lg shadow-lg"
          renderCustomHeader={renderDatePickerHeader}
          dateFormat="MMMM d, yyyy"
        />
    ),
    time: (
      <div className="p-4 bg-white rounded-lg shadow-lg flex gap-4">
        <div>
          <h4 className="font-semibold mb-2">Morning</h4>
          <ul className="space-y-1 text-gray-700">
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">9:00 am</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">9:30 am</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">10:00 am</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">10:30 am</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">11:00 am</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">11:30 am</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Afternoon</h4>
          <ul className="space-y-1 text-gray-700">
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">12:00 pm</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">12:30 pm</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">1:00 pm</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">1:30 pm</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">2:00 pm</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Evening</h4>
          <ul className="space-y-1 text-gray-700">
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">3:00 pm</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">3:30 pm</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">4:00 pm</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">4:30 pm</li>
            <li className="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer">5:00 pm</li>
          </ul>
        </div>
      </div>
    ),
  };
 
  // Helper function to render a portal dropdown
  const renderPortalDropdown = (dropdownKey, targetRef) => {
    if (!activeDropdown || activeDropdown !== dropdownKey || !document.getElementById('dropdown-root')) {
      return null;
    }
 
    // Only render the portal dropdown for the hero section search bar
    if (isHeaderFixed) return null;
 
    return createPortal(
      <div
        style={{
          position: 'absolute',
          top: dropdownPosition.top + 'px',
          left: dropdownPosition.left + 'px',
          transform: 'translateX(-50%)', // Center the dropdown horizontally
          zIndex: 9999, // Ensure it's on top of everything
          // You might need to adjust min-width if not done inside dropdownData content
        }}
      >
        {dropdownData[dropdownKey]}
      </div>,
      document.getElementById('dropdown-root') // Render into the portal root
    );
  };
 
 
  return (
    <div className="min-h-screen font-lufga bg-[#f6f6f6] overflow-x-hidden pb-10">
      {/* Header */}
      <header
        ref={headerRef}
        className={`flex justify-between items-center px-6 py-4 transition-all duration-300 ${
          isHeaderFixed ? "fixed top-0 left-0 right-0 bg-white shadow-md z-[100]" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="cursor-pointer" loading="lazy" />
        </div>
 
        {/* Search bar inside fixed header (only visible when isHeaderFixed is true) */}
        {isHeaderFixed && (
          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 text-sm bg-white shadow-sm">
              {/* Treatments */}
              <div
                className="group relative flex-1 text-center"
                onMouseEnter={() => setActiveDropdown("treatments")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center justify-center gap-2 text-gray-700 whitespace-nowrap cursor-pointer">
                  <FaSearch className="text-black" />
                  <span className="hidden lg:inline">Treatments</span>
                  <span className="lg:hidden">All</span>
                </div>
                {activeDropdown === "treatments" && (
                  // These dropdowns are in fixed header, original positioning works
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[9999] min-w-max">
                    {dropdownData.treatments}
                  </div>
                )}
              </div>
 
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
 
              {/* Location */}
              <div
                className="group relative flex-1 text-center"
                onMouseEnter={() => setActiveDropdown("location")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center justify-center gap-2 text-gray-700 whitespace-nowrap cursor-pointer">
                  <FaMapMarkerAlt className="text-black" />
                  <span className="hidden lg:inline">Location</span>
                  <span className="lg:hidden">Near Me</span>
                </div>
                {activeDropdown === "location" && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[9999] min-w-max">
                    {dropdownData.location}
                  </div>
                )}
              </div>
 
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
 
              {/* Date */}
              <div
                className="group relative flex-1 text-center"
                onMouseEnter={() => setActiveDropdown("date")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center justify-center gap-2 text-gray-700 whitespace-nowrap cursor-pointer">
                  <FaCalendarAlt className="text-black" />
                  <span className="hidden lg:inline">Date</span>
                  <span className="lg:hidden">Any Date</span>
                </div>
                {activeDropdown === "date" && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[9999] min-w-max">
                    {dropdownData.date}
                  </div>
                )}
              </div>
 
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
 
              {/* Time */}
              <div
                className="group relative flex-1 text-center"
                onMouseEnter={() => setActiveDropdown("time")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center justify-center gap-2 text-gray-700 whitespace-nowrap cursor-pointer">
                  <FaClock className="text-black" />
                  <span className="hidden lg:inline">Time</span>
                  <span className="lg:hidden">Any Time</span>
                </div>
                {activeDropdown === "time" && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[9999] min-w-max">
                    {dropdownData.time}
                  </div>
                )}
              </div>
 
              <button className="bg-black cursor-pointer text-white rounded-full px-4 py-1 text-sm hover:bg-gray-800 whitespace-nowrap hidden lg:block">
                Search
              </button>
            </div>
          </div>
        )}
 
        <div className="flex items-center gap-4 text-gray-600">
          <span className="text-sm cursor-pointer hover:underline hidden md:inline">Log in</span>
          <FiMenu size={24} className="cursor-pointer" />
          <FiUser size={24} className="cursor-pointer" />
        </div>
      </header>
 
      {/* Placeholder to prevent content jump when header fixes */}
      {isHeaderFixed && <div style={{ height: headerRef.current?.offsetHeight || '72px' }}></div>}
 
      {/* Hero Section (Carousel and Title) - Visible ONLY when header is NOT fixed */}
      {!isHeaderFixed && (
        <>
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
        </>
      )}
 
      {/* Main Search Bar (visible when header is NOT fixed) */}
      <div
        ref={searchBarRef}
        className={`relative w-fit mx-auto mt-10 ${isHeaderFixed ? "hidden" : "block"} px-4 md:px-0 z-20`}
      >
        <div className="flex items-center justify-between border border-gray-900 rounded-full px-4 py-2 shadow-sm relative z-10">
          {/* Treatments */}
          <div
            ref={treatmentsRef} // Attach ref here
            className="group relative flex flex-col items-center"
            onMouseEnter={() => setActiveDropdown("treatments")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
              <FaSearch className="text-black" />
              All Treatments and venues
            </div>
            {/* Conditional rendering for dropdowns in hero section - now handled by Portal */}
            {/* The dropdown content itself is rendered via the portal below */}
          </div>
 
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
 
          {/* Location */}
          <div
            ref={locationRef} // Attach ref here
            className="group relative flex flex-col items-center"
            onMouseEnter={() => setActiveDropdown("location")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
              <FaMapMarkerAlt className="text-black" />
              Current location
            </div>
            {/* Portal will render this */}
          </div>
 
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
 
          {/* Date */}
          <div
            ref={dateRef} // Attach ref here
            className="group relative flex flex-col items-center"
            onMouseEnter={() => setActiveDropdown("date")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
              <FaCalendarAlt className="text-black" />
              Any date
            </div>
            {/* Portal will render this */}
          </div>
 
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
 
          {/* Time */}
          <div
            ref={timeRef} // Attach ref here
            className="group relative flex flex-col items-center"
            onMouseEnter={() => setActiveDropdown("time")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
              <FaClock className="text-black" />
              Any time
            </div>
            {/* Portal will render this */}
          </div>
 
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
 
          {/* Search Button */}
          <button className="bg-black cursor-pointer text-white rounded-full px-5 py-2 text-sm hover:bg-gray-800 whitespace-nowrap">
            Search
          </button>
        </div>
      </div>
 
      {/* PORTALS FOR DROPDOWNS IN HERO SECTION */}
      {renderPortalDropdown('treatments', treatmentsRef)}
      {renderPortalDropdown('location', locationRef)}
      {renderPortalDropdown('date', dateRef)}
      {renderPortalDropdown('time', timeRef)}
 
    </div>
  );
};
 
export default Header;