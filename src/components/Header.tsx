import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import Menu from './Menu';
import ProfileMenu from './ProfileMenu';

const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const isOnHomePage = !pathname.includes('myfolders');

  return (
    <header className='header'>
      <Logo />
      { isOnHomePage
        ? <Menu />
        : <ProfileMenu />
      }
    </header>
  )
}

export default Header;
