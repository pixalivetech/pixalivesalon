import React from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function OpeningTimes() {
  const todayIndex = new Date().getDay(); // 0 = Sunday

  return (
   <div className="max-w-[1440px] mx-auto mt-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 md:p-4 font-lufga">
      <div className="max-w-xl w-full">
        <h2 className="text-3xl font-lufga text-black mb-6">Opening times</h2>
        <div className="space-y-4">
          {days.map((day, idx) => {
            const isToday = idx === todayIndex;
            return (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex font-lufga items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <span className={`text-[#6D6D6D] text-md md:text-lg ${isToday ? "text-md md:text-lg font-bold text-black" : ""}`}>
                    {day}
                  </span>
                </div>
                <span className={`text-[#6D6D6D] text-md md:text-lg${isToday ? " text-md md:text-lg font-bold text-black" : ""}`}>
                  10:00 AM - 10:00 PM
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
