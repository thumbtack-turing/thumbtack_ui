import { gql } from '@apollo/client';

const DELETE_FOLDER = gql`
  mutation deleteFolder(
    $id: ID!
  ) {
    deleteFolder(
      id: $id
    ) {
      id
        name
        base
        parentId
        childResources {
          id
          name
          url
          image
          createdAt
        }
        childFolders {
          id
          name
          base
          parentId
        }
      }
  }
`;

export default DELETE_FOLDER;
