import React from 'react';

class Skills extends React.Component {
  render () {
    const techSkills = this.props.skills.techSkills.sort((a, b) => { return a > b}).join(", ");
    const otherSkills = this.props.skills.otherSkills.sort((a, b) => { return a > b}).join(", ");

    return (
      <div class="skills">
        <h4>Tech Stack</h4>
          <p>{techSkills}</p>
        <h4>Other Skills</h4>
          <p>{otherSkills}</p>
      </div>
    )
  }
}

export default Skills;