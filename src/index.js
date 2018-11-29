import React from 'react';
import ReactDOM from 'react-dom';

//components
import Education from './jsx/Education.jsx';
import PersonalInfo from './jsx/PersonalInfo.jsx';
import Skills from './jsx/Skills.jsx';
import Projects from './jsx/Projects.jsx';
import Summary from './jsx/Summary.jsx';
import WorkExp from './jsx/WorkExp.jsx';
import Interests from './jsx/Interests.jsx';
import {summary, contactInfo, education, techSkills, otherSkills, workexp, gitHubProjects, interests} from './resumeinput.js';

//stylesheet
import './index.css';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: contactInfo,
      education: education,
      skills: {techSkills, otherSkills},
      summary: summary,
      workexp: workexp,
      gitHubProjects: gitHubProjects,
      interests: interests,
    }
  }
  render() {
    return (
      <div className="main-container">
        <div className="side-bar">
          <PersonalInfo contactInfo={this.state.personalInfo}/>
          <Skills skills={this.state.skills}/>
        </div>
        <div className="main-body">
          <Summary summary={this.state.summary}/>
          <WorkExp workexp={this.state.workexp}/>
          <Projects gitHubProjects={this.state.gitHubProjects}/>
          <Education education={this.state.education} />
          <Interests interests={this.state.interests}/>
        </div>
      </div>
    )
  }
}
const root = document.getElementById("root");
ReactDOM.render(<Resume />, root);
