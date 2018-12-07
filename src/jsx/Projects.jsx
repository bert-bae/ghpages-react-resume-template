import React from 'react';

class Projects extends React.Component {
  render() {
    const gitHubProjects = this.props.gitHubProjects;
    const projects = gitHubProjects.map((project) => {
      return (
        <div className="exp-bar" key={this.props.random()}>
          <a href={project.link}><h4>{project.title}</h4></a>
          <div className="exp-footer">
            <p><small><i>{project.date}</i></small></p>
            <p>{project.description}</p>
            <p className="main-p"><i>Stack: {project.stack}</i></p>
          </div>
        </div>
      )
    })
    return (
      <div>
        <h3>Projects</h3><hr className="hr-projects"/>
        {projects}
      </div>
    )
  }
}

export default Projects;