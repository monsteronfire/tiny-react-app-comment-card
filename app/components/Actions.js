import React from 'react';
import Timestamp from './Timestamp';

class Actions extends React.Component {
  render() {
    return (
      <div className='actions'>
        <Timestamp timestamp={this.props.timestamp}/>
      </div>
    )
  }
}

export default Actions;
