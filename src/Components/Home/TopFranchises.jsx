import React, { useState } from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import franchise1 from '../../assets/home/franchise1.png';
import franchise2 from '../../assets/home/franchise2.png';
import franchise3 from '../../assets/home/franchise3.png';

const franchiseData = [
    {
        id: 1,
        image: franchise1,
        alt: 'Nails Beyond',
        name: 'Nails Beyond',
        rating: 4.5,
        reviews: 25,
        location: 'Koramangala, Bengaluru',
        description: 'Experience premium nail care with our expert technicians, offering stunning lashes and brows in a hygienic setting.'
    },
    {
        id: 2,
        image: franchise2,
        alt: 'Body Craft',
        name: 'Body Craft Clinic & Salon',
        rating: 4.3,
        reviews: 32,
        location: 'Electronic City, Bengaluru',
        description: 'Discover the best brands near you, offering top-notch services and exclusive deals to enhance your grooming experience.'
    },
    {
        id: 3,
        image: franchise3,
        alt: 'D5N',
        name: 'D5N Salon Generation',
        rating: 4.2,
        reviews: 18,
        location: 'HSR Layout, Bengaluru',
        description: 'Reimagine your style with D5N — where next-gen grooming meets unmatched creativity and comfort.'
    }
];

const TopFranchises = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const activeFranchise = franchiseData[activeIndex];

    return (
        <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20 mt-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-black">
                Top Franchises around you
            </h2>

            <div className="flex flex-col md:flex-row gap-6 md:gap-4">
                {/* Left Tabs */}
                <div className="flex md:flex-col gap-4 w-full md:w-1/4 min-h-[300px] md:min-h-[500px] overflow-x-auto md:overflow-visible">
                    {franchiseData.map((franchise, index) => (
                        <button
                            key={franchise.id}
                            onClick={() => setActiveIndex(index)}
                            className={`bg-white rounded-lg flex items-center justify-center aspect-video md:h-[156px] p-3 border transition-all duration-200 ${activeIndex === index ? 'border-black shadow-md' : 'border-gray-200'}`}
                        >
                            <img
                                src={franchise.image}
                                alt={franchise.alt}
                                className="object-contain h-full max-h-full w-auto"
                                loading="lazy"
                            />
                        </button>
                    ))}
                </div>

                {/* Right Detail */}
                <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-6 flex flex-col justify-between min-h-[400px] md:min-h-[500px] relative">
                    {/* Decorative Quote */}
                    <div className="absolute right-6 top-4 opacity-10 text-6xl text-gray-300 hidden md:block">
                        &rdquo;
                    </div>

                    {/* Description */}
                    <p className="font-medium text-xl sm:text-2xl md:text-[34px] text-gray-800 leading-relaxed mb-4 flex-grow">
                        {activeFranchise.description}
                    </p>

                    {/* Details */}
                    <div className="mt-auto">
                        <h4 className="text-base font-semibold text-gray-900">{activeFranchise.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-700 mt-1">
                            <FaStar className="text-blue-500" />
                            <span>{activeFranchise.rating}</span>
                            <span className="text-blue-600 cursor-pointer underline">
                                ({activeFranchise.reviews})
                            </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                            <FaMapMarkerAlt />
                            <span>{activeFranchise.location}</span>
                        </div>

                        <div className="border-t border-dashed border-gray-500 my-4"></div>

                        <button className="bg-black text-white text-sm px-5 py-2 rounded hover:bg-gray-800 transition">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFranchises;
