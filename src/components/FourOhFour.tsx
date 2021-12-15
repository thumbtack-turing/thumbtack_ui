import React from 'react';
import rainbowKitty from '../assets/cat_rainbow.gif';

const FourOhFour = () => {
  return (
    <section className='four-oh-four'>
      <h1>Looks like you've found your way to a page we don't have!</h1>
      <img src={ rainbowKitty } alt='rainbow kitty' className='rainbow-kitty'/>
      <h1>Use the navigation links above to find your way back.</h1>
    </section>
  );
}

export default FourOhFour;
