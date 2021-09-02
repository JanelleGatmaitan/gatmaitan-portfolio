import React from 'react';

function Projects(props) {
  const projects = props.projects;
  return (
    <div className="projects">
      <h1 className="subsection-heading">Projects</h1>
      <div className="row projects-row">
        {projects.map(project => {
          const { projectName: name } = project;
          const technologies = project.technologies;
          return (
            <div className="project-card" key={name}>
              <div className="project-img-container">
                <img className="project-img" alt={name} src={project.imgUrl} />
              </div>
              <h3>{name}</h3>
              <p>{project.description}</p>
              <div className="row technologies">
                {
                  technologies.map(technology => {
                    return (
                      <p className={`technology ${props.name.toLowerCase()}`} key={technology}>{technology}</p>
                    );
                  })
                }
              </div>
              <div className="row project-links">
                <a className="project-link" target="_blank" rel="noreferrer" href={project.liveLink}>Live Demo</a>
                <a className="project-link" target="_blank" rel="noreferrer" href={project.gitHub}>GitHub</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
