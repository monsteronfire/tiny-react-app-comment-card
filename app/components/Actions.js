import React from 'react';
import Like from './Like';
import Reply from './Reply';
import Timestamp from './Timestamp';

class Actions extends React.Component {
  render() {
    return (
      <div className='actions'>
        <Like status={this.props.status} onClick={this.props.onClick} />
        <Reply/>
        <Timestamp timestamp={this.props.timestamp}/>
      </div>
    )
  }
}

export default Actions;
