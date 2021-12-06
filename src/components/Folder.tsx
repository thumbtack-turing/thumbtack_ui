import React from 'react';
import { Link } from 'react-router-dom';

import { Folder as FolderProps } from '../models/Folder';

const Folder = ({
  id, name, base, parentId, childFolders, childResources
}: FolderProps): JSX.Element => {
  return (
    <Link to='/'>
      <article className='folder'>
        <h3>{ name }</h3>
      </article>
    </Link>
  )
}

export default Folder;
