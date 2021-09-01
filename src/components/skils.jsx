import React from 'react';

function Skills(props) {
  const skills = props.skills;
  return (
    <div className="skills">
      <h1>Tools & Technologies</h1>
      <div className="row skills-row">
        {skills.map(skill => {
          const devIcon = skill.toLowerCase();
          return (
            <div className="skill-card" key={skills.indexOf(skill)}>
              <i className={`devicon-${devIcon}-plain colored skill-icon`} />
              <p>{skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
