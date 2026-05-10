import { useState } from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './componenets/TopNavBar.jsx';
import App from './App.jsx';
import GuestsLearnMore from './pages/guests/GuestLearnMore';
import RestaurantsLearnMore from './pages/restaurants/RestaurantsLearnMore'

function Root() {
  const [activeTab, setActiveTab] = useState('Guest');

  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="pt-10">
        <Routes>
          <Route
            index
            element={<App activeTab={activeTab} setActiveTab={setActiveTab} />}
          />
          <Route
            path="guests"
            element={
              <GuestsLearnMore
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            }
          />
          <Route
            path="restaurants"
            element={
              <RestaurantsLearnMore
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default Root;
