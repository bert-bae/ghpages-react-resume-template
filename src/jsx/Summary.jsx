import React from 'react';

class Summary extends React.Component {
  render() {
    const summary = this.props.summary;
    return (
      <div>
        <h3>Summary</h3><hr className="hr-summary"/>
        <p className="main-p">{summary}</p>
      </div>
    )
  }
}

export default Summary;