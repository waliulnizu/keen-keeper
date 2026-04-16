import Navbar from "@/components/Navbar";

const Timeline = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto py-10">

        <h1 className="text-2xl font-bold mb-6">
          Timeline
        </h1>

        <div className="space-y-4">

          <div className="p-4 shadow rounded">
             Meetup with Tom Baker
          </div>

          <div className="p-4 shadow rounded">
             Text with Sarah Chen
          </div>

          <div className="p-4 shadow rounded">
             Video with Aisha Patel
          </div>

          <div className="p-4 shadow rounded">
             Call with Marcus Johnson
          </div>

        </div>

      </div>

    </div>
  );
};

export default Timeline;