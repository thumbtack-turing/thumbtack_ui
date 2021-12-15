import React from 'react';
import { Outlet } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import useLocalStorage from 'use-local-storage';
import Header from './Header';
import { currentThemeVar } from '../client/cache';

const App = () => {
  const { theme: currentTheme } = useReactiveVar(currentThemeVar);

  return (
    <div id='app' data-theme={ currentTheme }>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
