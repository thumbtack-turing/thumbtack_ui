import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { currentFolderVar } from '../client/cache';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import { ItemTypes } from '../constants/ItemTypes';
import { useDrop } from 'react-dnd'
import UPDATE_RESOURCE from '../operations/mutations/UPDATE_RESOURCE';
import { gql } from '@apollo/client';
import { Folder as FolderProps } from '../models/Folder';
import { collapseTextChangeRangesAcrossMultipleVersions, getTsBuildInfoEmitOutputFilePath, idText } from 'typescript';
import { resourceUsage } from 'process';
import DELETE_FOLDER from '../operations/mutations/DELETE_FOLDER';
import closeIcon from '../assets/button-close-icon-645944.png';
import { GET_CURRENT_FOLDER } from '../operations/read/GET_CURRENT_FOLDER';
import { GET_USER } from '../operations/queries/GET_USER';
import { useDrag } from 'react-dnd'
import UPDATE_FOLDER from '../operations/mutations/UPDATE_FOLDER';

const Folder = (props: FolderProps): JSX.Element => {
  const { id, name } = props;

  const { data } = useQuery(GET_FOLDER, {
    variables: { id }
  });

  const completeFolderData = data?.getFolder;

  const [ deleteFolder ] = useMutation(DELETE_FOLDER, {
    variables: { id }
  });

  const handleClose = () => {
    deleteFolder();
  }

  const handleClick = () => {
    currentFolderVar(completeFolderData);
  }

  //const [resourceId, setResourceId] = useState(0)
  const { id: oldFolderId } = currentFolderVar()
 //const [resourceName, setResourceName] = useState('')
  const [updateResource, { loading, error, data: resourceReturnData}] = useMutation(UPDATE_RESOURCE, {
    refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ],
  },);

  const [ updateFolder ] = useMutation(UPDATE_FOLDER, {
    refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ]
  })

  // console.log('resourceReturnData', resourceReturnData)
  // const parentFolder = resourceReturnData?.updateResource?.folder
  // if(parentFolder) {
  //   console.log('parentfolder', parentFolder)
  // } 

  const handleDrop = (item: any) => {
    // let draggedResourceId = Number(item.id)
    console.log(item.type)

    if(item.type === 'folder') {
      console.log('item', item)
      updateFolder({ variables: {id: item.id, newParentId: id, name: item.name}})
    } else {
      console.log('item', item)
      updateResource({ variables: { id: item.id, folderId: oldFolderId, newFolderId: id } })
    }

    // console.log('item', item)
    // if(item.__typename === 'folder') {
     
    // } else {
    // }
    
   
    //  .then((res: any) => res.data.updateResource.folder)
    // //.then(data => console.log(data))
    //   .then(parentFolder => {
    //     console.log('currentfoldervar1', currentFolderVar())
    //     currentFolderVar(parentFolder)})
    //   .then(() => console.log('currentfoldervar2', currentFolderVar()))
    // clearState()
  }

  // const clearState = () => {
  //   setResourceId(0)
  //   setResourceName('')
  // }

  //***** need to have state for itemType. if resource update state to resource, if folder update state to folder. accept VVV will be set to state?
  const [ { isOver }, dropRef] = useDrop(() => ({
    accept: ItemTypes.BOTH,
    drop: (item: any) => handleDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }))


  const [{isDragging}, drag, collect] = useDrag(() => ({
    item: { id, name, type: 'folder' }, 
    type: ItemTypes.BOTH,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      getItem: monitor.getItem(),
      getItemType: monitor.getItemType()
    })
  }))

  return (
    <article className='folder-container' ref={drag}  >
      <input
        type='image'
        src={ closeIcon }
        alt='close icon'
        onClick={ handleClose }
        className='icon'
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
