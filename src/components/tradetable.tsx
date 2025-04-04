// components/TradeTable.tsx
import React from 'react';
import Image from 'next/image';

type Trade = {
  asset: string;
  icon: string;
  buyPrice: number;
  quantity: number;
  status: 'Pending' | 'Completed';
};

const trades: Trade[] = [
  { asset: 'Bitcoin', icon: '/icons/bitcoin.png', buyPrice: 45000, quantity: 0.5, status: 'Pending' },
  { asset: 'Ethereum', icon: '/icons/ethereum.png', buyPrice: 3200, quantity: 2.0, status: 'Completed' },
  { asset: 'BNB', icon: '/icons/bnb.png', buyPrice: 45000, quantity: 0.5, status: 'Pending' },
  { asset: 'Polygon', icon: '/icons/polygon.png', buyPrice: 45000, quantity: 0.5, status: 'Pending' },
  { asset: 'Bitcoin', icon: '/icons/bitcoin.png', buyPrice: 45000, quantity: 0.5, status: 'Pending' },
];


const TradeTable: React.FC = () => {
  return (
    <div className='overflow-x-auto custom-scrollbar'>
        <div className="bg-[#26292E] text-white p-6 rounded-md overflow-scroll min-w-[800px]">
        <div className="grid grid-cols-6 font-normal lg:text-[16px] text-[12px] px-5 border-b border-gray-700 pb-3 mb-3">
            <div>Asset</div>
            <div>Buy Price ($)</div>
            <div>Quantity</div>
            <div>Status</div>
            <div>Total Price ($)</div>
            <div className='text-center'>Actions</div>
        </div>

        {trades.map((trade, idx) => (
            <div
            key={idx}
            className="grid grid-cols-6 items-center lg:text-[16px] text-[12px] font-normal py-4 px-4 bg-[#1C1D1F40] mb-2 rounded-md"
            >
            <div className="flex items-center gap-2">
                <Image src={trade.icon} alt={trade.asset} width={20} height={20} />
                <span>{trade.asset}</span>
            </div>
            <div>${trade.buyPrice.toFixed(2)}</div>
            <div>{trade.quantity}</div>
            <div>{trade.status}</div>
            <div>${(trade.buyPrice * trade.quantity).toLocaleString()}</div>
            <div className="flex flex-col space-y-1">
                <button
                className={`text-green-500 ${trade.status === 'Completed' ? 'hover:underline' : ''}`}
                >
                Buy More
                </button>
                {trade.status === 'Pending' && (
                <button className="text-red-500 italic hover:underline">Cancel</button>
                )}
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default TradeTable;
