import { gql } from '@apollo/client';
import client from '../../client/client';

const READ_PARENT_ID = gql`
  query readParentId($id: ID!) {
    currentFolder(id: $id) {
      parentId
    }
  }
`;

export default READ_PARENT_ID;

const todo = client.readFragment({
  id: 'Folder:1', // The value of the to-do item's cache ID
  fragment: gql`
    fragment MyTodo on Todo {
      id
      text
      completed
    }
  `,
});
