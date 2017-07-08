import React from 'react';
import Like from './Like';
import Reply from './Reply';
import Timestamp from './Timestamp';

class Actions extends React.Component {
  render() {
    const status = this.props.like ? 'love' : null;
    //const status = 'love';

    return (
      <div className='actions'>
        <Like className={status} onClick={this.props.onClick} />
        <Reply/>
        <Timestamp timestamp={this.props.timestamp}/>
      </div>
    )
  }
}

export default Actions;
