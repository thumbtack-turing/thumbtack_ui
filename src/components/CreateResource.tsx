import React, { useState } from 'react';
import { useMutation, useReactiveVar } from '@apollo/client';
import { currentFolderVar } from '../client/cache';
import CREATE_RESOURCE from '../operations/mutations/CREATE_RESOURCE';

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
  // console.log(folderId)

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
    // create new Resource from interface (post to GQL)
    createResource();
    // console.log(currentFolder.parentId);
    // store new Resource in the cache??
    setShowing(false);
    setName('');
    setUrl('');
  }

  return (
    <article className='create-container'>
      <button
      onClick={ toggleVisibility }
      className='add-resource-btn'
      >
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
              placeholder='name'
              onChange={ handleChange }
              required
              className='resource-name-input'
            />
            <input
              type='text'
              name='url'
              placeholder='url'
              onChange={ handleChange }
              required
              className='resource-url-input'
            />
            <button className='submit-create-resource-btn'>
              create
            </button>
          </form>
      }
    </article>
  )
}

export default CreateResource;
