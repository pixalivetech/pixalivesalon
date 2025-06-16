// src/Pages/Service.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import ServicesPage from '../Components/Services/ServicesPage';
import ServicesProfessional from '../Components/Services/ServicesProfessional';
import ReviewConfirmPage from '../Components/Services/ReviewConfirmPage';

const Service = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  // New state to store booking details from ServicesProfessional
  const [bookingDetails, setBookingDetails] = useState({
    professional: null,
    date: null, // Stored as ISO string
    time: null,
  });

  const navigate = useNavigate();

  // Calculate total amount whenever selectedServices changes
  useEffect(() => {
    const total = selectedServices.reduce((sum, service) => sum + service.price, 0);
    setTotalAmount(total);
  }, [selectedServices]);

  const handleServiceAdd = (service) => {
    if (!selectedServices.some((s) => s.id === service.id)) {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleServiceRemove = (id) => {
    setSelectedServices(selectedServices.filter(service => service.id !== id));
  };

  const handleContinueToProfessional = () => {
    console.log('Service.jsx: Navigating from ServicesPage to /service/professional');
    navigate('professional');
  };

  // This function now receives and stores bookingDetails
  const handleContinueToReviewConfirm = (details) => {
    console.log('Service.jsx: Storing booking details and navigating to /service/professional/review-confirm');
    setBookingDetails(details); // Store the details
    navigate('/service/professional/review-confirm');
  };

  const NotFoundInService = () => (
    <div className="p-6 text-center text-red-600">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found Within Service Flow</h2>
      <p>The URL `{window.location.pathname}` does not match any defined step in the booking process.</p>
      <p className="mt-4">
        <Link to="/service" className="text-blue-600 hover:underline inline-block">
          Start Booking Again
        </Link>
      </p>
    </div>
  );

  return (
    <div className="service-booking-flow flex-grow">
      <Routes>
        <Route
          path="/"
          element={
            <ServicesPage
              onContinue={handleContinueToProfessional}
              selectedServices={selectedServices}
              handleServiceClick={handleServiceAdd}
              handleRemoveService={handleServiceRemove}
              popupMessage={popupMessage}
              setPopupMessage={setPopupMessage}
            />
          }
        />
        <Route
          path="professional"
          element={
            <ServicesProfessional
              onContinue={handleContinueToReviewConfirm} // This will trigger the absolute navigation
              selectedServices={selectedServices}
              handleRemoveService={handleServiceRemove}
              popupMessage={popupMessage}
              setPopupMessage={setPopupMessage}
            />
          }
        />
        <Route
          path="professional/review-confirm"
          element={
            <ReviewConfirmPage
              selectedServices={selectedServices}
              totalAmount={totalAmount}
              // Pass the stored booking details to ReviewConfirmPage
              bookingDetails={bookingDetails}
            />
          }
        />
        <Route path="*" element={<NotFoundInService />} />
      </Routes>
    </div>
  );
};

export default Service;