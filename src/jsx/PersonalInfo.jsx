import React from 'react';

class PersonalInfo extends React.Component {
  render() {
    const contactInfo = this.props.contactInfo;
    return (
      <div className="contact-info">
        <img src={contactInfo.imgPath} alt="img" id="placeholder"></img><br/>
        <h2 className="name">{contactInfo.name}</h2>
        <span><i className="fas fa-phone"></i><small><i>{contactInfo.phone}</i></small></span><br/>
        <span><i className="far fa-envelope"/><small><i>{contactInfo.email}</i></small></span><br/>
        <span><i className="fab fa-github"></i><a href={"https://"+contactInfo.github}><small><i>{contactInfo.github}</i></small></a></span><br/>
        <span><i className="fab fa-linkedin-in"></i><a href={"https://"+contactInfo.linkedin}><small><i>{contactInfo.linkedin}</i></small></a></span>
      </div>
    )
  }
}

export default PersonalInfo;