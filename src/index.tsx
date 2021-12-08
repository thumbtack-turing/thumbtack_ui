import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import client from './client/client';

import App from './components/App';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import LandingPage from './components/LandingPage';
import './styles/index.scss';

const root = document.getElementById('root');

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Routes>
        <Route path='/' element={ <App /> }>
          <Route index element={ <LandingPage /> } />
          <Route path='myfolders' element={ <Profile /> } >
            <Route index element={ <Gallery /> } />
            <Route path=':filepath' element={ <Gallery /> } />
          </Route>
          <Route path='*' element={ <h1>404</h1> } />
        </Route>
        </Routes>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  root
);
