import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import ScrollToTop from './utils/ScrollToTop';

import GuestsLearnMore from './pages/guests/GuestLearnMore.jsx';
import RestaurantsLearnMore from './pages/restaurants/RestaurantsLearnMore.jsx';

import './index.css';
import App from './App.jsx';
import Navbar from './componenets/TopNavBar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route index element={<App />} />
        <Route path="guests" element={<GuestsLearnMore />} />
        <Route path="restaurants" element={<RestaurantsLearnMore />} />
      </Routes>
    </BrowserRouter>
    ,
  </StrictMode>,
);
