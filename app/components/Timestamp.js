import React from 'react';

class Timestamp extends React.Component {
  render() {
    return (
      <span className='timestamp'>
        {this.props.timestamp}
      </span>
    )
  }
}

export default Timestamp;
