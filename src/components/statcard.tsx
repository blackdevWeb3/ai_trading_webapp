// components/StatCard.tsx
import React from 'react';

type StatCardProps = {
  label: string;
  value: number | string;
  maxWidth?: string; // Tailwind class or style value
};

const StatCard: React.FC<StatCardProps> = ({ label, value, maxWidth = 'max-w-[250px]' }) => {
  return (
    <div className={`flex flex-col justify-between md:gap-6 gap-4 bg-[#26292E] text-white rounded-md p-7 w-full ${maxWidth}`}>
      <p className="text-[#C7C7C7] lg:text-[23px] md:text-[20px] text-[16px] font-semibold">{label}</p>
      <p className="lg:text-[32px] md:text-[26px] text-[22px] font-bold">{value}</p>
    </div>
  );
};

export default StatCard;
