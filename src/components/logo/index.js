import React from 'react';
import logo from '../../images/Planner Healt Logo.png'; 
import './style.css';

function Logo() {
  return (
    <div className='Header_logo'>
      <img className='header_logo_img' src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
