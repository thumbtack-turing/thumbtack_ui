import { gql } from '@apollo/client';

const CREATE_FOLDER = gql`
  mutation createFolder(
    $name: String!
    $parentId: Number!
  ) {
    createFolder(
      name: $name,
      parentId: $parentId
    ) {
      // response
    }
  }
`;

export default CREATE_FOLDER;
