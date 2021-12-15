import React from 'react';
// import rainbowKitty from '../assets/cat_rainbow.gif';
import loadingWheel from '../assets/loading-wheel.gif';

const Loading = ({ loading }: any): JSX.Element => {
  return (
    <article>
      <img className='loading' src={ loadingWheel } alt='loading graphic'/>
    </article>
  )
}

export default Loading;
