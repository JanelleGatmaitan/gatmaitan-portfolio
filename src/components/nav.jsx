import React from 'react';

function Nav(props) {
  return (
    <div className={`row nav-bar ${props.firstName.toLowerCase()}`}>
      <h1>{`${props.firstName} ${props.lastName}`}</h1>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="#about">About</a>
        </li>
        <li className="nav-link">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-link">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-link">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-link">
          <a href={props.resume}>Resume</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
