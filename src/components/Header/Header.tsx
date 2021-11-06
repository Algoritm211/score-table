import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

/**
 * Application header
 * @return JSX.Element
 */
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // For tracking menu open on desktop
  const [isDesktopWidth, setIsDesktopWidth] = useState(window.innerWidth >= 768);

  const desktopWidthWatcher = () => {
    if (window.innerWidth >= 768) {
      setIsDesktopWidth(true);
      return;
    }
    setIsDesktopWidth(false);
  };

  useEffect(() => {
    window.addEventListener('resize', desktopWidthWatcher);
    return () => {
      window.removeEventListener('resize', desktopWidthWatcher);
    };
  });

  return (
    <header>
      <nav className='bg-white py-2 md:py-4'>
        <div className='container px-4 mx-auto md:flex md:items-center'>
          <div className='flex justify-between items-center'>
            <Link to='/' className='font-bold text-xl text-indigo-600'>Alex's work</Link>
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className='border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden'
              id='navbar-toggle'
            >
              <i className='fas fa-bars' />
            </button>
          </div>

          <div
            className={`z-10 navbar-toggle ${isMobileMenuOpen && !isDesktopWidth ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            <Link to='/main' className='p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600'>
              Main
            </Link>
            <Link to='/author'
              className='menu-item'
            >Author</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
