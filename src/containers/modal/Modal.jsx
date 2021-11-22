import React, {useState} from 'react';
import close from '../../assets/icon-close-modal.svg';
import './modal.css';
import {CTAmodal} from '../../components';
import {Success} from '../../components';
import {Fragment} from 'react/cjs/react.production.min';

const Modal = () => {
  const [isClosed, setClose] = useState(false);
  const [isSubmited, setSubmited] = useState(false);
  const closeModal = () => {
    setClose(!isClosed);
    document.querySelector('body').style.overflowY = 'auto';
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(!isSubmited);
  };

  return (
    <Fragment>
      {isSubmited ? (
        <Success />
      ) : (
        <Fragment>
          {!isClosed ? (
            <section className="modal">
              <div className="container-sm">
                <div className="modal__inner">
                  <div className="modal__info">
                    <div className="modal__heading">
                      <h3 className="modal__title">Back this project</h3>
                      <p className="modal__desc">
                        Want to support us in bringing Mastercraft Bamboo
                        Monitor Riser out in the world?
                      </p>
                    </div>
                    <button className="modal__btn" onClick={closeModal}>
                      <img src={close} alt="" />
                    </button>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <CTAmodal
                      label="Pledge with no reward"
                      desc="Choose to support us without a reward if you simply believe in our project. As a backer,
you will be signed up to receive product updates via email."
                      min=""
                    />
                    <CTAmodal
                      label="Bamboo Stand"
                      amount="Pledge $25 or more"
                      count="101"
                      desc="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
        you’ll be added to a special Backer member list."
                      min="25"
                    />
                    <CTAmodal
                      label="Black Edition Stand"
                      amount="Pledge $75 or more"
                      count="64"
                      desc="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
        member list. Shipping is included."
                      min="65"
                    />
                    <CTAmodal
                      label="Mahogany Special Edition"
                      amount="Pledge $200 or more"
                      count="0"
                      desc="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
        to our Backer member list. Shipping is included."
                    />
                  </form>
                </div>
              </div>
            </section>
          ) : (
            ''
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Modal;
