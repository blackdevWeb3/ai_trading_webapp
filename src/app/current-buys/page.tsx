'use client';
import TradeTable from "@/components/tradetable";

export default function Home() {
  return (
    <div className="lg:m-auto pt-[22px] md:mx-5 bg-[#1C1D1F]">
      <main className="w-full">
        <div className="px-6 mb-6">
          <h1 className="md:text-[32px] text-[28px] font-bold text-[#ffffff]">Current Buys</h1>
          <p className="md:text-[16px] text-[14px] font-normal text-[#ffffff]">Track Your Active Trades in Real-Time</p>
        </div>
        <TradeTable />
      </main>
    </div>
  );
}
