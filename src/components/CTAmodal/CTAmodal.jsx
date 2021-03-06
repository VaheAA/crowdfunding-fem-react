import React, {useState} from 'react';
import './ctamodal.css';
import {Fragment} from 'react/cjs/react.production.min';

const CTAmodal = ({label, amount, count, desc, min}) => {
  const [isChecked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!isChecked);
  };
  return (
    <Fragment>
      <div
        className={
          count === '0' ? 'modal__cta modal__cta--disabled' : 'modal__cta'
        }>
        <div className="container-xsm">
          <div
            className="modal__cta-inner"
            style={
              isChecked
                ? {border: '3px solid #3cb4ac'}
                : {border: '1px solid rgba(122, 122, 122, 0.35)'}
            }>
            <div className="form">
              <div className="form__controls">
                <input
                  className="checkbox"
                  type="radio"
                  name="checkbox"
                  onChange={handleChange}
                />
                <label className="label" htmlFor="checkbox">
                  <div className="label__info">
                    <span className="label__title">{label}</span>
                    <span className="label__amount"> {amount}</span>
                  </div>
                  <p className="label__count">
                    {count} <span>{!count ? '' : 'left'}</span>
                  </p>
                </label>
              </div>
              <p className="modal__cta-desc">{desc}</p>
              <div
                className="form__controls form__controls--last"
                style={isChecked ? {display: 'flex'} : {display: 'none'}}>
                <label className="label__text" htmlFor="sum">
                  Enter your pledge
                </label>
                <div className="form__input">
                  <span className="currency-code">$</span>
                  <input
                    className="input__fund"
                    type="number"
                    name="sum"
                    min={min}
                    placeholder={min}
                  />
                  <button className="btn__submit" type="submit">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="line"
            style={isChecked ? {display: 'block'} : {display: 'none'}}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default CTAmodal;
