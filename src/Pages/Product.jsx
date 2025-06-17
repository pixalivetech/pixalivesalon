import React from 'react'
import Header1 from '../Components/Products/Header1'
import AmenitiesSection from '../Components/Products/AmenitiesSection'
import ServicesBook from '../Components/Products/Servicesbook'
import UserReviews from '../Components/Products/UserReviews'
import OpeningTimes from '../Components/Products/OpeningTimes'
import OtherLocation from '../Components/Products/OtherLocation'
import Venue from '../Components/Products/Venue'
import AboutSection from '../Components/Products/AboutSection'
import FAQ from '../Components/Salons/Faq'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Header1 />
      
      
      
    </div>
  );
};

export default Product;