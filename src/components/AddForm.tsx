import React, { useState } from 'react';
import CreateResource from './CreateResource';
import CreateFolder from './CreateFolder';

const AddForm = (): JSX.Element => {
  return (
    <article>
      <CreateResource />
      <CreateFolder />
    </article>
  )
}

export default AddForm;
