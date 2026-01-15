import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  

  return (
    <nav 
      className={`
        w-full fixed top-0 left-0 z-50 transition-all duration-100 ease-in-out
      `}
    >
      <div className="container mx-auto ">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Your Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              A<span className='text-purple-600'>m.</span>
            </Link>
          </div>

          

      </div>
    </div>
    </nav>
  );
};

export default Navbar;