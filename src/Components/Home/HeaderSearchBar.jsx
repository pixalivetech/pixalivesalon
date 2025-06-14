// components/HeaderSearchBar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

import logo   from "../../assets/home/Techlogo.png";
import avatar from "../../assets/home/icon.jpg";

const HeaderSearchBar = () => {
  const { pathname } = useLocation();
  const barRef     = useRef(null);

  /** 1 Should the bar be visible? */
  const [visible, setVisible] = useState(pathname !== "/");

  /** 2 ▸Remember its height once so we can create a spacer */
  const [barHeight, setBarHeight] = useState(0);

  /* ────────────────────────────────────────────────────────── */
  /* Decide WHEN the search bar should appear / disappear      */
  /* ────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (pathname !== "/") {
      setVisible(true);          // every non‑Home page → always show
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
  /* Measure bar height once (after it’s in the DOM)           */
  /* ────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (visible && barRef.current && !barHeight) {
      setBarHeight(barRef.current.offsetHeight);
    }
  }, [visible, barHeight]);

  /* ────────────────────────────────────────────────────────── */
  /* If the bar shouldn’t be displayed, render nothing         */
  /* ────────────────────────────────────────────────────────── */
  if (!visible) return null;

  /* ────────────────────────────────────────────────────────── */
  /* Render spacer + fixed nav bar                             */
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
          w-full max-w-[1440px]
          border-b border-gray-200 bg-[#F6F6F6]
        "
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">
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
                <span className="px-6 py-3 whitespace-nowrap">
                  All Treatments and venues
                </span>
                <span className="px-6 py-3 whitespace-nowrap">
                  Current&nbsp;location
                </span>
                <span className="px-6 py-3 whitespace-nowrap">
                  Any date
                </span>
                <span className="px-6 py-3 whitespace-nowrap">
                  Any time
                </span>
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
