import React from 'react';
import { Link } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { currentFolderVar } from '../client/cache';

import { Folder as FolderProps } from '../models/Folder';

const Folder = (props: FolderProps): JSX.Element => {
  const currentFolder = useReactiveVar(currentFolderVar);

  return (
    <Link to={ `${props.name}` } onClick={ () => currentFolderVar(props) } >
      <article className='folder'>
        <h3>{ props.name }</h3>
      </article>
    </Link>
  )
}

export default Folder;
