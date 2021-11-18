import React, {useState} from 'react';
import logo from '../../assets/icon-check.svg';
import {BTN} from '..';
import './success.css';

const Success = () => {
  const [isOpened, setOpened] = useState(false);
  const handleClose = () => {
    setOpened(!isOpened);
  };
  return (
    <div
      className="modal__success"
      style={isOpened ? {display: 'block'} : {display: 'none'}}>
      <div className="modal__success-inner">
        <div className="modal__success-logo">
          <img src={logo} alt="success" />
        </div>
        <h3 className="modal__success-title">Thanks for your support!</h3>
        <p className="modal__success-text">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <BTN text="Got it!" onClick={handleClose} />
      </div>
    </div>
  );
};

export default Success;
