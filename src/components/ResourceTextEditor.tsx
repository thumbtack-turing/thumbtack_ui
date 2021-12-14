import React, { useState } from 'react'
import clearAll from '../assets/clear-all.svg'
import { Resource as ResourceProps } from '../models/Resource'
import UPDATE_RESOURCE from '../operations/mutations/UPDATE_RESOURCE'
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER } from '../operations/queries/GET_USER';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import pass from '../assets/pass.svg'
import { currentFolderVar } from '../client/cache';

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

  const [updateResource] = useMutation(UPDATE_RESOURCE, {
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
    <form>
      <button onClick={cancel}>
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
      <button>
        <img src={pass} alt="check" className="check" onClick={submitNewName}/>
      </button>
    </form>
  )
}

export default ResourceTextEditor