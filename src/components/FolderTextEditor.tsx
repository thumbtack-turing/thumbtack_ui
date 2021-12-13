import React, { useState } from 'react'
import UPDATE_FOLDER from '../operations/mutations/UPDATE_FOLDER';
import { GET_USER } from '../operations/queries/GET_USER';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import { useQuery, useMutation } from '@apollo/client';
import clearAll from '../assets/clear-all.svg'
import pass from '../assets/pass.svg'

interface Props {
  id: any;
  setFolderEditorOpenState: Function;
  name: string;
}

const FolderTextEditor: React.FC<Props> = ({ id, setFolderEditorOpenState, name }) => {
  const [newFolderName, setNewFolderName] = useState('')

  const handleChange = (e: any) => {
    setNewFolderName(e.target.value)
  }

  const [ updateFolder ] = useMutation(UPDATE_FOLDER, {
    refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ],
  })

  const submitNewFolder = (e: any) => {
    e.preventDefault()
    console.log('1', id)
    updateFolder({ variables: { id: id , name: newFolderName } })
    console.log('2', id)
    setFolderEditorOpenState(false)
  }

  const clearAllText = () => {
    setFolderEditorOpenState(false)
  }

  return (
    <form>
      <button onClick={clearAllText}>
        <img src={clearAll} alt="clear all" className="clearAll" />
      </button>
      <input
        type='text'
        name='name'
        placeholder='Edit Name'
        onChange={ handleChange }
        required
        className='newNameInput'
      />
      <button>
        <img src={pass} alt="submit" className="checkfolder"  onClick={submitNewFolder}/>
      </button>
  </form>
  )
}

export default FolderTextEditor