import React, {useState} from 'react';
import {BTN} from '..';
import Modal from '../../containers/modal/Modal';

import './cta.css';

const CTA = ({fundTitle, amount, fundText, count}) => {
  const [isShown, setShown] = useState(false);
  const openModal = () => {
    setShown(!isShown);
  };
  return (
    <div className={count === '0' ? 'cta cta--disabled' : 'cta'}>
      <div className="container-xsm">
        <div className="cta__inner">
          <div className="cta__heading">
            <h5 className="cta__title">{fundTitle}</h5>
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
              onclick={() => openModal()}
            />
          </div>
        </div>
      </div>
      {isShown ? <Modal /> : ''}
    </div>
  );
};

export default CTA;
