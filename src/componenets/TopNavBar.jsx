import { useState } from 'react';
import { NavLink } from 'react-router';
import ScrollToTop from '../utils/ScrollToTop';
import ActiveTabToggle from './ActiveTabToggle';
import AreYouARestaurant from './AreYouARestaurant';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <div className="text-xl font-bold tracking-tighter">AVIVO</div>
          </NavLink>

          <div className="relative flex items-center">
            <ActiveTabToggle
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
