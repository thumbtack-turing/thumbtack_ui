import React, { useState } from 'react';
import { ItemTypes } from '../constants/ItemTypes'
import { useDrag } from 'react-dnd'
import { useMutation } from '@apollo/client';
import { Resource as ResourceProps } from '../models/Resource';
import closeIcon from '../assets/button-close-icon-645944.png';
import DELETE_RESOURCE from '../operations/mutations/DELETE_RESOURCE';
import edit from '../assets/edit.png'
import moveUp from '../assets/move-up.png'
import trash from '../assets/trash.png'
import move from '../assets/move.png'
import ResourceTextEditor from './ResourceTextEditor';
import { currentFolderVar } from '../client/cache';
import UPDATE_RESOURCE from '../operations/mutations/UPDATE_RESOURCE';
import { GET_FOLDER } from '../operations/queries/GET_FOLDER';
import { GET_USER } from '../operations/queries/GET_USER';

export interface ResourceDetails {
  id: any;
  name: string;
  setTextOpenState: Function;
}

const Resource = ({id, name, url, image, createdAt}: ResourceProps): JSX.Element => {

  const [{isDragging}, drag] = useDrag(() => ({
    item: { id, name, type: 'resource' }, 
    type: ItemTypes.BOTH,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  const [ deleteResource, { loading, error, data } ] = useMutation(DELETE_RESOURCE, {
    variables: { id }
  });

  const handleClose = () => {
    deleteResource();
  }

  const [textOpen, setTextOpenState] = useState(false)

  const openText = () => {
    setTextOpenState(true)
  }

  const changeResourceName = textOpen ? <ResourceTextEditor id={id} setTextOpenState={setTextOpenState} name={name}/> : <h3>{ name }</h3>

  const [updateResource] = useMutation(UPDATE_RESOURCE, {
    refetchQueries: [ GET_USER, 'getUser' , GET_FOLDER, 'getFolder' ],
  })

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
    >
      <article className='resource-container' >
          {/* <article className='resource' style={{ backgroundImage: `url(${image})` }}> */}
          <div className="img-container">
            <a href={ url } target='_blank' rel='noopener noreferrer' className='resource-link'>
              <img src={ move } alt="move" className="move-icon" />
              <img src={ image } alt="website image" className="resource-img" />
            </a>
          </div>
          <div className="des-container">
            <div className="icons">
              <input
              type='image'
              src={ edit }
              alt='edit icon'
              onClick={ openText }
              className='icon'
              />
              <input
              type='image'
              src={ trash }
              alt='close icon'
              onClick={ handleClose }
              className='icon'
              />
              <input
              type='image'
              src={ moveUp }
              alt='move up icon'
              className='icon'
              />
            </div>
            {changeResourceName}
          </div>
      
      </article>
    </div>
  )
}

export default Resource;
