import { ApolloClient } from '@apollo/client';
import cache from './cache';

const client = new ApolloClient({
  uri: 'thumbtack-api.herokuapp.com/graphql',
  connectToDevTools: true,
  cache
});

export default client;
