import FriendCard from "./FriendCard";
import friends from "@/data/friends.json";

const Friends = () => {
  return (
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
  );
};

export default Friends;