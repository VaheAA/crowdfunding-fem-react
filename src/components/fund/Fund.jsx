import React from 'react';
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
        </div>
      </div>
    </section>
  );
};

export default Fund;
