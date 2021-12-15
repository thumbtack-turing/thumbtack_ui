import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className='menu'>
      <NavLink to='/' className='navlink'>
        home
      </NavLink>
      <p className='menu-divider'>•</p>
      <NavLink to='/myfolders' className='navlink'>
        app
      </NavLink>
      <p className='menu-divider'>•</p>
      <NavLink to='/meet-the-team' className='navlink'>
        meet the team
      </NavLink>
    </nav>
  )
}

export default Menu;
