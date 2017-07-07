import React from 'react';
import Picture from './Picture';
import Username from './Username';
import Comments from './Comments';
import Actions from './Actions';

class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <Picture url={this.props.item.url}/>
        <div className='user-info'>
          <Username/>
          <Comments/>
          <Actions/>
        </div>
      </div>
    )
  }
}

export default Card;
