import React from 'react';

const Error = ({ error }: any): JSX.Element => {
  console.log(error)
  return (
    <article>
      <h2>Hmm, something went wrong. Try refreshing your browser.</h2>
    </article>
  )
}

export default Error;
