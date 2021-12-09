import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { currentFolderVar } from '../client/cache';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';

import { Folder as FolderProps } from '../models/Folder';

const Folder = (props: FolderProps): JSX.Element => {
  const { id, name } = props;

  const { data } = useQuery(GET_FOLDER, {
    variables: { id }
  });

  const completeFolderData = data?.getFolder;

  const handleClick = () => {
    currentFolderVar(completeFolderData);
  }

  return (
    <Link to={ `/myfolders/${id}` } onClick={ handleClick } className='folder-link'>
      <article className='folder'>
        <h3>{ name }</h3>
      </article>
    </Link>
  )
}

export default Folder;
