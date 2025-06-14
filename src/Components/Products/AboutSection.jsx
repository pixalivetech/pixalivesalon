import React from "react";
import { Link } from "react-router-dom"; // Import Link
import MapImage from "../../assets/Product/map.png"; // Replace with your imported image path

const AboutSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-30 pt-8 md:p-4 font-lufga">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-lufga text-black">About</h2>
          <p className="text-[#6D6D6D] text-base leading-relaxed">
            Pixalive Salon Network connects top salons with customers through a seamless digital platform, offering easy booking, exclusive deals, and quality services.
          </p>

          <div className="w-full overflow-hidden rounded-lg shadow-md">
            <img
              src={MapImage}
              alt="Salon Location Map"
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="text-[#000000] text-base mt-2">
            Banashankari 3rd Stage, Block Sree Complex, No.59, Banashankari, 7
            Block, Bengaluru, Karnataka{" "}
            <Link
              to="/map"
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Get directions
            </Link>
          </p>
        </div>

        {/* Right Side Spacer for layout symmetry */}
        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
};

export default AboutSection;
