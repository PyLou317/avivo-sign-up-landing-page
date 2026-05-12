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

            {/* Floating Hint - Placed absolutely below the navbar */}
            <div className="absolute top-[calc(100%+10px)] right-20 text-right whitespace-nowrap animate-in fade-in slide-in-from-top-1 duration-500">
              <AreYouARestaurant activeTab={activeTab} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
