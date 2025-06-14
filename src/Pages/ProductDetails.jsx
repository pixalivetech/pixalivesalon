import React from 'react';
import Navbar from '../Components/SeeMore/Navbar'
import AmenitiesSection from '../Components/Products/AmenitiesSection'
import ServicesBook from '../Components/Products/Servicesbook';
import UserReviews from '../Components/Products/UserReviews'
import AboutSection from '../Components/Products/AboutSection'
import OpeningTimes from '../Components/Products/OpeningTimes'
import OtherLocation from '../Components/Products/OtherLocation'
import Venue from '../Components/Products/Venue'
import FAQ from '../Components/Salons/Faq'
const ProductDetails = () => {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Scrollable Sections */}
      <section id="amenities">
        <AmenitiesSection />
      </section>

      <section id="services">
        <ServicesBook />
      </section>

      

      <section id="about">
        <AboutSection />
      </section>

      <section id="times">
        <OpeningTimes />
      </section>

      <section id="other-location">
        <OtherLocation />
      </section>

      <section id="reviews">
        <UserReviews />
      </section>

      <section id="venue">
        <Venue />
      </section>

      <section id="FAQ">
        <FAQ/>
      </section>
    </div>
  );
};

export default ProductDetails;
