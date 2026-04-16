import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import friends from "@/data/friends.json";
import Image from "next/image";

const FriendDetails = async ({ params }) => {

    const { id } = await params;
    const friend = friends.find(
    f => f.id === parseInt(id)
  );

  if (!friend) {
    return (
      <div>
        <Navbar />
        <div className="max-w-6xl mx-auto py-10">
          <h1 className="text-2xl font-bold">Friend not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto py-10">

        <h1 className="text-2xl font-bold">
          {friend.name}
        </h1>

        <Image 
        src={friend.picture}
        alt={friend.name}
        height={64}
        width={64}
        className="w-24 h-24 rounded-full mt-4"
        />

        <p className="mt-4">
          {friend.bio}
        </p>

        <p className="mt-2">
          {friend.email}
        </p>

      </div>

      <Footer />
    </div>
  );
};

export default FriendDetails;