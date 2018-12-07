import React from 'react';

class WorkExp extends React.Component {
  render() {
    const previousRoles = this.props.workexp;
    
    const roles = previousRoles.map((role) => {
      return (
        <div className="exp-bar" key={this.props.random()}>
          <h4>{role.title}</h4>
          <div className="exp-footer">
            <p>{role.company}</p>
            <p><small><i>{role.date}</i></small></p>
            <p><small><i>{role.address}</i></small></p>
          </div>
          <p className="main-p">{role.responsibilities}</p>
        </div>
      )
    })
    return (
      <div>
        <h3>Experience</h3><hr className="hr-exp"/>
        {roles}
      </div>
    )
  }
}

export default WorkExp;