// src/Components/Services/ReviewConfirmPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // FiX is no longer needed here
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import SummaryCard from './SummaryCard';

const professionalsData = [
  { id: 'any', name: 'Any professional', subtitle: 'For maximum availability', icon: '👥' },
  { id: 'premalatha', name: 'Premalatha', subtitle: 'Beautician', icon: 'P' },
  { id: 'somunasoth', name: 'Somunasoth', subtitle: 'Hair Stylist', icon: 'S' },
];

// Dummy coupon data (you would typically fetch this from an API)
const availableCoupons = [
  { id: 'BARBER20_1', code: 'BARBER20', offer: 'Get 20% off', details: 'Valid on all barber services. Minimum spend ₹500.' },
  { id: 'SUMMER10', code: 'SUMMER10', offer: 'Get 10% off', details: 'Valid for new customers only. Max discount ₹100.' },
  { id: 'FIRSTVISIT', code: 'FIRSTVISIT', offer: 'Get ₹150 off', details: 'Applicable on your first booking over ₹300.' },
];

const ReviewConfirmPage = ({ selectedServices, totalAmount, bookingDetails }) => {
  const navigate = useNavigate();
  const [paymentOption, setPaymentOption] = useState("full_online");
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [bookingNotes, setBookingNotes] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showDiscountSection, setShowDiscountSection] = useState(false); // Renamed for clarity: controls inline section visibility
  const [couponInput, setCouponInput] = useState('');
  const [selectedCouponRadio, setSelectedCouponRadio] = useState(null);

  useEffect(() => {
    console.log('ReviewConfirmPage mounted. Current URL:', window.location.pathname);
    console.log('Booking Details received:', bookingDetails);
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
    navigate(-1);
  };

  const handleFinalConfirmBooking = () => {
    console.log("--- Final Booking Data ---");
    console.log("Selected Services:", selectedServices);
    console.log("Total Amount:", totalAmount);
    console.log("Payment Option:", paymentOption);
    console.log("Booking Notes:", bookingNotes);
    console.log("Booking Details (Prof, Date, Time):", bookingDetails);
    console.log("Applied Coupon:", selectedCouponRadio || couponInput);
    console.log("--------------------------");

    setShowSuccessPopup(true);
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
    navigate('/');
  };

  const handleApplyCoupon = () => {
    // Implement coupon application logic here
    console.log('Applying coupon:', couponInput || selectedCouponRadio);
    // You'd typically validate the coupon, apply discount, and then collapse the section
    setShowDiscountSection(false); // Close the section after applying
    setCouponInput(''); // Clear input after attempting to apply
    setSelectedCouponRadio(null); // Clear radio selection
    // In a real app, you would update totalAmount based on the coupon
  };

  // Find the selected professional object
  const selectedProfessionalObj = professionalsData.find(
    (p) => p.id === bookingDetails.professional
  );

  // Convert ISO date string back to Date object for SummaryCard display
  const bookingDateObject = bookingDetails.date ? new Date(bookingDetails.date) : null;

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-[1440px] mx-auto relative">
      {/* Booking Success Pop-up (remains an overlay) */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full relative">
            <IoCheckmarkCircleOutline className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl text-black font-bold mb-3">Booking Confirmed!</h3>
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
          <Link to="/" className="text-gray-500 cursor-pointer">Home</Link> &nbsp;&gt;&nbsp;
          <Link to="/salon" className="text-gray-500 cursor-pointer">Salon</Link> &nbsp;&gt;&nbsp;
          <Link to="#" className="text-gray-500 cursor-pointer">Bodycraft Salon & Spa</Link> &nbsp;&gt;&nbsp;
          <span className="text-black font-semibold cursor-pointer">Booking Service</span>
        </div>

        <div className="flex items-center mb-6">
          <button onClick={handleBack} className="flex items-center text-gray-700 hover:text-black">
            <FiChevronLeft className="text-2xl" />
          </button>
          <h2 className="text-3xl text-black font-bold ml-2">Review & Confirm</h2>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-normal text-black mb-4">Online Payment</h3>
          <div className="relative">
              <div className="border border-gray-300 text-black rounded-lg p-4 cursor-pointer flex justify-between items-center"
                   onClick={() => setShowPaymentOptions(!showPaymentOptions)}>
                <span>{paymentOptions.find(opt => opt.value === paymentOption)?.label}</span>
                {showPaymentOptions ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              {showPaymentOptions && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-2 z-10 shadow-lg">
                  {paymentOptions.map((option) => (
                    <div
                      key={option.value}
                      className="p-3 hover:bg-gray-100 text-black cursor-pointer"
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
          <h3 className="text-xl font-normal text-black mb-4">Discount Code</h3>
          {/* Modified to toggle inline discount section */}
          <button
            onClick={() => setShowDiscountSection(!showDiscountSection)} // Toggle visibility
            className="flex items-center justify-between w-full border border-gray-300 rounded-lg p-4 text-left"
          >
            <span className="flex items-center gap-2 text-gray-700">
              <MdOutlineLocalOffer className="text-xl text-black" />
              Enter Discount Code
            </span>
            {showDiscountSection ? <FaAngleUp className="text-xl text-gray-500" /> : <FiChevronRight className="text-xl text-gray-500" />}
          </button>

          {/* Inline Discount Section Content - Conditionally rendered */}
          {showDiscountSection && (
            <div className="mt-4 p-4 border border-gray-300 rounded-lg  shadow-sm">
              {/* Coupon Input */}
              <div className="mb-4">
                <div className="relative flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="Enter your coupon code"
                    className="flex-1 p-3 outline-none text-black"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="bg-gray-100 text-gray-700 font-medium px-4 py-3 hover:bg-gray-200 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Instructions */}
              <div className="mb-4 text-gray-700 text-sm">
                <p className="mb-2">&bull; Copy your coupon code from the email, promotional material or choose from a list below.</p>
                <p>&bull; Paste it here and click Apply to redeem your discount</p>
              </div>

              {/* Available Coupons */}
              <div>
                <h4 className="text-lg font-semibold text-black mb-3">Available Coupons</h4>
                {availableCoupons.map((coupon) => (
                  <div key={coupon.id} className="border border-gray-300 rounded-lg p-4 mb-3 flex items-center justify-between">
                    <div>
                      <span className="bg-black text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-1">{coupon.code}</span>
                      <p className="text-black font-medium">{coupon.offer}</p>
                      <button className="text-blue-600 text-sm mt-1 hover:underline">Show more</button>
                    </div>
                    <input
                      type="radio"
                      name="couponSelection"
                      value={coupon.code}
                      checked={selectedCouponRadio === coupon.code}
                      onChange={() => {
                        setSelectedCouponRadio(coupon.code);
                        setCouponInput(coupon.code); // Also populate the input field
                      }}
                      className="form-radio h-5 w-5 text-black"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-normal text-black mb-4">Booking Notes</h3>
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-y"
            placeholder="Add any special requests or notes for the salon..."
            value={bookingNotes}
            onChange={(e) => setBookingNotes(e.target.value)}
          ></textarea>
        </div>
      </div>

      {/* Summary Card */}
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