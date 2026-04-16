"use client";

import FriendCard from "./FriendCard";
import Summary from "./Summary";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import friendsData from "@/data/friends.json";

const Friends = () => {

  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>

      {/* ✅ Dynamic Summary */}
      <Summary friends={friends} />

      {/* Friends Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mt-8">

        {
          friends.map(friend => (
            <FriendCard
              key={friend.id}
              friend={friend}
            />
          ))
        }

      </div>

    </div>
  );
};

export default Friends;