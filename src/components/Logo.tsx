import React from 'react';
import { Link } from 'react-router-dom';
import thumbtack from '../assets/thumbtack.png';

const Logo = () => {
  return (
    <Link to='/' className='logo-link'>
      <article className='logo-container'>
        <img
          src={ thumbtack }
          alt='purple thumbtack icon' className='thumbtack-icon'
        />
        <h1 className='logo-title'>
          thumbtack
        </h1>
      </article>
    </Link>
  )
}

export default Logo
