import React from 'react';
import Card from './Card';

const item = {
  url: 'app/images/profile-picture.jpg',
  comments: 'lorem ipsum comment comment comment',
  username: 'Belle the Cat',
  timestamp: '2 seconds ago',
};

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Card item={item} />
      </div>
    )
  }
}

export default App;
