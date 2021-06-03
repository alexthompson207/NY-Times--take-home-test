import React from 'react';
import './Error.css';

const Error = ({ error }) => {

  return (
    <section className='error-view'>
      <h1>{error}</h1>

    </section>
  )
}

export default Error;