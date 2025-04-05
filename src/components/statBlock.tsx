// components/StatBlock.tsx
import React from 'react';

type StatBlockProps = {
  title: string;
  value: string | number;
  subValue: string | number;
  maxWidth?: string;
};

const StatBlock: React.FC<StatBlockProps> = ({ title, value, subValue, maxWidth = 'max-w-[320px]' }) => {
  return (
    <div className={`bg-[#26292E] text-[#FFFFFF] rounded-md p-5 w-full ${maxWidth}`}>
      <p className="text-lg font-bold uppercase">{title}</p>
      <p className="text-lg font-bold mt-16">{value}</p>
      <p className="text-lg mt-1">{subValue}</p>
    </div>
  );
};

export default StatBlock;
