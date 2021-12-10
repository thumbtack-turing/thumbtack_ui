import React from 'react';
import { ItemTypes } from '../constants/ItemTypes'
import { useDrag } from 'react-dnd'

import { Resource as ResourceProps } from '../models/Resource';

const Resource = ({
  id, name, url, image, createdAt
}: ResourceProps): JSX.Element => {

  const [{isDragging}, drag] = useDrag(() => ({
    item: { id, name }, 
    type: ItemTypes.RESOURCE,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
    ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1,
      fontSize: 25,
      fontWeight: 'bold',
      cursor: 'move',
    }}
    >
      <a href={ url } target='_blank' rel='noopener noreferrer' className='resource-link'>
        <article className='resource' style={{ backgroundImage: `url(${image})` }}>
          <h3>{ name }</h3>
        </article>
      </a>
    </div>
  )
}

export default Resource;
