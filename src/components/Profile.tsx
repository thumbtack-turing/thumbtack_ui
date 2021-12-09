import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery, useReactiveVar } from '@apollo/client';
import { userVar, currentFolderVar } from '../client/cache';
import AddForm from './AddForm';
import Loading from './Loading';
import Error from './Error';
import { GET_USER } from '../operations/queries/GET_USER';

const Profile = (): JSX.Element => {
  const email = 'eak@example.com';
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email }
  });

  const userData = data?.getUser;
  console.log('user Data', userData)
  if (userData) {
    userVar(userData)
  }
  const { name: userName, baseFolder } = useReactiveVar(userVar);
  if (baseFolder) {
    currentFolderVar(baseFolder);
  }

  return (
    <main className='profile'>
      { loading && <Loading /> }
      { error && <Error /> }
      { data && <>
        <h1 className='username'>{ userName }</h1>
        <AddForm />
        <Outlet />
      </> }
    </main>
  )
}

export default Profile;
