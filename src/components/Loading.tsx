import React from 'react';
import rainbowKitty from '../assets/cat_rainbow.gif';

const Loading = ({ loading }: any): JSX.Element => {
  console.log(loading)
  return (
    <article>
      <img className='loading' src={ rainbowKitty } />
    </article>
  )
}

export default Loading;
