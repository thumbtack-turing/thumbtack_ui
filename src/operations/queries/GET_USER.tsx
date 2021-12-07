import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUser($email: String!) {
    getUser(email: $email) {
      id
      name
      email
      baseFolder {
        childFolders {
          id
          name
          base
          parentId
        }
        childResources {
          id
          name
          url
          image
          createdAt
        }
      }
    }
  }
`;
