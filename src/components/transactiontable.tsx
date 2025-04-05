// components/TransactionTable.tsx
import React from 'react';
import Image from 'next/image';

type Transaction = {
  date: string;
  type: 'Buy' | 'Sell';
  asset: string;
  icon: string;
  purchasePrice: number;
  salePrice: number;
};

const transactions: Transaction[] = [
  {
    date: '2025-03-01',
    type: 'Buy',
    asset: 'Bitcoin',
    icon: '/icons/Bitcoin.png',
    purchasePrice: 44000,
    salePrice: 45000,
  },
  {
    date: '2025-03-01',
    type: 'Sell',
    asset: 'Ethereum',
    icon: '/icons/ethereum.png',
    purchasePrice: 44000,
    salePrice: 45000,
  },
  {
    date: '2025-03-01',
    type: 'Buy',
    asset: 'BNB',
    icon: '/icons/bnb.png',
    purchasePrice: 44000,
    salePrice: 170,
  },
  {
    date: '2025-03-01',
    type: 'Sell',
    asset: 'Polygon',
    icon: '/icons/polygon.png',
    purchasePrice: 44000,
    salePrice: 45000,
  },
  {
    date: '2025-03-01',
    type: 'Buy',
    asset: 'Ethereum',
    icon: '/icons/ethereum.png',
    purchasePrice: 44000,
    salePrice: 45000,
  },
];

const TransactionTable: React.FC = () => {
  return (
    <div className='overflow-x-auto custom-scrollbar'>
      <div className="bg-[#26292E] text-white p-6 rounded-md overflow-scroll hide-scrollbar min-w-[800px] mb-1">
        <div className="grid grid-cols-6 font-normal lg:text-[16px] text-[12px] px-5 border-b border-gray-700 pb-3 mb-3">
          <div>Date</div>
          <div>Transaction Type</div>
          <div>Asset</div>
          <div>Purchase Price ($)</div>
          <div>Sale Price ($)</div>
          <div>Profit/Loss ($)</div>
        </div>

        {transactions.map((tx, idx) => {
          const profitLoss = tx.salePrice - tx.purchasePrice;
          const isProfit = profitLoss >= 0;
          return (
            <div
              key={idx}
              className="grid grid-cols-6 items-center lg:text-[16px] text-[12px] font-normal py-7 px-4 bg-[#1C1D1F40] mb-2 rounded-md"
            >
              <div>{tx.date}</div>
              <div>{tx.type}</div>
              <div className="flex items-center gap-2">
                <Image src={tx.icon} alt={tx.asset} width={20} height={20} />
                <span>{tx.asset}</span>
              </div>
              <div>${tx.purchasePrice.toFixed(2)}</div>
              <div>${tx.salePrice.toFixed(2)}</div>
              <div className={isProfit ? 'text-green-500' : 'text-red-500'}>
                {isProfit ? '+' : '-'}${Math.abs(profitLoss)} <span className="italic">{isProfit ? 'Profit' : 'Loss'}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionTable;
