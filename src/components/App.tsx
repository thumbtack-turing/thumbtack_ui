import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../operations/queries/GET_USER';
import Header from './Header';

const App = () => {
  const email = 'rowan@test.com';
  const { loading, error, data: userData } = useQuery(GET_USER, {
    variables: { email }
  });

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
