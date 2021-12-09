import React, { useState } from 'react';
import { useMutation, useReactiveVar } from '@apollo/client';
import { userVar, currentFolderVar } from '../client/cache';
import CREATE_FOLDER from '../operations/mutations/CREATE_FOLDER';

const CreateFolder = (): JSX.Element => {
  const [ showing, setShowing ] = useState(false);
  const [ name, setName ] = useState('');
  const { id } = useReactiveVar(currentFolderVar);
  console.log(currentFolderVar())
  const { id: userId } = useReactiveVar(userVar);

  const [ createFolder, { loading, error, data }] = useMutation(CREATE_FOLDER, {
    variables: {
      userId, parentId: id, name
    }
  });

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
    createFolder();
    // console.log(currentFolder.parentId);
    // store new Folder in the cache?
    setShowing(false);
    setName('');
  }

  return (
    <article className='create-container'>
      <button
      className='add-folder-btn'
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
              className='folder-name-input'
            />
            <button className='submit-create-folder-btn'>
              create
            </button>
          </form>
      }
    </article>
  )
}

export default CreateFolder;
