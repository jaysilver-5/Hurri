import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from './public/logo.png';
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggleMenu = () => {
    setIsSmallScreen(!isSmallScreen);
    // Feel the power of the toggle! On and off, like a light switch.
  };

  const handleHamClick = () => {
    setShowModal(!showModal); // Let the modal dance begin!
  };

  return (
    <div className="h-16 fixed top-0 z-50 bg-secondary w-full flex border-b lg:px-12 md:px-8 px-4 xl:px-16 border-lightgray items-center justify-between">
      <img src={Logo} alt="logo" className="w-20 h-12" />

      {/* Navigation Links for xl and lg screens */}
      <div className={`lg:flex xl:flex md:hidden hidden gap-x-8 ${showModal ? 'hidden' : 'block'}`}>
        <Link to="/" className="text-white">Home</Link>
        <Link to="/faq" className="text-white">FAQ</Link>
        <Link to="/privacy" className="text-white">Privacy Policy</Link>
        <Link to="/Support" className="text-white">Support</Link>
      </div>

      {/* Hamburger Icon for sm and md screens */}
      <GiHamburgerMenu onClick={handleHamClick} className="text-[#fff] lg:hidden md:flex xl:hidden flex cursor-pointer" />

      {/* Mobile Menu */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 50 }}>
          {/* The modal that steals the show */}
          <div style={{ backgroundColor: 'white', padding: '2rem', position: 'absolute', top: '0px', right: '0px', height: '100%', width: '50%', backgroundColor: '#000', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }} className='gap-y-4'>
            <AiOutlineClose style={{color: 'white'}} onClick={() => setShowModal(false)} />
            <Link to="/" style={{ color: 'white' }} onClick={() => setShowModal(false)}>Home</Link>
            <Link to="/faq" style={{ color: 'white' }} onClick={() => setShowModal(false)}>FAQ</Link>
            <Link to="/privacy" style={{ color: 'white' }} onClick={() => setShowModal(false)}>Privacy Policy</Link>
            <Link to="/support" style={{ color: 'white' }} onClick={() => setShowModal(false)}>Support</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
