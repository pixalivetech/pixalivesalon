import React from 'react'
import Header from '../Components/Header/Header'

import TopCategories from '../Components/Home/TopCategories'
import RecommendedSalons from '../Components/Home/REcommendedSalons'
import RecentlyViewed from '../Components/Home/RecentlyViewed'
import TopFranchises from '../Components/Home/TopFranchises'

const Home = () => {
  return (
    <div>
      <Header />
      <TopCategories />
      <RecentlyViewed />
      <RecommendedSalons />
      <TopFranchises />
    </div>
  )
}

export default Home
