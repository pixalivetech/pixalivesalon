import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react';
import rec1 from '../../assets/home/rat1.jpg'
import rec2 from '../../assets/home/rec2.png'
import rec3 from '../../assets/home/rec3.png'
import rec4 from '../../assets/home/rec5.png'
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
        type: 'Massage',
        image: rec2,
    },
    {
        id: 3,
        name: 'Joni Signature Salon',
        rating: 4.3,
        reviews: 32,
        location: 'Electronic City, Bengaluru',
        type: 'Medspa',
        image: rec3,
    },
    {
        id: 4,
        name: 'Classic Cut Unisex Salon',
        rating: 4.3,
        reviews: 32,
        location: 'Electronic City, Bengaluru',
        type: 'Hair Salon',
        image: rec4,
    },
    {
        id: 5,
        name: 'Urban Trends Salon',
        rating: 4.3,
        reviews: 32,
        location: 'Electronic City, Bengaluru',
        type: 'Hair Salon',
        image: 'https://source.unsplash.com/featured/?salon5',
    },
    {
        id: 6,
        name: 'Royal Touch Beauty Lounge',
        rating: 4.3,
        reviews: 32,
        location: 'Electronic City, Bengaluru',
        type: 'Spa',
        image: 'https://source.unsplash.com/featured/?salon6',
    },
];

const TopRated = () => {
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
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-black">Top Rated products</h2>
                <div className="flex space-x-2">
                    <button onClick={handlePrev} className="p-2 cursor-pointer rounded-full hover:bg-gray-400">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={handleNext} className="p-2 cursor-pointer rounded-full hover:bg-gray-400">
                        <ChevronRight size={20} />
                    </button>
                </div>
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
                            <div className="flex items-center text-black text-sm">
                                <MapPin className="w-4 h-4 mr-1" />
                                {salon.location}
                            </div>
                            <span className="inline-block mt-2 px-2 py-1 text-xs bg-gray-100 rounded-full">
                                {salon.type}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRated;
