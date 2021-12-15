import React from 'react';

const Error = ({ type = 'none' }: any): JSX.Element => {
  if (type === 'none') {
    return <h2>Hmm, something went wrong. Try refreshing your browser.</h2>
  } else if (type === 'invalid url') {
    return <h2>Please make sure to enter a full valid url, including "https://"! Hit refresh to try again.</h2>
  }

  return (
    <article>
      <h2>Hmm, something went wrong. Try refreshing your browser.</h2>
    </article>
  )
}

export default Error;
