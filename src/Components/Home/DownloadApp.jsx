import React from "react";
import phoneMain from "../../assets/home/phone1.png";  
import phoneMap from "../../assets/home/phone2.png";


const DownloadApp = () => {
  return (
    // The section now takes full width without initial padding
    <section className="py-8 md:px-10 lg:px-20">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 py-12 px-4 sm:px-6 lg:px-8"> {/* Added py-12 for vertical spacing, and px for responsive horizontal padding */}
        {/* ───────────────────────── LEFT */}
        <div className="w-full lg:w-6/12 text-center lg:text-left">
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
                src={"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"}
                alt="Get it on Google Play"
                className="h-12 w-auto object-contain rounded-md" // Added rounded-md for consistency
                loading="lazy"
              />
            </a>

            <a
              href="#"
              aria-label="Download on the App Store"
              className="shrink-0"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12 w-auto object-contain rounded-md" // Added rounded-md for consistency
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* ───────────────────────── RIGHT */}
        <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
          {/* Changed items-end to items-start to align content from the top */}
          <div className="flex items-start gap-6 sm:gap-10">
            {/* main phone - using placeholder image */}
            <img
              src={phoneMain} 
              alt="Pixalive booking screen"
              loading="lazy"
              className="w-28 sm:w-36 md:w-40 lg:w-48 xl:w-56 shadow-sm border border-gray-200 rounded-lg"
            />

            {/* map phone - using placeholder image */}
            <img
              src={phoneMap}
              alt="Nearby salons map"
              loading="lazy"
              className="w-28 sm:w-36 md:w-40 lg:w-48 xl:w-50 pt-5 mt-20 shadow-sm border-2 border-black rounded-lg" // pt-5 retained to maintain the staggered visual effect
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;