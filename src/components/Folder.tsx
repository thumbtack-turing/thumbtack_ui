import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useReactiveVar } from '@apollo/client';
import { currentFolderVar } from '../client/cache';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';

import { Folder as FolderProps } from '../models/Folder';

const Folder = (props: FolderProps): JSX.Element => {
  // const currentFolder = useReactiveVar(currentFolderVar);
  const { id, name } = props;

  const { loading, error, data } = useQuery(GET_FOLDER, {
    variables: { id }
  });

  const completeFolderData = data?.getFolder;

  const handleClick = () => {
    currentFolderVar(completeFolderData);
  }

  return (
    <Link to={ `${id}` } onClick={ handleClick } >
      <article className='folder'>
        <h3>{ name }</h3>
      </article>
    </Link>
  )
}

export default Folder;
