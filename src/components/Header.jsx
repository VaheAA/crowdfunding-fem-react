import React, {useState} from 'react';
import {logo, hamburger, close} from './imports';
import './header.css';

const Header = () => {
  const [isShown, setShown] = useState(false);
  const toggleMenu = () => {
    setShown(!isShown);
  };

  return (
    <header className="header">
      <div className={isShown ? 'overlay' : ''}></div>
      <div className="container-xl">
        <div className="header__inner">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="header__list hidden">
            <li className="header__list-item">
              <a className="header__list-link" href="#about">
                About
              </a>
            </li>
            <li className="header__list-item">
              <a className="header__list-link" href="#discover">
                Discover
              </a>
            </li>
            <li className="header__list-item">
              <a className="header__list-link" href="#start">
                Get Started
              </a>
            </li>
          </ul>
          <button className="menu__btn" onClick={toggleMenu}>
            <img src={!isShown ? hamburger : close} alt="hamburger" />
          </button>
          <ul
            className={
              isShown
                ? 'menu__list menu__list--show scale-up-center'
                : 'menu__list'
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
        </div>
      </div>
    </header>
  );
};

export default Header;
