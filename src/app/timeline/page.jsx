"use client";

import { useState, useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";

import { FaPhone, FaVideo } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";

const Timeline = () => {

  const { timeline } = useContext(TimelineContext);

  const [filter, setFilter] = useState("all");

  const filteredTimeline = timeline.filter(item => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">
        Timeline
      </h1>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-6">

          <button
            onClick={() => setFilter("all")}
            className="px-3 py-1 shadow rounded"
          >
            All
          </button>

          <button
            onClick={() => setFilter("call")}
            className="px-3 py-1 shadow rounded"
          >
            Call
          </button>

          <button
            onClick={() => setFilter("text")}
            className="px-3 py-1 shadow rounded"
          >
            Text
          </button>

          <button
            onClick={() => setFilter("video")}
            className="px-3 py-1 shadow rounded"
          >
            Video
          </button>

        </div>

        {/* Timeline List */}
        <div className="space-y-4">

          {
            filteredTimeline.map(item => (

              <div
                key={item.id}
                className="p-4 shadow rounded flex gap-4 items-center"
              >

                <span className="text-xl">

                  {item.type === "call" && <FaPhone />}

                  {item.type === "text" && <IoChatbubbleEllipses />}

                  {item.type === "video" && <FaVideo />}

                </span>

                <div>

                  <h3 className="font-semibold">
                    {item.type} with {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.date}
                  </p>

                </div>

              </div>

            ))
          }

        </div>

    </div>
  );
};

export default Timeline;