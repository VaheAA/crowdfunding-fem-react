import React from 'react';
import {logo} from './imports';
import Navbar from '../../components/navbar/Navbar';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="overlay overlay--hidden"></div>
      <div className="container-xl">
        <div className="header__inner">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
