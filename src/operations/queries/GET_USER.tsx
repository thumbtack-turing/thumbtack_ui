import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUser($email: String!) {
    getUser(email: $email) {
      id
      name
      email
      baseFolder {
        id
        name
        base
        parentId
        # filePath
        childFolders {
          id
          name
          base
          parentId
          # filePath
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
