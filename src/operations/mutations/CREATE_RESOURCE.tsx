import { gql } from '@apollo/client';

const CREATE_RESOURCE = gql`
  mutation createResource(
    $url: String!,
    // $parentId: Number!
  ) {
    createResource(
      url: $url,
      // parentId: $parentId
    ) {
      // response
    }
  }
`;

export default CREATE_RESOURCE;
