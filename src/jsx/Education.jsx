import React from 'react';

class Education extends React.Component {
  render() {
    const education = this.props.education;
    return (
      <div className="exp-bar">
        <h2>Education</h2>
        <h3>{education.school}</h3>
        <p>{education.date}</p>
        <p>{education.study}</p>
      </div>
    )
  }
}

export default Education;