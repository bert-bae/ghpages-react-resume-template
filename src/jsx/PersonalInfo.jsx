import React from 'react';

class PersonalInfo extends React.Component {
  render() {
    const contactInfo = this.props.contactInfo;
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

export default PersonalInfo;