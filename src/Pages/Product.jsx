import React from 'react'
import Header1 from '../Components/Products/Header1'
import AmenitiesSection from '../Components/Products/AmenitiesSection'
import ServicesBook from '../Components/Products/Servicesbook'
import UserReviews from '../Components/Products/UserReviews'
import OpeningTimes from '../Components/Products/OpeningTimes'
import OtherLocation from '../Components/Products/OtherLocation'


const Product = () => {
  return (
    <div>
        <Header1/>
        <AmenitiesSection/>
        <ServicesBook/>
       <UserReviews/>
       <OpeningTimes/>
       <OtherLocation/>
        
      
    </div>
  )
}

export default Product
