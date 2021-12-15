import React from 'react';
import loadingWheel from '../assets/loading-wheel.gif';

const Loading = ({ loading }: any): JSX.Element => {
  return (
    <article>
      <img className='loading' src={ loadingWheel } alt='loading graphic'/>
    </article>
  )
}

export default Loading;
