import React from 'react';
import Picture from './Picture';
import Username from './Username';
import Comments from './Comments';
import Actions from './Actions';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      like: !(this.state.like)
    });
    console.log('clicked');
  }


  render() {
    const status = this.state.like ? 'love' : null;

    return (
      <div className='card'>
        <Picture url={this.props.item.url}/>
        <div className='user-info'>
          <Username username={this.props.item.username} />
          <Comments comments={this.props.item.comments}/>
          <Actions timestamp={this.props.item.timestamp} onClick={this.handleClick} status={status} />
        </div>
      </div>
    )
  }
}

export default Card;
