import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'; // Optional if not used
import Footer from './Components/Footer/Footer';
import Service from './Pages/Service';
import Home from './Pages/Home';
import MapLanding from './Pages/MapLanding';
import Salon from './Pages/Salon';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <ScrollToTop />
      <div className="min-h-screen bg-[#F6F6F6]">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* <Header /> Uncomment if you want to show Header */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service/*" element={<Service />} />
              <Route path="/map" element={<MapLanding />} />
              <Route path="/salon" element={<Salon />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
