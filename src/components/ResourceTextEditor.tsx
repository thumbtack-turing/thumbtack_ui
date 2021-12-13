import React, { useState } from 'react'
import clearAll from '../assets/clear-all.svg'
import { Resource as ResourceProps } from '../models/Resource'
import UPDATE_RESOURCE from '../operations/mutations/UPDATE_RESOURCE'

const ResourceTextEditor =  () => {
  const [newName, setNewName] = useState('')

  const handleChange = (e: any) => {
    setNewName(e.target.value)
  }

  

  return (
    <form onSubmit={}>
      <button>
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
    </form>
  )
}

export default ResourceTextEditor