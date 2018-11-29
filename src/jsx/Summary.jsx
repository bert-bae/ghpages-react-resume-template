import React from 'react';

class Summary extends React.Component {
  render() {
    const summary = this.props.summary;
    return (
      <div>
        <h2>Summary</h2>
        <p>{summary}</p>
      </div>
    )
  }
}

export default Summary;