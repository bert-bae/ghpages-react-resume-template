import React from 'react';

class Interests extends React.Component {
  render() {
    const interests = this.props.interests.sort((a, b) => { return a > b});
    const myInterests = interests.map((hobby) => {
      return <li><p>{hobby}</p></li>;
    })
    return (
      <div className={this.props.print + " web"}>
         <h3>Interests</h3>
          <ul>
            {myInterests}
          </ul>
      </div>
    )
  }
}

export default Interests;