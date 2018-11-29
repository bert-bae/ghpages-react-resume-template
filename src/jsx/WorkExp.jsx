import React from 'react';

class WorkExp extends React.Component {
  render() {
    const previousRoles = this.props.workexp;
    
    const roles = previousRoles.map((role) => {
      return (
        <div className="exp-bar">
          <h3>{role.title}</h3>
          <div className="exp-footer">
            <p>{role.company}</p>
            <p><small><i>{role.address}</i></small></p>
            <p><small><i>{role.date}</i></small></p>
          </div>
          <p>{role.responsibilities}</p>
        </div>
      )
    })
    return (
      <div>
        <h2>Experience</h2>
        {roles}
      </div>
    )
  }
}

export default WorkExp;