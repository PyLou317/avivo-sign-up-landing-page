import { useState } from 'react';
import { NavLink } from 'react-router';
import ScrollToTop from '../utils/ScrollToTop';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Guests', path: '/guests' },
    { name: 'Restaurants', path: '/restaurants' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <div className="text-xl font-bold tracking-tighter">AVIVO</div>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-gray-500 ${
                  isActive ? 'text-black' : 'text-gray-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/">
            <button
              onClick={ScrollToTop}
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
            >
              Join now
            </button>
          </NavLink>
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
