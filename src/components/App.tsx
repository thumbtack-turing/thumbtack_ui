import React from 'react';
import { Outlet } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Header from './Header';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div id='app' data-theme={ theme }>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
