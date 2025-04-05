// components/StatGradientCard.tsx
import React from 'react';

type StatGradientCardProps = {
  title: string;
  value: string | number;
  subValue: string | number;
  maxWidth?: string;
};

const StatGradientCard: React.FC<StatGradientCardProps> = ({
  title,
  value,
  subValue,
  maxWidth = 'max-w-[302px]',
}) => {
  return (
    <div className={`bg-[#26292E] text-[#FFFFFF] rounded-md p-5 w-full ${maxWidth}`}
        style={{
        background: 'linear-gradient(to bottom, #26292E, #61C4E1)',
      }}
    >
      <p className="text-lg font-bold uppercase">{title}</p>
      <p className="text-lg font-bold mt-16">{value}</p>
      <p className="text-lg mt-1">{subValue}</p>
    </div>
  );
};

export default StatGradientCard;


