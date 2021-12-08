import React from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';
import { userVar } from '../client/cache';
import { GET_USER } from '../operations/queries/GET_USER';

const LandingPage = () => {
  const email = 'rowan@test.com';
  const { loading, error, data: userData } = useQuery(GET_USER, {
    variables: { email }
  });

  const user = useReactiveVar(userVar);
  userVar(userData);
  console.log(user);

  return (
    <div>sup, i'm the landing page</div>
  )
}

export default LandingPage;
