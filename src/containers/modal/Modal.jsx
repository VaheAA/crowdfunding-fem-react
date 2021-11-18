import React from 'react';
import close from '../../assets/icon-close-modal.svg';
import './modal.css';
import {CTAmodal} from '../../components';

const Modal = () => {
  return (
    <section className="modal">
      <div className="container-sm">
        <div className="modal__inner">
          <div className="modal__info">
            <div className="modal__heading">
              <h3 className="modal__title">Back this project</h3>
              <p className="modal__desc">
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </p>
            </div>
            <button className="modal__btn">
              <img src={close} alt="" />
            </button>
          </div>

          <CTAmodal
            label="Pledge with no reward"
            desc="Choose to support us without a reward if you simply believe in our project. As a backer,
you will be signed up to receive product updates via email."
          />
          <CTAmodal
            label="Bamboo Stand"
            amount="Pledge $25 or more"
            count="101"
            desc="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
        you’ll be added to a special Backer member list."
          />
          <CTAmodal
            label="Black Edition Stand"
            amount="Pledge $75 or more"
            count="64"
            desc="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
        member list. Shipping is included."
          />
          <CTAmodal
            label="Mahogany Special Edition"
            amount="Pledge $200 or more"
            count="0"
            desc="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
        to our Backer member list. Shipping is included."
          />
        </div>
      </div>
    </section>
  );
};

export default Modal;
