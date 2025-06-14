import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'; // Assuming this exists
import Footer from './Components/Footer/Footer'; // Assuming this exists
import Service from './Pages/Service'; // Your main service booking component
import Home from './Pages/Home'; // Your Home page component


const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F6F6F6]">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* <Header />  */}

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service/*" element={<Service />} /> {/* Use /* for nested routes */}
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
