import { gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation createUser(
    $email: String!
  ) {
    createUser(
      email: $email
    ) {
      // response
    }
  }
`;

export default CREATE_USER;
