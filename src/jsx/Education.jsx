import React from 'react';

class Education extends React.Component {
  render() {
    const education = this.props.education;
    return (
      <div className="exp-bar">
        <h3>Education</h3><hr className="hr-ed"/>
        <h4>{education.school}</h4>
        <small><i><p>{education.date}</p></i></small>
        <p className="main-p">{education.study}</p>
      </div>
    )
  }
}

export default Education;