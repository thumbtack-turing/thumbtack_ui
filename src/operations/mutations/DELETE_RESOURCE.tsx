import { gql } from '@apollo/client';

const DELETE_RESOURCE = gql`
  mutation deleteResource(
    $id: Number!,
    $name: String!,
    $base: Boolean!,
    $parentId: Number!,
    $childFolders: Folder[],
    $childResources: Resource[]
  ) {
    deleteResource(
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

export default DELETE_RESOURCE;
