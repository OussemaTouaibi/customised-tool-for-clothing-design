import React from 'react';
import './hero.styles.scss';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
      <div>
<section class="hero is-large is-info hero-image">
  <div class="hero-body">
      <div className='container'>
    <h1 className='hero-title'>
    START YOUR PROJECT, NOW.
    </h1>
    <div className='try-now-btn'>
    <Link to="/Prototypes">
    <button className='button is-black' id='try-now'>
      TRY NOW
    </button>
    </Link>
  </div>
  <h1 className='hero-title'>
    ABOVE YOUR CREATIVITY
    </h1>
  <div className='try-now-btn'>
  <button className='button is-black' id='try-now'>
      SEE THE VIDEO
    </button>
    </div>
  </div>
  </div>
  </section>
  <section class="hero is-large is-info hero-img">
  <div class="hero-body">
      <div className='container'>
    <p className='hero-par'>
    Improve, simplify and make sustainable the design and design of clothing for the whole fashion world, generating innovation paths that lead to significant savings in terms of time, costs and procedures, through an interactive platform that is continuously updated and improved.
    </p>
  
  </div>
  </div>
</section>
</div>
    );
}

export default Hero;