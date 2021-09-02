import React from 'react';
import ContactIcons from './contact-icons';

function Contact(props) {
  return (
    <div className="contact" id="contact">
      <h1 className="subsection-heading">Contact Me</h1>
      <div className="row contact-icons">
        <ContactIcons contactInfo={props.data} />
      </div>
    </div>
  );
}

export default Contact;
