import React from 'react';
import './progress.css';

const Progress = () => {
  return (
    <div className="progress">
      <div className="container-sm">
        <div className="progress__inner">
          <div className="progress__info">
            <div className="progress__info-col">
              <h2 className="progress__info-title">$89,914</h2>
              <p className="progress__info-text">of $100,000 backed</p>
            </div>
            <div className="progress__info-col">
              <h2 className="progress__info-title">5,007</h2>
              <p className="progress__info-text">total backers</p>
            </div>
            <div className="progress__info-col">
              <h2 className="progress__info-title">56</h2>
              <p className="progress__info-text">days left</p>
            </div>
          </div>
          <div className="progress__bar">
            <span style={{width: '80%'}}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
