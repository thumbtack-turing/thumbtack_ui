import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { useDrop } from 'react-dnd';
import { currentFolderVar } from '../client/cache';
import { ItemTypes } from '../constants/ItemTypes';
import { Folder as FolderProps } from '../models/Folder';
import DELETE_FOLDER from '../operations/mutations/DELETE_FOLDER';
import closeIcon from '../assets/button-close-icon-645944.png';
import { GET_USER } from '../operations/queries/GET_USER';
import { useDrag } from 'react-dnd'
import UPDATE_FOLDER from '../operations/mutations/UPDATE_FOLDER';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import UPDATE_RESOURCE from '../operations/mutations/UPDATE_RESOURCE';
import edit from '../assets/edit.png'
import FolderTextEditor from './FolderTextEditor';
import folder2 from '../assets/folder2.png'

export interface FolderDetails {
  id: any;
  setFolderEditorOpenState: Function;
  name: string;
}

const Folder = (props: FolderProps): JSX.Element => {
  const { id, name } = props;

  const { data } = useQuery(GET_FOLDER, {
    variables: { id }
  });
  const [ deleteFolder ] = useMutation(DELETE_FOLDER, {
    variables: { id }
  });

  const completeFolderData = data?.getFolder;

  const handleClose = () => {
    deleteFolder();
  }

  const handleClick = () => {
    currentFolderVar(completeFolderData);
  }

  //const [resourceId, setResourceId] = useState(0)
  const { id: oldFolderId } = currentFolderVar()
 //const [resourceName, setResourceName] = useState('')
  const [updateResource, { loading, error, data: resourceReturnData}] = useMutation(UPDATE_RESOURCE, {
    refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ],
  },);

  const [ updateFolder ] = useMutation(UPDATE_FOLDER, {
    refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ]
  })

  // console.log('resourceReturnData', resourceReturnData)
  // const parentFolder = resourceReturnData?.updateResource?.folder
  // if(parentFolder) {
  //   console.log('parentfolder', parentFolder)
  // } 

  const handleDrop = (item: any) => {
    // let draggedResourceId = Number(item.id)
    console.log(item.type)

    if(item.type === 'folder') {
      console.log('item', item)
      updateFolder({ variables: {id: item.id, newParentId: id, name: item.name}})
    } else {
      console.log('item', item)
      updateResource({ variables: { id: item.id, folderId: oldFolderId, newFolderId: id } })
    }

    // console.log('item', item)
    // if(item.__typename === 'folder') {
     
    // } else {
    // }
    
   
    //  .then((res: any) => res.data.updateResource.folder)
    // //.then(data => console.log(data))
    //   .then(parentFolder => {
    //     console.log('currentfoldervar1', currentFolderVar())
    //     currentFolderVar(parentFolder)})
    //   .then(() => console.log('currentfoldervar2', currentFolderVar()))
    // clearState()
  }

  // const clearState = () => {
  //   setResourceId(0)
  //   setResourceName('')
  // }

  //***** need to have state for itemType. if resource update state to resource, if folder update state to folder. accept VVV will be set to state?
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

  const [folderEditorOpen, setFolderEditorOpenState] = useState(false)
  
  const folderEditor = folderEditorOpen ? 
  <FolderTextEditor id={id} setFolderEditorOpenState={setFolderEditorOpenState} name={name} /> : 
  <h3 className='folder-link-name'>{ name }</h3>

  const openTextEditor = () => {
    setFolderEditorOpenState(true)
  }

  return (
    <article className='folder-container' ref={drag}  >
      <Link to={ `/myfolders/${id}` } onClick={ handleClick } className='folder-link'>
        <img src={folder2} alt="folder icon" className='folder2' ref={dropRef}/>
      </Link>
        {folderEditor}
        <div className="folder-buttons">
          <button onClick={openTextEditor} className="edit-btn">
            <img src={edit} alt="edit folder name" className="edit-img"/>
          </button>
          <button onClick={ handleClose } className="close-btn">
            <img src={closeIcon} alt="edit folder name" className="close-img"/>
          </button>
        </div>

    </article>
  )
}

export default Folder;
