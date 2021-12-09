import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery, useReactiveVar } from '@apollo/client';
import { userVar, currentFolderVar } from '../client/cache';
import AddForm from './AddForm';
// import Gallery from './Gallery';
import { GET_USER } from '../operations/queries/GET_USER';
// import { GET_FOLDER } from '../operations/queries/GET_FOLDER';

const Profile = (): JSX.Element => {
  // move this query to Landing Page's Login button onClick handler
  // will need to pass a prop from login's getUser query
  // can we cache this data instead of prop drilling?

  const email = 'eak@example.com';
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email }
  });
  // can't pass email as a prop to profile because of routes...

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
      <h1 className='username'>{ userName }</h1>
      <AddForm />
      <Outlet />

    </main>
  )
}

export default Profile;

/*<Gallery childFolders={ childFolders } childResources={ childResources } />*/
