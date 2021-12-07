import { gql } from '@apollo/client';

const CREATE_RESOURCE = gql`
  mutation createResource(input: {
    $name: String!
    $url: String!,
    $folderId: ID!,
  }) {
    createResource(
      name: $name,
      url: $url,
      folderId: $folderId
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

export default CREATE_RESOURCE;
