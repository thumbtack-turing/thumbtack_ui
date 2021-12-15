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
        <article className='name-and-form-container'>
          <h1 className='username'>{ userName }'s stuff</h1>
          <AddForm />
          <h4 className='folder-name'></h4>
        </article>
        <Outlet />
      </> }
    </main>
  )
}

export default Profile;
