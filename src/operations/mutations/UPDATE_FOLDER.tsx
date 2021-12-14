import { gql } from '@apollo/client';

const UPDATE_FOLDER = gql`
  mutation updateFolder (
    $id: ID!,
    $newParentId: ID,
    $name: String 
  ) {
    updateFolder (
      id: $id,
      name: $name,
      newParentId: $newParentId
  ) {
    originalParent {
      id
      name
      base
      childFolders {
        id
        name
        base
        parentId
      }
    }
  }
}
`;

export default UPDATE_FOLDER;
