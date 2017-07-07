import React from 'react';

class Picture extends React.Component {
  render() {
    return (
      <div className='picture'>
        <img src={this.props.url}/>
      </div>
    )
  }
}

export default Picture;
