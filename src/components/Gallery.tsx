import React from 'react';
import Resource from './Resource';
import Folder from './Folder';

const Gallery = (): JSX.Element => {
  // eventually we'll be mapping over arrays of
    // Resources and Folder in the cache

  return (
    <section className='gallery'>
      <Resource />
      <Folder />
      <Resource />
      <Folder />
      <Resource />
      <Folder />
      <Resource />
      <Folder />
    </section>
  )
}

export default Gallery;
