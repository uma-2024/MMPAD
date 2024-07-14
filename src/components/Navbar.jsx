import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import wallet from '../assets/Images/ion_wallet.svg';
import CustomButton from './CustomButton';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar1'>
      <div className='nav-logo'>
        <h1>MMPAD</h1>
        <div className={`navbar-span ${isMobileMenuOpen ? 'hide-options' : ''}`}>
          <span><Link to="/">Home</Link></span> 
          <span><Link to="/stack">Stacking</Link></span>
          <span><Link to="/marketplace">Marketplace</Link></span>
        </div>
      </div>
      <CustomButton text="Connect" className="connect-btn" image={wallet} />
      <div className='hamburger-icon' onClick={handleMobileMenuToggle}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isMobileMenuOpen && (
        <div className='mobile-menu'>
          <span><Link to="/" onClick={handleMobileMenuToggle}>Home</Link></span>
          <span><Link to="/stack" onClick={handleMobileMenuToggle}>Stacking</Link></span>
          <span><Link to="/marketplace" onClick={handleMobileMenuToggle}>Marketplace</Link></span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
