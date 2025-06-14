// src/components/Footer/Footer.jsx
import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import logo from "../../assets/home/Techlogo.png";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* ─── Decorative word‑mark ─────────────────────────── */}
      <h1
  className="
    pointer-events-none w-full select-none
    absolute inset-x-0 bottom-0
    text-center whitespace-nowrap
    font-extrabold leading-none tracking-tight
    text-[40vw] sm:text-[32vw] md:text-[22vw] lg:text-[18vw] xl:text-[16vw]
    text-white/10
  "
>
  Pixaliv
</h1>


      {/* ─── Content container ───────────────────────────── */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          pt-16
          pb-[48vw] sm:pb-[36vw] md:pb-[24vw] xl:pb-[20vw]
          space-y-14
        "
      >
        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Brand / tagline */}
          <div className="flex-1 max-w-md space-y-6">
            <img
              src={logo}
              alt="Pixalive logo"
              className="w-10 h-10"
              loading="lazy"
            />
            <p className="text-sm leading-relaxed text-gray-200">
              From bold ideas to real‑world tech— <br />
              <span className="font-medium">Pixalive</span> is where innovation
              comes alive.
            </p>
          </div>

          {/* Contact */}
          <div className="flex-1 max-w-md lg:text-right">
            <h3 className="text-lg font-semibold mb-5">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-300 lg:flex lg:flex-col lg:items-end">
              <li className="flex items-start gap-3 lg:justify-end">
                <EnvelopeIcon className="w-4 h-4 shrink-0" />
                <a
                  href="mailto:contact@pixalivetech.com"
                  className="hover:underline"
                >
                  contact@pixalivetech.com
                </a>
              </li>
              <li className="flex items-start gap-3 lg:justify-end">
                <PhoneIcon className="w-4 h-4 shrink-0" />
                <a href="tel:+919178758456" className="hover:underline">
                  +91 91785 84566
                </a>
              </li>
              <li className="flex items-start gap-3 lg:justify-end">
                <MapPinIcon className="w-4 h-4 shrink-0" />
                <address className="not-italic leading-snug text-left lg:text-right">
                  Pixalive Salon Network Private Limited <br />
                  Electronic City, Bengaluru
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-xs text-gray-400">
          <p>© 2025 Pixalive Technology Services. All rights reserved.</p>

          <nav className="flex gap-8">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
