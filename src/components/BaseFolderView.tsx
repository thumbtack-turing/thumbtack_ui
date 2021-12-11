import React, { SyntheticEvent, useState } from 'react';
import { useReactiveVar, useMutation } from '@apollo/client';
import { userVar, currentFolderVar } from '../client/cache';
import Resource from './Resource';
import Folder from './Folder';
import { Folder as FolderModel } from '../models/Folder';
import { Resource as ResourceModel } from '../models/Resource';




const BaseFolderView = (): JSX.Element => {
  const user = useReactiveVar(userVar);
  const baseFolderData = user.baseFolder;

  

  if (baseFolderData) {
    currentFolderVar(baseFolderData);
  }

  const childFolderElements = baseFolderData?.childFolders.map((folder: FolderModel) =>
    <Folder key={ folder.id } { ...folder }/>
  )
  const childResourceElements = baseFolderData?.childResources.map((resource: ResourceModel) =>
    <Resource key={ resource.id } { ...resource } />
  )

  const promptWhenEmpty = () => {
    if (!childFolderElements && !childResourceElements) {
      return (
        <h2 className='prompt-when-empty'>
          Nothing saved yet. Add a new resource or folder to get started!
        </h2>
      )
    }
  }

  return (
    <section className='gallery'>
      <h4 className='folder-name'> /{ baseFolderData?.name } </h4>
      <section className='gallery-items'>
      { promptWhenEmpty() }
      { childFolderElements }
      { childResourceElements }
      </section>
    </section> 
  )
};

export default BaseFolderView;
