import React from "react";
import SalonCard from "./SalonMapCard";
import { HiArrowLeft } from "react-icons/hi";
import FilterIcon from '../../assets/MapLanding/filter.svg'

export default function SalonMapList({ salons, onSelect, selectedSalon, onBack }) {
  return (
    <div className="w-[480px] p-3 border-r border-gray-300 overflow-y-auto h-screen bg-white hide-scrollbar">
      <div className="flex justify-between items-center mb-4">
        <p className="font-normal text-[24px]">
          {selectedSalon
            ? "Salon Details"
            : `${salons.length} venues within map area`}
        </p>
        <button
          onClick={onBack}
          className="px-2 py-1 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200"
        >
          {selectedSalon ? (
            <HiArrowLeft className="h-5 w-5 text-gray-700" />
          ) : (
            <>
              <img src={FilterIcon} alt="Filter-icon" />
            </>
          )}
        </button>
      </div>

      {selectedSalon ? (
        <SalonCard salon={selectedSalon} onClick={() => {}} />
      ) : (
        salons.map((salon) => (
          <SalonCard key={salon.id} salon={salon} onClick={onSelect} />
        ))
      )}
    </div>
  );
}
