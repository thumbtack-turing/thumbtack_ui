import React from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';
import { userVar } from '../client/cache';
import { GET_USER } from '../operations/queries/GET_USER';

const LandingPage = () => {
  return (
    <div>sup, i'm the landing page</div>
  )
}

export default LandingPage;
