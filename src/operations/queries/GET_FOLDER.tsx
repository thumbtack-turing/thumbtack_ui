// import React from 'react';
import { gql } from '@apollo/client';

export const GET_FOLDER = gql`
  query getFolder() {
    getFolder {
      id
      name
      base
      parentId
      childFolders
      childResources
    }
  }
`
