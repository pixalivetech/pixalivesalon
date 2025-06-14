import React from 'react';
import bg from '../../assets/Salon/bgimage.jpg' // Make sure this path is correct relative to your component file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HairSalonSearch = () => {
  return (
    <div className=" p-6">
      <div className="relative w-full  mx-auto rounded-lg  overflow-hidden">
        {/* Background Image / Overlay */}
        <div
          className="relative bg-cover bg-center h-[500px] flex items-center justify-center p-6"
          style={{ backgroundImage: `url(${bg})` }} // <--- CHANGE THIS LINE
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-normal mb-4">Find Hair Salons near me</h1>
            <p className="text-xl mb-8">Search for top hair salons near me</p>
            <Link to='/map'>
            <button className="bg-white cursor-pointer text-gray-800 font-semibold py-3 px-8 rounded-lg  hover:bg-gray-200 transition duration-300">
              Search near me
            </button></Link>
          </div>
        </div>

        {/* Suggested Searches */}
        <div className="py-8 px-4 sm:px-8 bg-[#f6f6f6] flex flex-wrap justify-center gap-4">
          <button className=" text-gray-700 py-2 px-5 rounded-full border cursor-pointer border-gray-300 hover:bg-gray-100 transition duration-300 text-sm">
            Hair Salon in E-City Near Me
          </button>
          <button className="bg-white text-gray-700 py-2 px-5 rounded-full border cursor-pointer border-gray-300 hover:bg-gray-100 transition duration-300 text-sm">
            Hair Salon in E-City Near Me
          </button>
          <button className="bg-white text-gray-700 py-2 px-5 rounded-full border cursor-pointer border-gray-300 hover:bg-gray-100 transition duration-300 text-sm">
            Hair Salon in E-City Near Me
          </button>
          <button className="bg-white text-gray-700 py-2 px-5 rounded-full border cursor-pointer border-gray-300 hover:bg-gray-100 transition duration-300 text-sm">
            Hair Salon in E-City Near Me
          </button>
          
         
        </div>
      </div>
    </div>
  );
};

export default HairSalonSearch;