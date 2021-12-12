import React from 'react';
import './index.css';
import logo from './image/image.png';

const Header=()=> {
    return (
      <div className="header">
        <img src={logo} alt="logo" width='70' height='50' />
        <h1>Mehtab Kazmi</h1>
      </div>
    );
  }
  
  export default Header;
  