import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { FiUser, FiMenu } from "react-icons/fi";
import logo from "../../assets/home/Techlogo.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear, format } from "date-fns";

const Header = () => {
  /* ───────────────────────────────────────── state ───────────────────────────────────────── */
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

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

  /* ─────────────────────────────────── helpers / handlers ─────────────────────────────────── */
  const handleSelectTreatment = (val) => {
    setSelectedTreatment(val);
    setActiveDropdown(null);
  };
  const handleSelectLocation = (val) => {
    setSelectedLocation(val);
    setActiveDropdown(null);
  };
  const handleSelectTime = (val) => {
    setSelectedTime(val);
    setActiveDropdown(null);
  };

  /* ───────────────────────────── effect: position portal dropdowns ───────────────────────────── */
  useEffect(() => {
    const updatePos = () => {
      const map = {
        treatments: treatmentsRef,
        location: locationRef,
        date: dateRef,
        time: timeRef,
      };
      const ref = map[activeDropdown];
      if (ref && ref.current) {
        const r = ref.current.getBoundingClientRect();
        setDropdownPosition({
          top: r.bottom + window.scrollY + 5,
          left: r.left + r.width / 2,
        });
      }
    };
    if (activeDropdown) {
      updatePos();
      window.addEventListener("scroll", updatePos);
      window.addEventListener("resize", updatePos);
    }
    return () => {
      window.removeEventListener("scroll", updatePos);
      window.removeEventListener("resize", updatePos);
    };
  }, [activeDropdown]);

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
        onChange={(d) => {
          setSelectedDate(d);
          setActiveDropdown(null);
        }}
        inline
        calendarClassName="rounded-lg shadow-lg"
        renderCustomHeader={renderDatePickerHeader}
        dateFormat="MMMM d, BBBB"
      />
    ),

    time: (
      <div className="p-6 bg-white rounded-lg shadow-lg flex ">
        {[
          ["Morning", ["9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am"]],
          ["Afternoon", ["12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm"]],
          ["Evening", ["3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm"]],
        ].map(([title, arr]) => (
          <div key={title}>
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
    if (!activeDropdown || activeDropdown !== key || !document.getElementById("dropdown-root"))
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
        className=" shadow-sm z-[100]" // Removed fixed positioning
      >
        <div className="max-w-[1440px] mx-auto flex justify-between items-center p-6">
          <img src={logo} alt="logo" loading="lazy" className="cursor-pointer" />

          {/* Search bar */}
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
                <div className="flex items-center justify-center gap-2 text-gray-700 cursor-pointer">
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
            <FiMenu size={24} className="cursor-pointer" />
            <FiUser size={24} className="cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Portal mounts for dropdowns */}
      {renderPortalDropdown("treatments")}
      {renderPortalDropdown("location")}
      {renderPortalDropdown("date")}
      {renderPortalDropdown("time")}
    </>
  );
};

export default Header;