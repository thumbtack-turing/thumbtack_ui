import { gql } from '@apollo/client';

const DELETE_USER = gql`
  mutation deleteUser(
    $email: String!
  ) {
    deleteUser(
      email: $email
    ) {
      // response
    }
  }
`;

export default DELETE_USER;
