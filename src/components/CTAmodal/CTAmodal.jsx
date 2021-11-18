import React, {useState} from 'react';
import './ctamodal.css';

const CTAmodal = ({label, amount, count, desc}) => {
  const [isChecked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!isChecked);
  };
  return (
    <div
      className={
        count === '0' ? 'modal__cta modal__cta--disabled' : 'modal__cta'
      }>
      <div className="container-xsm">
        <div className="modal__cta-inner">
          <form className="form">
            <div className="form__controls">
              <input
                className="checkbox"
                type="checkbox"
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
                <span class="currency-code">$</span>
                <input className="input__fund" type="text" name="sum" />
                <button className="btn__submit" type="submit">
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
        <div
          className="line"
          style={isChecked ? {display: 'block'} : {display: 'none'}}></div>
      </div>
    </div>
  );
};

export default CTAmodal;
