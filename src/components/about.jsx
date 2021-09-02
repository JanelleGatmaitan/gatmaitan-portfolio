import React from 'react';
import ContactIcons from './contact-icons';

function About(props) {
  const { firstName, lastName, contact, bio } = props.data;
  const classes = `person-card ${firstName.toLowerCase()}`;

  return (
    <div className="row about" id="about">
      <div className="col person">
        <div className={classes}>
          <div className="photo-container">
            <img className="profile-img" alt={`${firstName + lastName}`} src={`/images/${firstName.toLowerCase()}.jpg`} />
          </div>
          <div className="row contact-icons">
            <ContactIcons contactInfo={contact} />
          </div>
        </div>
      </div>
      <div className="col text">
        <div className="profile-text">
          <h1>{`Hello, I'm ${firstName}!`}</h1>
          {
            bio.map((paragraph) => {
              return <p key={bio.indexOf(paragraph)}className="about-text">{paragraph}</p>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default About;
