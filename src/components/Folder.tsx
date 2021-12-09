import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { currentFolderVar } from '../client/cache';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import DELETE_FOLDER from '../operations/mutations/DELETE_FOLDER';
import { Folder as FolderProps } from '../models/Folder';
import closeIcon from '../assets/button-close-icon-645944.png';

const Folder = (props: FolderProps): JSX.Element => {
  const { id, name } = props;

  const { data } = useQuery(GET_FOLDER, {
    variables: { id }
  });

  const [ deleteFolder ] = useMutation(DELETE_FOLDER, {
    variables: { id }
  });

  const completeFolderData = data?.getFolder;

  const handleClick = () => {
    currentFolderVar(completeFolderData);
  }

  const handleClose = () => {
    deleteFolder();
    console.log('folder id', id);
  }

  return (
    <article className='folder-container'>
      <input
        type='image'
        src={ closeIcon }
        alt='close icon'
        onClick={ handleClose }
        className='close-icon'
      />
      <Link to={ `/myfolders/${id}` } onClick={ handleClick } className='folder-link'>
        <article className='folder'>
          <h3>{ name }</h3>
        </article>
      </Link>
    </article>
  )
}

export default Folder;
