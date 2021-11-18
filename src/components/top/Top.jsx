import React, {useState} from 'react';
import {logo, bookmark} from './imports';
import {BTN} from '..';
import './top.css';

const Top = () => {
  const [isBookmarked, setBookmark] = useState(false);
  const handleBookmark = () => {
    setBookmark(!isBookmarked);
  };

  return (
    <section className="top">
      <div className="container-sm">
        <div className="top__inner">
          <div className="top__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="top__content">
            <h1 className="top__title">Mastercraft Bamboo Monitor Riser</h1>
            <p className="top__desc">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
          </div>
          <div className="top__btns">
            <BTN text="Back this project" />
            <button
              type="button"
              className="btn__bookmark"
              onClick={handleBookmark}>
              <img src={bookmark} alt="bookmark" />
              <span style={{color: isBookmarked ? '#147b74' : ''}}>
                {!isBookmarked ? 'Bookmark' : 'Bookmarked'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
