import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import ScrollToTop from '../../src/utils/ScrollToTop';

const Navbar = () => {
  const [hidden, setHidden] = useState();

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar if scrolled down more than 20px
      if (window.scrollY > 20) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-transform duration-300 ease-in-out ${hidden ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" onClick={ScrollToTop}>
            <div className="text-xl font-bold tracking-tighter">AVIVO</div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
