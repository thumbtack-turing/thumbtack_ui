import React from 'react';
import { NavLink } from 'react-router-dom';
import LightDarkModeToggle from './LightDarkModeToggle';

const Menu = () => {
  return (
    <nav className='menu'>
      <NavLink to='/myfolders' className='navlink'>
        app
      </NavLink>
      <p className='menu-divider'>•</p>
      <NavLink to='/meet-the-team' className='navlink'>
        meet the team
      </NavLink>
      <LightDarkModeToggle />
    </nav>
  )
}

export default Menu;
