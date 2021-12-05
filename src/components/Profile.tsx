import React from 'react';
import AddForm from './AddForm';
import Gallery from './Gallery';

const Profile = (): JSX.Element => {
  return (
    <section className='profile'>
      <h1 className='username'>Bisquiteen Trisket</h1>
      <AddForm />
      <Gallery />
    </section>
  )
}

export default Profile;
