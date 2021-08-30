import React from 'react';

function Skills(props) {
  const skills = props.skills;
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="row">
        {skills.map(skill => {
          const devIcon = skill.toLowerCase();
          return (
            <div className="skill-card">
              <i key={skills.indexOf(skill)} className={`devicon-${devIcon}-plain colored skill-icon`} />
              <p>{skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
