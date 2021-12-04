import { ApolloClient } from '@apollo/client';
import cache from './cache';

const client = new ApolloClient({
  uri: '',
  connectToDevTools: true,
  cache
});

export default client;
