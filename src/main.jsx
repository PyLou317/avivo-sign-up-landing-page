import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import GuestsLearnMore from './pages/guests/GuestLearnMore.jsx';
import RestaurantsLearnMore from './pages/restaurants/RestaurantsLearnMore.jsx';

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="guests" element={<GuestsLearnMore />} />
        <Route path="restaurants" element={<RestaurantsLearnMore />} />
      </Routes>
    </BrowserRouter>
    ,
  </StrictMode>,
);
