import Image from "next/image";

const FriendCard = () => {
  return (
    <div className="shadow p-4 rounded text-center">

      <Image
        src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fyoung-bearded-man-with-striped-shirt_273609-5677.jpg%3Fsemt%3Dais_hybrid%26w%3D740%26q%3D80&sp=1776355853T727533966609280f41dd960dfb9ac4ba7b0195c9c4ea93ad27f9d39f082fad41"
        width={64}
        height={64}
        className="w-16 h-16 rounded-full mx-auto"
        alt="friends-image"
      />

      <h2 className="font-bold mt-2">
        Emma Wilson
      </h2>

      <p className="text-gray-500">
        62 days ago
      </p>

      <span className="bg-red-100 text-red-500 px-2 py-1 rounded text-sm">
        Overdue
      </span>

    </div>
  );
};

export default FriendCard;