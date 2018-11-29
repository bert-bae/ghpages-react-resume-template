import React from 'react';

class Skills extends React.Component {
  render () {
    const techSkills = this.props.skills.techSkills.sort((a, b) => { return a > b});
    const otherSkills = this.props.skills.otherSkills.sort((a, b) => { return a > b});

    const tSkills = techSkills.map((skill) => {
      return <li>{skill}</li>;
    })
    const oSkills = otherSkills.map((skill) => {
      return <li>{skill}</li>;
    })

    return (
      <div>
        <h2>Tech Stack</h2>
          <ul>
            {tSkills}
          </ul>
        <h2>Other Skills</h2>
          <ul>
            {oSkills}
          </ul>
      </div>
    )
  }
}

export default Skills;