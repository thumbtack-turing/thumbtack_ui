import { gql } from '@apollo/client';

const CREATE_FOLDER = gql`
    mutation createFolder(
      $userId: ID!,
      $parentId: ID!,
      $name: String!
    ) {
      createFolder(
        userId: $userId,
        parentId: $parentId,
        name: $name
      ) {
        parentFolder {
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
        newFolder{
          id
          name
          base
        }
      }
    }
`;

export default CREATE_FOLDER;
