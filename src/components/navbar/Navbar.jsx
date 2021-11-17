import React, {useState} from 'react';
import {hamburger, close} from './imports';
import './navbar.css';

const Navbar = () => {
  const [isShown, setShown] = useState(false);
  const toggleMenu = () => {
    setShown(!isShown);
  };
  return (
    <nav className="navbar">
      <ul className="navbar__list hidden">
        <li className="navbar__list-item">
          <a className="navbar__list-link" href="#about">
            About
          </a>
        </li>
        <li className="navbar__list-item">
          <a className="navbar__list-link" href="#discover">
            Discover
          </a>
        </li>
        <li className="navbar__list-item">
          <a className="navbar__list-link" href="#start">
            Get Started
          </a>
        </li>
      </ul>
      <button className="menu__btn" onClick={toggleMenu}>
        <img src={!isShown ? hamburger : close} alt="hamburger" />
      </button>
      <ul
        className={
          isShown ? 'menu__list menu__list--show scale-up-center' : 'menu__list'
        }>
        <li className="menu__list-item">
          <a className="menu__list-link" href="#about">
            About
          </a>
        </li>
        <li className="menu__list-item">
          <a className="menu__list-link" href="#discover">
            Discover
          </a>
        </li>
        <li className="menu__list-item">
          <a className="menu__list-link" href="#start">
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
