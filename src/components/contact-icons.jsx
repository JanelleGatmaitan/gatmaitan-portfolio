import React from 'react';

function ContactIcons(props) {
  const contact = props.contactInfo;
  return (
    <>
      <a href={`${contact.gitHub}`} target="_blank" rel="noreferrer">
        <img className="contact-icon" alt="gitHub" src="/images/github.svg" />
      </a>
      <a href={`${contact.linkedIn}`} target="_blank" rel="noreferrer">
        <img className="contact-icon" alt="linkedIn" src="/images/linkedin.svg" />
      </a>
      <a href={`tel:${contact.phone}`}>
        <img className="contact-icon" alt="phone" src="/images/phone-f.svg" />
      </a>
      <a href={`mailto:${contact.email}`}>
        <img className="contact-icon" alt="email" src="/images/envelope-f.svg" />
      </a>
    </>
  );
}

export default ContactIcons;
