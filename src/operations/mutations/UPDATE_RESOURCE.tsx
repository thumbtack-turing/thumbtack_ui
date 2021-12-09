import { gql } from '@apollo/client';

const UPDATE_RESOURCE = gql`
  mutation updateResource(
    $id: Number!,
    $name: String!,
    $base: Boolean!,
    $parentId: Number!,
    $childFolders: Folder[],
    $childResources: Resource[]
  ) {
    updateResource(
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

export default UPDATE_RESOURCE;
