import { gql } from '@apollo/client';

const DELETE_RESOURCE = gql`
  mutation deleteResource(
    $id: ID!
  ) {
    deleteResource(
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

export default DELETE_RESOURCE;
