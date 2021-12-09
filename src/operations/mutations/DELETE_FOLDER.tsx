import { gql } from '@apollo/client';

const DELETE_FOLDER = gql`
  mutation deleteFolder(
    $id: Number!,
    $name: String!,
    $base: Boolean!,
    $parentId: Number!,
    $childFolders: Folder[],
    $childResources: Resource[]
  ) {
    deleteFolder(
      id: $id,
      name: $name,
      base: $base,
      parentId: $parentId,
      childFolders: $childFolders,
      childResources: $childResources
    ) {
      // response
    }
  }
`;

export default DELETE_FOLDER;
