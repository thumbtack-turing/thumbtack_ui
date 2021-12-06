import React from 'react';
import { Link } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { userVar } from '../client/cache';

import { Folder as FolderProps } from '../models/Folder';

const Folder = ({
  id, name, base, parentId, childFolders, childResources
}: FolderProps): JSX.Element => {
  const user = useReactiveVar(userVar);

  return (
    <Link to={ `/${user.id}/${id}` }>
      <article className='folder'>
        <h3>{ name }</h3>
      </article>
    </Link>
  )
}

export default Folder;
