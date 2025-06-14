import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react';
import rec1 from './../../assets/Product/rec.png'
import rec2 from './../../assets/Product/rec.png'

const salons = [
    {
        id: 1,
        name: 'Hair Speak Family Salon',
        rating: 4.3,
        reviews: 32,
        location: 'Electronic City, Bengaluru',
        type: 'Hair Salon',
        image: rec1,
    },
    {
        id: 2,
        name: 'Celebrate life Elite Salon',
        rating: 4.3,
        reviews: 32,
        location: 'Electronic City, Bengaluru',
        type: 'Hair Salon',
        image: rec2,
    },
   
    
];

const RecentlyViewed = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;

    const handleNext = () => {
        setStartIndex((prev) => (prev + itemsPerPage) % salons.length);
    };

    const handlePrev = () => {
        setStartIndex((prev) =>
            (prev - itemsPerPage + salons.length) % salons.length
        );
    };

    const visibleSalons = [
        ...salons.slice(startIndex, startIndex + itemsPerPage),
        ...(startIndex + itemsPerPage > salons.length
            ? salons.slice(0, (startIndex + itemsPerPage) % salons.length)
            : []),
    ];

    return (
        <div className="px-4 py-8 md:px-10 mt-10 lg:px-20">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-lufga text-black">Other locations</h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {visibleSalons.map((salon) => (
                    <div key={salon.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <img src={salon.image} alt={salon.name} className="w-full h-40 object-cover" />
                        <div className="p-4 space-y-2">
                            <h3 className="font-medium text-lg text-black">{salon.name}</h3>
                            <div className="flex items-center space-x-2 text-sm">
                                <span className="font-semibold text-black">{salon.rating}</span>
                                <Star className="w-4 h-4 fill-black text-black" />
                                <span className="text-blue-600 underline cursor-pointer">({salon.reviews})</span>
                            </div>
                            <div className="flex items-center text-black text-md">
                                <MapPin className="w-4 h-4 mr-1" />
                                {salon.location}
                            </div>
                            <span className="inline-block mt-2 px-2 py-1 text-md border border-gray-300 rounded-full">
                                {salon.type}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentlyViewed;
