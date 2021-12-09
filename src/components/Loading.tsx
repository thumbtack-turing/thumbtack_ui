import React from 'react';
import rainbowKitty from '../assets/cat_rainbow.gif';

const Loading = ({ loading }: any): JSX.Element => {
  return (
    <article>
      <img className='loading' src={ rainbowKitty } alt='loading graphic'/>
    </article>
  )
}

export default Loading;
