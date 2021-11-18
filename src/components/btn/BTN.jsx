import React from 'react';
import {Fragment} from 'react';

import './btn.css';

const BTN = ({text, disabled, openModal}) => {
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
