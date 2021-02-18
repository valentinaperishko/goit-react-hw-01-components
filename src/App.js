import React from 'react';
import FriendList from './components/friend-list/FriendList';

import friends from './friends.json';

const App = () => {
  return (
    <div>
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
