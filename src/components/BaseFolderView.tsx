import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useReactiveVar } from '@apollo/client';
import { userVar, currentFolderVar } from '../client/cache';
import Resource from './Resource';
import Folder from './Folder';
import { Folder as FolderModel } from '../models/Folder';
import { Resource as ResourceModel } from '../models/Resource';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';

const BaseFolderView = (): JSX.Element => {
  const user = useReactiveVar(userVar);
  const baseFolderData = user.baseFolder;

  if (baseFolderData) {
    currentFolderVar(baseFolderData);
  }

  console.log('baseFolderData', baseFolderData);

  const childFolderElements = baseFolderData?.childFolders.map((folder: FolderModel) =>
    <Folder key={ folder.id } { ...folder } />
  )
  const childResourceElements = baseFolderData?.childResources.map((resource: ResourceModel) =>
    <Resource key={ resource.id } { ...resource } />
  )

  return (
    <section className='gallery'>
      <h1> { baseFolderData?.name } </h1>
      <section className='gallery-items'>
      { childFolderElements }
      { childResourceElements }
      </section>
    </section>
  )
};

export default BaseFolderView;
