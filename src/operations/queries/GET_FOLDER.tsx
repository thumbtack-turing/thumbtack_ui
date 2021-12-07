import { gql } from '@apollo/client';

export const GET_FOLDER = gql`
  query getFolder($id: ID!) {
    getFolder(id: $id) {
      id
      name
      base
      parentId
      # filePath
      childFolders {
        id
        name
        base
        parentId
        # filePath
      }
      childResources {
        id
        name
        url
        image
        createdAt
      }
    }
  }
`;
