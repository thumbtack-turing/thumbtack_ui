import { gql } from '@apollo/client';

export const GET_RESOURCE = gql`
  query getResource($id: ID!) {
    getResource(id: $id) {
      id
      name
      url
      image
      createdAt
    }
  }
`;
