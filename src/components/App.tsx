import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery, useReactiveVar } from '@apollo/client';
import { userVar } from '../client/cache';
import { GET_USER } from '../operations/queries/GET_USER';
import Header from './Header';

const App = () => {
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
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
