import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import friends from "@/data/friends.json";
import Image from "next/image";

const FriendDetails = async ({ params }) => {

  const { id } = await params;

  const friend = friends.find(
    (f) => f.id === parseInt(id)
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

      <div className="max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left Side */}
        <div className="shadow p-6 rounded">

          <Image
            src={friend.picture}
            alt={friend.name}
            width={96}
            height={96}
            className="w-24 h-24 rounded-full"
          />

          <h2 className="text-xl font-bold mt-4">
            {friend.name}
          </h2>

          <p className="text-red-500 mt-2">
            {friend.status}
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {
              friend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))
            }
          </div>

          <p className="mt-4">
            {friend.bio}
          </p>

          <p className="mt-2 text-gray-500">
            {friend.email}
          </p>

        </div>

        {/* Right Side */}
        <div className="shadow p-6 rounded">
          <h3 className="text-lg font-semibold mb-4">
            Right Side Content
          </h3>

          <p className="text-gray-600">
             extra info, analytics, charts, related friends 
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default FriendDetails;