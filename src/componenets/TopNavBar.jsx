import { useState } from 'react';
import { NavLink } from 'react-router';
import ScrollToTop from '../utils/ScrollToTop';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <div className="text-xl font-bold tracking-tighter">AVIVO</div>
        </NavLink>

        <div className="relative flex bg-gray-100 p-1 rounded-full w-[180px] sm:w-[300px] sm:ms-auto">
          <div
            className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] transition-transform duration-300 ease-out ${
              activeTab === 'Restaurant' ? 'translate-x-full' : 'translate-x-0'
            }`}
          >
            <div className="absolute inset-0 bg-indigo-500/50 blur-md rounded-full animate-pulse" />
            <div className="relative h-full w-full bg-black rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)]" />
          </div>

          {['Guest', 'Restaurant'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative z-10 flex-1 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-semibold transition-colors duration-300 text-center ${
                activeTab === tab
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-black mb-1.5"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
