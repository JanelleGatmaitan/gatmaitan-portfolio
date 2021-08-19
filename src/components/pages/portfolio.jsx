import React from 'react';
import Nav from '../nav';

function Portfolio(props) {
  return (
    <>
      <Nav />
      <h1>
        {`${props.match.params.name}'s portfolio`}
      </h1>
    </>
  );
}

export default Portfolio;
