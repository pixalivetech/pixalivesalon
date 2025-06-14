import React from 'react';
import salon1 from '../../assets/Salon/salon1.jpg'; 
import salon2 from '../../assets/Salon/salon2.jpg'; 
import salon3 from '../../assets/Salon/salon3.png'; 
import salon4 from '../../assets/Salon/salon4.png'; 
import salon5 from '../../assets/Salon/salon5.jpg'; 
import salon6 from '../../assets/Salon/salon6.png'; 
import salon7 from '../../assets/Salon/salon7.png'; 
import salon8 from '../../assets/Salon/salon8.jpg'; 
import { Link } from 'react-router-dom';


const HairSalonListing = () => {
  // Dummy data for demonstration. In a real app, this would come from an API.
  const salons = [
    {
      id: 1,
      image: salon1, // Replace with your actual image import or path
      name: 'The Aesthetic Studio',
      rating: 4.3,
      reviews: 32,
      location: 'Electronic City, Bengaluru',
      services: [
        { name: 'Ladies- Crazy Colour (By Quotation)', price: '₹299', duration: '1h 45min - 2h 15min' },
        { name: 'Alopecia Areta Injection', price: '₹599', duration: '40min' },
        { name: 'Brow Lift', price: '₹399', duration: '30min' },
      ],
    },
    {
      id: 2,
      image: salon2 ,// Replace with your actual image import or path
      name: 'The Aesthetic Studio',
      rating: 4.3,
      reviews: 32,
      location: 'Electronic City, Bengaluru',
      services: [
        { name: 'Ladies- Crazy Colour (By Quotation)', price: '₹299', duration: '1h 45min - 2h 15min' },
        { name: 'Alopecia Areta Injection', price: '₹599', duration: '40min' },
        { name: 'Brow Lift', price: '₹399', duration: '30min' },
      ],
    },
    {
      id: 3,
      image: salon3 ,// Replace with your actual image import or path
      name: 'The Aesthetic Studio',
      rating: 4.3,
      reviews: 32,
      location: 'Electronic City, Bengaluru',
      services: [
        { name: 'Ladies- Crazy Colour (By Quotation)', price: '₹299', duration: '1h 45min - 2h 15min' },
        { name: 'Alopecia Areta Injection', price: '₹599', duration: '40min' },
        { name: 'Brow Lift', price: '₹399', duration: '30min' },
      ],
    },
    {
      id: 4,
      image: salon4 ,// Replace with your actual image import or path
      name: 'The Aesthetic Studio',
      rating: 4.3,
      reviews: 32,
      location: 'Electronic City, Bengaluru',
      services: [
        { name: 'Ladies- Crazy Colour (By Quotation)', price: '₹299', duration: '1h 45min - 2h 15min' },
        { name: 'Alopecia Areta Injection', price: '₹599', duration: '40min' },
        { name: 'Brow Lift', price: '₹399', duration: '30min' },
      ],
    },
    {
      id: 5,
      image: salon5 ,// Replace with your actual image import or path
      name: 'The Aesthetic Studio',
      rating: 4.3,
      reviews: 32,
      location: 'Electronic City, Bengaluru',
      services: [
        { name: 'Ladies- Crazy Colour (By Quotation)', price: '₹299', duration: '1h 45min - 2h 15min' },
        { name: 'Alopecia Areta Injection', price: '₹599', duration: '40min' },
        { name: 'Brow Lift', price: '₹399', duration: '30min' },
      ],
    },
    {
      id: 6,
      image: salon6 ,// Replace with your actual image import or path
      name: 'The Aesthetic Studio',
      rating: 4.3,
      reviews: 32,
      location: 'Electronic City, Bengaluru',
      services: [
        { name: 'Ladies- Crazy Colour (By Quotation)', price: '₹299', duration: '1h 45min - 2h 15min' },
        { name: 'Alopecia Areta Injection', price: '₹599', duration: '40min' },
        { name: 'Brow Lift', price: '₹399', duration: '30min' },
      ],
    },
    {
      id: 7,
      image: salon7 ,// Replace with your actual image import or path
      name: 'The Aesthetic Studio',
      rating: 4.3,
      reviews: 32,
      location: 'Electronic City, Bengaluru',
      services: [
        { name: 'Ladies- Crazy Colour (By Quotation)', price: '₹299', duration: '1h 45min - 2h 15min' },
        { name: 'Alopecia Areta Injection', price: '₹599', duration: '40min' },
        { name: 'Brow Lift', price: '₹399', duration: '30min' },
      ],
    },
    {
      id: 8,
      image: salon8 ,// Replace with your actual image import or path
      name: 'The Aesthetic Studio',
      rating: 4.3,
      reviews: 32,
      location: 'Electronic City, Bengaluru',
      services: [
        { name: 'Ladies- Crazy Colour (By Quotation)', price: '₹299', duration: '1h 45min - 2h 15min' },
        { name: 'Alopecia Areta Injection', price: '₹599', duration: '40min' },
        { name: 'Brow Lift', price: '₹399', duration: '30min' },
      ],
    },

  ];

  return (
    <div className="min-h-screen   p-6">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Best Global Hair Salons</h2>
          <p className="text-lg text-gray-700">
            Choose from 23,532 Hair Salons near you{' '}
            <a href="/map" className="text-blue-600 hover:text-blue-800  underline text-base font-medium">
              See map near me
            </a>
          </p>
        </div>

        {/* Hair Salon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {salons.map((salon) => (
            <div key={salon.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={salon.image} alt={salon.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{salon.name}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <svg className="w-4 h-4 text-black mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                  <span>{salon.rating}</span>
                  <span className="text-gray-400 mx-1">•</span>
                  <span className="text-blue-600 font-medium cursor-pointer">({salon.reviews})</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>{salon.location}</span>
                </div>

                {/* Services List */}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  {salon.services.map((service, index) => (
                    <div key={index} className="flex justify-between items-center py-1 text-gray-700">
                      <div>
                        <p className="text-base">{service.name}</p>
                        <p className="text-xs text-gray-500">{service.duration}</p>
                      </div>
                      <p className="text-base font-semibold">{service.price}</p>
                    </div>
                  ))}
                  <Link to='/service'>
                  <button className=" hover:text-blue-800 text-sm font-medium mt-3 cursor-pointer">
                    See all service
                  </button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairSalonListing;