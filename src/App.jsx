import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
 
import Header from './Components/Header/Header';        // optional global header
import Footer from './Components/Footer/Footer';
import Service from './Pages/Service';
import Home from './Pages/Home';
import MapLanding from './Pages/MapLanding';
import Salon from './Pages/Salon';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import HeaderSearchBar from './Components/Home/HeaderSearchBar';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
 
/**
 * Route‑aware wrapper so we can use `useLocation`.
 */
const AppContent = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';      // adjust if your Home path differs
 
  return (
    <>
      {/* Show on every page EXCEPT Home */}
      {!isHomePage && <HeaderSearchBar />}
 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/*" element={<Product />} />
          <Route path="/service/*" element={<Service />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/map" element={<MapLanding />} />
          <Route path="/salon" element={<Salon />} />
        </Routes>
      </main>
 
      <Footer />
    </>
  );
};
 
const App = () => (
  <BrowserRouter>
    <ScrollToTopOnRouteChange />
    <ScrollToTop />
 
    <div className="min-h-screen bg-[#F6F6F6]">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Uncomment if you need a global header visible on all pages */}
        {/* <Header /> */}
 
        <AppContent />
      </div>
    </div>
  </BrowserRouter>
);
 
export default App;