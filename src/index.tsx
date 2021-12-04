import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from '@apollo/client';
import client from './client/client';

import App from './components/App';
import './styles/index.scss';

const root = document.getElementById('root');

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  root
);
