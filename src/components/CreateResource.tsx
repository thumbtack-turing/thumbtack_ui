import React, { useState } from 'react';

const CreateResource = (): JSX.Element => {
  const [ showing, setShowing ] = useState(false);
  const [ url, setUrl ] = useState('');

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
