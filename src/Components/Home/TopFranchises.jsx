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
    // Set initial active index to 0 for better mobile experience if not explicitly set
    const [activeIndex, setActiveIndex] = useState(0);
    const activeFranchise = franchiseData[activeIndex];

    return (
        <div className="p-4 sm:p-6"> {/* Adjust padding for smaller screens */}
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black md:mb-6">
                {/* Smaller text on mobile, then scales up */}
                Top Franchises around you
            </h2>

            <div className="flex flex-col md:flex-row gap-4 md:gap-4"> {/* Reduced gap on mobile */}
                {/* Left Tabs */}
                <div className="flex flex-row md:flex-col gap-3 md:gap-4 w-full md:w-1/4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    {franchiseData.map((franchise, index) => (
                        <button
                            key={franchise.id}
                            onClick={() => setActiveIndex(index)}
                            className={`flex-shrink-0 w-28 h-20 sm:w-32 sm:h-24 md:w-auto md:h-[156px] bg-white rounded-lg flex items-center justify-center p-2 border transition-all duration-200 ${activeIndex === index ? 'border-black shadow-md' : 'border-gray-200'}`}
                            // Added flex-shrink-0, specific width/height for mobile, and removed aspect-video on mobile
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
                <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col justify-between min-h-[350px] md:min-h-[500px] relative"> {/* Adjusted min-height and padding for mobile */}
                    {/* Decorative Quote */}
                    <div className="absolute right-4 top-2 opacity-10 text-5xl text-gray-300 hidden md:block">
                        {/* Slightly smaller quote on mobile if shown */}
                        &rdquo;
                    </div>

                    {/* Description */}
                    <p className="font-medium text-lg sm:text-xl md:text-[34px] text-gray-800 leading-relaxed mb-3 flex-grow">
                        {/* Smaller text on mobile */}
                        {activeFranchise.description}
                    </p>

                    {/* Details */}
                    <div className="mt-auto">
                        <h4 className="text-sm font-semibold text-gray-900 sm:text-base">{activeFranchise.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-700 mt-1 sm:text-sm">
                            <FaStar className="text-blue-500" />
                            <span>{activeFranchise.rating}</span>
                            <span className="text-blue-600 cursor-pointer underline">
                                ({activeFranchise.reviews})
                            </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 sm:text-sm">
                            <FaMapMarkerAlt />
                            <span>{activeFranchise.location}</span>
                        </div>

                        <div className="border-t border-dashed border-gray-300 my-3 sm:my-4"></div> {/* Adjusted margin and color */}

                        <button className="bg-black text-white text-xs px-4 py-2 rounded hover:bg-gray-800 transition sm:text-sm sm:px-5 sm:py-2">
                            {/* Smaller button on mobile */}
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFranchises;