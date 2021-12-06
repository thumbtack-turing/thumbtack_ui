import React, { useState } from 'react';
import { useMutation, useReactiveVar } from '@apollo/client';
import { currentFolderVar } from '../client/cache';
// import CREATE_RESOURCE from '../operations/mutations/CREATE_RESOURCE';

const CreateResource = (): JSX.Element => {
  const [ showing, setShowing ] = useState(false);
  const [ url, setUrl ] = useState('');
  // const currentFolder = useReactiveVar(currentFolderVar);
  // const [ createResource, { loading, error, data: }] = useMutation(CREATE_RESOURCE,
    // variables: {
      // url, parentId
    // }
  // );

  const toggleVisibility = () => {
    setShowing(!showing);
    setUrl('');
  }

  const handleChange = (event: any) => {
    setUrl(event.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // create new Resource from interface (post to GQL)
    // console.log(currentFolder.parentId);
    // store new Resource in the cache??
    setShowing(false);
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
