import React from 'react';

class Interests extends React.Component {
  render() {
    const interests = this.props.interests.sort((a, b) => { return a > b});
    const myInterests = interests.map((hobby) => {
      return <li>{hobby}</li>;
    })
    return (
      <div>
         <h2>Interests</h2>
          <ul>
            {myInterests}
          </ul>
      </div>
    )
  }
}

export default Interests;