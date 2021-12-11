import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { useDrop } from 'react-dnd';
import { currentFolderVar } from '../client/cache';
import { ItemTypes } from '../constants/ItemTypes';
import { Folder as FolderProps } from '../models/Folder';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import UPDATE_RESOURCE from '../operations/mutations/UPDATE_RESOURCE';
import DELETE_FOLDER from '../operations/mutations/DELETE_FOLDER';
import closeIcon from '../assets/button-close-icon-645944.png';
// import { resourceUsage } from 'process';
// import { idText } from 'typescript';
// import { gql } from '@apollo/client';

const Folder = (props: FolderProps): JSX.Element => {
  const { id, name } = props;

  const { data } = useQuery(GET_FOLDER, {
    variables: { id }
  });
  const [ deleteFolder ] = useMutation(DELETE_FOLDER, {
    variables: { id }
  });
  const [ updateResource,
    { loading, error, data: resourceReturnData }
  ] = useMutation(UPDATE_RESOURCE);

  const completeFolderData = data?.getFolder;

  const handleClose = () => {
    deleteFolder();
    console.log('folder id', id);
  }

  const handleClick = () => {
    currentFolderVar(completeFolderData);
  }

  //const [resourceId, setResourceId] = useState(0)
  //const [resourceName, setResourceName] = useState('')
  const { id: oldFolderId } = currentFolderVar();

  console.log('resourceReturnData', resourceReturnData)
  const parentFolder = resourceReturnData?.updateResource?.folder
  if(parentFolder) {
    console.log('parentfolder', parentFolder)
  }

  const handleDrop = (item: any) => {
    // let draggedResourceId = Number(item.id)
    updateResource({ variables: { id: item.id, folderId: oldFolderId, newFolderId: id } })
     .then((res: any) => res.data.updateResource.folder)
    //.then(data => console.log(data))
      .then(parentFolder => {
        console.log('currentfoldervar1', currentFolderVar())
        currentFolderVar(parentFolder)})
      .then(() => console.log('currentfoldervar2', currentFolderVar()))
    // clearState()
  }

  // const clearState = () => {
  //   setResourceId(0)
  //   setResourceName('')
  // }

  const [ { isOver }, dropRef] = useDrop(() => ({
    accept: ItemTypes.RESOURCE,
    drop: (item: any) => handleDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }))

  return (
    <article className='folder-container'>
      <input
        type='image'
        src={ closeIcon }
        alt='close icon'
        onClick={ handleClose }
        className='close-icon'
      />
      <Link to={ `/myfolders/${id}` } onClick={ handleClick } className='folder-link'>
        <article className='folder' ref={dropRef}>
          <h3>{ name }</h3>
        </article>
      </Link>
    </article>
  )
}

export default Folder;
