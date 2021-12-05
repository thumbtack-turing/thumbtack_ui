import React, { useState } from 'react';

const CreateFolder = (): JSX.Element => {
  const [ showing, setShowing ] = useState(false);
  const [ name, setName ] = useState('');

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
    <article>
      <button
      onClick={ toggleVisibility }
      >
        add new resource
      </button>
      {
        showing &&
          <form
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
