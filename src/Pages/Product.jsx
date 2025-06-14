import React from 'react'
import Header1 from '../Components/Products/Header1'
import AmenitiesSection from '../Components/Products/AmenitiesSection'
import ServicesBook from '../Components/Products/Servicesbook'
import UserReviews from '../Components/Products/UserReviews'
import OpeningTimes from '../Components/Products/OpeningTimes'
import OtherLocation from '../Components/Products/OtherLocation'
import Venue from '../Components/Products/Venue'
import AboutSection from '../Components/Products/AboutSection'
import Faq from '../Components/Salons/Faq'


const Product = () => {
  return (
    <div>
        <Header1/>
        <AmenitiesSection/>
        <ServicesBook/>
       <UserReviews/>
       <AboutSection/>
       <OpeningTimes/>
       <OtherLocation/>
       <Venue/>
       <Faq/>
        
      
    </div>
  )
}

export default Product
