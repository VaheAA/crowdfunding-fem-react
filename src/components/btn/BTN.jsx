import React, {useState} from 'react';
import {Fragment} from 'react';

import './btn.css';

const BTN = ({text, disabled}) => {
  const [isShown, setStatus] = useState(false);
  const openModal = () => {
    setStatus(!isShown);
  };
  return (
    <Fragment>
      <button
        className="btn btn__fund"
        style={disabled ? {pointerEvents: 'none', opacity: '0.4'} : {}}
        onClick={openModal}>
        {text}
      </button>
    </Fragment>
  );
};

export default BTN;
