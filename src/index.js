import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class PersonalInfo extends React.Component {
  render() {
    const contactInfo = {
      name: "Elbert Bae",
      phone: "(778) 908-0350",
      email: "elbert.bae@gmail.com",
      github: "github.com/bert-bae",
      linkedin: "linkedin.com/in/bert92",

    }

    return (
      <div className="contact-info">
        <h2>{contactInfo.name}</h2>
        <i class="fas fa-phone"></i><small><i>{contactInfo.phone}</i></small><br/>
        <i class="far fa-envelope"/><small><i>{contactInfo.email}</i></small><br/>
        <i class="fab fa-github"></i><a href={"https://"+contactInfo.github}><small><i>{contactInfo.github}</i></small></a><br/>
        <i class="fab fa-linkedin-in"></i><a href={"https://"+contactInfo.linkedin}><small><i>{contactInfo.linkedin}</i></small></a> 
      </div>
    )
  }
}

class Skills extends React.Component {
  render () {
    const techSkills = [
      'Nodejs',
      'JavaScript',
      'jQuery',
      'HTML/CSS/SCSS',
      'SQL',
      'ReactJS'
    ];
    const otherSkills = [
      'Management',
      'Problem Solving',
      'Conflict Management',
      'Training and development',
      'Data analysis'
    ]
  
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

class Education extends React.Component {
  render() {
    const education = {
      school: "Simon Fraser University",
      date: "September 2012 - December 2015",
      study: "Psychology & Business",
    }
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

class Hobbies extends React.Component {
  render() {
    const hobbies = [
      'Rock climbing',
      'Hiking',
      'Camping',
      'Swimming',
      'Travelling'
    ]
    const myHobbies = hobbies.map((hobby) => {
      return <li>{hobby}</li>;
    })
    return (
      <div>
         <h2>Hobbies</h2>
          <ul>
            {myHobbies}
          </ul>
      </div>
    )
  }
}
class Summary extends React.Component {
  render() {
    return (
      <div>
        <h2>Summary</h2>
        <p>Professional with management and training experience with a passion for continued learning. Continuing my development in full-stack web development to apply my experience in customer service, sales and training to improve the effectiveness and efficiency of today's workplaces.</p>
      </div>
    )
  }
}

class WorkExp extends React.Component {
  render() {

    const previousRoles = [
      {
        title: "Membership Experience Manager",
        company: "YMCA of Greater Vancouver",
        address: "282 West 49th Avenue, Vancouver, BC",
        date: "February 2017 - October 2018",
        responsibilities: "Tasked with the on-going improvement of member experience through training, data analysis, and community engagement with local businesses to improve retention and sales statistics. Growth of membership satisfaction rating from on average of 40-45 Net Promoter Score to consistently reaching 85-90 by September 2018 (Happy-or-Not Analysis). Created a customized Excel spreadsheet to improve scheduling efficiency which automatically tracks gaps in scheduled hours, overscheduling, individually catered sales goals, and cost information as monthly schedules are created."
      },
      {
        title: "Service & Sales Trainer",
        company: "Self-Employed (Contract basis)",
        address: "Lower Mainland",
        date: "February 2018 - Current",
        responsibilities: "Self-employment as a trainer specializing in customer service and sales roles with a passion for teaching others problem solving strategies, adapting to the situation, and soft skills necessary to navigate through difficult front facing roles."
      }];
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

class Projects extends React.Component {
  render() {
    const gitHubProjects = [
      {
        title: "Tweeter",
        link: "https://github.com/bert-bae/tweeterclone",
        stack: "NodeJS, JavaScript, HTML/CSS/SCSS, Express, Ajax",
        description: "Twitter clone, styled with minimal functionality created while learning functional programming.",
        date: "November 2018 - Current",
      },
      {
        title: "RedSquare",
        link: "https://github.com/bert-bae/outdoodle",
        stack: "NodeJS, JavaScript, HTML/CSS/SCSS, Express, Ajax, EJS",
        description: "Twitter clone, styled with minimal functionality created while learning functional programming.",
        date: "November 2018 - Current",
      }
    ];
    const projects = gitHubProjects.map((project) => {
      return (
        <div className="exp-bar">
          <a href={project.link}><h3>{project.title}</h3></a>
          <div className="exp-footer">
            <p><small><i>{project.date}</i></small></p>
            <p>{project.description}</p>
            <p><i>Stack: {project.stack}</i></p>
          </div>
        </div>
      )
    })
    return (
      <div>
        <h2>Projects</h2>
        {projects}
      </div>
    )
  }
}

class Resume extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="side-bar">
          <PersonalInfo />
          <Skills />
        </div>
        <div className="main-body">
          <Summary />
          <WorkExp />
          <Projects />
          <Education />
          <Hobbies />
        </div>
      </div>
    )
  }
}
const root = document.getElementById("root");
ReactDOM.render(<Resume />, root);
