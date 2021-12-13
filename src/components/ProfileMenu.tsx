import React from 'react';
import LightDarkModeToggle from './LightDarkModeToggle';

const ProfileMenu = (): JSX.Element => {
  return (
    <nav className='menu'>
      <LightDarkModeToggle />
    </nav>
  )
}

export default ProfileMenu;
