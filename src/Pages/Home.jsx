import React from 'react'
import Header from '../Components/Header/Header'

import TopCategories from '../Components/Home/TopCategories'
import RecommendedSalons from '../Components/Home/REcommendedSalons'
import RecentlyViewed from '../Components/Home/RecentlyViewed'
import TopFranchises from '../Components/Home/TopFranchises'
import DownloadApp from '../Components/Home/DownloadApp'
import Review from '../Components/Home/Review'
import FAQ from '../Components/Home/FAQ'
import Footer from '../Components/Home/Footer'
import TopRated from '../Components/Home/TopRated'

const Home = () => {
  return (
    <div>
      <Header />
      <TopCategories />
      <RecentlyViewed />
      <RecommendedSalons />
      <TopFranchises />
      {/* <TopRated /> */}
      <DownloadApp />
      <Review />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
