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
import { idText } from 'typescript';
import { resourceUsage } from 'process';

const Folder = (props: FolderProps): JSX.Element => {
  const { id, name } = props;
  const [updateResource, { loading, error }] = useMutation(UPDATE_RESOURCE);


  const { data } = useQuery(GET_FOLDER, {
    variables: { id }
  });

  const completeFolderData = data?.getFolder;

  const handleClick = () => {
    currentFolderVar(completeFolderData);
  }

  const handleDrop = (item: any) => {
    let newNum = Number(item.id)
    updateResource({ variables: { id: newNum, folderId: item.id, newFolderId: id, name: item.name } })
  }

  const [ { isOver }, dropRef] = useDrop(() => ({
    accept: ItemTypes.RESOURCE,
    drop: (item: any) => handleDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }))

  return (
    <Link to={ `/myfolders/${id}` } onClick={ handleClick } className='folder-link' >
      <article className='folder' ref={dropRef}>
        <h3>{ name }</h3>
      </article>
    </Link>
  )
}

export default Folder;
