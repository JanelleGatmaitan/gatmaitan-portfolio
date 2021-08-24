import React from 'react';

function About(props) {
  const firstName = props.firstName;
  const classes = `person-card ${firstName.toLowerCase()}`;
  return (
      <div className="row about">
      { /* column 1 */ }
        <div className={classes}>
          <img className="profile-photo" alt={`${firstName} Gatmaitan`} src={`images/${firstName}.jpg`} />
          <div className="row contact-icons">
            <img className="contact-icon" alt="gitHub" src="/images/github.svg" />
            <img className="contact-icon" alt="linkedIn" src="/images/linkedin.svg" />
            <img className="contact-icon" alt="phone" src="/images/phone-f.svg" />
            <img className="contact-icon" alt="email" src="/images/envelope-f.svg" />
          </div>
        </div>
      { /* column 2 */}
      <div className="profile-text">
        <h1>{`Hello, I'm ${firstName}`}</h1>
        <p className="about-text">Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Turpis massa sed elementum tempus egestas sed sed risus. Leo duis ut diam quam nulla. Volutpat sed cras ornare arcu dui. Eu sem integer vitae justo eget magna fermentum iaculis eu. Sapien pellentesque habitant morbi tristique senectus et. Eu turpis egestas pretium aenean pharetra magna ac. Sed pulvinar proin gravida hendrerit. Nunc lobortis mattis aliquam faucibus purus in. Ornare lectus sit amet est. Eget mauris pharetra et ultrices neque ornare aenean euismod. Morbi non arcu risus quis. At imperdiet dui accumsan sit. Elementum integer enim neque volutpat ac tincidunt vitae semper.
        </p>
      </div>
      </div>
  );
}

export default About;
