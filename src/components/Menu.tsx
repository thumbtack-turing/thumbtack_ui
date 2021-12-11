import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink to='/'
        className='navlink'
      >
        Home
      </NavLink>
      <NavLink to='/myfolders'
        className='navlink'
      >
        App
      </NavLink>
      <NavLink to='/features'
        className='navlink'
      >
        Features
      </NavLink>
      <NavLink to='/about'
        className='navlink'
      >
        About
      </NavLink>
      <NavLink to='/meet-the-team'
        className='navlink'
      >
        Meet the Team
      </NavLink>
    </nav>
  )
}

export default Menu
