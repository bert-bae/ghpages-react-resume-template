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
import {summary, contactInfo, education, techSkills, otherSkills, workexp, gitHubProjects, interests} from './datainput.js';

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
    // random key generator to get rid of the React error surrounding unique key values for looped components (don't need a lot as it is a very limited set of items)
    const randomKey = () => {
      const numbers = "0123456789";
      let result = "";
      for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * numbers.length);
        result += numbers[random];
      }
      return result;
    }

    // move the components below around to change the section layout. The Education and Interests appear in both main-body and side-bar for media query print layout styling purposes (I am sure there is a better way to do it, but I was lazy)
    // Skills sections are automatically alphabetized. If you want more control in positioning the skills
    // go to "src" => "jsx" => "Skills.jsx" and remove the following codes _.sort((a, b) => { return a > b}).join(", ")_
    // and it will no longer alphabetize the skills sections on its own.
    
    return (
      <div className="main-container">
        <div className="side-bar">
          <PersonalInfo contactInfo={this.state.personalInfo}/>
          <Skills skills={this.state.skills} random={randomKey}/>
          <Education education={this.state.education} print={"print"}/>
          <Interests interests={this.state.interests} print={"print"} random={randomKey}/>
        </div>
        <div className="main-body">
          <Summary summary={this.state.summary}/>
          <WorkExp workexp={this.state.workexp} random={randomKey}/>
          <Projects gitHubProjects={this.state.gitHubProjects} random={randomKey}/>
          <Education education={this.state.education} />
          <Interests interests={this.state.interests} random={randomKey}/>
        </div>
      </div>
    )
  }
}
const root = document.getElementById("root");
ReactDOM.render(<Resume />, root);
