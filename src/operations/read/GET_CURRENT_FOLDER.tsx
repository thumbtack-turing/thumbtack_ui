import { gql } from '@apollo/client';

export const GET_CURRENT_FOLDER = gql`
  query getCurrentFolder {
    currentFolder @client
  }
`;
