import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { currentFolderVar } from '../client/cache';
import Resource from './Resource';
import Folder from './Folder';
import { Gallery as GalleryProps } from '../models/Gallery';

const Gallery = (): JSX.Element => {
// const Gallery = ({ childFolders, childResources }: GalleryProps): JSX.Element => {
  // eventually we'll be mapping over arrays of
    // Resources and Folder in the cache

  // query GET_FOLDER for whatever level you're going to
  // render its childFolders and childResources
  // initial visit queries for user and user's root folder
  // store user in cache & use for all future queries

    const currentFolder = useReactiveVar(currentFolderVar);

    const childFolderElements = currentFolder?.childFolders?.map(folder =>
      <Folder key={ folder.id } { ...folder } />
    )
    const childResourceElements = currentFolder?.childResources?.map(resource =>
      <Resource key={ resource.id } { ...resource } />
    )

  return (
    <section className='gallery'>
      <h1> gallery </h1>
      { childFolderElements }
      { childResourceElements }
    </section>
  )
}

export default Gallery;
