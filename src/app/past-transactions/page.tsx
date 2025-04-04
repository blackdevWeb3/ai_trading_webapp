'use client';

import TransactionTable from "@/components/transactiontable";
import { FaSortAmountDown } from 'react-icons/fa';
import StatCard from "@/components/statcard";

export default function Home() {
  return (
    <div className="lg:m-auto pt-[22px] md:mx-5 bg-[#1C1D1F]">
      <main className="w-full">
        <div className="flex items-center justify-between px-6 mb-6">
            <div>
                <h1 className="md:text-[32px] text-[28px] font-bold text-[#ffffff]">Past Transactions</h1>
                <p className="md:text-[16px] text-[14px] font-normal text-[#ffffff]">Review Your Trading History & Performance</p>
            </div>
            <div>
                <button className="flex items-center gap-2 bg-[#1e1e23] text-white px-4 py-2 rounded-md hover:bg-[#2a2a31] transition">
                    <span className="md:text-[18px] md:block hidden">Sort By</span>
                    {/* You can replace this icon with a custom SVG if needed */}
                    <FaSortAmountDown size={20} />
                </button>
            </div>
        </div>
        <div className="overflow-x-auto custom-scrollbar mb-6">
            <div className="flex justify-between gap-3 mb-1 overflow-scroll hide-scrollbar min-w-[1000px]">
                <StatCard label="Total Trades" value={5} maxWidth="max-w-[226px]" />
                <StatCard label="Profitable Trades" value={4} maxWidth="max-w-[270px]" />
                <StatCard label="Loss-Making Trades" value={1} maxWidth="max-w-[293px]" />
                <StatCard label="Total Profit" value={"695$"} maxWidth="max-w-[270px]" />
                <StatCard label="Total Loss" value={"-$5"} maxWidth="max-w-[261px]" />
            </div>
        </div>
        <TransactionTable />
      </main>
    </div>
  );
}
