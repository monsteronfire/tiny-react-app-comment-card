import React from 'react';

class Like extends React.Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        ♥
      </button>
    )
  }
}

export default Like;
