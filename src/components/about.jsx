import React from 'react';

function About(props) {
  const firstName = props.firstName;
  const classes = `person-card ${firstName.toLowerCase()}`;
  return (
      <div className="row">
        <div className={classes}>
          <img className="profile-photo" alt={`${firstName} Gatmaitan`} src={`images/${firstName}.jpg`} />
        </div>
      <div className="about">
        <h1>{`Hello, I'm ${firstName}`}</h1>
      </div>
      </div>
  );
}

export default About;
