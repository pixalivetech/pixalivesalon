import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

// Assuming you still want to import these for the icons in the dropdown data
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear } from 'date-fns';

import logo from "../../assets/home/Techlogo.png";
import avatar from "../../assets/home/icon.jpg";

const HeaderSearchBar = () => {
  const { pathname } = useLocation();
  const barRef = useRef(null);

  /** 1 Should the bar be visible? */
  const [visible, setVisible] = useState(pathname !== "/");

  /** 2 ▸Remember its height once so we can create a spacer */
  const [barHeight, setBarHeight] = useState(0);

  // DROPDOWN STATES AND REFS (NEWLY ADDED)
  const [activeDropdown, setActiveDropdown] = useState(null); // State to manage which dropdown is open
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date

  // Refs for individual search bar items to calculate dropdown position (for FIXED header search bar)
  const fixedTreatmentsRef = useRef(null);
  const fixedLocationRef = useRef(null);
  const fixedDateRef = useRef(null);
  const fixedTimeRef = useRef(null);

  /* ────────────────────────────────────────────────────────── */
  /* Decide WHEN the search bar should appear / disappear     */
  /* ────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (pathname !== "/") {
      setVisible(true); // every non‑Home page → always show
      return;
    }

    const hero = document.getElementById("home-hero-header");
    if (!hero) { setVisible(true); return; }

    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  /* ────────────────────────────────────────────────────────── */
  /* Measure bar height once (after it’s in the DOM)          */
  /* ────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (visible && barRef.current && !barHeight) {
      setBarHeight(barRef.current.offsetHeight);
    }
  }, [visible, barHeight]);


  // Calendar rendering logic for custom header (from previous Header.jsx)
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


  // Dropdown data (from previous Header.jsx)
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
          }}
          inline
          calendarClassName="rounded-lg shadow-lg"
          renderCustomHeader={renderDatePickerHeader}
          dateFormat="MMMM d,yyyy"
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

  /* ────────────────────────────────────────────────────────── */
  /* If the bar shouldn’t be displayed, render nothing          */
  /* ────────────────────────────────────────────────────────── */
  if (!visible) return null;

  /* ────────────────────────────────────────────────────────── */
  /* Render spacer + fixed nav bar                            */
  /* ────────────────────────────────────────────────────────── */
  return (
    <>
      {/* 1 ◂ Spacer — stops layout jump */}
      <div style={{ height: barHeight }} aria-hidden />

      {/* 2 ◂ Fixed bar */}
      <header
        ref={barRef}
        className="
          fixed top-0 left-1/2 -translate-x-1/2 z-50
          w-full max-w-[1440px] px-6 // Added max-w-[1440px] and px-6
          border-b border-gray-200 bg-[#F6F6F6]
        "
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between"> {/* Removed px-4 md:px-8 lg:px-12 here as px-6 is on parent */}
          {/* logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Brand logo"
              className="h-9 w-auto shrink-0 cursor-pointer"
              loading="lazy"
            />
          </Link>

          {/* central search pill */}
          <div className="hidden lg:flex grow justify-center">
            <div className="flex items-center overflow-hidden rounded-full border border-gray-300 bg-white text-sm font-medium text-black">
              <div className="flex divide-x divide-gray-300">
                {/* Treatments */}
                <div
                  ref={fixedTreatmentsRef} // Attach ref
                  className="group relative text-center"
                  onMouseEnter={() => setActiveDropdown("treatments")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="px-6 py-3 whitespace-nowrap cursor-pointer">
                    All Treatments and venues
                  </span>
                  {activeDropdown === "treatments" && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[9999] min-w-max">
                      {dropdownData.treatments}
                    </div>
                  )}
                </div>

                {/* Location */}
                <div
                  ref={fixedLocationRef} // Attach ref
                  className="group relative text-center"
                  onMouseEnter={() => setActiveDropdown("location")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="px-6 py-3 whitespace-nowrap cursor-pointer">
                    Current&nbsp;location
                  </span>
                  {activeDropdown === "location" && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[9999] min-w-max">
                      {dropdownData.location}
                    </div>
                  )}
                </div>

                {/* Date */}
                <div
                  ref={fixedDateRef} // Attach ref
                  className="group relative text-center"
                  onMouseEnter={() => setActiveDropdown("date")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="px-6 py-3 whitespace-nowrap cursor-pointer">
                    Any date
                  </span>
                  {activeDropdown === "date" && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[9999] min-w-max">
                      {dropdownData.date}
                    </div>
                  )}
                </div>

                {/* Time */}
                <div
                  ref={fixedTimeRef} // Attach ref
                  className="group relative text-center"
                  onMouseEnter={() => setActiveDropdown("time")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="px-6 py-3 whitespace-nowrap cursor-pointer">
                    Any time
                  </span>
                  {activeDropdown === "time" && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[9999] min-w-max">
                      {dropdownData.time}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="button"
                className="ml-2 mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
              >
                <MagnifyingGlassIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* menu + avatar pill */}
          <div className="hidden sm:flex">
            <div className="flex items-center gap-4 rounded-full border border-gray-300 bg-white px-4 py-2">
              <Bars3Icon className="h-5 w-5 text-gray-700" />
              <img
                src={avatar}
                alt="User"
                className="h-8 w-8 rounded-full object-cover cursor-pointer"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* mobile search */}
        <div className="lg:hidden px-4 pb-4">
          <div className="flex items-center rounded-full border border-gray-300 bg-white pl-4 pr-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent py-2 pr-4 text-sm outline-none placeholder:text-gray-400"
            />
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
            >
              <MagnifyingGlassIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderSearchBar;