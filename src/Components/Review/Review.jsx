

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Frame from './../../assets/Review/Frame.png';
import Discount from './../../assets/Review/Discount.png';
import Phone from './../../assets/Review/Phone.png';
import Customer from './../../assets/Review/Customer.png';
import Lock from './../../assets/Review/Lock.png';
import clock1 from './../../assets/Review/clock1.png';
import CIcon from './../../assets/Review/CIcon.png';
import Round from './../../assets/Review/Round.png';

const BookingReviewPage = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [paymentOption, setPaymentOption] = useState("full");
  const [bookingNotes, setBookingNotes] = useState("");
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen p-15 font-sans-serif text-gray-900">
      
      {/* Breadcrumb Navigation */}
      <div className="text-sm mb-5">
        <p className="text-gray-400">
          Home &gt; Saloon &gt; Bodycraft Saloon & Spa{" "}
          <span className="text-black font-semibold">&gt; Booking Service</span>
        </p>
      </div>

      {/* Header with Dynamic Back Arrow */}
      <div className="flex items-center mb-5">
        <button
          className="text-2xl mr-2 transform -translate-y-0.5"
          onClick={() => navigate(-1)}
        >
          ←
        </button>
        <h1 className="text-2xl font-bold">Review & Confirm</h1>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-6">
          {/* Online Payment */}
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-4">Online Payment</h2>
            <select
              value={paymentOption}
              onChange={(e) => setPaymentOption(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 text-gray-700"
            >
              <option value="full">I'll make the full payment online</option>
              <option value="partial">I'll make partial payment</option>
            </select>
          </div>

          {/* Discount Code */}
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-4">Discount Code</h2>
            <div className="flex items-center border border-gray-300 rounded-lg p-4 focus-within:ring-black-500 focus-within:border-gray-500">
              <img src={Discount} alt="discount icon" className="w-6 h-6 mr-2" />
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Enter Discount Code"
                className="w-full outline-none text-gray-700"
              />
              <span className="text-xl ml-2 text-gray-500">›</span>
            </div>
          </div>

          {/* Booking Notes */}
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-4">Booking Notes</h2>
            <textarea
              value={bookingNotes}
              onChange={(e) => setBookingNotes(e.target.value)}
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              placeholder=""
            ></textarea>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          
          {/* Summary Box */}
          <div className="border border-gray-300 rounded-lg p-5 space-y-4">
            <div className="flex gap-4">
              <img src={Frame} alt="salon" className="w-20 h-20 rounded-lg object-fill" />
              <div>
                <h3 className="font-semibold">BarberCo - Men's Salon and Barbershop</h3>
                <p className="text-sm text-gray-600">
                 4.2<span className="text-black text-1x1">★★★★★</span>(20)
                </p>
                <p className="text-sm text-gray-600">Koramangala, Bengaluru</p>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p className="flex items-center">
                <img src={CIcon} alt="calendar" className="w-4 h-4 mr-2" />
                Sunday, June 15
              </p>
              <p className="flex items-center">
                <img src={clock1} alt="clock" className="w-4 h-4 mr-2" />
                10.00 am - 10.25 am (25 mins duration)
              </p>
              <p className="flex items-center">
                <img src={Round} alt="user" className="w-4 h-4 mr-2" />
                Premalatha
              </p>
            </div>

            <div className="text-sm pt-4 space-y-1">
              <div className="flex justify-between">
                <span>Eyebrows</span>
                <span>₹60</span>
              </div>
              <div className="text-xs text-gray-500">15 mins</div>
              <div className="flex justify-between">
                <span>Hair Cut (Style Director)</span>
                <span>₹60</span>
              </div>
              <div className="text-xs text-gray-500">10 mins</div>
            </div>

            {/* Price Breakdown */}
            <div>
              <button
                onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
                className="text-left w-full text-sm text-gray-600 flex justify-between items-center pt-4 border-t border-gray-200 mt-4"
              >
                Price Breakdown
                <span>{showPriceBreakdown ? "▲" : "▼"}</span>
              </button>
              {showPriceBreakdown && (
                <div className="text-sm space-y-1 mt-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Sub Total</span>
                    <span>₹120.00</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax Amount-18%</span>
                    <span>+ ₹40.44</span>
                  </div>
                </div>
              )}
              <div className="flex justify-between font-bold pt-2">
                <span>Total</span>
                <span>₹140.44</span>
              </div>
            </div>

            {/* Confirm Button */}
            <div>
              <button
                onClick={() => alert("✅ Appointment Confirmed!")}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold mt-4"
              >
                Confirm Appointment
              </button>
            </div>
          </div>

          {/* Support Boxes */}
          <div className="border border-gray-300 rounded-lg p-5 space-y-3">
            <img src={Phone} alt="Call Icon Top" className="w-6 h-6 mb-2" />
            <div>
              <p className="font-semibold text-black">Give us a call</p>
              <p className="text-sm text-gray-500 mb-3">We’d be happy to help you out with your booking</p>
              <div className="flex items-center">
                <img src={Phone} alt="Call Icon Inline" className="w-4 h-4 mr-1.5" />
                <p className="text-sm font-medium text-black">
                  Call US: <a href="tel:+919765641237" className="underline hover:text-black">+91 97656 41237</a>
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-5 flex flex-col items-start space-y-3">
            <img src={Customer} alt="Chat" className="w-6 h-6 mb-2" />
            <div>
              <p className="font-semibold text-black">24/7 Customer support</p>
              <p className="text-sm text-gray-500">Get the answers you need, when you need them</p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg p-5 flex flex-col items-start space-y-3">
            <img src={Lock} alt="Privacy Protection" className="w-6 h-6 mb-2" />
            <div>
              <p className="font-semibold text-black">Privacy protection</p>
              <p className="text-sm text-gray-500">We use SSL encryption to keep your data secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingReviewPage;



