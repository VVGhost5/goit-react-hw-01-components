import React from "react";

import Profile from "./components/Profile/Profile";
import Statitics from "./components/Statitics/Statitics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userData from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

export default function App() {
  const { name, tag, location, avatar, stats } = userData;
  return (
    <div className="container">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statitics title="UPLOAD STATS" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
