// src/Components/Services/ReviewConfirmPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { IoCheckmarkCircleOutline } from 'react-icons/io5'; // Import checkmark icon for success popup
import SummaryCard from './SummaryCard';

const professionalsData = [
  { id: 'any', name: 'Any professional', subtitle: 'For maximum availability', icon: '👥' },
  { id: 'premalatha', name: 'Premalatha', subtitle: 'Beautician', icon: 'P' },
  { id: 'somunasoth', name: 'Somunasoth', subtitle: 'Hair Stylist', icon: 'S' },
];

const ReviewConfirmPage = ({ selectedServices, totalAmount, bookingDetails }) => {
  const navigate = useNavigate();
  const [paymentOption, setPaymentOption] = useState("full_online");
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [bookingNotes, setBookingNotes] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for success popup

  useEffect(() => {
    console.log('ReviewConfirmPage mounted. Current URL:', window.location.pathname);
    console.log('Booking Details received:', bookingDetails);

    // Optional: If you want to automatically trigger the popup upon landing on this page
    // and if certain booking details are present, you could add logic here.
    // However, the current requirement is to show it *after* clicking 'Confirm Appointment' here.
  }, [bookingDetails]);

  const paymentOptions = [
    { value: "full_online", label: "I'll make the full payment online" },
    { value: "pay_at_salon", label: "Pay at the salon" },
  ];

  const handlePaymentOptionChange = (value) => {
    setPaymentOption(value);
    setShowPaymentOptions(false);
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page (ServicesProfessional)
  };

  const handleFinalConfirmBooking = () => {
    console.log("--- Final Booking Data ---");
    console.log("Selected Services:", selectedServices);
    console.log("Total Amount:", totalAmount);
    console.log("Payment Option:", paymentOption);
    console.log("Booking Notes:", bookingNotes);
    console.log("Booking Details (Prof, Date, Time):", bookingDetails);
    console.log("--------------------------");

    // This is where the popup is triggered instead of navigating
    setShowSuccessPopup(true);
    // You would typically send this data to your backend here
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
    // Navigate to the home page or a specific service start page after closing the popup
    navigate('/'); // or navigate('/service')
  };

  // Find the selected professional object from the imported data
  const selectedProfessionalObj = professionalsData.find(
    (p) => p.id === bookingDetails.professional
  );

  // Convert ISO date string back to Date object for SummaryCard display
  const bookingDateObject = bookingDetails.date ? new Date(bookingDetails.date) : null;

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-[1440px] mx-auto relative">
      {/* Booking Success Pop-up - Conditionally rendered */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full relative">
            <IoCheckmarkCircleOutline className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Booking Confirmed!</h3>
            <p className="text-gray-700 mb-6">Your appointment has been successfully booked.</p>
            <button
              onClick={handleCloseSuccessPopup}
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main content of the Review & Confirm Page */}
      <div className="flex-1">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="text-gray-500">Home</Link> &nbsp;&gt;&nbsp;
          <Link to="#" className="text-gray-500">Salon</Link> &nbsp;&gt;&nbsp;
          <Link to="#" className="text-gray-500">Bodycraft Salon & Spa</Link> &nbsp;&gt;&nbsp;
          <span className="text-black font-semibold">Booking Service</span>
        </div>

        <div className="flex items-center mb-6">
          <button onClick={handleBack} className="flex items-center text-gray-700 hover:text-black">
            <FiChevronLeft className="text-2xl" />
          </button>
          <h2 className="text-3xl font-bold ml-2">Review & Confirm</h2>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-normal mb-4">Online Payment</h3>
          <div className="relative">
              <div className="border border-gray-300 rounded-lg p-4 cursor-pointer flex justify-between items-center"
                   onClick={() => setShowPaymentOptions(!showPaymentOptions)}>
                <span>{paymentOptions.find(opt => opt.value === paymentOption)?.label}</span>
                {showPaymentOptions ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              {showPaymentOptions && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-2 z-10 shadow-lg">
                  {paymentOptions.map((option) => (
                    <div
                      key={option.value}
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => { e.stopPropagation(); handlePaymentOptionChange(option.value); }}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-normal mb-4">Discount Code</h3>
          <button className="flex items-center justify-between w-full border border-gray-300 rounded-lg p-4 text-left">
            <span className="flex items-center gap-2 text-gray-700">
              <MdOutlineLocalOffer className="text-xl" />
              Enter Discount Code
            </span>
            <FiChevronRight className="text-xl text-gray-500" />
          </button>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-normal mb-4">Booking Notes</h3>
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-y"
            placeholder="Add any special requests or notes for the salon..."
            value={bookingNotes}
            onChange={(e) => setBookingNotes(e.target.value)}
          ></textarea>
        </div>
      </div>

      {/* Summary Card - Its onContinue prop will now trigger the popup */}
      <SummaryCard
        selectedServices={selectedServices}
        onContinue={handleFinalConfirmBooking}
        buttonText="Confirm Appointment"
        selectedProfessional={selectedProfessionalObj}
        selectedBookingDate={bookingDateObject}
        selectedBookingTime={bookingDetails.time}
      />
    </div>
  );
};

export default ReviewConfirmPage;