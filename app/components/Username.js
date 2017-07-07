import React from 'react';

class Username extends React.Component {
  render() {
    return (
      <div className='username'>
        <p>{this.props.username}</p>
      </div>
    )
  }
}

export default Username;
