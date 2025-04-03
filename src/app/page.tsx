'use client';
import Navbar from "@/components/navbar";
import CircularProgress from "@/components/riskchart";
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

const tradeData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  profit: Math.floor(Math.random() * 100) + 10,
}));

export default function Home() {
  return (
    <div className="m-auto min-h-screen pt-[22px] bg-[#1C1D1F]">
      <main className="w-full">
        <div>
          <h1 className="md:text-[32px] text-[28px] font-bold text-[#ffffff]">AI Trading Performance</h1>
          <p className="md:text-[16px] text-[14px] font-normal text-[#ffffff]">Optimize Your Trading with AI Insights</p>
        </div>
        <div className="grid grid-cols-3 gap-3 ">
          <div className="col-span-2 mt-5">
            <div className="bg-[#26292E] rounded-2xl p-11">
              <h2 className="text-[24px] font-bold text-[#ffffff]">Trade Performance</h2>
              <p className="text-[16px] leading-[33px] text-[#ffffff]">Market Trend: Bullish</p>
              <p className="text-[16px] leading-[33px] text-[#ffffff]">AI Accuracy: 85%</p>
              <p className="text-[16px] leading-[33px] text-[#ffffff]">Profit Factor: 1.9</p>
              <div>
                <ResponsiveContainer width="100%" height={500}>
                  <BarChart data={tradeData}>
                    {/* Gradient Definitions */}
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#61C4E1" stopOpacity={1} />
                        <stop offset="100%" stopColor="#145467" stopOpacity={1} />
                      </linearGradient>
                    </defs>

                    {/* Bars with the gradient applied */}
                    <Bar dataKey="profit" radius={[22, 22, 22, 22]} animationDuration={800}>
                      {tradeData.map((entry, index) => {
                        return <Cell key={`cell-${index}`} fill="url(#grad1)" />;
                      })}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="flex justify-between w-full mt-5">
              <div className="max-w-[438px] w-full bg-[#26292E] justify-start rounded-2xl px-7 py-9 flex flex-col gap-[16px]">
                <div className="text-[24px] font-bold text-[#ffffff]">Risk Analysis</div>
                <div className="flex justify-between bg-[#FFFFFF08] rounded-[12px] p-3">
                  <CircularProgress percentage={76} />
                  <div className="bg-[#FFFFFF21] p-3 border-1 border-[#61C4E1] rounded-[10px] flex flex-col justify-around items-center">
                    <div className="text-[14px] leading-[33px] font-normal text-[#ffffff]">Suggested Adjustment</div>
                    <div className="text-[16px] leading-[33px] font-normal text-[#ffffff] bg-[#61C4E15E] rounded-2xl px-2">Reduce exposure</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[16px] leading-[33px] font-normal text-[#ffffff] bg-[#61C4E15E] rounded-2xl px-2">Volatility Level : Medium</div>
                  <div className="text-[16px] text-[#ffffff]">Risk Score (72/100)</div>
                </div>
              </div>
              <div className="max-w-[438px] w-full bg-[#26292E] justify-start rounded-2xl px-9 py-4 ">
                <div className="text-[24px] font-bold text-[#ffffff]">Risk Analysis</div>
                <CircularProgress percentage={76} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
