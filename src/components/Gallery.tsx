import React from 'react';
import Resource from './Resource';
import Folder from './Folder';

const Gallery = (): JSX.Element => {
  // eventually we'll be mapping over arrays of
    // Resources and Folder in the cache

  // query GET_FOLDER for whatever level you're going to
  // render its childFolders and childResources
  // initial visit queries for user and user's root folder
  // store user in cache & use for all future queries
  

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
