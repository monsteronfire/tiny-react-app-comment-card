import React from 'react';

class Like extends React.Component {
  render() {
    return (
      <button className={this.props.status} onClick={this.props.onClick}>
        ♥
      </button>
    )
  }
}

export default Like;
