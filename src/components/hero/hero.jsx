import React from 'react';
import './hero.styles.scss';

const Hero = () => {
  return (
    <section className="hero is-info is-large hero-image overlay">

      <div className="hero-body">
        <div className="container">
          {/* <h1 className="hero-title">
            Handbags reimagined.
          </h1> */}
          <div className='shop-now-btn'>
            <button className='button is-black' id='shop-now'>
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;