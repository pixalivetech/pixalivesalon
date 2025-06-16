import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import faqImg from '../../assets/home/faqimage.png';

const faqData = [
  { question: 'How do I book an appointment?', answer: 'Book salon appointments in under 60 seconds with the Pixalove app or website. Choose services, stylist, time, and pay securely—no calls needed!' },
  { question: 'Can I request a specific stylist?', answer: 'Absolutely. While booking you can filter by stylist. If your preferred professional is available, you’ll see their slot right away.' },
  { question: 'What should I do at the salon after booking?', answer: 'Just show the confirmation screen (or email) at the reception and relax—the staff will already have your details.' },
  { question: 'Can I reschedule or cancel my appointment?', answer: 'Yes. Head to “My Bookings” in the app or website, choose the appointment and tap “Reschedule” or “Cancel”. No extra fees if done 24 h in advance.' },
  { question: 'Do I need to pay in advance for my appointment?', answer: 'Most salons let you pay in person, but some premium slots require a token advance. You’ll see that clearly before checkout.' },
  { question: 'Are walk‑in appointments available?', answer: 'Many partner salons do allow walk‑ins, but time‑slot availability isn’t guaranteed. Booking through Pixalove in advance is the best way to secure your preferred time.' },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  const toggle = (idx) => {
    if (idx === active) return;
    setActive(idx);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 flex flex-col lg:flex-row gap-10">
          {/* FAQ Image */}
          <figure className="flex-shrink-0 mx-auto lg:mx-0 w-full sm:w-3/4 md:w-1/2 lg:w-[320px] xl:w-[380px] h-[280px] sm:h-[320px] md:h-[380px] lg:h-[460px] overflow-hidden rounded-lg">
            <img
              src={faqImg}
              alt="Hair stylist cutting client’s hair"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>

          {/* Accordion */}
          <div className="flex-1 overflow-hidden">
            {faqData.map((item, idx) => (
              <div key={idx} className="border-gray-200 border-b first:border-t">
                <button
                  type="button"
                  aria-expanded={active === idx}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-gray-500 font-medium shrink-0">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-gray-800">
                      {item.question}
                    </span>
                  </div>
                  {active === idx ? (
                    <MinusIcon className="w-5 h-5 text-gray-500 shrink-0" />
                  ) : (
                    <PlusIcon className="w-5 h-5 text-gray-500 shrink-0" />
                  )}
                </button>

                <div
                  className={`pl-12 pr-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    active === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pb-5 text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
