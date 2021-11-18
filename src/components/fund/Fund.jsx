import React from 'react';
import CTA from '../CTA/CTA';
import './fund.css';

const Fund = () => {
  return (
    <section className="fund">
      <div className="container-sm">
        <div className="fund__inner">
          <div className="fund__info">
            <h3 className="fund__title">About this project</h3>
            <div className="fund__desc">
              <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand.
              </p>
              <p>
                Featuring artisan craftsmanship, the simplicity of design
                creates extra desk space below your computer to allow notepads,
                pens, and USB sticks to be stored under the stand.
              </p>
            </div>
          </div>
          <CTA
            fundTitle="Bamboo Stand"
            amount="25"
            fundText="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
you’ll be added to a special Backer member list."
            count="101"
          />
          <CTA
            fundTitle="Black Edition Stand"
            amount="75"
            fundText="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
member list. Shipping is included."
            count="64"
          />
          <CTA
            fundTitle="Mahogany Special Edition"
            amount="200"
            fundText="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
to our Backer member list. Shipping is included."
            count="0"
          />
        </div>
      </div>
    </section>
  );
};

export default Fund;
