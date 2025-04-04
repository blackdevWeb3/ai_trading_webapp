'use client';
import CircularProgress from "@/components/riskchart";
import PieChartComponent from "@/components/PieChart";
import { BarChart, Bar, ResponsiveContainer, Cell} from 'recharts';
import ProgressComponent from "@/components/SuccessRate";

const tradeData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  profit: Math.floor(Math.random() * 100) + 10,
}));

export default function Home() {
  return (
    <div className="lg:m-auto min-h-screen pt-[22px] md:mx-5 bg-[#1C1D1F]">
      <main className="w-full">
        <div className="px-6">
          <h1 className="md:text-[32px] text-[28px] font-bold text-[#ffffff]">AI Trading Performance</h1>
          <p className="md:text-[16px] text-[14px] font-normal text-[#ffffff]">Optimize Your Trading with AI Insights</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-7 mt-5">
          <div className="lg:col-span-2 flex flex-col justify-between">

            {/*Trade Performance*/}
            <div className="bg-[#26292E] rounded-2xl md:p-11 p-3">
              <h2 className="text-[24px] font-bold text-[#ffffff]">Trade Performance</h2>
              <p className="text-[16px] leading-[33px] text-[#ffffff]">Market Trend: Bullish</p>
              <p className="text-[16px] leading-[33px] text-[#ffffff]">AI Accuracy: 85%</p>
              <p className="text-[16px] leading-[33px] text-[#ffffff]">Profit Factor: 1.9</p>
              <div>
                <ResponsiveContainer width="100%" height={400} className="h-[430px]">
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

            <div className="flex justify-between w-full mt-5 gap-4 md:flex-row flex-col">

              {/*Risk Analysis Chart*/}
              <div className="md:max-w-[438px] w-full bg-[#26292E] justify-between rounded-2xl px-7 py-9 flex flex-col gap-[16px]">
                <div className="text-[24px] font-bold text-[#ffffff]">Risk Analysis</div>
                <div className="flex justify-between bg-[#FFFFFF08] rounded-[12px] p-3">
                  <CircularProgress percentage={76} />
                  <div className="bg-[#FFFFFF21] p-3 border-1 border-[#61C4E1] rounded-[10px] flex flex-col justify-around items-center">
                    <div className="text-[14px] leading-[33px] font-normal text-[#ffffff] xl:block lg:hidden max-[830px]:hidden">Suggested Adjustment</div>
                    <div className="text-[14px] leading-[33px] font-normal text-[#ffffff] xl:hidden lg:block min-[830px]:hidden">Suggested...</div>
                    <div className="text-[16px] leading-[33px] font-normal text-[#ffffff] bg-[#61C4E15E] rounded-2xl px-2 xl:block lg:hidden max-[830px]:hidden">Reduce exposure</div>
                    <div className="text-[16px] leading-[33px] font-normal text-[#ffffff] bg-[#61C4E15E] rounded-2xl px-2 xl:hidden lg:block min-[830px]:hidden">Reduce...</div>
                  </div>
                </div>
                <div className="flex items-center xl:flex-row lg:flex-col max-[880px]:flex-col justify-between lg:gap-3">
                  <div className="text-[16px] leading-[33px] font-normal text-[#ffffff] bg-[#61C4E15E] rounded-2xl px-2">Volatility Level : Medium</div>
                  <div className="text-[16px] text-[#ffffff]">Risk Score (72/100)</div>
                </div>
              </div>

              {/*Settings & Customization Chart*/}
              <div className="md:max-w-[438px] w-full bg-[#26292E] justify-start rounded-2xl px-7 py-9 flex flex-col gap-[16px]">
                <div className="text-[24px] font-bold text-[#ffffff]">Risk Analysis</div>
                <PieChartComponent/>
                <div className="flex items-center gap-4 ">
                  <div className="text-[15px] xl:text-[16px] leading-[33px] font-normal text-[#ffffff] bg-[#61C4E15E] rounded-2xl px-2">Stop-Loss (2%)</div>
                  <div className="text-[15px] xl:text-[16px] leading-[33px] font-normal text-[#ffffff] bg-[#61C4E15E] rounded-2xl px-2">Take-Profit (5%)</div>
                </div>
                <div className="flex gap-4 px-2">
                  <div className="text-[16px] font-normal text-[#61C4E1]">Selected Strategy</div>
                  <div className="text-[16px] font-normal text-[#ffffff]">Balanced</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col justify-between items-start gap-4 md:flex-row flex-col">
            <div className="flex max-w-[438px] w-full flex-col bg-[#26292E] rounded-2xl p-9">
              <div className="text-[24px] font-bold text-[#FFFFFF]">Current AI Strategies</div>
              <div className="text-[16px] font-normal text-[#FFFFFF]">View and modify AI trading strategies.</div>
              <div className="flex flex-col gap-[10px] mt-[19px]">
                <div className="flex">
                  <div className="xl:text-[16px] text-[12px] font-normal text-[#FFFFFF] bg-[#61C4E15E] p-2.5 rounded-[10px]">Active Strategies (3)</div>
                </div>
                <div className="flex gap-2">
                  <div className="xl:text-[16px] text-[12px] font-normal text-[#FFFFFF] bg-[#61C4E15E] p-2.5 rounded-[10px]">Risk Level</div>
                  <div className="xl:text-[16px] text-[12px] font-normal text-[#FFFFFF] bg-[#1C1D1F] p-2.5 rounded-[10px]">Moderate</div>
                </div>
                <div className="flex gap-2">
                  <div className="xl:text-[16px] text-[12px] font-normal text-[#FFFFFF] bg-[#61C4E15E] p-2.5 rounded-[10px]">Execution Mode</div>
                  <div className="xl:text-[16px] text-[12px] font-normal text-[#FFFFFF] bg-[#1C1D1F] p-2.5 rounded-[10px]">Automated</div>
                </div>
              </div>
              <div className="text-[16px] font-normal mt-[28px] text-[#FFFFFF]">Success Rate</div>
              <ProgressComponent />
            </div>
            <div className="flex max-w-[438px] w-full flex-col bg-[#26292E] rounded-2xl p-9 gap-3.5">
              <div className="flex justify-between items-center">
                <div className="text-[#FFFFFF] text-2xl font-bold">Past Transactions</div>
                <div className="text-[#61C4E1] text-[16px] font-normal italic">View History</div>
              </div>
              <div className="flex justify-between items-center mt-[20px]">
                <div className="flex gap-[10px]">
                  <img src="/bitcoin.png" className="w-[19px] h-[19px]"></img>
                  <div className="text-[#FFFFFF] text-[16px] font-normal">Bitcoin</div>
                </div>
                <div className="text-[#FFFFFF] text-[16px] font-normal">Buy Price</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[10px]">
                  <div className="text-[#FFFFFF] text-[16px] font-normal">500</div>
                  <div className="text-[#00E726] text-[16px] font-normal italic">Profit</div>
                </div>
                <div className="text-[#FFFFFF] text-[16px] font-normal">44000.00</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
