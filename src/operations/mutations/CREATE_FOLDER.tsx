import { useMutation, gql } from '@apollo/client';

const CREATE_FOLDER = gql`
  mutation createFolder(
    $id: Number!,
    $name: String!,
    $base: Boolean!,
    $parentId: Number!,
    $childFolders: Folder[],
    $childResources: Resource[]
  ) {
    createFolder(
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

export default CREATE_FOLDER;
