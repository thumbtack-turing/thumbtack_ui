import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { currentFolderVar } from '../client/cache';
import { GET_USER } from '../operations/queries/GET_USER';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import UPDATE_RESOURCE from '../operations/mutations/UPDATE_RESOURCE';
import Loading from './Loading';
import Error from './Error';
import clearAll from '../assets/clear-all.svg';
import pass from '../assets/pass.svg';

interface Props {
  id: any,
  setTextOpenState: Function;
  name: string;
}

const ResourceTextEditor: React.FC<Props> =  ({id, name, setTextOpenState}): JSX.Element  => {
  const { id: oldFolderId } = currentFolderVar()
  const [newName, setNewName] = useState('')

  const handleChange = (e: any) => {
    setNewName(e.target.value)
    console.log(newName)
  }

  const [ updateResource,
    { loading: loadingUpdateResource, error: errorUpdateResource }
  ] = useMutation(UPDATE_RESOURCE, {
    refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ],
  })

  const submitNewName = (e: any) => {
    e.preventDefault()
    updateResource({ variables: { id: id , folderId: oldFolderId, name: newName } })
    setTextOpenState(false)
  }

  const cancel = () => {
    setTextOpenState(false)
  }

  return (
    <>
    { (loadingUpdateResource)
      && <Loading /> }
    { (errorUpdateResource)
      && <Error /> }
    <form onSubmit={submitNewName}>
      <button onClick={cancel} className='resource-edit-btn'>
        <img src={clearAll} alt="clear all" className="clearAll" />
      </button>
      <input
        type='text'
        name='name'
        placeholder={name}
        onChange={ handleChange }
        required
        className='newNameInput'
      />
      <button className='resource-edit-btn'>
        <img src={pass} alt="check" className="check"/>
      </button>
    </form>
    </>
  )
}

export default ResourceTextEditor
