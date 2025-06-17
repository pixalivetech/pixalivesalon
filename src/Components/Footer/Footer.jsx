import React from "react";
import { FaLocationDot } from "react-icons/fa6"; // location icon
import logo from "../../assets/home/Techlogo.png"; // your small logo
import pixaliveFull from "../../assets/home/pixalive.png"; // full Pixalive image

const Footer = () => {
  return (
    <div className="bg-black text-white w-full">
      {/* Bounded Container: Max width 1440px */}
      <div className=" px-10 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-5">
            <img src={logo} alt="Pixalive Logo" className="w-10 h-10" />
            <p className="text-sm md:text-base leading-relaxed">
              From bold ideas to real-world tech— <br />
              Pixalive is where innovation comes alive.
            </p>
          </div>

          {/* Right Content */}
          <div className="md:w-1/3 flex flex-col space-y-3">
            <h3 className="font-semibold text-lg">Contact</h3>

            {/* ✅ Email link */}
            <a
              href="mailto:contact@pixalivetech.com"
              className="text-sm md:text-base hover:underline"
            >
              contact@pixalivetech.com
            </a>

            {/* ✅ WhatsApp phone link */}
            <a
              href="https://wa.me/918778584566"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base hover:underline"
            >
              +91 87785 84566
            </a>

            <div className="flex items-start gap-2">
              <FaLocationDot className="text-lg mt-1" />
              <p className="text-sm md:text-base leading-tight">
                Pixalive Salon Network Private Limited <br />
                Electronic City , Bangaluru
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4  mt-10 md:pt-6 pt-2">
          <p className="text-sm md:text-md text-white/80">
            © 2025 Pixalive Technology Services. All rights reserved.
          </p>

          <div className="flex flex-row gap-10 md:gap-22 md:w-1/3 text-sm md:text-md space-y-3">
            {/* ✅ Navigate to home on click */}
            <a href="/" className="cursor-pointer hover:underline">
              Terms of Use
            </a>
            <a href="/" className="cursor-pointer hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Full Width Pixalive Image - No Max Width */}
      <div className="w-full">
        <img
          src={pixaliveFull}
          alt="Pixalive Full Logo"
          className="w-full h-auto  mt-4 md:mt-10 object-cover"
        />
      </div>
    </div>
  );
};

export default Footer;
