import React from "react";
import { IoClose } from "react-icons/io5";

export default function FilterBox({ onClose }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-transparent bg-opacity-50">
      <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-2xl font-semibold mb-4">Filter Options</h2>

        {/* Example filter content */}
        <div className="space-y-3">
          <div>
            <label className="block font-medium mb-1">Services</label>
            <div className="flex gap-3 flex-wrap">
              <button className="px-3 py-1 border rounded">Haircut</button>
              <button className="px-3 py-1 border rounded">Spa</button>
              <button className="px-3 py-1 border rounded">Color</button>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Price Range</label>
            <input type="range" className="w-full" />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button onClick={onClose} className="px-4 py-2 border rounded">
              Reset
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
