import React, { useState } from 'react';
import { useMutation, useReactiveVar } from '@apollo/client';
import { currentFolderVar } from '../client/cache';
import CREATE_RESOURCE from '../operations/mutations/CREATE_RESOURCE';
import plusIcon from '../assets/plus.png';

const CreateResource = (): JSX.Element => {
  const [ showing, setShowing ] = useState(false);
  const [ name, setName ] = useState('');
  const [ url, setUrl ] = useState('');
  const { id: folderId } = useReactiveVar(currentFolderVar);
  const [ createResource ] = useMutation(CREATE_RESOURCE, {
    variables: {
      folderId, name, url
    }
  });

  const toggleVisibility = () => {
    setShowing(!showing);
    setUrl('');
  }

  const handleChange = (event: any) => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'url') {
      setUrl(event.target.value);
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createResource();
    setShowing(false);
    setName('');
    setUrl('');
  }

  return (
    <article className='create-container'>
      <button
      onClick={ toggleVisibility }
      className='add-btn add-resource-btn'
      >
        <img
          className='plus-icon'
          src={ plusIcon }
          alt='plus-icon'
        />
        add new resource
      </button>
      {
        showing &&
          <form
            className='create-form'
            onSubmit={ handleSubmit }
          >
            <input
              type='text'
              name='name'
              placeholder='name...'
              onChange={ handleChange }
              required
              className='resource-name-input input-field'
            />
            <input
              type='text'
              name='url'
              placeholder='url...'
              onChange={ handleChange }
              required
              className='resource-url-input input-field'
            />
            <button className='submit-create-btn create-resource-btn'>
              create
            </button>
          </form>
      }
    </article>
  )
}

export default CreateResource;
