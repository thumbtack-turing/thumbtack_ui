import React from 'react';
import { useQuery } from '@apollo/client';
import { userVar, currentFolderVar } from '../client/cache';
import AddForm from './AddForm';
import Gallery from './Gallery';
import { GET_USER } from '../operations/queries/GET_USER';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';

const Profile = (): JSX.Element => {
  // move this query to Landing Page's Login button onClick handler

  // can we cache this data instead of prop drilling?
  const email = 'rowan@test.com';
  const { loading, error, data: userData } = useQuery(GET_USER, {
    variables: { email }
  });

  const userId = userData?.getUser?.id;
  const userName = userData?.getUser?.name;
  const user = userVar(userData?.getUser);
  console.log(user);

  const { data: folderData } = useQuery(GET_FOLDER, {
    skip: !userId,
    variables: { id: userId }
  });

  const currentFolderId = folderData?.getFolder?.id;
  const childFolders = folderData?.getFolder?.childFolders;
  const childResources = folderData?.getFolder?.childResources;
  const currentFolder = currentFolderVar(folderData?.getFolder);

  return (
    <main className='profile'>
      <h1 className='username'>{ userName }</h1>
      <AddForm />
      <Gallery childFolders={ childFolders } childResources={ childResources } />
    </main>
  )
}

export default Profile;
