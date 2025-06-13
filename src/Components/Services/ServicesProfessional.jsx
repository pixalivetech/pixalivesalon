import React, { useState, useEffect } from 'react';
import SummaryCard from './SummaryCard';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import { BsCalendar2Date } from 'react-icons/bs';
import { FiChevronLeft } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const professionals = [
  { id: 'any', name: 'Any professional', subtitle: 'For maximum availability', icon: <FaUserFriends /> },
  { id: 'premalatha', name: 'Premalatha', subtitle: 'Beautician', icon: <span className="font-bold">P</span> },
  { id: 'somunasoth', name: 'Somanathan', subtitle: 'Hair Stylist', icon: <span className="font-bold">S</span> },
];

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

const ServicesProfessional = ({
  selectedServices,
  handleRemoveService,
  popupMessage,
  setPopupMessage,
  onContinue
}) => {
  const [selectedProfessional, setSelectedProfessional] = useState('premalatha');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      dates.push(nextDay);
    }
    setAvailableDates(dates);
    if (!selectedDate) {
      setSelectedDate(today);
    }
  }, []);

  const formatDateForButton = (date) => {
    const dayOfMonth = date.getDate();
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
    return { dayOfMonth, dayOfWeek };
  };

  const getFullDateString = (date) => {
    if (!date) return '';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleConfirmAppointmentClick = () => {
    if (!selectedProfessional || !selectedDate || !selectedTime) {
      setPopupMessage('Please select a professional, date, and time.');
      setTimeout(() => setPopupMessage(''), 3000);
      return;
    }

    onContinue({
      professional: selectedProfessional,
      date: selectedDate.toISOString(),
      time: selectedTime,
    });
  };

  const handleBack = () => navigate(-1);
  const handleDatePickerChange = (date) => {
    setSelectedDate(date);
    setIsDatePickerOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-[1440px] mx-auto relative">
      {popupMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300">
          {popupMessage}
        </div>
      )}

      <div className="flex-1">
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="text-gray-500">Home</Link> &nbsp;&gt;&nbsp;
          <Link to="#" className="text-gray-500">Salon</Link> &nbsp;&gt;&nbsp;
          <Link to="#" className="text-gray-500">Bodycraft Salon & Spa</Link> &nbsp;&gt;&nbsp;
          <span className="text-black font-semibold">Booking Professional</span>
        </div>

        <div className="flex items-center mb-6">
          <button onClick={handleBack} className="flex items-center text-gray-700 hover:text-black">
            <FiChevronLeft className="text-2xl" />
          </button>
          <h2 className="text-3xl font-bold ml-2">Select Professionals</h2>
        </div>

        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {professionals.map((pro) => (
            <button
              key={pro.id}
              onClick={() => setSelectedProfessional(pro.id)}
              className={`border rounded-lg px-4 py-3 w-[140px] h-[140px] flex items-center justify-center flex-shrink-0 ${
                selectedProfessional === pro.id ? 'border-black' : 'border-gray-300'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-gray-300 text-black rounded-full flex items-center justify-center text-sm font-bold">
                  {pro.icon}
                </div>
                <p className="text-sm font-semibold">{pro.name}</p>
                <p className="text-xs text-gray-500">{pro.subtitle}</p>
                {pro.id !== 'any' && (
                  <div className="text-xs mt-1 bg-gray-100 px-2 py-0.5 rounded-full text-black flex items-center gap-1">
                    <span>4.2</span>
                    <span className="text-[10px]">★</span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Select Date & Time</h2>
          <button
            onClick={() => setIsDatePickerOpen(true)}
            className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-lg text-gray-600 hover:text-black hover:border-black"
          >
            <BsCalendar2Date className="text-2xl" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <div className="border border-gray-300 rounded-full px-3 py-1 flex items-center gap-1">
            <FaUserFriends className="text-base" />
            <span>
              {selectedProfessional === 'any'
                ? 'Any professional'
                : professionals.find(p => p.id === selectedProfessional)?.name}
            </span>
          </div>
          {selectedDate && selectedTime && (
            <div className="border border-gray-300 rounded-full px-3 py-1 flex items-center gap-1">
              <BsCalendar2Date className="text-base" />
              <span>{getFullDateString(selectedDate)}</span>
              <span>{selectedTime}</span>
            </div>
          )}
        </div>

        {isDatePickerOpen && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
            <DatePicker
              selected={selectedDate}
              onChange={handleDatePickerChange}
              minDate={new Date()}
              inline
            />
            <button
              onClick={() => setIsDatePickerOpen(false)}
              className="block w-full mt-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        )}

        <div className="flex gap-4 mb-4 overflow-x-auto pb-2">
          {availableDates.map((dateObj) => {
            const { dayOfMonth, dayOfWeek } = formatDateForButton(dateObj);
            return (
              <button
                key={dateObj.toISOString()}
                onClick={() => {
                  setSelectedDate(dateObj);
                  setIsDatePickerOpen(false);
                }}
                className={`w-14 h-14 rounded-full flex flex-col items-center justify-center text-sm font-medium flex-shrink-0 ${
                  selectedDate && selectedDate.toDateString() === dateObj.toDateString()
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-black'
                }`}
              >
                <div>{dayOfMonth}</div>
                <div className="text-[10px] font-normal">{dayOfWeek}</div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-2 rounded border ${
                selectedTime === time ? 'bg-black text-white' : 'bg-white border-gray-300 text-black'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <SummaryCard
        selectedServices={selectedServices}
        handleRemoveService={handleRemoveService}
        onContinue={handleConfirmAppointmentClick}
        buttonText="Confirm Appointment"
        selectedProfessional={professionals.find(p => p.id === selectedProfessional)}
        selectedBookingDate={selectedDate}
        selectedBookingTime={selectedTime}
      />
    </div>
  );
};

export default ServicesProfessional;
