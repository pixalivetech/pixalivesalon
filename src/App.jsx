// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Review from './Components/Review/Review';


const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <div className="w-full max-w-[1440px] mx-auto">
          

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
             
            </Routes>
          </main>

          <Footer />
        </div>
        <Review/>
      </div>
    </BrowserRouter>
  );
};

export default App;
