import React from 'react';
import {Fragment} from 'react';
import './btn.css';

const BTN = ({text}) => {
  return (
    <Fragment>
      <button className="btn btn__fund">{text}</button>
    </Fragment>
  );
};

export default BTN;
