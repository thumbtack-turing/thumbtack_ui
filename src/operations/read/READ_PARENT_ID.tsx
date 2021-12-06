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
