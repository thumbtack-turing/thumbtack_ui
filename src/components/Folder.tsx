import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { useDrag, useDrop } from 'react-dnd';
import { currentFolderVar } from '../client/cache';
import { ItemTypes } from '../constants/ItemTypes';
import { Folder as FolderProps } from '../models/Folder';
import { GET_USER } from '../operations/queries/GET_USER';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import DELETE_FOLDER from '../operations/mutations/DELETE_FOLDER';
import UPDATE_FOLDER from '../operations/mutations/UPDATE_FOLDER';
import UPDATE_RESOURCE from '../operations/mutations/UPDATE_RESOURCE';
import FolderTextEditor from './FolderTextEditor';
import Loading from './Loading';
import Error from './Error';
import closeIcon from '../assets/button-close-icon-645944.png';
import edit from '../assets/edit.png';
import folder2 from '../assets/folder2.png';

export interface FolderDetails {
  id: any;
  setFolderEditorOpenState: Function;
  name: string;
}

const Folder = (props: FolderProps): JSX.Element => {
  const { id, name, childFolders, childResources } = props;

  const { loading: loadingGetFolder, error: errorGetFolder, data: dataGetFolder } = useQuery(GET_FOLDER, {
    variables: { id }
  });
  const [ deleteFolder,
    { loading: loadingDeleteFolder, error: errorDeleteFolder, data: dataDeleteFolder }
  ] = useMutation(DELETE_FOLDER, {
    variables: { id }
  });

  const completeFolderData = dataGetFolder?.getFolder;

  const handleClose = () => {
    deleteFolder();
  }

  const handleClick = () => {
    currentFolderVar(completeFolderData);
  }

  const { id: oldFolderId } = currentFolderVar();

  const [ updateResource,
    { loading: loadingUpdateResource, error: errorUpdateResource, data: dataUpdateResource }
  ] = useMutation(UPDATE_RESOURCE, {
    refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ],
  });

  const [ updateFolder,
    { loading: loadingUpdateFolder, error: errorUpdateFolder, data: dataUpdateFolder }
  ] = useMutation(UPDATE_FOLDER, {
    refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ]
  })

  const handleDrop = (item: any) => {
    if(item.type === 'folder') {
      console.log('item', item)
      updateFolder({ variables: {id: item.id, newParentId: id, name: item.name}})
    } else {
      console.log('item', item)
      updateResource({ variables: { id: item.id, folderId: oldFolderId, newFolderId: id } })
    }
  }

  const [ { isOver }, dropRef] = useDrop(() => ({
    accept: ItemTypes.BOTH,
    drop: (item: any) => handleDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }))


  const [{isDragging}, drag, collect] = useDrag(() => ({
    item: { id, name, type: 'folder' },
    type: ItemTypes.BOTH,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      getItem: monitor.getItem(),
      getItemType: monitor.getItemType()
    })
  }))

  const openTextEditor = () => {
    setFolderEditorOpenState(true)
  }

  const [ folderEditorOpen, setFolderEditorOpenState ] = useState(false)

  const folderEditor = folderEditorOpen ?
  <FolderTextEditor id={id} setFolderEditorOpenState={setFolderEditorOpenState} name={name} /> :
  <div className="folder-buttons">
    <button onClick={openTextEditor} className="edit-btn">
      <img src={edit} alt="edit folder name" className="edit-img"/>
    </button>
    <h3 className='folder-link-name'>{ name }</h3>
    <button onClick={ handleClose } className="close-btn">
      <img src={closeIcon} alt="edit folder name" className="close-img"/>
    </button>
    </div>

    const containsInfo = `contains ${childFolders.length} folders & ${childResources.length} links`;

  return (
    <>
    { (loadingGetFolder || loadingDeleteFolder || loadingUpdateResource || loadingDeleteFolder)
      && <Loading /> }
    { (errorGetFolder || errorDeleteFolder || errorUpdateResource || errorDeleteFolder)
      && <Error /> }
    <article className='folder-container' ref={drag}  >
      <Link to={ `/myfolders/${id}` } onClick={ handleClick } className='folder-link'>
        <img src={folder2} alt="folder icon" className='folder2' ref={dropRef}/>
      </Link>
      <h3 className='contains-info'>{ containsInfo }</h3>
        {folderEditor}

    </article>
    </>
  )
}

export default Folder;
