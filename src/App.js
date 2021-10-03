import './App.css'
import { Profile } from './components/Profile/Profile.js'
import user from './components/Profile/user.json'
import { Statistics } from './components/Statistics/Statistics.js'
import statisticalData from './components/Statistics/statistical-data.json'
import { FriendList } from './components/FriendList/FriendList.js'
import friends from './components/FriendList/friends.json'
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory.js'
import transactions from './components/TransactionHistory/transactions.json'

function App() {
  return (
    <div className="App">
      <h1>First Homework React</h1>
      <h2>Social profile</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Statistics</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <h2>FriendList</h2>
      <FriendList friends={friends} />
      <h2>Transaction History</h2>
      <TransactionHistory items={transactions} />
    </div>
  )
}

export default App
