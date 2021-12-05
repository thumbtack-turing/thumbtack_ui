import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import CREATE_FOLDER from '../operations/mutations/CREATE_FOLDER';

const CreateFolder = (): JSX.Element => {
  const [ showing, setShowing ] = useState(false);
  const [ name, setName ] = useState('');
  // const [ createFolder, { data }] = useMutation(CREATE_FOLDER);

  const toggleVisibility = () => {
    setShowing(!showing);
    setName('');
  }

  const handleChange = (event: any) => {
    setName(event.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // create new Folder from interface (post to GQL)
    // store new Folder in the cache?
    setShowing(false);
    setName('');
  }

  return (
    <article className='create-container'>
      <button
      onClick={ toggleVisibility }
      >
        add new folder
      </button>
      {
        showing &&
          <form
            className='create-form'
            onSubmit={ handleSubmit }
          >
            <input
              type='text'
              placeholder='folder name'
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

export default CreateFolder;
