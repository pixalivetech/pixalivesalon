import React from 'react';
import { Link } from 'react-router-dom';
import avatar1 from './../../assets/salon/Avatar1.png';
import s1 from './../../assets/salon/s1.png';

const reviewsData = [
  {
    id: 1,
    text: "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I've finally found a space that keeps me focused and inspired.",
    rating: 4.5,
    reviewerName: "Ananya R",
    reviewerTitle: "UI/UX Designer",
    reviewerAvatar: avatar1,
    venue: {
      name: "The Aesthetic Studio",
      rating: 4.3,
      reviewsCount: 32,
      location: "Electronic City, Bengaluru",
      image: s1,
    },
  },
  {
    id: 2,
    text: "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I've finally found a space that keeps me focused and inspired.",
    rating: 4.5,
    reviewerName: "Ananya R",
    reviewerTitle: "UI/UX Designer",
    reviewerAvatar: avatar1,
    venue: {
      name: "The Aesthetic Studio",
      rating: 4.3,
      reviewsCount: 32,
      location: "Electronic City, Bengaluru",
      image: s1,
    },
  },
  {
    id: 3,
    text: "Pixalive feels less like an office and more like a creative playground. As a freelance designer, I've finally found a space that keeps me focused and inspired.",
    rating: 4.5,
    reviewerName: "Ananya R",
    reviewerTitle: "UI/UX Designer",
    reviewerAvatar: avatar1,
    venue: {
      name: "The Aesthetic Studio",
      rating: 4.3,
      reviewsCount: 32,
      location: "Electronic City, Bengaluru",
      image: s1,
    },
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2.5a.5.5 0 00-.474-.292l-1.07 3.292a1 1 0 01-.95.69H4.154a.5.5 0 00-.327.918l2.8 2.034a1 1 0 01.364 1.118l-1.07 3.292a.5.5 0 00.755.545L10 12.553l2.8 2.034a.5.5 0 00.755-.545l-1.07-3.292a1 1 0 01.364-1.118l2.8-2.034a.5.5 0 00-.327-.918h-3.462a1 1 0 01-.95-.69l-1.07-3.292A.5.5 0 0010 2.5z" />
          <path fill="none" stroke="currentColor" strokeWidth="1" d="M10 2.5a.5.5 0 00-.474-.292l-1.07 3.292a1 1 0 01-.95.69H4.154a.5.5 0 00-.327.918l2.8 2.034a1 1 0 01.364 1.118l-1.07 3.292a.5.5 0 00.755.545L10 12.553z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const MassageParlorReviews = () => {
  return (
    <div className="p-6 "> {/* Removed min-h-screen */}
      <div className="mx-auto ">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Top reviews of Massage parlours near you in E-city
          </h2>
          <div className="flex items-center space-x-2 text-gray-400">
            <svg className="w-6 h-6 cursor-pointer hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <svg className="w-6 h-6 cursor-pointer hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="flex items-center mb-10 text-gray-700">
          <span className="font-bold text-xl mr-2">4.3</span>
          <StarRating rating={4.3} />
          <span className="ml-2">Average of (32) reviews of 14 venues</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <div key={review.id} className="rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-300 p-6">
                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-gray-800 text-base leading-relaxed mb-6">
                  "{review.text}"
                </p>
                <div className="flex items-center">
                  <img src={review.reviewerAvatar} alt={review.reviewerName} className="w-10 h-10 rounded-full mr-3 object-cover" />
                  <div>
                    <p className="font-semibold text-gray-900">{review.reviewerName}</p>
                    <p className="text-sm text-gray-500">{review.reviewerTitle}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">{review.venue.name}</h4>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <span className="font-bold mr-1">{review.venue.rating}</span>
                      <StarRating rating={review.venue.rating} />
                      <span className="text-blue-600 font-medium ml-2 cursor-pointer">({review.venue.reviewsCount})</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{review.venue.location}</span>
                    </div>
                  </div>
                  <img src={review.venue.image} alt={review.venue.name} className="w-20 h-20 rounded-lg object-cover ml-4" />
                </div>
                <Link to='/service'>
                  <button className="text-blue-600 hover:text-blue-800 cursor-pointer text-sm font-medium mt-3">
                    See all Service
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MassageParlorReviews;
