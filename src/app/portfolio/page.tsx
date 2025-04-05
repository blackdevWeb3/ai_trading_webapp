'use client';

import StatBlock from "@/components/statBlock";
import StatGradientCard from "@/components/StatGradientCard";
import { FiRefreshCw } from 'react-icons/fi';
import DataTable from "@/components/DataTable";
import LiveTokenTable from "@/components/LiveTokenTable";

// const dummyData = Array(15).fill({
//     token: '999,646,237 FUCKER',
//     buySize: '0.04 ETH',
//     sellSize: '0.00 ETH',
//     profit: '-0.04 ETH (0.00X)',
//     sellTime: 'January 12, 2025 at 8:41:11 AM',
//     duration: '186 days 12 hours 17 minutes 48 seconds',
//     wallet: 'Wallet 1',
//     etherscan: 'Link',
//   });

export default function Home() {
  return (
    <div className="lg:m-auto px-6 bg-[#1C1D1F]">
      <main className="w-full">
        <div className="flex items-center justify-center md:px-6 mt-18">
            <div className="text-center">
                <h1 className="md:text-[48px] text-[32px] font-bold text-[#ffffff]">Reward Pool Live Feed</h1>
                <p className="md:text-[16px] text-[13px] font-normal text-[#ffffff]">Displaying ETH flowing to the reward pool in real-time.</p>
            </div>
        </div>
        <div className="md:grid lg:grid-cols-4 md:grid-cols-2 gap-4 justify-items-center text-[#ffffff] lg:text-[32px] text-2xl font-bold md:mt-20 mt-10">
            <div className="grid gap-8 w-full justify-items-center">
                <div>Daily</div>
                <StatBlock title="GENERATED FROM AI BOT" maxWidth="max-w-[302px]" value={`${0.00} ETH`} subValue="NaN %"/>
                <StatGradientCard title="generated from tax" value={`${0.00} ETH`} subValue="NaN %" maxWidth="max-w-[302px]"/>
                <div className="text-center font-bold xl:text-2xl text-lg">
                    <div>0.00 ETH</div>
                    <div>Generated today</div>
                </div>
            </div>
            <div className="bg-gray-400 h-[2px] w-full md:hidden col-span-2 my-5"></div>
            <div className="grid gap-8 w-full justify-items-center">
                <div>Weekly</div>
                <StatBlock title="GENERATED FROM AI BOT" maxWidth="max-w-[302px]" value={`${0.00} ETH`} subValue="NaN %"/>
                <StatGradientCard title="generated from tax" value={`${0.00} ETH`} subValue="NaN %" maxWidth="max-w-[302px]"/>
                <div className="text-center font-bold xl:text-2xl text-lg">
                    <div>0.00 ETH</div>
                    <div>Generated this week</div>
                </div>
            </div>
            <div className="bg-gray-400 h-[2px] w-full lg:hidden col-span-2 my-5"></div>
            <div className="grid gap-8 w-full justify-items-center">
                <div>Monthly</div>
                <StatBlock title="GENERATED FROM AI BOT" maxWidth="max-w-[302px]" value={`${0.00} ETH`} subValue="NaN %"/>
                <StatGradientCard title="generated from tax" value={`${0.00} ETH`} subValue="NaN %" maxWidth="max-w-[302px]"/>
                <div className="text-center font-bold xl:text-2xl text-lg">
                    <div>0.00 ETH</div>
                    <div>Generated this month</div>
                </div>
            </div>
            <div className="bg-gray-400 h-[2px] w-full md:hidden col-span-2 my-5"></div>
            <div className="grid gap-8 w-full justify-items-center">
                <div>Since Launch</div>
                <StatBlock title="GENERATED FROM AI BOT" maxWidth="max-w-[302px]" value={`${749.50} ETH`} subValue={`${64.64} %`}/>
                <StatGradientCard title="generated from tax" value={`${409.96} ETH`} subValue={`${35.36} %`} maxWidth="max-w-[302px]"/>
                <div className="text-center font-bold xl:text-2xl text-lg">
                    <div>1159.47ETH</div>
                    <div>Generated since launch</div>
                </div>
            </div>
        </div>
        <div className="relative text-white md:mt-[130px] mt-8 bg-no-repeat bg-cover bg-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[100px] bg-[#61C4E1] blur-[300px]"></div>
            
            <div className="text-center space-y-4">
                <h1 className="md:text-[48px] text-[36px] font-bold">AI Portfolio Tracker</h1>
                <button
                    className="text-white p-2.5 mt-6 rounded-md font-normal text-[16px] flex items-center justify-center gap-2 hover:opacity-90 mx-auto"
                    style={{
                        background: 'linear-gradient(180deg, #61C4E1 -31.25%, #26292E 118.75%)',
                    }}
                    >
                    <FiRefreshCw size={16} />
                        Refresh Portfolio
                </button>
            </div>

            <div className="mt-12 border-y border-white/10 pt-9 md:mb-26 pb-1 mb-10 text-center">
                <h2 className="md:text-[36px] text-[28px] font-bold mb-8">Current Holdings</h2>
                <p className="md:text-[24px] text-[16px] font-normal md:mb-20 mb-8">
                    Check our AI holdings in real-time. The list is updated after new buys or sells.
                </p>

                <div className="overflow-x-auto custom-scrollbar">
                    <div className="min-w-[1000px] grid grid-cols-7 xl:text-2xl text-[19px] font-bold mb-3">
                        <div>Token</div>
                        <div>Token Value</div>
                        <div>Price Per Token</div>
                        <div>Wallet</div>
                        <div>Buy time</div>
                        <div>Current Profit</div>
                        <div>Scan</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:mt-[104px] mt-5">
            <div className="text-[#fff] text-center">
                <div className="md:text-[36px] text-[24px] font-bold">All Sells</div>
                <div className="md:text-[24px] text-[16px] font-normal">Check all the sells from our AI. The list is updated every few minutes.</div>
            </div>
            <LiveTokenTable />
        </div>
      </main>
    </div>
  );
}
