import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import client from './client/client';

import App from './components/App';
import Profile from './components/Profile';
import BaseFolderView from './components/BaseFolderView';
import SubFolderView from './components/SubFolderView';
import LandingPage from './components/LandingPage';
import './styles/index.scss';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const root = document.getElementById('root');

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
        <Route path='/' element={ <App /> }>
          <Route index element={ <LandingPage /> } />
          <Route path='myfolders' element={ <Profile /> } >
            <Route index element={ <BaseFolderView /> } />
            <Route path=':folderId' element={ <SubFolderView /> } />
          </Route>
          <Route path='*' element={ <h1>404</h1> } />
        </Route>
        </Routes>
      </Router>
      </DndProvider>
    </ApolloProvider>
  </React.StrictMode>,
  root
);
