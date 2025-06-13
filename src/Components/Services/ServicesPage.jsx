// src/Components/Services/ServicesPage.jsx

import React, { useState, useRef, useEffect } from 'react';
import SummaryCard from './SummaryCard';
import { FiChevronLeft, FiChevronRight, FiCheck } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { serviceData } from './data'; // Import serviceData from the new file

const ServicesPage = ({
  onContinue, // Passed from Service.jsx to navigate to next step
  selectedServices,
  handleServiceClick, // Add service to parent state
  handleRemoveService, // Remove service from parent state
  popupMessage,
  setPopupMessage // For displaying temporary messages
}) => {
  const [selectedCategory, setSelectedCategory] = useState("Women's Cut & Blow Dry");
  const [addedServiceId, setAddedServiceId] = useState(null); // Local state for the checkmark animation
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const categoriesRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const localHandleServiceClick = (service) => {
    // Call the prop function to update selectedServices in the parent
    handleServiceClick(service);
    setAddedServiceId(service.id);
    setPopupMessage('Added to Checkout'); // Use the setPopupMessage prop

    setTimeout(() => {
      setAddedServiceId(null);
      setPopupMessage(''); // Clear popup message after delay
    }, 2000);
  };

  const scrollCategories = (direction) => {
    if (categoriesRef.current) {
      const scrollAmount = 200;
      if (direction === 'left') {
        categoriesRef.current.scrollLeft -= scrollAmount;
      } else {
        categoriesRef.current.scrollLeft += scrollAmount;
      }
      setTimeout(updateScrollState, 100);
    }
  };

  const updateScrollState = () => {
    const container = categoriesRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 1);
      setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 1);
    }
  };

  const handleBack = () => { // Define handleBack function
    navigate(-1); // Go back one step in history
  };

  useEffect(() => {
    updateScrollState(); // Initial check
    const container = categoriesRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollState);
      window.addEventListener('resize', updateScrollState);
      return () => {
        container.removeEventListener('scroll', updateScrollState);
        window.removeEventListener('resize', updateScrollState);
      };
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-[1440px] mx-auto relative">
      {popupMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300">
          {popupMessage}
        </div>
      )}

      <div className="flex-1">
        {/* Breadcrumbs for this step */}
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
          <h2 className="text-3xl font-bold text-black ml-2">Select Services</h2>
        </div>

        <div className="relative mb-4">
          <div
            ref={categoriesRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar-force py-2 pr-10"
          >
            {/* Conditional rendering for categories to prevent error if serviceData is empty */}
            {Object.keys(serviceData).map((category) => (
              <button
                key={category}
                className={`py-2 px-4 rounded-full text-sm font-semibold flex-shrink-0 ${
                  selectedCategory === category ? 'bg-black text-white' : ' text-black'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center gap-2 pr-2 z-10 bg-[#f6f6f6] rounded-full px-2 py-1">
            <div
              className={`flex items-center justify-center w-8 h-8 ${
                canScrollLeft ? 'cursor-pointer hover:text-black' : 'cursor-not-allowed'
              }`}
              onClick={() => canScrollLeft && scrollCategories('left')}
            >
              <FiChevronLeft
                className={`text-xl ${canScrollLeft ? 'text-gray-700' : 'text-gray-400'}`}
              />
            </div>

            <div
              className={`flex items-center justify-center w-8 h-8 ${
                canScrollRight ? 'cursor-pointer hover:text-black' : 'cursor-not-allowed'
              }`}
              onClick={() => canScrollRight && scrollCategories('right')}
            >
              <FiChevronRight
                className={`text-xl ${canScrollRight ? 'text-gray-700' : 'text-gray-400'}`}
              />
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2">{selectedCategory}</h3>

        <div className="space-y-4 ">
          {/* IMPORTANT: Conditional check for serviceData[selectedCategory] before .map() */}
          {serviceData[selectedCategory] && serviceData[selectedCategory].map((service) => {
            const isAdded = selectedServices.some((s) => s.id === service.id);
            return (
              <div
                key={service.id}
                className="border border-gray-200 p-6 rounded-lg flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-black text-base">{service.name}</p>
                  <p className="text-sm text-gray-500">{service.duration}</p>
                  <p className="text-sm font-semibold text-black mt-1">₹{service.price}</p>
                </div>
                <button
                  className="w-9 h-9 rounded-lg bg-gray-200 text-black text-2xl flex items-center justify-center hover:bg-gray-200 transition"
                  onClick={() => localHandleServiceClick(service)}
                  disabled={isAdded}
                >
                  {addedServiceId === service.id || isAdded ? <FiCheck /> : '+'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <SummaryCard
        selectedServices={selectedServices}
        handleRemoveService={handleRemoveService}
        onContinue={onContinue} // Pass the navigation trigger to SummaryCard
        buttonText="Continue" // Specify button text for this page
      />
    </div>
  );
};

export default ServicesPage;