import Profile from './components/Social-profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friend-list/FriendList';
import TransactionHistory from './components/Transaction-history/TransactionHistory';

import user from './components/Social-profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/Friend-list/friends.json';
import transactions from './components/Transaction-history/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
