import React, { useEffect, useRef, useState } from "react";
import avatar1 from './../../assets/salon/Avatar1.png' 

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote: "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I've finally found a space that keeps me focused and inspired.",
    name: "Ananya R",
    designation: "UI/UX Designer",
    avatar: {avatar1} // Placeholder for demonstration
  },
  {
    id: 2,
    rating: 4,
    quote: "The seamless booking experience and wide range of services on Pixalive have made my life so much easier. Highly recommend it for anyone looking for beauty services!",
    name: "Priya S",
    designation: "Marketing Specialist",
    avatar: "https://placehold.co/40x40/C0C0C0/333333?text=AVATAR" // Placeholder for demonstration
  },
  {
    id: 3,
    rating: 5,
    quote: "I love how easy it is to find top-rated salons near me. Pixalive has become my go-to app for all my beauty appointments.",
    name: "Karan V",
    designation: "Software Engineer",
    avatar: "https://placehold.co/40x40/C0C0C0/333333?text=AVATAR" // Placeholder for demonstration
  },
  {
    id: 4,
    rating: 5,
    quote: "A fantastic app for salon and spa bookings! The interface is clean, and the booking process is incredibly smooth. Never going back to manual bookings.",
    name: "Sneha D",
    designation: "Fashion Blogger",
    avatar: "https://placehold.co/40x40/C0C0C0/333333?text=AVATAR" // Placeholder for demonstration
  },
  {
    id: 5,
    rating: 4,
    quote: "Pixalive has simplified my search for quality beauty services. The reviews are helpful, and I always find great deals.",
    name: "Rahul M",
    designation: "Fitness Trainer",
    avatar: "https://placehold.co/40x40/C0C0C0/333333?text=AVATAR" // Placeholder for demonstration
  },
  {
    id: 6,
    rating: 5,
    quote: "Efficient, user-friendly, and comprehensive. Pixalive is a must-have app for anyone who values convenience and quality in beauty services.",
    name: "Divya L",
    designation: "Architect",
    avatar: "https://placehold.co/40x40/C0C0C0/333333?text=AVATAR" // Placeholder for demonstration
  },
];

const TestimonialsCarousel = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0); // This state isn't currently used for scrolling logic in the given code, but kept for consistency.

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Function to scroll the carousel
    const scrollCarousel = () => {
      // Check if we are at the end, if so, jump to the beginning instantly
      // Added +1 for tolerance to ensure the condition triggers correctly when at the very end
      if (carousel.scrollWidth - carousel.scrollLeft <= carousel.clientWidth + 1) {
        carousel.scrollTo({ left: 0, behavior: 'instant' });
      } else {
        // Calculate scroll amount based on 1/3rd of the carousel width to move approximately one card (for lg screens)
        // For smaller screens, it will move full card width
        const cardWidth = carousel.querySelector('.flex-none').offsetWidth;
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    };

    // Set up auto-scrolling
    const interval = setInterval(scrollCarousel, 3000); // Scrolls every 3 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  // Helper to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-black' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <section className="p-6">
      <div className=" mx-auto ">
        <h2 className="text-3xl font-extrabold text-left text-black mb-12">
          Hear from our users
        </h2>

        <div
          ref={carouselRef}
          className="flex overflow-x-scroll snap-x snap-mandatory pb-4 hide-scrollbar" // Custom class for scrollbar hiding
          style={{ scrollBehavior: 'smooth' }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              // Adjusting width and padding to match image gaps and card size
              className="flex-none w-full sm:w-1/2 lg:w-1/3 px-3 py-6 snap-center" // Smaller px for tighter card spacing
            >
              <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between"> {/* Changed shadow-lg to shadow-md */}
                <div>
                  {renderStars(testimonial.rating)}
                  <p className="mt-4 text-gray-800 text-lg leading-relaxed"> {/* Changed text-gray-700 to text-gray-800 */}
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-20 flex items-center">
                  <img
                    src={avatar1}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3 shadow-sm border border-gray-100" // Smaller avatar, adjusted margin, added border, reduced shadow
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate some cards to create an infinite loop effect */}
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={`${testimonial.id}-duplicate`}
              className="flex-none w-full sm:w-1/2 lg:w-1/3 px-3 py-4 snap-center"
            >
              <div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between">
                <div>
                  {renderStars(testimonial.rating)}
                  <p className="mt-4 text-gray-800 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <img
                    src={avatar1}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3 shadow-sm border border-gray-100"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Custom CSS to hide scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;