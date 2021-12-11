import { gql } from '@apollo/client';

const UPDATE_RESOURCE = gql`

mutation updateResource(
  $id: ID!,
  $folderId: ID!,
  $newFolderId: ID!,
  $name: String
) {
  updateResource(
    id: $id,
    folderId: $folderId,
    name: $name,
    newFolderId: $newFolderId
  ) {
    folder {
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
}
`;



export default UPDATE_RESOURCE;
