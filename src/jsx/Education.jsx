import React from 'react';

class Education extends React.Component {
  render() {
    const education = this.props.education;
    return (
      <div className={this.props.print + " web"}>
        <h3>Education</h3><hr className="hr-ed"/>
        <h4>{education.school}</h4>
        <p><small><i>{education.date}</i></small></p>
        <p className="main-p">{education.study}</p>
      </div>
    )
  }
}

export default Education;