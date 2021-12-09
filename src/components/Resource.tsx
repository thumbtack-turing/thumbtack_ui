import React from 'react';
import { useMutation } from '@apollo/client';
import { Resource as ResourceProps } from '../models/Resource';
import closeIcon from '../assets/button-close-icon-645944.png';
import DELETE_RESOURCE from '../operations/mutations/DELETE_RESOURCE';

const Resource = ({
  id, name, url, image, createdAt
}: ResourceProps): JSX.Element => {
  const [ deleteResource, { loading, error, data } ] = useMutation(DELETE_RESOURCE, {
    variables: { id }
  });

  const handleClose = () => {
    deleteResource();
    console.log('resource id', id);
  }

  return (
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
  )
}

export default Resource;
