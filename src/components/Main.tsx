import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_TODOS } from '../operations/queries/getAllTodos';
import { Todos } from '../models/todo';
import LandingPage from './LandingPage'

const Main = () => {
  const { data } = useQuery(GET_ALL_TODOS);
	const todos: Todos = data.todos;

  return (
    <div>
      <LandingPage />
    </div>
  )
}

export default Main;
