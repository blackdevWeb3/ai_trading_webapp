'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Take-Profit', value: 0.5, color: '#FF0000' }, // Green
  { name: 'Stop-Loss', value: 2, color: '#00FF57' },  // Red
];

const PieChartComponent = () => {
  return (
    <div className="rounded-lg flex flex-col">
      <div className="w-32 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;
