import React, {useState} from "react";
import StarIcon from '../../assets/MapLanding/star.svg'
import LocationIcon from '../../assets/MapLanding/location.svg'

export default function SalonMapCard({ salon, onClick }) {
    const [showAll, setShowAll] = useState(false);

    // Number of services to show initially
    const initialCount = 3;

    // Services to display depending on toggle
    const displayedServices = showAll ? salon.services : salon.services.slice(0, initialCount);
    return (
        <div
            onClick={() => onClick(salon)}
            className="mb-5 cursor-pointer rounded-lg shadow transition bg-white p-3 hover:bg-gray-50 py-5"
        >
            <img
                src={salon.image}
                alt={salon.name}
                className="w-full h-70 rounded-lg object-cover my-3"
            />
            <h3 className="my-3 text-xl font-normal">{salon.name}</h3>
            <p className="text-lg font-medium my-2 flex items-center gap-x-2"> <img src={StarIcon} alt="star-icon" /> {salon.rating} <span className="text-[#3348ff]">(32)</span></p>
            <p className="text-xl font-normal text-[#7A7A7A] flex items-center gap-x-2 my-2 py-2 border-b border-gray-300"><img src={LocationIcon} alt="location-icon" />{salon.location}</p>

            {salon.services.map((s, idx) => (
                <div key={idx} className="flex justify-between text-sm py-3">
                    <div>
                        <p className="text-xl font-normal my-2">{s.name}</p>
                        <p className="text-xs font-normal text-gray-500">{s.duration}</p>
                    </div>
                    <p className="my-2">{s.price}</p>
                </div>
            ))}
            
            {/* Show toggle button only if more services exist */}
            {salon.services.length > initialCount && (
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // prevent triggering card click
                        setShowAll(!showAll);
                    }}
                    className="text-blue-600 hover:underline mt-2"
                >
                    {showAll ? "Show less" : "See all services"}
                </button>
            )}
        </div>
    );
}
