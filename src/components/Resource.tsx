import React from 'react';

import { Resource as ResourceProps } from '../models/Resource';

const Resource = ({
  id, name, url, image, createdAt
}: ResourceProps): JSX.Element => {
  return (
    <article className='resource'>
      <h3>{ name }</h3>
    </article>
  )
}

export default Resource;
