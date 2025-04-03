"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 8 },
  { name: "Apr", value: 18 },
  { name: "May", value: 12 },
  { name: "Jun", value: 25 },
  { name: "Jul", value: 30 }
];

const CustomLineChart = () => {
  return (
    <div className="bg-[#1a1d21] p-4 rounded-xl border border-blue-500 w-full max-w-md">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2d31" />
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip contentStyle={{ backgroundColor: "#1a1d21", borderColor: "#2a2d31", color: "#fff" }} />
          <Line type="monotone" dataKey="value" stroke="#5fd3f3" strokeWidth={2} dot={{ fill: "#5fd3f3", r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
