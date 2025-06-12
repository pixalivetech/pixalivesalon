import React from 'react'
import Header from '../Components/Header/Header'

import TopCategories from '../Components/Home/TopCategories'
import RecommendedSalons from '../Components/Home/REcommendedSalons'

const Home = () => {
  return (
    <div>
      <Header />
      <TopCategories />
      <RecommendedSalons />
    </div>
  )
}

export default Home
