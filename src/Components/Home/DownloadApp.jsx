import React from "react";
import phoneMain from "../../assets/home/phone1.png";   // booking‑screen phone (larger)

import phoneMap from "../../assets/home/phone2.png";

const DownloadApp = () => {
  return (
    <section className="bg-[#f6f6f6] py-14 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-4 sm:px-8 lg:px-12">
        {/* ───────────────────────── LEFT */}
        <div className="w-full lg:w-5/12 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
            Download the<br className="hidden sm:block" /> Pixalive&nbsp;app
          </h2>

          <p className="mt-6 text-gray-600 sm:text-lg max-w-md mx-auto lg:mx-0">
            Discover&nbsp;&amp;&nbsp;Book with Top&nbsp;Rated Salons&nbsp;&amp;&nbsp;Spas near you&nbsp;— Anytime, Anywhere.
          </p>

          {/* badges */}
          <div className="mt-10 flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              aria-label="Get it on Google Play"
              className="shrink-0"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </a>

            <a
              href="#"
              aria-label="Download on the App Store"
              className="shrink-0"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* ───────────────────────── RIGHT */}
        <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
          <div className="flex items-end gap-6 sm:gap-10">
            {/* main phone */}
            <img
              src={phoneMain}
              alt="Pixalive booking screen"
              loading="lazy"
              className="w-28 sm:w-36 md:w-40 lg:w-48 xl:w-56 shadow-sm border"
            />

            {/* map phone */}
            <img
              src={phoneMap}
              alt="Nearby salons map"
              loading="lazy"
              className="w-28 sm:w-36 md:w-40 lg:w-48 xl:w-56 pt-5 shadow-sm border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
