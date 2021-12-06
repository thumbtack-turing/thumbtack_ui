import React from 'react';
import Resource from './Resource';
import Folder from './Folder';
import { Gallery as GalleryProps } from '../models/Gallery';

const Gallery = ({ childFolders, childResources }: GalleryProps): JSX.Element => {
  // eventually we'll be mapping over arrays of
    // Resources and Folder in the cache

  // query GET_FOLDER for whatever level you're going to
  // render its childFolders and childResources
  // initial visit queries for user and user's root folder
  // store user in cache & use for all future queries
    const childFolderElements = childFolders?.map(folder =>
      <Folder key={ folder.id } { ...folder } />
    )
    const childResourceElements = childResources?.map(resource =>
      <Resource key={ resource.id } { ...resource } />
    )

  return (
    <section className='gallery'>
      { childFolderElements }
      { childResourceElements }
    </section>
  )
}

export default Gallery;
