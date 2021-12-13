import React, { useState } from 'react';
import { useMutation, useReactiveVar } from '@apollo/client';
import { userVar, currentFolderVar } from '../client/cache';
import CREATE_FOLDER from '../operations/mutations/CREATE_FOLDER';
import plusIcon from '../assets/plus.png';

const CreateFolder = (): JSX.Element => {
  const [ showing, setShowing ] = useState(false);
  const [ name, setName ] = useState('');

  const { id } = useReactiveVar(currentFolderVar);
  console.log(currentFolderVar())
  const { id: userId } = useReactiveVar(userVar);

  const [ createFolder ] = useMutation(CREATE_FOLDER, {
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
    createFolder();
    setShowing(false);
    setName('');
  }

  return (
    <article className='create-container'>
      <button
        className='add-btn add-folder-btn'
        onClick={ toggleVisibility }
      >
        <img
          className='plus-icon'
          src={ plusIcon }
          alt='plus-icon'
        />
        <p className='add-btn-text'>add new folder</p>
      </button>
      {
        showing &&
          <form
            className='create-form'
            onSubmit={ handleSubmit }
          >
            <input
              type='text'
              placeholder='folder name...'
              onChange={ handleChange }
              required
              className='folder-name-input input-field animate__animated animate__slideInDown'
            />
            <button className='submit-create-btn create-folder-btn animate__animated animate__slideInDown'>
              create
            </button>
          </form>
      }
    </article>
  )
}

export default CreateFolder;
