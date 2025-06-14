import React from "react";

// Manual icon imports
import AirConditionedIcon from "./../../assets/Product/airdrop.png";
import OnlinePaymentIcon from "./../../assets/Product/invoice-02.png";
import BikeParkingIcon from "./../../assets/Product/parking-area-square.png";
import CarParkingIcon from "./../../assets/Product/car-parking-02.png";
import StaffVaccinatedIcon from "./../../assets/Product/vaccine.png";
import WashroomIcon from "./../../assets/Product/toilet-01.png";

const amenities = [
  { icon: AirConditionedIcon, label: "Air Conditioned" },
  { icon: OnlinePaymentIcon, label: "Online Payment" },
  { icon: BikeParkingIcon, label: "Bike Parking" },
  { icon: CarParkingIcon, label: "Car Parking" },
  { icon: StaffVaccinatedIcon, label: "Staff Vaccinated" },
  { icon: WashroomIcon, label: "Washroom" },
];

const AmenitiesSection = () => {
  return (
    <div className="max-w-[1440px] mt-4 md:mt-15 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-30 pt-8 md:p-4 font-lufga">
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold text-black mb-8">Amenities</h2>

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Half - Card */}
        <div className="w-full">
          <div className="bg-[Black/100] rounded-xl border border-[#E7E7E7] p-6 ">
            <div className="grid grid-cols-3 gap-y-10 gap-x-6">
              {amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start text-left"
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-8 h-8 mb-2 object-contain"
                  />
                  <p className="text-sm font-medium text-black">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Half - Reserved / Empty */}
        <div className="hidden md:block md: w-2/3" />
      </div>
    </div>
  );
};

export default AmenitiesSection;
