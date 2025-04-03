import React from "react";

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 120,
  strokeWidth = 13,
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
                <stop offset="0%" stopColor="#61C4E1" />
                <stop offset="100%" stopColor="#D90000" />
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
        <span className="absolute text-white text-[24px] font-bold">{percentage}%</span>
        {/* Percentage Text */}
        </div>
    </div>
  );
};

export default CircularProgress;
