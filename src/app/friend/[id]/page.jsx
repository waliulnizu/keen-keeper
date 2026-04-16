"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import friends from "@/data/friends.json";
import Image from "next/image";
import { use } from "react";
import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";

import { FaPhone, FaVideo } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import toast from "react-hot-toast";

const FriendDetails = ({ params }) => {

  const { id } = use(params);

  const { addTimeline } = useContext(TimelineContext);

  const friend = friends.find((f) => f.id === parseInt(id));

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

  const handleAction = (type) => {

    const newItem = {
      id: Date.now(),
      type: type.toLowerCase(),
      name: friend.name,
      date: new Date().toLocaleDateString()
    };

    addTimeline(newItem);

    toast.success(`${type} added`);
  };

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

          <h2 className="text-xl font-bold mt-4">{friend.name}</h2>

          <p className="text-red-500 mt-2">{friend.status}</p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4">{friend.bio}</p>

          <p className="mt-2 text-gray-500">{friend.email}</p>

        </div>

        {/* Right Side */}
        <div>

          <div className="grid grid-cols-3 gap-4">

            <div className="shadow p-4 rounded text-center">
              <h1 className="text-xl font-bold">{friend.days_since_contact}</h1>
              <p>Days Since Contact</p>
            </div>

            <div className="shadow p-4 rounded text-center">
              <h1 className="text-xl font-bold">{friend.goal}</h1>
              <p>Goal</p>
            </div>

            <div className="shadow p-4 rounded text-center">
              <h1 className="text-xl font-bold">{friend.next_due_date}</h1>
              <p>Next Due</p>
            </div>

          </div>

          <div className="shadow p-4 rounded mt-4">

            <h2 className="font-bold">Relationship Goal</h2>

            <p className="mt-2">Connect every {friend.goal} days</p>

            <button className="mt-2 bg-gray-200 px-3 py-1 rounded">
              Edit
            </button>

          </div>

          {/* Quick Check-In */}
          <div className="shadow p-4 rounded mt-4">

            <h2 className="font-bold">Quick Check-In</h2>

            <div className="flex gap-4 mt-4">

              <button
                onClick={() => handleAction("Call")}
                className="shadow px-4 py-2 rounded flex items-center gap-2"
              >
                <FaPhone />
                Call
              </button>

              <button
                onClick={() => handleAction("Text")}
                className="shadow px-4 py-2 rounded flex items-center gap-2"
              >
                <IoChatbubbleEllipses />
                Text
              </button>

              <button
                onClick={() => handleAction("Video")}
                className="shadow px-4 py-2 rounded flex items-center gap-2"
              >
                <FaVideo />
                Video
              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default FriendDetails;