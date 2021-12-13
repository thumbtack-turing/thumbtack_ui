import React from 'react';
import { ItemTypes } from '../constants/ItemTypes'
import { useDrag } from 'react-dnd'
import { useMutation } from '@apollo/client';
import { Resource as ResourceProps } from '../models/Resource';
import closeIcon from '../assets/button-close-icon-645944.png';
import DELETE_RESOURCE from '../operations/mutations/DELETE_RESOURCE';

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

  const [ deleteResource, { loading, error, data } ] = useMutation(DELETE_RESOURCE, {
    variables: { id }
  });

  const handleClose = () => {
    deleteResource();
    console.log('resource id', id);
  }

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
      <article className='resource-container'>
        <input
          type='image'
          src={ closeIcon }
          alt='close icon'
          onClick={ handleClose }
          className='close-icon'
        />
        <a href={ url } target='_blank' rel='noopener noreferrer' className='resource-link'>
          <article className='resource' style={{ backgroundImage: `url(${image})` }}>
            <h3>{ name }</h3>
          </article>
        </a>
      </article>
    </div>
  )
}

export default Resource;
