import React from 'react';
import {Fragment} from 'react';

import './btn.css';

const BTN = ({text, disabled}) => {
  return (
    <Fragment>
      <button
        className="btn btn__fund"
        style={disabled ? {pointerEvents: 'none', opacity: '0.4'} : {}}>
        {text}
      </button>
    </Fragment>
  );
};

export default BTN;
