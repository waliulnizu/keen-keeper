import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import timeline from "@/data/timeline.json";

import { FaPhone, FaVideo } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";

const Timeline = () => {

  return (
    <div>

      <Navbar />

      <div className="max-w-5xl mx-auto py-10">

        <h1 className="text-2xl font-bold mb-6">
          Timeline
        </h1>

        <div className="space-y-4">

          {
            timeline.map(item => (

              <div
                key={item.id}
                className="p-4 shadow rounded flex gap-4 items-center"
              >

                <span className="text-xl">

                  {
                    item.type === "call" && <FaPhone />
                  }

                  {
                    item.type === "text" && <IoChatbubbleEllipses />
                  }

                  {
                    item.type === "video" && <FaVideo />
                  }

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

      <Footer />

    </div>
  );
};

export default Timeline;