import React from 'react';
import CreateResource from './CreateResource';
import CreateFolder from './CreateFolder';

const AddForm = (): JSX.Element => {
  return (
    <section className='add-form'>
      <CreateResource />
      <CreateFolder />
    </section>
  )
}

export default AddForm;
