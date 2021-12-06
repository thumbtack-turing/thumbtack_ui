import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import client from './client/client';

import App from './components/App';
import './styles/index.scss';

const root = document.getElementById('root');

// client.query(
//   query: gql`
//     query {
//       testField
//     }
//   `
// )

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  root
);
