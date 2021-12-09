import { gql } from '@apollo/client';

const DELETE_RESOURCE = gql`
  mutation deleteResource(
    $id: Number!
  ) {
    deleteResource(
      id: $id
    ) {
      // response
    }
  }
`;

export default DELETE_RESOURCE;
