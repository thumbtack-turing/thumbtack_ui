import React, { useState } from 'react';
import CreateResource from './CreateResource';
import CreateFolder from './CreateFolder';

const AddForm = (): JSX.Element => {
  return (
    <article className='add-form'>
      <CreateResource />
      <CreateFolder />
    </article>
  )
}

export default AddForm;
