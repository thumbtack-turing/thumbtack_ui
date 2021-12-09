import React from 'react';

import { Resource as ResourceProps } from '../models/Resource';

const Resource = ({
  id, name, url, image, createdAt
}: ResourceProps): JSX.Element => {
  return (
    <a href={ url } target='_blank' rel='noopener noreferrer' className='resource-link'>
      <article className='resource' style={{ backgroundImage: `url(${image})` }}>
        <h3>{ name }</h3>
      </article>
    </a>
  )
}

export default Resource;
