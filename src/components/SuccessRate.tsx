'use client';

import React from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

{/*CustomLineChart*/}
const data = [
  { name: "Jan", value: 7 },
  { name: "Feb", value: 10 },
  { name: "Mar", value: 7 },
  { name: "Apr", value: 14 },
  { name: "May", value: 12 },
  { name: "Jun", value: 25 }
];

const CustomLineChart = () => {
  return (
    <div className="bg-[#26292E] rounded-xl border border-[#61C4E1] w-full max-w-md">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#FFFFFF26" />
          <Tooltip contentStyle={{ backgroundColor: "#1a1d21", borderColor: "#FFFFFF26", color: "#fff" }} />
          <Line type="monotone" dataKey="value" stroke="#5fd3f3" strokeWidth={2} dot={{ fill: "#5fd3f3", r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

{/*Custom CircularProgresBar*/}
interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

const CircularProgres: React.FC<CircularProgressProps> = ({
  percentage,
  size = 90,
  strokeWidth = 10,
}) => {
  const radius = (size - strokeWidth) / 2.5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex justify-start">
        <div className="relative flex items-center justify-center">
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              {/* Gradient Definition */}
              <defs>
              <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>

              </defs>

              {/* Progress Circle */}
              <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="url(#gradientStroke)"
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform={`rotate(0 ${size / 2} ${size / 2})`}
              className="transition-all duration-500"
              />
          </svg>
          <span className="absolute text-white text-[16px] font-bold">{percentage}%</span>
        {/* Percentage Text */}
        </div>
    </div>
  );
};

const ProgressComponent = () => {
  const progress = 72; // Change this to dynamically adjust progress

  return (
    <div className="py-4 rounded-lg flex flex-col gap-5">
      {/* Linear Progress Bar */}
      <div className="relative w-full h-3 bg-[#FFFFFF17] rounded-full">
        <div
          className="absolute h-full bg-[#61C4E1] rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Circular Progress */}
      <div className="flex justify-start items-center">
        <CircularProgres percentage={progress} />
      </div>
      <div className="flex justify-start items-center">
        <CustomLineChart />
      </div>
    </div>
  );
};

export default ProgressComponent;
