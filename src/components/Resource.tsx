import React from 'react';
import { Link } from 'react-router-dom';

import { Resource as ResourceProps } from '../models/Resource';

const Resource = ({
  id, name, url, image, createdAt
}: ResourceProps): JSX.Element => {
  return (
    <Link to={ url } target="_blank" rel="noopener noreferrer">
      <article className='resource'>
        <h3>{ name }</h3>
      </article>
    </Link>
  )
}

export default Resource;
