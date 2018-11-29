import React from 'react';

class Projects extends React.Component {
  render() {
    const gitHubProjects = this.props.gitHubProjects;
    const projects = gitHubProjects.map((project) => {
      return (
        <div className="exp-bar">
          <a href={project.link}><h3>{project.title}</h3></a>
          <div className="exp-footer">
            <p><small><i>{project.date}</i></small></p>
            <p>{project.description}</p>
            <p><i>Stack: {project.stack}</i></p>
          </div>
        </div>
      )
    })
    return (
      <div>
        <h2>Projects</h2>
        {projects}
      </div>
    )
  }
}

export default Projects;