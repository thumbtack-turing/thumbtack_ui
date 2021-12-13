import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { currentFolderVar, currentFilePathVar } from '../client/cache';
import Resource from './Resource';
import Folder from './Folder';
import Loading from './Loading';
import Error from './Error';
import { Folder as FolderModel } from '../models/Folder';
import { Resource as ResourceModel } from '../models/Resource';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import { generateLinks } from '../utilities/generateLinks';

const SubFolderView = (): JSX.Element => {
  const { folderId } = useParams();

  const { loading, error, data } = useQuery(GET_FOLDER, {
    variables: { id: folderId }
  });

  const folderData = data?.getFolder;

  if (folderData) {
    currentFolderVar(folderData);
    currentFilePathVar(folderData.filePath);
  }

  const childFolderElements = folderData?.childFolders?.map((folder: FolderModel) =>
    <Folder key={ folder.id } { ...folder } />
  )
  const childResourceElements = folderData?.childResources?.map((resource: ResourceModel) =>
    <Resource key={ resource.id } { ...resource } />
  )

  const promptWhenEmpty = () => {
    if (!childFolderElements.length && !childResourceElements.length) {
      return (
        <h2 className='prompt-when-empty'>
          Nothing saved yet. Add a new resource or folder to get started!
        </h2>
      )
    }
  }

  const parentId = folderData?.parentId;
  const filePath = folderData?.filePath;
  let filepathLinks;
  if (folderData) {
    filepathLinks = generateLinks(filePath, parentId);
  }

return (
  <section className='gallery'>
    { loading && <Loading /> }
    { error && <Error /> }
    { data && <>
      <article className='folder-name-container'>
        <h4 className='folder-name'>{ filepathLinks }</h4>
      </article>
      <section className='gallery-items'>
      { promptWhenEmpty() }
      { childFolderElements }
      { childResourceElements }
      </section>
    </> }
  </section>
)
};

export default SubFolderView;
