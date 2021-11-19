import React, {useState} from 'react';
import {Fragment} from 'react/cjs/react.production.min';
import {BTN} from '..';
import Modal from '../../containers/modal/Modal';

import './cta.css';

const CTA = ({fundTitle, amount, fundText, count, isOpen}) => {
  const [isShown, setShown] = useState(false);
  const openModal = () => {
    setShown(!isShown);
    document.querySelector('body').style.overflowY = 'hidden';
  };
  return (
    <Fragment>
      <div
        className={count === '0' ? 'cta cta--disabled' : 'cta'}
        status={isOpen}>
        <div className="container-xsm">
          <div className="cta__inner">
            <div className="cta__heading">
              <h3 className="cta__title">{fundTitle}</h3>
              <p className="cta__amount">Pledge ${amount} or more</p>
            </div>
            <div className="cta__desc">
              <p>{fundText}</p>
            </div>
            <div className="cta__info">
              <p className="cta__count">
                {count} <span>left</span>
              </p>
              <BTN
                text={count === '0' ? 'Out of Stock' : 'Select reward'}
                openModal={openModal}
              />
            </div>
          </div>
        </div>
      </div>
      {isShown ? <Modal /> : ''}
    </Fragment>
  );
};

export default CTA;
