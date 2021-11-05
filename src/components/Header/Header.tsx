import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='header-2'>
      <nav className='bg-white py-2 md:py-4'>
        <div className='container px-4 mx-auto md:flex md:items-center'>
          <div className='flex justify-between items-center'>
            <a href='/' className='font-bold text-xl text-indigo-600'>AEG</a>
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className='border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden'
              id='navbar-toggle'
            >
              <i className='fas fa-bars' />
            </button>
          </div>

          <div className={`${isMobileMenuOpen ? 'opacity-0 h-0' : 'opacity-100'} z-10 navbar-toggle`}>
            <a href='#' className='p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600'>
              Main
            </a>
            <a
              href='#'
              className='menu-item'
            >Author</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
