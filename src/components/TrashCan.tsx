import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useDrop } from 'react-dnd';
import { currentFolderVar } from '../client/cache';
import { Folder as FolderProps } from '../models/Folder';
import { ItemTypes } from '../constants/ItemTypes';
import { GET_USER } from '../operations/queries/GET_USER';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import DELETE_FOLDER from '../operations/mutations/DELETE_FOLDER';
import DELETE_RESOURCE from '../operations/mutations/DELETE_RESOURCE';
import Relocate from './Relocate';
import folderUp from '../assets/folder-up.png';
import trashcan from '../assets/trashcan.png';

const TrashCan = (props: FolderProps): JSX.Element => {
  // const { id: oldFolderId, name, parentId: newParent } = props;

  const [ deleteResource, { loading, error, data: resourceReturnData}] = useMutation(DELETE_RESOURCE,
    // {
    //   refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ],
    // },
    // { variables: { id } }
  );

  const [ deleteFolder ] = useMutation(DELETE_FOLDER
    // , {
    //   refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ]
    // }
    // { variables: { id } }
)

  const [ { isOver }, dropRef ] = useDrop(() => ({
    accept: ItemTypes.BOTH,
    drop: (item: any) => handleDropDelete(item),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }))

  const { id: oldFolderId, parentId: newParent } = currentFolderVar()

  const handleDropDelete = (item: any) => {
    console.log(item.type)

    if(item.type === 'folder') {
      console.log('item', item)
      deleteFolder({ variables: {id: item.id} })
    } else {
      console.log('item', item)
      deleteResource({ variables: {id: item.id} })
    }
  }

  return (
    <article ref={ dropRef }>
      <img src={ trashcan } alt='trashcan' className='trashcan-icon' />
    </article>
  )
}

export default TrashCan;
