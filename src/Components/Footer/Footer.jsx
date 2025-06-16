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
            {/* decorative wordmark */}
            <h1
                className="
          pointer-events-none select-none
          absolute -bottom-4 md:-bottom-8
          left-1/2 -translate-x-1/2
          font-extrabold leading-none
          text-[28vw] md:text-[16vw] xl:text-[12vw]
          tracking-tighter text-white/10"
            >
                Pixalive
            </h1>

            {/* Content container */}
            <div
                className="
          relative z-10
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          pt-16
          pb-[32vw] md:pb-[18vw] xl:pb-[14vw]
          space-y-14"
            >
                {/* top section */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
                    {/* brand / tagline */}
                    <div className="flex-1 max-w-md space-y-6">
                        <img src={logo} alt="Pixalive logo" className="w-10 h-10" loading="lazy" />
                        <p className="text-sm leading-relaxed text-gray-200">
                            From bold ideas to real‑world tech— <br />
                            <span className="font-medium">Pixalive</span> is where innovation
                            comes alive.
                        </p>
                    </div>

                    {/* contact */}
                    <div className="flex-1 max-w-md lg:text-right">
                        <h3 className="text-lg font-semibold mb-5">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-300 lg:items-end lg:flex lg:flex-col">
                            <li className="flex items-start lg:justify- gap-3">
                                <EnvelopeIcon className="w-4 h-4 shrink-0" />
                                <a
                                    href="mailto:contact@pixalivetech.com"
                                    className="hover:underline"
                                >
                                    contact@pixalivetech.com
                                </a>
                            </li>
                            <li className="flex items-start lg:justify-end gap-3">
                                <PhoneIcon className="w-4 h-4 shrink-0" />
                                <a href="tel:+919178758456" className="hover:underline">
                                    +91 91785 84566
                                </a>
                            </li>
                            <li className="flex items-start lg:justify-end gap-3">
                                <MapPinIcon className="w-4 h-4 shrink-0" />
                                <address className="not-italic leading-snug text-left lg:text-right">
                                    Pixalive Salon Network Private Limited <br />
                                    Electronic City, Bengaluru
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* bottom bar */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-xs text-gray-400">
                    <p>© 2025 Pixalive Technology Services. All rights reserved.</p>

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
