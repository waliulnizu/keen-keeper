"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Stats = () => {
  return (
    <div>

      <Navbar />

      <div className="max-w-6xl mx-auto py-10">

        <h1 className="text-2xl font-bold mb-6">
          Friendship Analytics
        </h1>

        <div className="shadow p-6 rounded">

          Pie Chart Here

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Stats;