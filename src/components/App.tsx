import React from 'react';
import { Outlet } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import { useQuery, useReactiveVar } from '@apollo/client';
import { userVar } from '../client/cache';
import { GET_USER } from '../operations/queries/GET_USER';
import Header from './Header';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    console.log(newTheme);
  }
  // const currentUser = useReactiveVar(userVar);
  // const email = 'eak@example.com';
  // const { loading, error, data: userData } = useQuery(GET_USER, {
  //   variables: { email }
  // });
  //
  // const user = userData?.getUser;
  // if (user) {
  //   userVar(user)
  // };
  // console.log(currentUser);

  return (
    <div id='app' data-theme={ theme }>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
