"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import timeline from "@/data/timeline.json";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

const Stats = () => {

const call = timeline.filter(
  item => item.type === "call"
).length;

const text = timeline.filter(
  item => item.type === "text"
).length;

const video = timeline.filter(
  item => item.type === "video"
).length;

const data = [
  { name: "Call", value: call },
  { name: "Text", value: text },
  { name: "Video", value: video }
];

  return (
    <div>

      <Navbar />

      <div className="max-w-6xl mx-auto py-10">

        <h1 className="text-2xl font-bold mb-6">
          Friendship Analytics
        </h1>

        <div className="shadow p-6 rounded">

          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
            >
              <Cell fill="#22c55e" />
              <Cell fill="#3b82f6" />
              <Cell fill="#f59e0b" />
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Stats;