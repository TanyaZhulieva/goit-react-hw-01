import Profile from "./Profile.jsx";
import FriendList from "./FriendList.jsx";
import TransactionHistory from "./TransactionHistory.jsx";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

export default function App() {
  return (
    <>
    <Profile 
    image={userData.avatar}
    name={userData.username}
    tag={userData.tag}
    location={userData.location}
    stats={userData.stats}
    />
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions} />
    </>
    
  )
}
