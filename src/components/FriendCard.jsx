import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;

  return (
    <Link href={`/friend/${id}`}>
      <div className="shadow p-4 rounded text-center">
        <Image
          src={picture}
          width={64}
          height={64}
          alt={name}
          className="w-16 h-16 rounded-full mx-auto"
        />

      <h2 className="font-bold mt-2">{name}</h2>

      <p className="text-gray-500">{days_since_contact} days ago</p>

      <div className="flex gap-2 justify-center mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 px-2 py-1 text-sm rounded">
            {tag}
          </span>
        ))}
      </div>

      <span className="bg-red-100 text-red-500 px-2 py-1 rounded text-sm mt-2 inline-block">
        {status}
      </span>
    </div>
    </Link>
  );
};

export default FriendCard;
