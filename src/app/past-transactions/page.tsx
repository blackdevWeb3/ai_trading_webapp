'use client';

import TransactionTable from "@/components/transactiontable";
import { FaSortAmountDown } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="lg:m-auto pt-[22px] md:mx-5 bg-[#1C1D1F]">
      <main className="w-full">
        <div className="flex items-center px-6 mb-6">
            <div>
                <h1 className="md:text-[32px] text-[28px] font-bold text-[#ffffff]">Past Transactions</h1>
                <p className="md:text-[16px] text-[14px] font-normal text-[#ffffff]">Review Your Trading History & Performance</p>
            </div>
            <div></div>
        </div>
        <TransactionTable />
      </main>
    </div>
  );
}
