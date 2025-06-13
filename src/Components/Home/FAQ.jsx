import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

import faqImg from '../../assets/home/faqimage.png';

const faqData = [
  {
    question: 'How do I book an appointment?',
    answer:
      'Book salon appointments in under 60 seconds with the Pixalove app or website. Choose services, stylist, time, and pay securely—no calls needed!',
  },
  {
    question: 'Can I request a specific stylist?',
    answer:
      'Absolutely. While booking you can filter by stylist. If your preferred professional is available, you’ll see their slot right away.',
  },
  {
    question: 'What should I do at the salon after booking?',
    answer:
      'Just show the confirmation screen (or email) at the reception and relax—the staff will already have your details.',
  },
  {
    question: 'Can I reschedule or cancel my appointment?',
    answer:
      'Yes. Head to “My Bookings” in the app or website, choose the appointment and tap “Reschedule” or “Cancel”. No extra fees if done 24 h in advance.',
  },
  {
    question: 'Do I need to pay in advance for my appointment?',
    answer:
      'Most salons let you pay in person, but some premium slots require a token advance. You’ll see that clearly before checkout.',
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0); // first item open by default

  const toggle = (idx) => {
    setActive(active === idx ? null : idx);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
        Frequently Asked Questions
      </h2>

      {/* Content */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* Left Image */}
        <figure className="flex-shrink-0 w-full lg:w-[280px] xl:w-[320px]">
          <img
            src={faqImg}
            alt="Hair stylist cutting client’s hair"
            className="w-full h-full object-cover rounded-md"
            loading='lazy'
          />
        </figure>

        {/* FAQ List */}
        <div className="flex-1">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="border-gray-200 border-b first:border-t"
            >
              {/* Question Row */}
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-start justify-between gap-4 py-4 text-left focus:outline-none"
              >
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <span className="text-gray-500 font-medium shrink-0">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  {/* Question */}
                  <span className="text-sm sm:text-base font-medium text-gray-800">
                    {item.question}
                  </span>
                </div>

                {/* Icon */}
                {active === idx ? (
                  <MinusIcon className="w-5 h-5 text-gray-500 shrink-0" />
                ) : (
                  <PlusIcon className="w-5 h-5 text-gray-500 shrink-0" />
                )}
              </button>

              {/* Answer */}
              {active === idx && (
                <p className="pl-12 pr-4 pb-4 text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
