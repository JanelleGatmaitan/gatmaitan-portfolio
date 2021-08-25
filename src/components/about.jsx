import React from 'react';
import ContactIcons from './contact-icons';

function About(props) {
  // const firstName = props.data.firstName;
  const { firstName, lastName, contact } = props.data;
  const classes = `person-card ${firstName.toLowerCase()}`;
  console.log("props.data.contacy: ", contact);

  return (
    <div className="row about" id="about">
      { /* column 1 */}
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
      { /* column 2 */}
      <div className="col text">
        <div className="profile-text">
          <h1>{`Hello, I'm ${firstName}`}</h1>
          <p className="about-text">Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Turpis massa sed elementum tempus egestas sed sed risus. Leo duis ut diam quam nulla. Volutpat sed cras ornare arcu dui. Eu sem integer vitae justo eget magna fermentum iaculis eu. Sapien pellentesque habitant morbi tristique senectus et. Eu turpis egestas pretium aenean pharetra magna ac. Sed pulvinar proin gravida hendrerit. Nunc lobortis mattis aliquam faucibus purus in. Ornare lectus sit amet est. Eget mauris pharetra et ultrices neque ornare aenean euismod. Morbi non arcu risus quis. At imperdiet dui accumsan sit. Elementum integer enim neque volutpat ac tincidunt vitae semper.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
