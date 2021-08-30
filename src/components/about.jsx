import React from 'react';
import ContactIcons from './contact-icons';

function About(props) {
  // const firstName = props.data.firstName;
  const { firstName, lastName, contact, bio, projects } = props.data;
  console.log('bio: ', bio);
  const classes = `person-card ${firstName.toLowerCase()}`;

  return (
    <div className="row about" id="about">
      <div className="col person">
        <div className={classes}>
          <div className="photo-container">
            <img className="profile-photo" alt={`${firstName + lastName}`} src={`/images/${firstName.toLowerCase()}.jpg`} />
          </div>
          <div className="row contact-icons">
            <ContactIcons contactInfo={contact} />
          </div>
        </div>
      </div>
      <div className="col text">
        <div className="profile-text">
          <h1>{`Hello, I'm ${firstName}`}</h1>
          {
            bio.map((paragraph) => {
              return <p className="about-text">{paragraph}</p>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default About;
