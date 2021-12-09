import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useReactiveVar } from '@apollo/client';
import { userVar, currentFolderVar } from '../client/cache';
import Resource from './Resource';
import Folder from './Folder';
import { Folder as FolderModel } from '../models/Folder';
import { Resource as ResourceModel } from '../models/Resource';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';

const SubFolderView = (): JSX.Element => {
  const { folderId } = useParams();
  console.log(folderId);

  const { loading, error, data } = useQuery(GET_FOLDER, {
    variables: { id: folderId }
  });

  const folderData = data?.getFolder;
  // currentFolderVar(folderData);
  console.log(folderData)
  if (folderData) {
    currentFolderVar(folderData);
  }
  // const currentFolder = useReactiveVar(currentFolderVar);
  // console.log(currentFolder)

  const childFolderElements = folderData?.childFolders?.map((folder: FolderModel) =>
    <Folder key={ folder.id } { ...folder } />
  )
  const childResourceElements = folderData?.childResources?.map((resource: ResourceModel) =>
    <Resource key={ resource.id } { ...resource } />
  )

return (
  <section className='gallery'>
    <h1> { folderData?.name } </h1>
    { childFolderElements }
    { childResourceElements }
  </section>
)
};

export default SubFolderView;
