import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery, useReactiveVar } from '@apollo/client';
import { userVar, currentFolderVar } from '../client/cache';
import AddForm from './AddForm';
import Gallery from './Gallery';
import { GET_USER } from '../operations/queries/GET_USER';
// import { GET_FOLDER } from '../operations/queries/GET_FOLDER';

const Profile = (): JSX.Element => {
  // move this query to Landing Page's Login button onClick handler
  // will need to pass a prop from login's getUser query
  // can we cache this data instead of prop drilling?
  // const client = useApolloClient();
  // console.log(client);

  const email = 'rowan@test.com';
  const { loading, error, data: userData } = useQuery(GET_USER, {
    variables: { email }
  });
  // can't pass email as a prop to profile because of routes...

  const { name: userName } = useReactiveVar(userVar);

  // const userId = userData?.getUser?.id;
  // const userName = userData?.getUser?.name;
  // const childFolders = userData?.getUser?.baseFolder.childFolders;
  // const childResources = userData?.getUser?.baseFolder.childResources;
  const currentFolder = useReactiveVar(currentFolderVar);

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
