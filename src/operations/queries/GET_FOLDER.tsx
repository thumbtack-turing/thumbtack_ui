import { gql } from '@apollo/client';

export const GET_FOLDER = gql`
  query getFolder($id: ID!) {
    getFolder(id: $id) {
      id
      name
      base
      parentId
      childFolders {
        id
        name
        base
        parentId
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
