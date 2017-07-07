import React from 'react';

class Comments extends React.Component {
  render() {
    return (
      <div className='comments'>
        <p>{this.props.comments}</p>
      </div>
    )
  }
}

export default Comments;
