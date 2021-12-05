import { useMutation, gql } from '@apollo/client';

const CREATE_RESOURCE = gql`
  mutation createResource(
    $id: Number!,
    $name: String!,
    $base: Boolean!,
    $parentId: Number!,
    $childFolders: Folder[],
    $childResources: Resource[]
  ) {
    createResource(
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

export default CREATE_RESOURCE;
