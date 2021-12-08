import React, { useState } from 'react';
import { useMutation, useReactiveVar } from '@apollo/client';
import { currentFolderVar } from '../client/cache';
import CREATE_RESOURCE from '../operations/mutations/CREATE_RESOURCE';

const CreateResource = (): JSX.Element => {
  const [ showing, setShowing ] = useState(false);
  const [ name, setName ] = useState('');
  const [ url, setUrl ] = useState('');
  const { id: folderId } = useReactiveVar(currentFolderVar);
  const [ createResource, { loading, error, data }] = useMutation(CREATE_RESOURCE, {
    variables: {
      name, url, folderId
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
    // create new Resource from interface (post to GQL)
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
            />
            <input
              type='text'
              name='url'
              placeholder='url'
              onChange={ handleChange }
              required
            />
            <button>
              create
            </button>
          </form>
      }
    </article>
  )
}

export default CreateResource;
