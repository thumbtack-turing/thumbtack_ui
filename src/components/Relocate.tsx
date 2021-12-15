import React, { useEffect } from 'react';
import { useQuery, useMutation, useReactiveVar } from '@apollo/client';
import { useDrop } from 'react-dnd';
import { currentFolderVar } from '../client/cache';
import { Folder as FolderProps } from '../models/Folder';
import { ItemTypes } from '../constants/ItemTypes';
import { GET_USER } from '../operations/queries/GET_USER';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import UPDATE_FOLDER from '../operations/mutations/UPDATE_FOLDER';
import UPDATE_RESOURCE from '../operations/mutations/UPDATE_RESOURCE';
import folderUp from '../assets/folder-up.png';

const Relocate = (props: FolderProps): JSX.Element => {
  const { id: oldFolderId, parentId: newParent } = props;
  // console.log('relocate currentFolderVar 1', currentFolderVar(), Date.now())
  console.log('ON RENDER relocate props', props)
  // const { id: oldFolderId, parentId: newParent } = currentFolderVar();

  // let oldFolderId: number | null;
  // let newParent: number | null;

  const currentFolder = useReactiveVar(currentFolderVar);

  useEffect(() => {
    // const { id, parentId } = currentFolder;
    // oldFolderId = id;
    // newParent = parentId;
    currentFolderVar(props)
    console.log('relocate useEffect', currentFolder)
    console.log('relocate currentFolderVar 1', currentFolderVar(), Date.now())
  }, [ currentFolder ])

  // console.log('ON RENDER oldFolderId', oldFolderId)
  // console.log('ON RENDER newParent', newParent)
  const [ updateResource, { loading, error, data: resourceReturnData } ] = useMutation(UPDATE_RESOURCE
    , {
      refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ]
      // refetchQueries: [ GET_FOLDER, 'getFolder' ]
    }
  );

  const [ updateFolder ] = useMutation(UPDATE_FOLDER, {
      refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ]
    }
)

  const [ { isOver }, dropRef ] = useDrop(() => ({
    accept: ItemTypes.BOTH,
    drop: (item: any) => handleDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }))

  // const { id: oldFolderId, parentId: newParent } = currentFolderVar()

  // console.log('relocate currentFolderVar 2', currentFolderVar(), Date.now())

  const handleDrop = (item: any) => {
    if (item.type === 'folder') {
      console.log('item', item)
      updateFolder({ variables: {id: item.id, newParentId: newParent, name: item.name}})
    } else {
      console.log('item', item)
      updateResource({ variables: { id: item.id, folderId: oldFolderId, newFolderId: newParent } })
      .then(data => console.log('after update resource', data))
      console.log('ON DROP item.id', item.id, Date.now())
      console.log('ON DROP oldFolderId', oldFolderId, Date.now())
      console.log('ON DROP newParent', newParent, Date.now())
    }
  }

  return (
    <article ref={ dropRef }>
      <img src={ folderUp } alt='folder up' className='folder-up-icon' />
    </article>
  )
}

export default Relocate;
