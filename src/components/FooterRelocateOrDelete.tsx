import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useDrop } from 'react-dnd';
import { currentFolderVar } from '../client/cache';
import { Folder as FolderProps } from '../models/Folder';
import { ItemTypes } from '../constants/ItemTypes';
import { GET_USER } from '../operations/queries/GET_USER';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import UPDATE_FOLDER from '../operations/mutations/UPDATE_FOLDER';
import UPDATE_RESOURCE from '../operations/mutations/UPDATE_RESOURCE';
import DELETE_FOLDER from '../operations/mutations/DELETE_FOLDER';
import DELETE_RESOURCE from '../operations/mutations/DELETE_RESOURCE';
import Relocate from './Relocate';
import TrashCan from './TrashCan';
import folderUp from '../assets/folder-up.png';
import trashcan from '../assets/trashcan.png';

const FooterRelocateOrDelete = (props: FolderProps): JSX.Element => {
  // const { id, name, parentId: newParent } = props;
  //
  // const [updateResource, { loading, error, data: resourceReturnData}] = useMutation(UPDATE_RESOURCE, {
  //   refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ],
  // },);
  //
  // const [ updateFolder ] = useMutation(UPDATE_FOLDER, {
  //   refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ]
  // })
  //
  // const [ { isOver }, dropRef ] = useDrop(() => ({
  //   accept: ItemTypes.BOTH,
  //   drop: (item: any) => handleDropMoveUp(item),
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver()
  //   })
  // }))
  //
  // const { id: oldFolderId } = currentFolderVar()
  //
  // console.log('oldFolderId', oldFolderId)
  // console.log('new parent', newParent)
  //
  // const handleDropMoveUp = (item: any) => {
  //   console.log(item.type)
  //
  //   if(item.type === 'folder') {
  //     console.log('item', item)
  //     updateFolder({ variables: {id: item.id, newParentId: newParent, name: item.name}})
  //   } else {
  //     console.log('item', item)
  //     updateResource({ variables: { id: item.id, folderId: oldFolderId, newFolderId: newParent } })
  //   }
  // }

  return (
    <footer className='relocate-or-delete'>
      <Relocate { ...props } />
      <TrashCan { ...props } />
    </footer>
  )
}

export default FooterRelocateOrDelete;
