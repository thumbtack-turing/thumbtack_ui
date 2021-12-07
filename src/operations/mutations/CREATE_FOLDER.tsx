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
        name
        childFolders {
          name
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

mutation {
    folders: createFolder(
      input: {
      userId: 1
      parentId: 1
      name: "TestFolder1"
      }
    ) {
        parentFolder {
          name
          childFolders {
            name
          }
        }
        newFolder{
          id
          name
          base
        }
      }
}
