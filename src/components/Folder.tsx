import React from 'react';

import { Folder as FolderProps } from '../models/Folder';

const Folder = ({
  id, name, base, parentId, childFolders, childResources
}: FolderProps): JSX.Element => {
  return (
    <article className='folder'>
      <h3>{ name }</h3>
    </article>
  )
}

export default Folder;
