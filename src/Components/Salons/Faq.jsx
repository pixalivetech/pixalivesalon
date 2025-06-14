import React, { useState } from 'react';
import faqImage from './../../assets/Salon/faqimage.png'; // Renamed to faqImage for clarity

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 rounded-lg overflow-hidden"> {/* Added rounded-lg and overflow-hidden */}
      <button
        className="flex items-center w-full py-4 px-4 text-left text-lg font-medium text-gray-800 focus:outline-none hover:bg-gray-50 transition-colors duration-200" // Added px-4 and hover effect
        onClick={onClick}
      >
        <span className="text-gray-600 font-semibold text-lg mr-4 flex-shrink-0"> {/* Added flex-shrink-0 */}
          0{faq.id} {/* Adds leading zero for single-digit IDs */}
        </span>
        <span className="flex-grow">{faq.question}</span>
        <span className="text-gray-400 ml-4">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 pl-16 pr-4"> {/* Adjusted indentation and added right padding */}
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openFAQId, setOpenFAQId] = useState(null); // State to manage which FAQ is open

  const toggleFAQ = (id) => {
    setOpenFAQId(openFAQId === id ? null : id); // Toggle open/close
  };

  const faqs = [
    {
      id: 1,
      question: 'How do I book an appointment?',
      answer:
        'Book salon appointments in under 60 seconds with the Pixalive app or website. Choose services, stylist, time, and pay securely—no calls needed!',
    },
    {
      id: 2,
      question: 'Can I request a specific stylist?',
      answer:
        'Yes, most booking systems allow you to choose your preferred stylist when making an appointment. This helps ensure you get the service you expect from someone you trust.',
    },
    {
      id: 3,
      question: 'What should I do at the salon after booking?',
      answer:
        'Upon arrival, check in with the reception. They will guide you to your stylist or waiting area. It\'s a good idea to arrive a few minutes early for your appointment.',
    },
    {
      id: 4,
      question: 'Can I reschedule or cancel my appointment?',
      answer:
        'Yes, most salons allow rescheduling or cancellation through their app or website. Please check their specific policy regarding notice periods for cancellations to avoid any charges.',
    },
    {
      id: 5,
      question: 'Do I need to pay in advance for my appointment?',
      answer:
        'Some salons may require a deposit or full payment in advance, especially for new clients or specific services. This information will typically be provided during the booking process.',
    },
  ];

  return (
    <div className=" p-6 "> {/* Increased py-12 to py-20 for more vertical padding */}
      <div className=" mx-auto"> {/* Centered content wrapper, max-w-6xl for better large screen control */}

        {/* Heading at the top, spanning full width */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center sm:text-left"> {/* Increased mb-6 to mb-10 */}
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> {/* Increased gap-8 to gap-12 */}
          {/* Left Section: Image */}
          <div className="flex justify-center items-center  mb-6 lg:mb-0"> {/* Added mb-6 for small screen gap, removed on large */}
            <img
              src={faqImage}
              alt="Salon consultation" // More descriptive alt text
              className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[500px]" // Increased max-h-96 to max-h-[500px]
            />
          </div>

          {/* Right Section: FAQ Items */}
          <div className="space-y-6"> {/* Increased space-y-4 to space-y-6 for more space between FAQs */}
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openFAQId === faq.id}
                onClick={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;