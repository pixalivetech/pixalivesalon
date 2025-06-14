// src/Components/Services/SummaryCard.jsx (No changes needed)

import React from 'react';
import { FiPhone, FiHeadphones, FiLock } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import image1 from '../../assets/Services/image1.png'; // Adjust path if necessary

const SummaryCard = ({
  selectedServices,
  handleRemoveService, // This prop will be null when called from ReviewConfirmPage
  buttonText,
  onContinue,
  selectedProfessional,
  selectedBookingDate,
  selectedBookingTime
}) => {
  const total = selectedServices.reduce((sum, service) => sum + service.price, 0);

  const formatSelectedDate = (date) => {
    if (!date) return '';
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="w-full lg:w-[320px] space-y-6">
      <div className="border border-gray-200 rounded-xl p-6">
        <div className="flex gap-3">
          <img src={image1} alt="Salon" className="w-16 h-16 rounded-md object-cover" />
          <div>
            <p className="font-medium">BarberCo - Men's Salon and Barbershop</p>
            <p className="text-sm text-gray-500">4.2 ★ (20)</p>
            <p className="text-sm text-gray-500">Koramangala, Bengaluru</p>
          </div>
        </div>

        {/* Display Selected Professional, Date, and Time */}
        {/* As per image */}
        <div className="mt-4 border-t border-gray-200 pt-4">
          <p className="font-semibold text-black text-sm mb-2">Appointment Details:</p>
          <ul className="text-sm text-gray-700 space-y-1">
            {selectedProfessional && (
              <li>
                <span className="font-medium">Professional:</span> {selectedProfessional.name}
              </li>
            )}
            {selectedBookingDate && (
              <li>
                <span className="font-medium">Date:</span> {formatSelectedDate(selectedBookingDate)}
              </li>
            )}
            {selectedBookingTime && (
              <li>
                <span className="font-medium">Time:</span> {selectedBookingTime}
              </li>
            )}
            {!selectedProfessional && !selectedBookingDate && !selectedBookingTime && (
                <li><span className="text-gray-500">No date/time selected yet.</span></li>
            )}
          </ul>
        </div>

        <div className="mt-4">
          {selectedServices.length === 0 ? (
            <p className="text-sm text-gray-500">No service selected</p>
          ) : (
            <ul className="space-y-2 text-sm text-gray-700">
              {selectedServices.map((service) => (
                <li key={service.id} className="flex justify-between items-center">
                  <span>{service.name}</span>
                  <div className="flex items-center gap-1">
                    <span>₹{service.price}</span>
                    {/* Only show remove button if handleRemoveService is provided */}
                    {handleRemoveService && (
                      <button onClick={() => handleRemoveService(service.id)} className="text-gray-500 hover:text-black">
                        <IoClose />
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex justify-between items-center mt-4 font-medium text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        {/* Render button only if buttonText is provided */}
        {buttonText && (
          <button
            className="w-full mt-4 bg-black text-white py-2 rounded-md transition hover:bg-gray-800"
            onClick={onContinue}
          >
            {buttonText}
          </button>
        )}
      </div>

      <div className="flex flex-col items-left text-left border border-gray-200 p-4 rounded-lg text-sm text-gray-700">
        <FiPhone className="text-2xl text-black mb-2" />
        <p className="font-semibold text-black">Give us a call</p>
        <p className="text-sm text-gray-500">We’d be happy to help you out with your booking</p>
      </div>

      <div className="flex flex-col items-left text-left border border-gray-200 p-4 rounded-lg text-sm text-gray-700">
        <FiHeadphones className="text-2xl text-black mb-2" />
        <p className="font-semibold text-black">24/7 customer support</p>
        <p className="text-sm text-gray-500">Get the answers you need, when you need them</p>
      </div>

      <div className="flex flex-col items-left text-left border border-gray-200 p-4 rounded-lg text-sm text-gray-700">
        <FiLock className="text-2xl text-black mb-2" />
        <p className="font-semibold text-black">Privacy protection</p>
        <p className="text-sm text-gray-500">We use SSL encryption to keep your data secure</p>
      </div>
    </div>
  );
};

export default SummaryCard;