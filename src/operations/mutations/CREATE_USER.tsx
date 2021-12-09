import { gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation createUser(
    $name: String!,
    $email: String!
  ) {
    createUser(
      name: $name,
      email: $email
    ) {
      name
      email
      baseFolder {
        id
        name
      }
    }
  }
`;

export default CREATE_USER;
